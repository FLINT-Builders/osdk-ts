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

import { execFileSync } from "node:child_process";
import fs from "node:fs";
import http from "node:http";
import https from "node:https";
import { createRequire } from "node:module";
import type { AddressInfo } from "node:net";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { afterEach, expect, it } from "vitest";

import { PROXY_ROUTES, smartClientPlugin } from "./index.js";
import {
  type DiscoveryService,
  DISCOVERY_DIR,
  inspectDiscovery,
} from "./public/discovery.js";

/**
 * Obvious placeholder. The product under test turns this into the
 * Authorization header value `Bearer <placeholder>`.
 */
const DEVELOPER_TOKEN = "placeholder-foundry-access-token";
const DEVELOPER_AUTHORIZATION = `Bearer ${DEVELOPER_TOKEN}`;
const FOUNDRY_BASE_URL = "https://foundry.example.test";
const RECORDED_BASE_URL = Symbol.for(
  "osdk.discoveryProxyCredentialTest.baseUrl",
);

const requireFromTemplate = createRequire(
  fileURLToPath(
    new URL("../../create-app.template.react/package.json", import.meta.url),
  ),
);

const repoRoot = fileURLToPath(new URL("../../", import.meta.url));
const osdkClientPath = fileURLToPath(
  new URL("public/osdkClient.ts", import.meta.url),
);
const sharedContextPath = fileURLToPath(
  new URL(
    "../../shared.client.impl/src/createSharedClientContext.ts",
    import.meta.url,
  ),
);
const sharedFetchEntry = fileURLToPath(
  new URL("../../shared.net.fetch/src/index.ts", import.meta.url),
);
const sharedErrorsEntry = fileURLToPath(
  new URL("../../shared.net.errors/src/index.ts", import.meta.url),
);

interface CapturedRequest {
  authorization: string | undefined;
  url: string | undefined;
}

interface CaptureServer {
  origin: string;
  hits: CapturedRequest[];
  close: () => Promise<void>;
}

interface DevServer {
  close: () => Promise<void>;
  origin: string;
  recordedBaseUrl: string;
  proxyTargets: Record<string, unknown>;
}

type SharedFetch = (
  input: string | URL,
  init?: RequestInit,
) => Promise<Response>;

const openServers: Array<{ close: () => Promise<void> }> = [];
const tempDirs: string[] = [];

afterEach(async () => {
  const closing = openServers.splice(0);
  await Promise.all(closing.map((server) => server.close()));
  for (const dir of tempDirs.splice(0)) {
    fs.rmSync(dir, { recursive: true, force: true });
  }
});

function makeRoot(): string {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "discovery-proxy-"));
  tempDirs.push(root);
  return root;
}

function nonLoopbackIPv4(): string {
  for (const addresses of Object.values(os.networkInterfaces())) {
    for (const address of addresses ?? []) {
      if (address.family === "IPv4" && !address.internal) {
        return address.address;
      }
    }
  }
  throw new Error(
    "expected a non-loopback IPv4 address so a discovery URL can name a host that is not loopback",
  );
}

function signalError(pid: number): string | undefined {
  try {
    process.kill(pid, 0);
    return undefined;
  } catch (error) {
    return (error as NodeJS.ErrnoException).code;
  }
}

function listen(
  host: string,
  tls?: { cert: Buffer; key: Buffer },
): Promise<CaptureServer> {
  const hits: CapturedRequest[] = [];
  const handler = (
    req: http.IncomingMessage,
    res: http.ServerResponse,
  ): void => {
    const authorization = req.headers.authorization;
    hits.push({
      authorization:
        typeof authorization === "string" ? authorization : undefined,
      url: req.url,
    });
    res.writeHead(200, { "content-type": "application/json" });
    res.end("{}");
  };
  const server = tls
    ? https.createServer(tls, handler)
    : http.createServer(handler);
  return new Promise((resolve, reject) => {
    server.once("error", reject);
    server.listen(0, host, () => {
      const address = server.address();
      if (address == null || typeof address === "string") {
        reject(new Error("capture server did not bind a TCP port"));
        return;
      }
      const protocol = tls ? "https" : "http";
      const origin = `${protocol}://${formatHost(host)}:${address.port}`;
      const capture: CaptureServer = {
        origin,
        hits,
        close: () =>
          new Promise((done, fail) => {
            server.close((error) => {
              if (error) fail(error);
              else done();
            });
          }),
      };
      openServers.push(capture);
      resolve(capture);
    });
  });
}

function formatHost(host: string): string {
  return host.includes(":") ? `[${host}]` : host;
}

function writeProject(
  root: string,
  services: ReadonlyArray<{
    service: DiscoveryService;
    pid: number;
    url: string;
  }>,
): void {
  fs.writeFileSync(path.join(root, "foundry.yml"), 'minCliVersion: "0.0.0"\n');
  const dir = path.join(root, DISCOVERY_DIR);
  fs.mkdirSync(dir, { recursive: true });
  for (const service of services) {
    fs.writeFileSync(
      path.join(dir, `.${service.service}-discovery.json`),
      JSON.stringify({ pid: service.pid, url: service.url }),
    );
  }
}

function writeEveryProxiedService(
  root: string,
  pid: number,
  url: string,
): void {
  const services = [...new Set(PROXY_ROUTES.map((route) => route.service))];
  writeProject(
    root,
    services.map((service) => ({ service, pid, url })),
  );
}

function targetHref(target: unknown): string | undefined {
  if (typeof target === "string") return target;
  if (target instanceof URL) return target.href;
  if (typeof target === "object" && target != null && "href" in target) {
    const href = target.href;
    if (typeof href === "string") return href;
  }
  return undefined;
}

function proxyTargetIsLocalOnly(target: unknown): boolean {
  if (target == null) return true;
  const href = targetHref(target);
  if (href == null) return false;
  let url: URL;
  try {
    url = new URL(href);
  } catch {
    return false;
  }
  if (url.protocol !== "http:" && url.protocol !== "https:") return false;
  return (
    url.hostname === "localhost" ||
    url.hostname === "127.0.0.1" ||
    url.hostname === "::1"
  );
}

async function startDevServer(
  root: string,
  pageOriginHost = "127.0.0.1",
): Promise<DevServer> {
  fs.writeFileSync(path.join(root, "empty-module.ts"), "export {};\n");
  fs.writeFileSync(
    path.join(root, "stub-osdk-client.mjs"),
    [
      "export function createClient(baseUrl) {",
      "  globalThis[Symbol.for('osdk.discoveryProxyCredentialTest.baseUrl')] = baseUrl;",
      "  return { baseUrl };",
      "}",
      "",
    ].join("\n"),
  );

  const { createServer } = requireFromTemplate("vite") as {
    createServer: (options: Record<string, unknown>) => Promise<{
      listen: () => Promise<void>;
      close: () => Promise<void>;
      ssrLoadModule: (id: string) => Promise<Record<string, unknown>>;
      httpServer: { address: () => AddressInfo | string | null } | null;
      config: { server: { proxy?: Record<string, { target?: unknown }> } };
    }>;
  };

  const server = await createServer({
    root,
    configFile: false,
    logLevel: "silent",
    appType: "custom",
    optimizeDeps: { noDiscovery: true },
    resolve: {
      alias: [
        {
          find: "@osdk/client",
          replacement: path.join(root, "stub-osdk-client.mjs"),
        },
        { find: "@osdk/shared.net.fetch", replacement: sharedFetchEntry },
        { find: "@osdk/shared.net.errors", replacement: sharedErrorsEntry },
        {
          find: "@osdk/shared.client",
          replacement: path.join(root, "empty-module.ts"),
        },
        {
          find: "@osdk/shared.client2",
          replacement: path.join(root, "empty-module.ts"),
        },
      ],
    },
    server: {
      host: pageOriginHost,
      port: 0,
      strictPort: true,
      fs: { allow: [root, repoRoot] },
    },
    plugins: [
      smartClientPlugin(),
      {
        name: "test-bind-window",
        transform(code: string, id: string) {
          if (!id.split("\\").join("/").endsWith("/src/public/osdkClient.ts")) {
            return null;
          }
          return code.replaceAll(
            "window.location.origin",
            "globalThis.window.location.origin",
          );
        },
      },
    ],
  });
  openServers.push(server);
  await server.listen();
  const address = server.httpServer?.address();
  if (address == null || typeof address === "string") {
    throw new Error("dev server did not bind a TCP port");
  }
  const origin = `http://${pageOriginHost}:${address.port}`;
  (
    globalThis as typeof globalThis & {
      window?: { location: { origin: string } };
    }
  ).window = { location: { origin } };

  const osdkModule = await server.ssrLoadModule(osdkClientPath);
  const createClient = osdkModule["createClient"];
  if (typeof createClient !== "function") {
    throw new Error("rewritten dev client did not load");
  }
  await createClient(FOUNDRY_BASE_URL, "ri.ontology.main.ontology.test", () =>
    Promise.resolve(DEVELOPER_TOKEN),
  );
  const recordedBaseUrl = (globalThis as Record<symbol, unknown>)[
    RECORDED_BASE_URL
  ];
  if (typeof recordedBaseUrl !== "string") {
    throw new Error("dev client did not record the base URL it will call");
  }

  const proxyTargets: Record<string, unknown> = {};
  for (const route of PROXY_ROUTES) {
    proxyTargets[route.prefix] =
      server.config.server.proxy?.[route.prefix]?.target;
  }

  return {
    close: () => server.close(),
    origin,
    recordedBaseUrl,
    proxyTargets,
  };
}

function authorizations(hits: CapturedRequest[]): Array<string | undefined> {
  return hits.map((hit) => hit.authorization);
}

function assertTokenWasNotForwarded(
  capture: CaptureServer,
  dev: DevServer,
  root: string,
): void {
  expect(authorizations(capture.hits)).not.toContain(DEVELOPER_AUTHORIZATION);
  for (const route of PROXY_ROUTES) {
    expect(proxyTargetIsLocalOnly(dev.proxyTargets[route.prefix])).toBe(true);
    expect(inspectDiscovery(root, route.service).kind).not.toBe("ok");
  }
}

async function loadFetch(dev: DevServer): Promise<SharedFetch> {
  const holder = openServers.find((server) => "ssrLoadModule" in server) as
    | {
        ssrLoadModule: (id: string) => Promise<Record<string, unknown>>;
      }
    | undefined;
  if (holder == null) throw new Error("dev server is not loaded");
  const loaded = await holder.ssrLoadModule(sharedContextPath);
  const createSharedClientContext = loaded["createSharedClientContext"];
  if (typeof createSharedClientContext !== "function") {
    throw new Error("shared client context did not load");
  }
  const context = createSharedClientContext(
    dev.recordedBaseUrl,
    () => Promise.resolve(DEVELOPER_TOKEN),
    "vite-plugin-superrepo-test",
  ) as { fetch: SharedFetch };
  return context.fetch;
}

async function sendFetched(
  fetchFn: SharedFetch,
  baseUrl: string,
): Promise<void> {
  for (const route of PROXY_ROUTES) {
    const url = new URL(`${route.prefix.slice(1)}/health`, baseUrl);
    try {
      await fetchFn(url);
    } catch {
      // Refusal may reject the response. Observation is on the capture server.
    }
  }
}

it("rewrites the dev client onto the dev server and does not forward its bearer token to a pid-1 non-loopback discovery URL", async () => {
  expect(signalError(1)).toBe("EPERM");
  const plugin = smartClientPlugin();
  const transform = plugin.transform;
  if (typeof transform !== "function") {
    throw new Error("smartClientPlugin must declare a transform hook");
  }
  const root = makeRoot();
  const rewritten = await transform.call(
    undefined as never,
    'import { createClient } from "@osdk/client";\n',
    path.join(root, "src/client.ts"),
  );
  expect(rewritten).toContain("@osdk/vite-plugin-superrepo/osdkClient");

  const host = nonLoopbackIPv4();
  const capture = await listen(host);
  writeEveryProxiedService(root, 1, capture.origin);
  const dev = await startDevServer(root);
  expect(dev.recordedBaseUrl.startsWith(dev.origin)).toBe(true);
  expect(dev.recordedBaseUrl).not.toContain("foundry.example.test");

  const fetchFn = await loadFetch(dev);
  await sendFetched(fetchFn, dev.recordedBaseUrl);
  assertTokenWasNotForwarded(capture, dev, root);
}, 60_000);

it("does not forward the developer bearer token when the discovery pid is this process but the URL host is not loopback", async () => {
  const host = nonLoopbackIPv4();
  const root = makeRoot();
  const capture = await listen(host);
  writeEveryProxiedService(root, process.pid, capture.origin);
  const dev = await startDevServer(root);
  const fetchFn = await loadFetch(dev);
  await sendFetched(fetchFn, dev.recordedBaseUrl);
  assertTokenWasNotForwarded(capture, dev, root);
}, 60_000);

it("does not treat a loopback-looking userinfo prefix as a loopback discovery host", async () => {
  const host = nonLoopbackIPv4();
  const root = makeRoot();
  const capture = await listen(host);
  const disguised = `http://127.0.0.1@${formatHost(host)}:${
    new URL(capture.origin).port
  }/`;
  writeEveryProxiedService(root, process.pid, disguised);
  const dev = await startDevServer(root);
  const fetchFn = await loadFetch(dev);
  await sendFetched(fetchFn, dev.recordedBaseUrl);
  assertTokenWasNotForwarded(capture, dev, root);
}, 60_000);

it("does not forward the developer bearer token to an https discovery URL whose host is not loopback", async () => {
  expect(signalError(1)).toBe("EPERM");
  const host = nonLoopbackIPv4();
  const root = makeRoot();
  const cert = path.join(root, "cert.pem");
  const key = path.join(root, "key.pem");
  execFileSync(
    "openssl",
    [
      "req",
      "-x509",
      "-newkey",
      "rsa:2048",
      // cspell:disable-next-line
      "-keyout",
      key,
      "-out",
      cert,
      "-days",
      "1",
      "-nodes",
      "-subj",
      "/CN=discovery-proxy-test",
    ],
    { stdio: "ignore" },
  );
  const capture = await listen(host, {
    cert: fs.readFileSync(cert),
    key: fs.readFileSync(key),
  });
  writeEveryProxiedService(root, 1, capture.origin);
  const dev = await startDevServer(root);
  const fetchFn = await loadFetch(dev);
  await sendFetched(fetchFn, dev.recordedBaseUrl);
  assertTokenWasNotForwarded(capture, dev, root);
}, 60_000);

it("does not treat a pid that returns EPERM as a live loopback discovery service", async () => {
  expect(signalError(1)).toBe("EPERM");
  const root = makeRoot();
  const capture = await listen("127.0.0.1");
  writeEveryProxiedService(root, 1, capture.origin);
  const dev = await startDevServer(root);
  const fetchFn = await loadFetch(dev);
  await sendFetched(fetchFn, dev.recordedBaseUrl);
  expect(authorizations(capture.hits)).not.toContain(DEVELOPER_AUTHORIZATION);
  expect(inspectDiscovery(root, "platform-api-proxy").kind).not.toBe("ok");
  for (const route of PROXY_ROUTES) {
    expect(proxyTargetIsLocalOnly(dev.proxyTargets[route.prefix])).toBe(true);
  }
}, 60_000);

it("still forwards the developer bearer token to a loopback discovery URL for this process", async () => {
  const root = makeRoot();
  const capture = await listen("127.0.0.1");
  writeEveryProxiedService(root, process.pid, capture.origin);
  expect(inspectDiscovery(root, "platform-api-proxy").kind).toBe("ok");
  const dev = await startDevServer(root);
  const fetchFn = await loadFetch(dev);
  await sendFetched(fetchFn, dev.recordedBaseUrl);
  expect(authorizations(capture.hits)).toContain(DEVELOPER_AUTHORIZATION);
  expect(
    capture.hits.filter((hit) => hit.authorization === DEVELOPER_AUTHORIZATION),
  ).toHaveLength(PROXY_ROUTES.length);
  for (const route of PROXY_ROUTES) {
    const forwardedPath = route.rewrite ? "/health" : `${route.prefix}/health`;
    expect(capture.hits.some((hit) => hit.url === forwardedPath)).toBe(true);
  }
}, 60_000);

it("does not use a discovery URL read again after the URL was checked", async () => {
  const host = nonLoopbackIPv4();
  const root = makeRoot();
  const loopback = await listen("127.0.0.1");
  const attacker = await listen(host);
  writeEveryProxiedService(root, process.pid, loopback.origin);
  const original = fs.readFileSync;
  const reads = new Map<string, number>();
  const patched = ((
    file: fs.PathOrFileDescriptor,
    options?: { encoding?: BufferEncoding | null } | BufferEncoding | null,
  ) => {
    const name = typeof file === "string" ? file : "";
    if (name.endsWith("-discovery.json")) {
      const count = (reads.get(name) ?? 0) + 1;
      reads.set(name, count);
      const url = count === 1 ? loopback.origin : attacker.origin;
      return JSON.stringify({ pid: process.pid, url });
    }
    return original(file, options as never);
  }) as typeof fs.readFileSync;
  fs.readFileSync = patched;
  try {
    const dev = await startDevServer(root);
    const fetchFn = await loadFetch(dev);
    await sendFetched(fetchFn, dev.recordedBaseUrl);
    expect(authorizations(attacker.hits)).not.toContain(
      DEVELOPER_AUTHORIZATION,
    );
    for (const route of PROXY_ROUTES) {
      expect(proxyTargetIsLocalOnly(dev.proxyTargets[route.prefix])).toBe(true);
    }
  } finally {
    fs.readFileSync = original;
  }
}, 60_000);
