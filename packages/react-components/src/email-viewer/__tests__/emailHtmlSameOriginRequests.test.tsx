/*
 * Copyright 2026 Palantir Technologies, Inc. All rights reserved.
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

import { spawn } from "node:child_process";
import { randomBytes } from "node:crypto";
import { mkdtempSync } from "node:fs";
import {
  createServer,
  get,
  type IncomingMessage,
  type ServerResponse,
} from "node:http";
import { connect, type Socket } from "node:net";
import { tmpdir } from "node:os";
import { join } from "node:path";

import type { Media, MediaReference } from "@osdk/api";
import { cleanup, render, waitFor } from "@testing-library/react";
import type { ReactElement } from "react";
import { afterAll, beforeAll, describe, expect, it } from "vitest";

import { DocumentViewer } from "../../document-viewer/DocumentViewer.js";
import { BaseEmailViewer } from "../BaseEmailViewer.js";
import { EmailViewer } from "../EmailViewer.js";
import { parseEmailFromResponse } from "../parseEmail.js";

const SESSION_COOKIE = "app_session=placeholder";
const ATTACK_HTML = [
  "<!doctype html><html><head>",
  '<meta http-equiv="refresh" content="0;url=/probe?via=meta">',
  '<link rel="stylesheet" href="/probe?via=link">',
  '<style>@import url("/probe?via=import");</style>',
  "</head><body>",
  '<img src="/probe?via=img" alt="">',
  '<div style="background-image:url(/probe?via=css)"></div>',
  '<iframe src="/probe?via=nested"></iframe>',
  '<object data="/probe?via=object"></object>',
  '<embed src="/probe?via=embed">',
  '<video poster="/probe?via=poster"></video>',
  '<audio src="/probe?via=audio"></audio>',
  '<script>fetch("/probe?via=script")</script>',
  "</body></html>",
].join("");

interface ProbeHit {
  via: string;
  method: string;
  cookie: string;
  site: string;
}

interface FrameInspection {
  ready: boolean;
  docAccess: boolean;
  origin: string;
  parentOrigin: string;
}

interface FrameLoad {
  loaded: boolean;
  sharesParentOrigin: boolean;
  probes: ProbeHit[];
}

function rawMessage(html: string): Uint8Array {
  const source = [
    "From: Attacker <attacker@example.com>",
    "To: Victim <victim@example.com>",
    "Subject: Stored message",
    "Date: Tue, 24 Nov 2026 12:00:00 +0000",
    "MIME-Version: 1.0",
    'Content-Type: multipart/alternative; boundary="email-boundary"',
    "",
    "--email-boundary",
    "Content-Type: text/plain; charset=utf-8",
    "",
    "plain fallback",
    "--email-boundary",
    "Content-Type: text/html; charset=utf-8",
    "",
    html,
    "--email-boundary--",
    "",
  ].join("\n");
  return new TextEncoder().encode(source);
}

function emailMedia(bytes: Uint8Array, mimeType: string): Media {
  const reference: MediaReference = {
    mimeType,
    reference: {
      type: "mediaSetViewItem",
      mediaSetViewItem: {
        mediaItemRid: "ri.mio.main.media-item.attack",
        mediaSetRid: "ri.mio.main.media-set.attack",
        mediaSetViewRid: "ri.mio.main.media-set-view.attack",
      },
    },
  };
  return {
    fetchContents: () => Promise.resolve(new Response(bytes)),
    fetchMetadata: () =>
      Promise.resolve({
        sizeBytes: bytes.byteLength,
        mediaType: mimeType,
      }),
    getMediaReference: () => reference,
  };
}

function escapeAttribute(value: string): string {
  return value.replaceAll("&", "&amp;").replaceAll('"', "&quot;");
}

function iframeMarkup(sandbox: string | null, srcdoc: string): string {
  const sandboxAttr =
    sandbox == null ? "" : ` sandbox="${escapeAttribute(sandbox)}"`;
  return `<iframe${sandboxAttr} srcdoc="${escapeAttribute(srcdoc)}" title="Email body"></iframe>`;
}

async function renderedIframe(
  ui: ReactElement,
): Promise<{ sandbox: string | null; srcdoc: string }> {
  const view = render(ui);
  try {
    const iframe = await waitFor(() => view.getByTitle("Email body"));
    return {
      sandbox: iframe.getAttribute("sandbox"),
      srcdoc: iframe.getAttribute("srcdoc") ?? "",
    };
  } finally {
    view.unmount();
    cleanup();
  }
}

interface DevToolsSocket {
  send: (text: string) => void;
  close: () => void;
  onText: (listener: (text: string) => void) => void;
}

const textDecoder = new TextDecoder();

function maskPayload(payload: Buffer, mask: Buffer): Buffer {
  const masked = Buffer.from(payload);
  for (let index = 0; index < masked.length; index += 1) {
    const byte = masked[index] ?? 0;
    const maskByte = mask[index % 4] ?? 0;
    // WebSocket client frames are XOR-masked. The operator is required.
    // eslint-disable-next-line no-bitwise
    masked[index] = byte ^ maskByte;
  }
  return masked;
}

function openDevToolsSocket(wsUrl: string): Promise<DevToolsSocket> {
  const url = new URL(wsUrl);
  const socket: Socket = connect({
    host: url.hostname,
    port: Number(url.port),
  });
  let buffer = Buffer.alloc(0);
  let upgraded = false;
  let onText: (text: string) => void = () => {};
  let markUpgraded: (() => void) | undefined;
  let failUpgrade: ((error: Error) => void) | undefined;

  const send = (text: string): void => {
    const payload = Buffer.from(text);
    const mask = randomBytes(4);
    const header = Buffer.alloc(payload.length < 126 ? 2 : 4);
    header[0] = 0x81;
    if (payload.length < 126) {
      // eslint-disable-next-line no-bitwise
      header[1] = 0x80 | payload.length;
    } else {
      // eslint-disable-next-line no-bitwise
      header[1] = 0x80 | 126;
      header.writeUInt16BE(payload.length, 2);
    }
    socket.write(Buffer.concat([header, mask, maskPayload(payload, mask)]));
  };

  const drainFrames = (): void => {
    while (buffer.length >= 2) {
      const first = buffer[0] ?? 0;
      const second = buffer[1] ?? 0;
      // eslint-disable-next-line no-bitwise
      const opcode = first & 0x0f;
      // eslint-disable-next-line no-bitwise
      let length = second & 0x7f;
      let offset = 2;
      if (length === 126) {
        if (buffer.length < 4) {
          return;
        }
        length = buffer.readUInt16BE(2);
        offset = 4;
      }
      // eslint-disable-next-line no-bitwise
      const masked = (second & 0x80) !== 0;
      const maskLength = masked ? 4 : 0;
      if (buffer.length < offset + maskLength + length) {
        return;
      }
      const mask = buffer.subarray(offset, offset + maskLength);
      const payload = Buffer.from(
        buffer.subarray(offset + maskLength, offset + maskLength + length),
      );
      buffer = buffer.subarray(offset + maskLength + length);
      const body = masked ? maskPayload(payload, mask) : payload;
      if (opcode === 0x1) {
        onText(textDecoder.decode(body));
      }
    }
  };

  const drain = (): void => {
    if (!upgraded) {
      const headerEnd = buffer.indexOf("\r\n\r\n");
      if (headerEnd < 0) {
        return;
      }
      const header = textDecoder.decode(buffer.subarray(0, headerEnd));
      buffer = buffer.subarray(headerEnd + 4);
      if (!header.includes(" 101 ")) {
        failUpgrade?.(new Error("DevTools socket upgrade failed"));
        return;
      }
      upgraded = true;
      markUpgraded?.();
    }
    drainFrames();
  };

  socket.on("data", (chunk: Buffer) => {
    buffer = Buffer.concat([buffer, chunk]);
    drain();
  });

  const connected = new Promise<void>((resolve, reject) => {
    socket.once("connect", () => resolve());
    socket.once("error", reject);
  });

  return connected.then(async () => {
    const key = randomBytes(16).toString("base64");
    socket.write(
      `GET ${url.pathname}${url.search} HTTP/1.1\r\nHost: ${url.host}\r\nUpgrade: websocket\r\nConnection: Upgrade\r\nSec-WebSocket-Key: ${key}\r\nSec-WebSocket-Version: 13\r\n\r\n`,
    );
    await new Promise<void>((resolve, reject) => {
      if (upgraded) {
        resolve();
        return;
      }
      markUpgraded = resolve;
      failUpgrade = reject;
    });
    return {
      send,
      close: () => {
        socket.end();
      },
      onText: (listener) => {
        onText = listener;
      },
    };
  });
}

function httpGetJson(url: string): Promise<unknown> {
  return new Promise((resolve, reject) => {
    get(url, (response) => {
      const chunks: Buffer[] = [];
      response.on("data", (chunk: Buffer) => {
        chunks.push(chunk);
      });
      response.on("end", () => {
        resolve(
          JSON.parse(textDecoder.decode(Buffer.concat(chunks))) as unknown,
        );
      });
    }).on("error", reject);
  });
}

class EmailFrameBrowser {
  readonly #hits: ProbeHit[] = [];
  readonly #pages = new Map<string, string>();
  #server: ReturnType<typeof createServer> | undefined;
  #chrome: ReturnType<typeof spawn> | undefined;
  #ws: DevToolsSocket | undefined;
  #nextId = 0;
  readonly #pending = new Map<
    number,
    {
      resolve: (value: unknown) => void;
      reject: (reason: Error) => void;
    }
  >();
  #port = 0;

  async start(): Promise<void> {
    this.#server = createServer((req, res) => {
      this.#onRequest(req, res);
    });
    await new Promise<void>((resolve) => {
      this.#server?.listen(0, "127.0.0.1", () => resolve());
    });
    const address = this.#server.address();
    if (address == null || typeof address === "string") {
      throw new Error("browser harness failed to bind");
    }
    this.#port = address.port;

    const userData = mkdtempSync(join(tmpdir(), "email-frame-"));
    const binary = process.env.CHROME_BIN ?? "google-chrome";
    this.#chrome = spawn(
      binary,
      [
        "--headless=new",
        "--disable-gpu",
        "--no-sandbox",
        "--disable-dev-shm-usage",
        "--no-first-run",
        "--remote-debugging-port=0",
        `--user-data-dir=${userData}`,
        "about:blank",
      ],
      { stdio: ["ignore", "pipe", "pipe"] },
    );
    const debugPort = await new Promise<number>((resolve, reject) => {
      const timer = setTimeout(() => {
        reject(new Error("Chrome did not open a DevTools port"));
      }, 10_000);
      const watch = (chunk: Buffer) => {
        const match = chunk
          .toString()
          .match(/DevTools listening on ws:\/\/127\.0\.0\.1:(\d+)\//u);
        if (match?.[1] != null) {
          clearTimeout(timer);
          resolve(Number(match[1]));
        }
      };
      this.#chrome?.stdout?.on("data", watch);
      this.#chrome?.stderr?.on("data", watch);
      this.#chrome?.once("exit", (code) => {
        clearTimeout(timer);
        reject(new Error(`Chrome exited before DevTools was ready (${code})`));
      });
    });
    const version = (await httpGetJson(
      `http://127.0.0.1:${debugPort}/json/version`,
    )) as { webSocketDebuggerUrl: string };
    this.#ws = await openDevToolsSocket(version.webSocketDebuggerUrl);
    this.#ws.onText((text) => {
      const message = JSON.parse(text) as {
        id?: number;
        error?: { message: string };
        result?: unknown;
      };
      if (message.id == null) {
        return;
      }
      const pending = this.#pending.get(message.id);
      if (pending == null) {
        return;
      }
      this.#pending.delete(message.id);
      if (message.error != null) {
        pending.reject(new Error(message.error.message));
      } else {
        pending.resolve(message.result);
      }
    });
  }

  async stop(): Promise<void> {
    this.#ws?.close();
    this.#chrome?.kill();
    await new Promise<void>((resolve) => {
      if (this.#server == null) {
        resolve();
        return;
      }
      this.#server.close(() => resolve());
    });
  }

  async load(markup: string): Promise<FrameLoad> {
    const id = `${this.#pages.size}`;
    this.#pages.set(id, `<!doctype html><html><body>${markup}</body></html>`);
    this.#hits.length = 0;
    const created = (await this.#send("Target.createTarget", {
      url: "about:blank",
    })) as { targetId: string };
    const attached = (await this.#send("Target.attachToTarget", {
      targetId: created.targetId,
      flatten: true,
    })) as { sessionId: string };
    const sessionId = attached.sessionId;
    await this.#send("Network.enable", {}, sessionId);
    await this.#send(
      "Network.setCacheDisabled",
      { cacheDisabled: true },
      sessionId,
    );
    await this.#send("Page.enable", {}, sessionId);
    await this.#send(
      "Page.navigate",
      { url: `http://127.0.0.1:${this.#port}/view?id=${id}` },
      sessionId,
    );
    await this.#sleep(1_200);
    const inspected = await this.#inspect(sessionId);
    await this.#send("Target.closeTarget", { targetId: created.targetId });
    const sharesParentOrigin =
      inspected.docAccess &&
      inspected.origin === inspected.parentOrigin &&
      inspected.origin !== "null";
    return {
      loaded: inspected.ready,
      sharesParentOrigin,
      probes: [...this.#hits],
    };
  }

  #onRequest(req: IncomingMessage, res: ServerResponse): void {
    const url = new URL(req.url ?? "/", "http://127.0.0.1");
    if (url.pathname === "/probe") {
      this.#hits.push({
        via: url.searchParams.get("via") ?? "",
        method: req.method ?? "",
        cookie: req.headers.cookie ?? "",
        site: headerValue(req.headers["sec-fetch-site"]),
      });
      res.writeHead(200, {
        "cache-control": "no-store",
        "content-type": "text/plain",
      });
      res.end("ok");
      return;
    }
    const page = this.#pages.get(url.searchParams.get("id") ?? "");
    res.writeHead(200, {
      "cache-control": "no-store",
      "content-type": "text/html; charset=utf-8",
      "set-cookie": `${SESSION_COOKIE}; Path=/; SameSite=Lax; HttpOnly`,
    });
    res.end(page ?? "");
  }

  async #inspect(sessionId: string): Promise<FrameInspection> {
    const evaluated = (await this.#send(
      "Runtime.evaluate",
      {
        expression: `(() => {
          const iframe = document.querySelector("iframe");
          if (iframe == null) {
            return { ready: false, docAccess: false, origin: "", parentOrigin: location.origin };
          }
          let docAccess = false;
          let origin = "";
          try {
            docAccess = iframe.contentDocument != null;
            origin = iframe.contentWindow == null ? "" : iframe.contentWindow.origin;
          } catch (error) {
            docAccess = false;
            origin = "";
          }
          return { ready: true, docAccess, origin, parentOrigin: location.origin };
        })()`,
        returnByValue: true,
      },
      sessionId,
    )) as { result?: { value?: FrameInspection } };
    return (
      evaluated.result?.value ?? {
        ready: false,
        docAccess: false,
        origin: "",
        parentOrigin: "",
      }
    );
  }

  #send(
    method: string,
    params: Record<string, unknown>,
    sessionId?: string,
  ): Promise<unknown> {
    const id = ++this.#nextId;
    const message: {
      id: number;
      method: string;
      params: Record<string, unknown>;
      sessionId?: string;
    } = { id, method, params };
    if (sessionId != null) {
      message.sessionId = sessionId;
    }
    this.#ws?.send(JSON.stringify(message));
    return new Promise((resolve, reject) => {
      this.#pending.set(id, { resolve, reject });
    });
  }

  #sleep(ms: number): Promise<void> {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }
}

function headerValue(value: string | string[] | undefined): string {
  if (Array.isArray(value)) {
    return value.join(",");
  }
  return value ?? "";
}

function expectNoCredentialedParentRequests(
  srcdoc: string,
  load: FrameLoad,
): void {
  expect(load.loaded).toBe(true);
  if (srcdoc.includes("/probe?via=img")) {
    expect(load.probes.map((probe) => probe.via)).toContain("img");
  }
  expect({
    sharesParentOrigin: load.sharesParentOrigin,
    credentialed: load.probes
      .filter((probe) => probe.cookie.includes("app_session"))
      .map((probe) => probe.via),
    sameOrigin: load.probes
      .filter((probe) => probe.site === "same-origin")
      .map((probe) => probe.via),
  }).toEqual({
    sharesParentOrigin: false,
    credentialed: [],
    sameOrigin: [],
  });
}

describe("email HTML must not inherit the embedding origin", () => {
  const browser = new EmailFrameBrowser();
  const message = rawMessage(ATTACK_HTML);

  beforeAll(async () => {
    await browser.start();
  }, 20_000);

  afterAll(async () => {
    await browser.stop();
  });

  it("keeps parsed message HTML off the parent origin when rendered as content", async () => {
    const parsed = await parseEmailFromResponse(new Response(message));
    expect(parsed.html).toContain('src="/probe?via=img"');
    const iframe = await renderedIframe(<BaseEmailViewer content={parsed} />);
    const load = await browser.load(
      iframeMarkup(iframe.sandbox, iframe.srcdoc),
    );
    expectNoCredentialedParentRequests(iframe.srcdoc, load);
  }, 20_000);

  it("keeps parsed message HTML off the parent origin for the deprecated email prop", async () => {
    const parsed = await parseEmailFromResponse(new Response(message));
    const iframe = await renderedIframe(
      // eslint-disable-next-line @typescript-eslint/no-deprecated -- the alias still renders HTML
      <BaseEmailViewer email={parsed} />,
    );
    const load = await browser.load(
      iframeMarkup(iframe.sandbox, iframe.srcdoc),
    );
    expectNoCredentialedParentRequests(iframe.srcdoc, load);
  }, 20_000);

  it("keeps fetched message bytes off the parent origin in EmailViewer", async () => {
    const iframe = await renderedIframe(
      <EmailViewer media={emailMedia(message, "message/rfc822")} />,
    );
    const load = await browser.load(
      iframeMarkup(iframe.sandbox, iframe.srcdoc),
    );
    expectNoCredentialedParentRequests(iframe.srcdoc, load);
  }, 20_000);

  it("keeps message/rfc822 media off the parent origin in DocumentViewer", async () => {
    const iframe = await renderedIframe(
      <DocumentViewer media={emailMedia(message, "message/rfc822")} />,
    );
    const load = await browser.load(
      iframeMarkup(iframe.sandbox, iframe.srcdoc),
    );
    expectNoCredentialedParentRequests(iframe.srcdoc, load);
  }, 20_000);
});
