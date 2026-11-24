// @vitest-environment node
// cspell:ignore todowidget
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
import {
  mkdirSync,
  mkdtempSync,
  readFileSync,
  rmSync,
  writeFileSync,
} from "node:fs";
import http from "node:http";
import type { Server } from "node:http";
import { createRequire } from "node:module";
import { networkInterfaces } from "node:os";
import path from "node:path";

import type { createServer } from "vite";
import { type ViteDevServer } from "vite";
import { afterEach, describe, expect, test } from "vitest";

const PACKAGE_ROOT = path.resolve(import.meta.dirname, "../../..");
const REPO_ROOT = path.resolve(PACKAGE_ROOT, "../..");
const PLUGIN_ENTRY = path.join(PACKAGE_ROOT, "src/index.ts");

const WIDGET_SET_RID = "ri.widgetregistry..widget-set.placeholder";
const SOURCE_MARKER = "UNRELEASED_WIDGET_SOURCE_MARKER";
const CLIENT_MARKER = "ONTOLOGY_CLIENT_MARKER";
const SDK_MARKER = "ONTOLOGY_SDK_MARKER";
const PACKAGE_NAME = "widget-dev-server-exposure-fixture";
const PUBLIC_ORIGIN = "https://attacker.example";
const FOUNDRY_ORIGIN = "https://foundry.example";
const PLACEHOLDER_TOKEN = "placeholder-token";

interface ShippedConfig {
  name: string;
  sourcePath: string;
  vite: "6" | "7";
}

const SHIPPED_CONFIGS: ShippedConfig[] = [
  {
    name: "create-widget React template",
    sourcePath: path.join(
      REPO_ROOT,
      "packages/create-widget.template.react.v2/templates/vite.config.ts.hbs",
    ),
    vite: "7",
  },
  {
    name: "example-widget-react-sdk-2.x",
    sourcePath: path.join(
      REPO_ROOT,
      "examples/example-widget-react-sdk-2.x/vite.config.ts",
    ),
    vite: "7",
  },
  {
    name: "example-widget-react-sdk-2.x-no-osdk",
    sourcePath: path.join(
      REPO_ROOT,
      "examples/example-widget-react-sdk-2.x-no-osdk/vite.config.ts",
    ),
    vite: "7",
  },
  {
    name: "e2e.sandbox.todowidget",
    sourcePath: path.join(
      REPO_ROOT,
      "packages/e2e.sandbox.todowidget/vite.config.ts",
    ),
    vite: "6",
  },
];

interface FoundryCall {
  method: string;
  url: string;
  authorization: string | undefined;
}

interface RunningDevServer {
  server: ViteDevServer;
  baseUrl: string;
  root: string;
  foundry: Server;
  foundryCalls: FoundryCall[];
  previousCwd: string;
  previousVitest: string | undefined;
  previousToken: string | undefined;
}

const running: RunningDevServer[] = [];

afterEach(async () => {
  await Promise.all(running.splice(0).map((session) => stopDevServer(session)));
});

describe("widget dev server cross-origin exposure", () => {
  test.each(SHIPPED_CONFIGS)(
    "$name does not let a non-local website read project files",
    async (shipped) => {
      const privateOrigin = `http://${privateIpv4()}:9`;
      const session = await startDevServer(shipped, FOUNDRY_ORIGIN);
      for (const origin of [PUBLIC_ORIGIN, privateOrigin]) {
        for (const target of fileTargets()) {
          const response = await fetch(session.baseUrl + target.path, {
            headers: {
              Origin: origin,
              "Sec-Fetch-Site": "cross-site",
            },
          });
          const body = await response.text();
          expect(response.status, target.path).toBe(200);
          expect(body, target.path).toContain(target.marker);
          expect(corsAllows(response, origin), target.path).toBe(false);
        }
      }

      const foundryRead = await fetch(session.baseUrl + "/src/Widget.tsx", {
        headers: { Origin: FOUNDRY_ORIGIN, "Sec-Fetch-Site": "cross-site" },
      });
      expect(await foundryRead.text()).toContain(SOURCE_MARKER);
      expect(corsAllows(foundryRead, FOUNDRY_ORIGIN)).toBe(true);

      const injections = await fetch(
        session.baseUrl + "/.palantir/vite-injections.js",
        { headers: { Origin: FOUNDRY_ORIGIN, "Sec-Fetch-Site": "cross-site" } },
      );
      expect(await injections.text()).toContain("injectIntoGlobalHook");
      expect(corsAllows(injections, FOUNDRY_ORIGIN)).toBe(true);
    },
    60_000,
  );

  test.each(SHIPPED_CONFIGS)(
    "$name does not let a cross-site page finish dev-mode setup",
    async (shipped) => {
      const session = await startDevServer(shipped, undefined);
      const primed = await readFinish(session, {
        Origin: session.baseUrl,
        "Sec-Fetch-Site": "same-origin",
      });
      expect(primed.status).toBe(200);
      expect(primed.body).toContain(WIDGET_SET_RID);
      expect(session.foundryCalls.map((call) => call.url)).toEqual([
        "/api/v2/widgets/devModeSettingsV2/setWidgetSetManifest?preview=true",
        "/api/v2/widgets/devModeSettingsV2/enable?preview=true",
      ]);
      expect(
        session.foundryCalls.every(
          (call) => call.authorization === `Bearer ${PLACEHOLDER_TOKEN}`,
        ),
      ).toBe(true);

      for (const headers of crossSiteHeaders(session.baseUrl)) {
        session.foundryCalls.length = 0;
        const attacked = await readFinish(session, headers);
        expect(session.foundryCalls, JSON.stringify(headers)).toEqual([]);
        expect(
          corsAllows(attacked.response, headers.Origin ?? PUBLIC_ORIGIN),
          attacked.body.slice(0, 180),
        ).toBe(false);
      }
    },
    60_000,
  );

  test("Chrome on a private-network origin cannot read the template dev server", async () => {
    const session = await startDevServer(SHIPPED_CONFIGS[0]!, FOUNDRY_ORIGIN);
    const page = await serveAttackerPage(session.baseUrl);
    try {
      const dom = await dumpChromeDom(page.url);
      expect(dom).not.toContain(SOURCE_MARKER);
      expect(dom).not.toContain(SDK_MARKER);
      expect(dom).not.toContain(WIDGET_SET_RID);
      expect(dom).toContain("cross-origin-read-blocked");
    } finally {
      await closeServer(page.server);
    }
  }, 60_000);
});

function fileTargets(): Array<{ path: string; marker: string }> {
  return [
    { path: "/src/Widget.tsx", marker: SOURCE_MARKER },
    { path: "/src/client.ts", marker: CLIENT_MARKER },
    { path: "/package.json", marker: PACKAGE_NAME },
    { path: "/node_modules/@generated/sdk/index.js", marker: SDK_MARKER },
    { path: "/.palantir/vite-injections.js", marker: "injectIntoGlobalHook" },
  ];
}

function crossSiteHeaders(baseUrl: string): Array<Record<string, string>> {
  return [
    { Origin: PUBLIC_ORIGIN, "Sec-Fetch-Site": "cross-site" },
    { Origin: `http://${privateIpv4()}:9`, "Sec-Fetch-Site": "cross-site" },
    { Origin: PUBLIC_ORIGIN },
    { "Sec-Fetch-Site": "cross-site" },
    // A browser on another site cannot keep the dev server's own origin.
    { Origin: baseUrl, "Sec-Fetch-Site": "cross-site" },
  ];
}

function corsAllows(response: Response, origin: string): boolean {
  const allow = response.headers.get("access-control-allow-origin");
  return allow === "*" || allow === origin;
}

async function readFinish(
  session: RunningDevServer,
  headers: Record<string, string>,
): Promise<{ status: number; body: string; response: Response }> {
  const response = await fetch(
    session.baseUrl + "/.palantir/finish?attempt=0",
    { headers },
  );
  const body = await response.text();
  return { status: response.status, body, response };
}

async function startDevServer(
  shipped: ShippedConfig,
  foundryOrigin: string | undefined,
): Promise<RunningDevServer> {
  const previousCwd = process.cwd();
  const previousVitest = process.env.VITEST;
  const previousToken = process.env.FOUNDRY_TOKEN;
  delete process.env.VITEST;
  process.env.FOUNDRY_TOKEN = PLACEHOLDER_TOKEN;

  const foundryCalls: FoundryCall[] = [];
  const foundry = http.createServer((request, response) => {
    foundryCalls.push({
      method: request.method ?? "",
      url: request.url ?? "",
      authorization: request.headers.authorization,
    });
    response.writeHead(200, { "content-type": "application/json" });
    response.end("{}");
  });
  await listen(foundry, "127.0.0.1");
  const foundryPort = portOf(foundry);
  const foundryUrl = foundryOrigin ?? `http://127.0.0.1:${foundryPort}`;

  const root = mkdtempSync(path.join(PACKAGE_ROOT, ".tmp-dev-server-"));
  writeFixture(root, shipped.sourcePath, foundryUrl);
  process.chdir(root);

  const session: RunningDevServer = {
    server: undefined as unknown as ViteDevServer,
    baseUrl: "",
    root,
    foundry,
    foundryCalls,
    previousCwd,
    previousVitest,
    previousToken,
  };
  running.push(session);
  try {
    const { createServer } = await importVite(shipped.vite);
    const port = await freePort();
    session.server = await createServer({
      configFile: path.join(root, "vite.config.ts"),
      root,
      server: { port, strictPort: true, host: "127.0.0.1" },
      optimizeDeps: { noDiscovery: true },
      logLevel: "error",
    });
    await session.server.listen();
    session.baseUrl = `http://127.0.0.1:${portOf(session.server.httpServer!)}`;
    // Load the entry the setup page iframe loads, so the dev plugin records
    // the widget config before a finish request can publish it.
    for (const pathname of [
      "/",
      "/second.html",
      "/src/main.tsx",
      "/src/main.config.ts",
      "/src/second.tsx",
      "/src/second.config.ts",
    ]) {
      const loaded = await fetch(session.baseUrl + pathname);
      expect(loaded.status, pathname).toBe(200);
    }
    return session;
  } catch (error) {
    const index = running.indexOf(session);
    if (index !== -1) running.splice(index, 1);
    await stopDevServer(session);
    throw error;
  }
}

async function stopDevServer(session: RunningDevServer): Promise<void> {
  await session.server?.close();
  await closeServer(session.foundry);
  process.chdir(session.previousCwd);
  if (session.previousVitest == null) delete process.env.VITEST;
  else process.env.VITEST = session.previousVitest;
  if (session.previousToken == null) delete process.env.FOUNDRY_TOKEN;
  else process.env.FOUNDRY_TOKEN = session.previousToken;
  rmSync(session.root, { recursive: true, force: true });
}

function writeFixture(
  root: string,
  sourcePath: string,
  foundryUrl: string,
): void {
  mkdirSync(path.join(root, "src"), { recursive: true });
  mkdirSync(path.join(root, "node_modules/@generated/sdk"), {
    recursive: true,
  });
  const source = readFileSync(sourcePath, "utf8").replaceAll(
    'from "@osdk/widget.vite-plugin"',
    `from ${JSON.stringify(PLUGIN_ENTRY)}`,
  );
  writeFileSync(path.join(root, "vite.config.ts"), source);
  writeFileSync(
    path.join(root, "index.html"),
    '<!doctype html><html><body><script type="module" src="/src/main.tsx"></script></body></html>\n',
  );
  writeFileSync(
    path.join(root, "second.html"),
    '<!doctype html><html><body><script type="module" src="/src/second.tsx"></script></body></html>\n',
  );
  writeFileSync(
    path.join(root, "package.json"),
    JSON.stringify({
      name: PACKAGE_NAME,
      private: true,
      version: "0.0.0",
      type: "module",
    }),
  );
  writeFileSync(
    path.join(root, "foundry.config.json"),
    JSON.stringify({
      foundryUrl: foundryUrl.endsWith("/") ? foundryUrl : `${foundryUrl}/`,
      widgetSet: { rid: WIDGET_SET_RID, directory: "./dist" },
    }),
  );
  writeFileSync(
    path.join(root, "src/main.tsx"),
    `import MainConfig from "./main.config.js";\nexport const marker = ${JSON.stringify(SOURCE_MARKER)};\nconsole.log(MainConfig.id);\n`,
  );
  writeFileSync(
    path.join(root, "src/Widget.tsx"),
    `export const secret = ${JSON.stringify(SOURCE_MARKER)};\n`,
  );
  writeFileSync(
    path.join(root, "src/client.ts"),
    `export const ontologyClient = ${JSON.stringify(CLIENT_MARKER)};\n`,
  );
  writeFileSync(
    path.join(root, "src/main.config.ts"),
    'export default { id: "widgetId", name: "Custom Widget", description: "An example custom widget implementation", type: "workshop", parameters: {}, events: {} };\n',
  );
  writeFileSync(
    path.join(root, "src/second.tsx"),
    'import SecondConfig from "./second.config.js";\nconsole.log(SecondConfig.id);\n',
  );
  writeFileSync(
    path.join(root, "src/second.config.ts"),
    'export default { id: "secondWidget", name: "Second Widget", description: "A second widget entry", type: "workshop", parameters: {}, events: {} };\n',
  );
  writeFileSync(
    path.join(root, "node_modules/@generated/sdk/package.json"),
    JSON.stringify({
      name: "@generated/sdk",
      version: "0.0.0",
      type: "module",
      osdk: { packageRid: "ri.ontology.main.ontology.placeholder" },
    }),
  );
  writeFileSync(
    path.join(root, "node_modules/@generated/sdk/index.js"),
    `export const objectType = ${JSON.stringify(SDK_MARKER)};\n`,
  );
}

function importVite(version: "6" | "7"): Promise<{
  createServer: typeof createServer;
}> {
  if (version === "7") return import("vite");
  const requireFromSandbox = createRequire(
    path.join(REPO_ROOT, "packages/e2e.sandbox.todowidget/package.json"),
  );
  return import(requireFromSandbox.resolve("vite"));
}

function privateIpv4(): string {
  for (const entries of Object.values(networkInterfaces())) {
    for (const entry of entries ?? []) {
      if (entry.family === "IPv4" && !entry.internal) return entry.address;
    }
  }
  throw new Error(
    "No non-loopback IPv4 address is available for the browser test",
  );
}

async function serveAttackerPage(devServerUrl: string): Promise<{
  url: string;
  server: Server;
}> {
  const server = http.createServer((_request, response) => {
    response.writeHead(200, { "content-type": "text/html" });
    response.end(`<!doctype html><pre id="out">pending</pre>
<script type="module">
  const targets = ["/src/Widget.tsx", "/node_modules/@generated/sdk/index.js", "/package.json"];
  const parts = [];
  for (const target of targets) {
    try {
      const res = await fetch(${JSON.stringify(devServerUrl)} + target);
      parts.push(target + " " + await res.text());
    } catch (error) {
      parts.push("cross-origin-read-blocked " + target);
    }
  }
  document.getElementById("out").textContent = parts.join("\\n");
</script>`);
  });
  await listen(server, privateIpv4());
  return { url: `http://${privateIpv4()}:${portOf(server)}/`, server };
}

function dumpChromeDom(url: string): Promise<string> {
  const profile = mkdtempSync(path.join(PACKAGE_ROOT, ".tmp-chrome-"));
  return new Promise((resolve, reject) => {
    const chrome = spawn(
      "google-chrome",
      [
        "--headless=new",
        "--disable-gpu",
        "--no-sandbox",
        `--user-data-dir=${profile}`,
        "--virtual-time-budget=5000",
        "--dump-dom",
        url,
      ],
      { stdio: ["ignore", "pipe", "pipe"] },
    );
    let stdout = "";
    let stderr = "";
    chrome.stdout.on("data", (chunk) => {
      stdout += chunk;
    });
    chrome.stderr.on("data", (chunk) => {
      stderr += chunk;
    });
    const timer = setTimeout(() => chrome.kill("SIGKILL"), 20_000);
    chrome.on("error", (error) => {
      clearTimeout(timer);
      rmSync(profile, { recursive: true, force: true });
      reject(error);
    });
    chrome.on("close", () => {
      clearTimeout(timer);
      rmSync(profile, { recursive: true, force: true });
      if (!stdout.includes("<html")) {
        reject(new Error(stderr.slice(-500) || "Chrome produced no document"));
        return;
      }
      resolve(stdout);
    });
  });
}

function listen(server: Server, host: string): Promise<void> {
  return new Promise((resolve, reject) => {
    server.once("error", reject);
    server.listen(0, host, () => {
      server.off("error", reject);
      resolve();
    });
  });
}

function freePort(): Promise<number> {
  return new Promise((resolve, reject) => {
    const probe = http.createServer();
    probe.once("error", reject);
    probe.listen(0, "127.0.0.1", () => {
      const port = portOf(probe);
      probe.close(() => resolve(port));
    });
  });
}

function portOf(server: Server): number {
  const address = server.address();
  if (address == null || typeof address === "string") {
    throw new Error("Server is not listening on a TCP port");
  }
  return address.port;
}

function closeServer(server: Server): Promise<void> {
  return new Promise((resolve) => {
    server.close(() => resolve());
  });
}
