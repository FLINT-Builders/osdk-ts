/*
 * Copyright 2025 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Spec for the code-workspaces preview leak. These assertions fail while the
 * injected reporter posts error text, stacks, and failed resource URLs to any
 * framing parent, and while the dev server does not set a frame-ancestors
 * policy. They pass once messages are delivered only to the configured parent
 * origin and other sites cannot embed the preview.
 *
 * `parentOrigin` is part of this spec even though the current options type
 * does not declare it. The plugin must read that value and enforce it.
 */

import { type ChildProcess, spawn } from "node:child_process";
import { mkdtemp, rm, writeFile } from "node:fs/promises";
import http from "node:http";
import { tmpdir } from "node:os";
import path from "node:path";

import { createServer, type ViteDevServer } from "vite";
import { afterAll, beforeAll, describe, expect, it, vi } from "vitest";

import {
  type CodeWorkspacePreviewOptions,
  codeWorkspacePreviewPlugin,
} from "./codeWorkspacePreviewPlugin.js";

const RECORD_MESSAGE = "record-field-placeholder";
const REJECTION_MESSAGE = "rejection-record-placeholder";
const RESOURCE_QUERY = "credential=placeholder";
const RESOURCE_PATH = `/assets/failed-chunk.js?${RESOURCE_QUERY}`;

const PREVIEW_DOCUMENT = `<!doctype html>
<html>
  <head><meta charset="utf-8"></head>
  <body>
    <div id="root"></div>
    <script>
      const failed = document.createElement("img");
      failed.src = ${JSON.stringify(RESOURCE_PATH)};
      document.body.appendChild(failed);
      setTimeout(function () {
        throw new Error(${JSON.stringify(RECORD_MESSAGE)});
      }, 20);
      setTimeout(function () {
        Promise.reject(new Error(${JSON.stringify(REJECTION_MESSAGE)}));
      }, 40);
    </script>
  </body>
</html>
`;

interface ReporterPayload {
  source?: string;
  kind?: string;
  message?: string;
  stack?: string;
  filename?: string;
}

interface ObservedMessage {
  origin: string;
  data: ReporterPayload;
}

interface PluginOptions {
  mode?: string;
  parentOrigin?: string;
}

function plugin(options: PluginOptions = {}) {
  return codeWorkspacePreviewPlugin(options as CodeWorkspacePreviewOptions);
}

function listen(
  host: string,
  handler: http.RequestListener,
): Promise<http.Server> {
  const server = http.createServer(handler);
  return new Promise((resolve, reject) => {
    server.once("error", reject);
    server.listen(0, host, () => resolve(server));
  });
}

function originOf(server: http.Server, host: string): string {
  const address = server.address();
  if (address == null || typeof address === "string") {
    throw new Error("server did not bind a TCP port");
  }
  return `http://${host}:${address.port}`;
}

function closeServer(server: http.Server): Promise<void> {
  server.closeAllConnections();
  return new Promise((resolve, reject) => {
    server.close((error) => {
      if (error) reject(error);
      else resolve();
    });
  });
}

function parentDocument(previewUrl: string): string {
  return `<!doctype html>
<meta charset="utf-8">
<title>waiting</title>
<pre id="out"></pre>
<script>
  const messages = [];
  window.addEventListener("message", (event) => {
    messages.push({ origin: event.origin, data: event.data });
  });
  const frame = document.createElement("iframe");
  frame.src = ${JSON.stringify(previewUrl)};
  document.body.appendChild(frame);
  setTimeout(() => {
    const out = document.getElementById("out");
    if (out) out.textContent = JSON.stringify(messages);
    document.title = "done";
  }, 2500);
</script>`;
}

function previewDocument(reporterScript: string): string {
  return `<!doctype html>
<html>
  <head><meta charset="utf-8"><script>${reporterScript}</script></head>
  <body>
    <div id="root"></div>
    <script>
      const failed = document.createElement("img");
      failed.src = ${JSON.stringify(RESOURCE_PATH)};
      document.body.appendChild(failed);
      setTimeout(function () {
        throw new Error(${JSON.stringify(RECORD_MESSAGE)});
      }, 20);
      setTimeout(function () {
        Promise.reject(new Error(${JSON.stringify(REJECTION_MESSAGE)}));
      }, 40);
    </script>
  </body>
</html>`;
}

function extractReporterScript(html: string): string {
  const scripts = html.matchAll(/<script>([\s\S]*?)<\/script>/gu);
  for (const match of scripts) {
    const body = match[1];
    if (body != null && body.includes("osdk-preview")) return body;
  }
  throw new Error(
    "code-workspaces preview HTML did not contain the reporter script",
  );
}

function frameAncestors(csp: string | null): string | undefined {
  if (csp == null || csp === "") return undefined;
  return csp
    .split(";")
    .map((part) => part.trim())
    .find((part) => part.toLowerCase().startsWith("frame-ancestors"));
}

function assertTrustedPayloads(messages: readonly ObservedMessage[]): void {
  const payloads = messages.map((message) => message.data);
  expect(payloads).toEqual(
    expect.arrayContaining([
      expect.objectContaining({ source: "osdk-preview", kind: "ready" }),
    ]),
  );

  const thrown = payloads.find(
    (payload) =>
      payload.kind === "error" &&
      payload.message?.includes(RECORD_MESSAGE) === true,
  );
  expect(thrown?.stack).toEqual(expect.stringContaining(RECORD_MESSAGE));

  const rejection = payloads.find(
    (payload) => payload.kind === "unhandledrejection",
  );
  expect(rejection?.message).toEqual(
    expect.stringContaining(REJECTION_MESSAGE),
  );
  expect(rejection?.stack).toEqual(expect.stringContaining(REJECTION_MESSAGE));

  const failedLoad = payloads.find(
    (payload) =>
      payload.kind === "error" &&
      payload.message?.includes("Failed to load img:") === true,
  );
  expect(failedLoad?.message).toEqual(expect.stringContaining(RESOURCE_QUERY));
}

function assertNoPreviewPayload(messages: readonly ObservedMessage[]): void {
  const leaked = messages.filter((message) => {
    const encoded = JSON.stringify(message);
    return (
      message.data?.source === "osdk-preview" ||
      encoded.includes(RECORD_MESSAGE) ||
      encoded.includes(REJECTION_MESSAGE) ||
      encoded.includes(RESOURCE_QUERY)
    );
  });
  expect(leaked).toEqual([]);
}

function assertFrameAncestors(
  header: string | null,
  trustedOrigin: string,
  attackerOrigins: readonly string[],
): void {
  const directive = frameAncestors(header);
  expect(directive).toBeDefined();
  expect(directive).not.toContain("*");
  expect(directive).toContain(trustedOrigin);
  for (const attackerOrigin of attackerOrigins) {
    expect(directive).not.toContain(attackerOrigin);
  }
}

class ChromeSession {
  private constructor(
    private readonly process: ChildProcess,
    private readonly baseUrl: string,
    private readonly userDataDir: string,
  ) {}

  static async launch(): Promise<ChromeSession> {
    const userDataDir = await mkdtemp(path.join(tmpdir(), "preview-chrome-"));
    const chrome = spawn(
      "google-chrome",
      [
        "--headless=new",
        "--no-sandbox",
        "--disable-gpu",
        "--disable-dev-shm-usage",
        `--user-data-dir=${userDataDir}`,
        "--remote-debugging-port=0",
        "about:blank",
      ],
      { stdio: ["ignore", "pipe", "pipe"] },
    );
    const baseUrl = await new Promise<string>((resolve, reject) => {
      let stderr = "";
      const timer = setTimeout(() => {
        reject(new Error(`Chrome DevTools did not start:\n${stderr}`));
      }, 10_000);
      chrome.stderr?.on("data", (chunk: Buffer) => {
        stderr += chunk.toString();
        const match = stderr.match(/DevTools listening on (ws:\/\/\S+)/u);
        const wsUrl = match?.[1];
        if (wsUrl != null) {
          clearTimeout(timer);
          resolve(
            wsUrl
              .replace("ws://", "http://")
              .replace(/\/devtools\/browser\/.*$/u, ""),
          );
        }
      });
      chrome.once("exit", (code) => {
        clearTimeout(timer);
        reject(new Error(`Chrome exited ${code}: ${stderr}`));
      });
    });
    return new ChromeSession(chrome, baseUrl, userDataDir);
  }

  async collect(pageUrl: string): Promise<ObservedMessage[]> {
    const created = await fetch(
      `${this.baseUrl}/json/new?${encodeURIComponent(pageUrl)}`,
      { method: "PUT" },
    );
    if (!created.ok) {
      throw new Error(`Chrome refused to open ${pageUrl}: ${created.status}`);
    }
    const target = (await created.json()) as {
      id: string;
      webSocketDebuggerUrl: string;
    };
    const ws = new WebSocket(target.webSocketDebuggerUrl);
    await new Promise<void>((resolve, reject) => {
      const timer = setTimeout(
        () => reject(new Error("DevTools socket did not open")),
        5_000,
      );
      ws.addEventListener(
        "open",
        () => {
          clearTimeout(timer);
          resolve();
        },
        { once: true },
      );
      ws.addEventListener(
        "error",
        () => {
          clearTimeout(timer);
          reject(new Error("DevTools socket failed"));
        },
        { once: true },
      );
    });
    let id = 0;
    const pending = new Map<
      number,
      {
        resolve: (value: { result?: { value?: string } }) => void;
        reject: (error: Error) => void;
      }
    >();
    ws.addEventListener("message", (event) => {
      const data = JSON.parse(String(event.data)) as {
        id?: number;
        error?: { message?: string };
        result?: { result?: { value?: string } };
      };
      if (data.id == null) return;
      const waiter = pending.get(data.id);
      if (waiter == null) return;
      pending.delete(data.id);
      if (data.error != null) {
        waiter.reject(
          new Error(data.error.message ?? "DevTools command failed"),
        );
      } else {
        waiter.resolve(data.result ?? {});
      }
    });
    const send = (method: string, params: Record<string, unknown> = {}) => {
      const messageId = ++id;
      return new Promise<{ result?: { value?: string } }>((resolve, reject) => {
        const timer = setTimeout(() => {
          pending.delete(messageId);
          reject(new Error(`DevTools ${method} timed out`));
        }, 5_000);
        pending.set(messageId, {
          resolve: (value) => {
            clearTimeout(timer);
            resolve(value);
          },
          reject: (error) => {
            clearTimeout(timer);
            reject(error);
          },
        });
        ws.send(JSON.stringify({ id: messageId, method, params }));
      });
    };
    try {
      await send("Runtime.enable");
      let text = "";
      for (let attempt = 0; attempt < 40; attempt++) {
        const evaluated = await send("Runtime.evaluate", {
          expression:
            "document.title + '\\n' + (document.getElementById('out')?.textContent || '')",
          returnByValue: true,
        });
        text = evaluated.result?.value ?? "";
        if (text.startsWith("done\n")) break;
        await new Promise((resolve) => setTimeout(resolve, 200));
      }
      if (!text.startsWith("done\n")) {
        throw new Error(`parent page did not finish:\n${text}`);
      }
      const body = text.slice("done\n".length);
      return JSON.parse(body) as ObservedMessage[];
    } finally {
      ws.close();
      await fetch(`${this.baseUrl}/json/close/${target.id}`);
    }
  }

  async close(): Promise<void> {
    const exited = new Promise<void>((resolve) => {
      if (this.process.exitCode != null || this.process.signalCode != null) {
        resolve();
        return;
      }
      this.process.once("exit", () => resolve());
    });
    this.process.kill("SIGKILL");
    await exited;
    await rm(this.userDataDir, { recursive: true, force: true }).catch(
      () => undefined,
    );
  }
}

interface RunningPreview {
  origin: string;
  html: string;
  csp: string | null;
  close: () => Promise<void>;
}

async function startPreview(options: PluginOptions): Promise<RunningPreview> {
  const root = await mkdtemp(path.join(tmpdir(), "preview-app-"));
  await writeFile(path.join(root, "index.html"), PREVIEW_DOCUMENT, "utf-8");
  const server: ViteDevServer = await createServer({
    configFile: false,
    root,
    mode: options.mode ?? "code-workspaces",
    logLevel: "error",
    optimizeDeps: { noDiscovery: true, holdUntilCrawlEnd: false },
    server: {
      host: "127.0.0.1",
      port: 0,
      strictPort: false,
      preTransformRequests: false,
    },
    plugins: [plugin(options)],
  });
  await server.listen();
  const address = server.httpServer?.address();
  if (address == null || typeof address === "string") {
    throw new Error("Vite did not bind a TCP port");
  }
  const origin = `http://127.0.0.1:${address.port}`;
  const response = await fetch(`${origin}/`, {
    signal: AbortSignal.timeout(10_000),
  });
  const html = await response.text();
  return {
    origin,
    html,
    csp: response.headers.get("content-security-policy"),
    close: async () => {
      const httpServer = server.httpServer;
      if (httpServer != null && "closeAllConnections" in httpServer) {
        httpServer.closeAllConnections();
      }
      await server.close();
      await rm(root, { recursive: true, force: true });
    },
  };
}

describe.sequential("code workspace preview cross-origin leak", () => {
  let chrome: ChromeSession;

  beforeAll(async () => {
    vi.useRealTimers();
    chrome = await ChromeSession.launch();
  }, 20_000);

  afterAll(async () => {
    await chrome.close();
  });

  it("delivers a wildcard postMessage to another origin and drops a mismatched target origin", async () => {
    const preview = await listen("127.0.0.1", (_req, res) => {
      res.setHeader("content-type", "text/html; charset=utf-8");
      res.end(`<!doctype html><script>
        parent.postMessage({ source: "control", via: "wildcard" }, "*");
        parent.postMessage({ source: "control", via: "other-origin" }, "http://127.0.0.1:1");
      </script>`);
    });
    const parents = new Map<string, string>();
    const parent = await listen("127.0.0.1", (_req, res) => {
      res.setHeader("content-type", "text/html; charset=utf-8");
      const host = String(_req.headers.host);
      const previewUrl = parents.get(host);
      res.end(parentDocument(previewUrl ?? "about:blank"));
    });
    const parentOrigin = originOf(parent, "127.0.0.1");
    parents.set(
      parentOrigin.replace("http://", ""),
      originOf(preview, "127.0.0.1"),
    );
    try {
      const messages = await chrome.collect(`${parentOrigin}/`);
      const vias = messages
        .map((message) => message.data)
        .filter((data) => data.source === "control");
      expect(vias).toEqual([
        expect.objectContaining({ source: "control", via: "wildcard" }),
      ]);
    } finally {
      await closeServer(preview);
      await closeServer(parent);
    }
  }, 20_000);

  it("sends ready, error, rejection, and failed resource URL only to the configured parent", async () => {
    const trustedOriginBox = { current: "" };
    const attackerOriginBox = { current: "" };
    const sameHostAttackerBox = { current: "" };
    const previewUrlBox = { current: "" };

    const serveParent = (
      _req: http.IncomingMessage,
      res: http.ServerResponse,
    ) => {
      res.setHeader("content-type", "text/html; charset=utf-8");
      const target = previewUrlBox.current;
      res.end(target === "" ? "pending" : parentDocument(target));
    };
    const trustedServer = await listen("127.0.0.1", serveParent);
    const attackerServer = await listen("::1", serveParent);
    const sameHostServer = await listen("127.0.0.1", serveParent);
    trustedOriginBox.current = originOf(trustedServer, "127.0.0.1");
    attackerOriginBox.current = originOf(attackerServer, "localhost");
    sameHostAttackerBox.current = originOf(sameHostServer, "127.0.0.1");

    const preview = await startPreview({
      parentOrigin: trustedOriginBox.current,
    });
    const reporter = extractReporterScript(preview.html);
    const harness = await listen("127.0.0.1", (req, res) => {
      const url = new URL(req.url ?? "/", "http://127.0.0.1");
      if (url.pathname !== "/") {
        res.statusCode = 404;
        res.end("missing");
        return;
      }
      res.setHeader("content-type", "text/html; charset=utf-8");
      res.end(previewDocument(reporter));
    });
    previewUrlBox.current = `${originOf(harness, "127.0.0.1")}/`;

    try {
      expect(preview.html).toContain("osdk-preview");
      const trustedMessages = await chrome.collect(
        `${trustedOriginBox.current}/`,
      );
      const attackerMessages = await chrome.collect(
        `${attackerOriginBox.current}/`,
      );
      const sameHostMessages = await chrome.collect(
        `${sameHostAttackerBox.current}/`,
      );
      assertTrustedPayloads(trustedMessages);
      assertNoPreviewPayload(attackerMessages);
      assertNoPreviewPayload(sameHostMessages);
    } finally {
      await closeServer(harness);
      await closeServer(trustedServer);
      await closeServer(attackerServer);
      await closeServer(sameHostServer);
      await preview.close();
    }
  }, 40_000);

  it("blocks other parents and framing when the dev server is in code-workspaces mode", async () => {
    const previewUrlBox = { current: "" };
    const serveParent = (
      _req: http.IncomingMessage,
      res: http.ServerResponse,
    ) => {
      res.setHeader("content-type", "text/html; charset=utf-8");
      res.end(
        previewUrlBox.current === ""
          ? "pending"
          : parentDocument(previewUrlBox.current),
      );
    };
    const trustedServer = await listen("127.0.0.1", serveParent);
    const attackerServer = await listen("::1", serveParent);
    const sameHostServer = await listen("127.0.0.1", serveParent);
    const trustedOrigin = originOf(trustedServer, "127.0.0.1");
    const attackerOrigin = originOf(attackerServer, "localhost");
    const sameHostOrigin = originOf(sameHostServer, "127.0.0.1");
    const preview = await startPreview({ parentOrigin: trustedOrigin });
    previewUrlBox.current = `${preview.origin}/`;
    try {
      expect(preview.html).toContain("osdk-preview");
      const trustedMessages = await chrome.collect(`${trustedOrigin}/`);
      const attackerMessages = await chrome.collect(`${attackerOrigin}/`);
      const sameHostMessages = await chrome.collect(`${sameHostOrigin}/`);
      assertTrustedPayloads(trustedMessages);
      assertNoPreviewPayload(attackerMessages);
      assertNoPreviewPayload(sameHostMessages);
      assertFrameAncestors(preview.csp, trustedOrigin, [
        attackerOrigin,
        sameHostOrigin,
      ]);
    } finally {
      await closeServer(trustedServer);
      await closeServer(attackerServer);
      await closeServer(sameHostServer);
      await preview.close();
    }
  }, 40_000);

  it("does not reveal preview errors to an arbitrary parent when no parent origin is configured", async () => {
    const previewUrlBox = { current: "" };
    const attackerServer = await listen("::1", (_req, res) => {
      res.setHeader("content-type", "text/html; charset=utf-8");
      res.end(
        previewUrlBox.current === ""
          ? "pending"
          : parentDocument(previewUrlBox.current),
      );
    });
    const attackerOrigin = originOf(attackerServer, "localhost");
    const preview = await startPreview({});
    previewUrlBox.current = `${preview.origin}/`;
    try {
      const messages = await chrome.collect(`${attackerOrigin}/`);
      assertNoPreviewPayload(messages);
      const directive = frameAncestors(preview.csp);
      expect(directive).toBeDefined();
      expect(directive).not.toContain("*");
      expect(directive).not.toContain(attackerOrigin);
    } finally {
      await closeServer(attackerServer);
      await preview.close();
    }
  }, 40_000);

  it("applies the same parent and framing limits for a custom activation mode", async () => {
    const previewUrlBox = { current: "" };
    const serveParent = (
      _req: http.IncomingMessage,
      res: http.ServerResponse,
    ) => {
      res.setHeader("content-type", "text/html; charset=utf-8");
      res.end(
        previewUrlBox.current === ""
          ? "pending"
          : parentDocument(previewUrlBox.current),
      );
    };
    const trustedServer = await listen("127.0.0.1", serveParent);
    const attackerServer = await listen("::1", serveParent);
    const trustedOrigin = originOf(trustedServer, "127.0.0.1");
    const attackerOrigin = originOf(attackerServer, "localhost");
    const preview = await startPreview({
      mode: "preview",
      parentOrigin: trustedOrigin,
    });
    previewUrlBox.current = `${preview.origin}/`;
    try {
      expect(preview.html).toContain("osdk-preview");
      const trustedMessages = await chrome.collect(`${trustedOrigin}/`);
      const attackerMessages = await chrome.collect(`${attackerOrigin}/`);
      assertTrustedPayloads(trustedMessages);
      assertNoPreviewPayload(attackerMessages);
      assertFrameAncestors(preview.csp, trustedOrigin, [attackerOrigin]);
    } finally {
      await closeServer(trustedServer);
      await closeServer(attackerServer);
      await preview.close();
    }
  }, 40_000);
});
