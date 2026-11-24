// Spec for the ws fragment-flood DoS locked by this repo.
// These tests fail while pnpm-lock.yaml pins ws 6.2.3 (dev-middleware) and
// ws 7.5.10 (metro). They pass once those copies are ws 6.2.4 / 7.5.11 or
// newer, which cap buffered fragments and drop the peer.
//
// Run: node --test security/ws-fragment-exhaustion.test.mjs

import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import http from "node:http";
import { createRequire } from "node:module";
import net from "node:net";
import os from "node:os";
import path from "node:path";
import { test } from "node:test";
import { fileURLToPath } from "node:url";
import { parse as parseUrl } from "node:url";

const repoRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
);

// Defaults added by the ws 6.2.4 / 7.5.11 / 8.21.0 fix.
const MAX_FRAGMENTS = 128 * 1024;
const OPEN = 1;

const lockText = readFileSync(path.join(repoRoot, "pnpm-lock.yaml"), "utf8");
const devMiddlewareVersion = dependencyVersion(
  lockText,
  "@expo/cli@0.22.26",
  "@react-native/dev-middleware",
);
const devMiddlewareWs = dependencyVersion(
  lockText,
  `@react-native/dev-middleware@${devMiddlewareVersion}`,
  "ws",
);
const metroWs = dependencyVersion(lockText, "metro@0.81.0", "ws");

const middlewareRoot = await installLocked(
  "dev-middleware",
  {
    name: "@react-native/dev-middleware",
    version: devMiddlewareVersion,
  },
  devMiddlewareWs,
);
const metroRoot = await installLocked(
  "metro",
  { name: "metro", version: "0.81.0" },
  metroWs,
);

test(
  "a short fragmented text message is delivered",
  { timeout: 60_000 },
  async () => {
    const harness = await startExpoDevServer();
    try {
      assertUnspecifiedBind(harness.server);
      const host = peerHost();
      const { port } = harness.server.address();
      const socket = await handshake(
        host,
        port,
        "/inspector/device?device=short",
      );
      const received = [];
      const ws = socketFor(harness, "/inspector/device");
      ws.on("message", (data) => {
        received.push(typeof data === "string" ? data : data.toString());
      });
      socket.write(tinyFragments(8, { finLast: true }));
      await waitUntil(() => received.length > 0, 2_000);
      assert.deepEqual(received, ["AAAAAAAA"]);
      assert.equal(ws.readyState, OPEN);
      socket.destroy();
    } finally {
      await harness.close();
    }
  },
);

test(
  "inspector device websocket drops a tiny-fragment flood from another host",
  { timeout: 60_000 },
  async () => {
    const harness = await startExpoDevServer();
    try {
      await assertFloodRejected(harness, "/inspector/device?device=flood");
    } finally {
      await harness.close();
    }
  },
);

test(
  "inspector debug websocket drops a tiny-fragment flood from another host",
  { timeout: 60_000 },
  async () => {
    const harness = await startExpoDevServer();
    try {
      assertUnspecifiedBind(harness.server);
      const host = peerHost();
      const { port } = harness.server.address();
      const device = await handshake(
        host,
        port,
        "/inspector/device?device=attacker",
      );
      try {
        await assertFloodRejected(
          harness,
          "/inspector/debug?device=attacker&page=-1",
        );
      } finally {
        device.destroy();
      }
    } finally {
      await harness.close();
    }
  },
);

test(
  "metro hot websocket drops a tiny-fragment flood from another host",
  { timeout: 60_000 },
  async () => {
    const harness = await startExpoDevServer();
    try {
      await assertFloodRejected(harness, "/hot");
    } finally {
      await harness.close();
    }
  },
);

async function assertFloodRejected(harness, requestPath) {
  assertUnspecifiedBind(harness.server);
  const host = peerHost();
  const { port } = harness.server.address();
  const sent = MAX_FRAGMENTS + 1;
  const socket = await handshake(host, port, requestPath);
  const pathname = parseUrl(requestPath).pathname;
  const ws = socketFor(harness, pathname);
  socket.write(tinyFragments(sent));
  const clientClosed = waitForClientClose(socket);
  await waitUntil(
    () =>
      ws._receiver._fragments.length >= sent
      || ws.readyState !== OPEN
      || socket.destroyed,
    8_000,
  );
  // Give the fixed receiver one turn to destroy the socket after the cap.
  await new Promise((resolve) => setTimeout(resolve, 100));
  const fragments = ws._receiver._fragments.length;
  const terminated = ws.readyState !== OPEN || socket.destroyed;
  const loadedWs = pathname === "/hot" ? metroWs : devMiddlewareWs;
  assert.ok(
    fragments > 1_000,
    `${pathname} buffered ${fragments} fragments from ${host}; the flood did not reach the receiver`,
  );
  assert.ok(
    terminated && fragments <= MAX_FRAGMENTS,
    `${pathname} on ${host}:${port} kept ${fragments} one-byte fragments `
      + `(readyState ${ws.readyState}, ws ${loadedWs}). `
      + `The peer must be dropped before more than ${MAX_FRAGMENTS} fragments are held.`,
  );
  await Promise.race([
    clientClosed,
    new Promise((resolve) => setTimeout(resolve, 1_000)),
  ]);
  socket.destroy();
}

function startExpoDevServer() {
  const requireMw = createRequire(path.join(middlewareRoot, "package.json"));
  const requireMetro = createRequire(path.join(metroRoot, "package.json"));
  const { createDevMiddleware } = requireMw("@react-native/dev-middleware");
  const createWebsocketServer = requireMetro(
    "metro/src/lib/createWebsocketServer.js",
  );
  const HmrServer = requireMetro("metro/src/HmrServer.js");
  const { websocketEndpoints } = createDevMiddleware({
    projectRoot: repoRoot,
    serverBaseUrl: "http://127.0.0.1:1",
  });
  // Same HMR endpoint expo's runServer-fork mounts at "/hot".
  websocketEndpoints["/hot"] = createWebsocketServer({
    websocketServer: new HmrServer(null, () => 1, {
      server: {
        rewriteRequestUrl: (url) => url,
        forwardClientLogs: false,
      },
      reporter: { update() {} },
    }),
  });
  const opened = [];
  const server = http.createServer();
  // Same upgrade routing as @expo/cli runServer-fork: no host check, no auth.
  server.on("upgrade", (request, socket, head) => {
    const { pathname } = parseUrl(request.url);
    if (pathname != null && websocketEndpoints[pathname]) {
      websocketEndpoints[pathname].handleUpgrade(
        request,
        socket,
        head,
        (ws) => {
          // The fixed library emits "error" when the cap trips. The device
          // and debug servers do not listen for it; swallow it here so the
          // assertion can read the receiver after the peer is dropped.
          ws.on("error", () => {});
          opened.push({ pathname, ws });
          websocketEndpoints[pathname].emit("connection", ws, request);
        },
      );
    } else {
      socket.destroy();
    }
  });
  return new Promise((resolve, reject) => {
    server.once("error", reject);
    // @expo/cli calls listen(port, host) with host omitted (undefined), which
    // binds the unspecified address.
    server.listen(0, undefined, () => {
      resolve({
        server,
        opened,
        close: () =>
          new Promise((done) => {
            for (const endpoint of Object.values(websocketEndpoints)) {
              endpoint.close();
            }
            server.close(() => done());
          }),
      });
    });
  });
}

function socketFor(harness, pathname) {
  const row = harness.opened.findLast((entry) => entry.pathname === pathname);
  assert.ok(row, `no websocket accepted for ${pathname}`);
  return row.ws;
}

function assertUnspecifiedBind(server) {
  const address = server.address();
  assert.ok(
    address.address === "::" || address.address === "0.0.0.0",
    `dev server bound to ${address.address}, which is not reachable from other hosts`,
  );
}

function peerHost() {
  for (const entries of Object.values(os.networkInterfaces())) {
    for (const entry of entries ?? []) {
      if (entry.family === "IPv4" && !entry.internal) return entry.address;
    }
  }
  return "127.0.0.1";
}

function handshake(host, port, requestPath) {
  return new Promise((resolve, reject) => {
    const socket = net.connect({ host, port });
    let header = Buffer.alloc(0);
    const timer = setTimeout(() => {
      socket.destroy();
      reject(new Error(`handshake to ${host}:${port}${requestPath} timed out`));
    }, 5_000);
    socket.once("error", (error) => {
      clearTimeout(timer);
      reject(error);
    });
    socket.on("data", function onData(chunk) {
      header = Buffer.concat([header, chunk]);
      const end = header.indexOf("\r\n\r\n");
      if (end === -1) return;
      socket.off("data", onData);
      clearTimeout(timer);
      const status =
        header.subarray(0, end).toString("latin1").split("\r\n")[0];
      if (!status.startsWith("HTTP/1.1 101")) {
        socket.destroy();
        reject(new Error(`${host}:${port}${requestPath} responded ${status}`));
        return;
      }
      resolve(socket);
    });
    socket.once("connect", () => {
      socket.write(
        `GET ${requestPath} HTTP/1.1\r\n`
          + `Host: ${host}:${port}\r\n`
          + "Upgrade: websocket\r\n"
          + "Connection: Upgrade\r\n"
          + "Sec-WebSocket-Key: dGhlIHNhbXBsZSBub25jZQ==\r\n"
          + "Sec-WebSocket-Version: 13\r\n\r\n",
      );
    });
  });
}

function waitForClientClose(socket) {
  if (socket.destroyed) return Promise.resolve();
  return new Promise((resolve) => {
    socket.once("close", () => resolve());
    socket.once("error", () => resolve());
  });
}

function tinyFragments(count, { finLast = false } = {}) {
  const buf = Buffer.allocUnsafe(count * 7);
  for (let i = 0; i < count; i++) {
    const offset = i * 7;
    const fin = finLast && i === count - 1 ? 0x80 : 0x00;
    buf[offset] = fin | (i === 0 ? 0x01 : 0x00);
    buf[offset + 1] = 0x81;
    buf.writeUInt32BE(0, offset + 2);
    buf[offset + 6] = 0x41;
  }
  return buf;
}

async function waitUntil(predicate, timeoutMs) {
  const start = Date.now();
  while (!predicate()) {
    if (Date.now() - start > timeoutMs) return;
    await new Promise((resolve) => setTimeout(resolve, 15));
  }
}

async function installLocked(label, dependency, wsVersion) {
  const dir = path.join(
    os.tmpdir(),
    "osdk-ws-fragment",
    `${label}-${dependency.version}-ws-${wsVersion}`,
  );
  const manifest = {
    private: true,
    dependencies: { [dependency.name]: dependency.version },
    overrides: { ws: wsVersion },
  };
  const manifestPath = path.join(dir, "package.json");
  const serialized = `${JSON.stringify(manifest, null, 2)}\n`;
  let installed = false;
  try {
    installed = readFileSync(manifestPath, "utf8") === serialized;
  } catch {
    installed = false;
  }
  if (!installed) {
    mkdirSync(dir, { recursive: true });
    writeFileSync(manifestPath, serialized);
    execFileSync(
      "npm",
      ["install", "--ignore-scripts", "--no-audit", "--no-fund"],
      { cwd: dir, stdio: "inherit" },
    );
  }
  // createRequire resolves from the dependency package, which is the copy
  // that package loads.
  const requireDep = createRequire(
    path.join(dir, "node_modules", dependency.name, "package.json"),
  );
  const nestedVersion = requireDep("ws/package.json").version;
  assert.equal(
    nestedVersion,
    wsVersion,
    `${dependency.name} loaded ws ${nestedVersion}, not the locked ${wsVersion}`,
  );
  return dir;
}

function dependencyVersion(text, packageKey, dependencyName) {
  const lines = text.split("\n");
  let inBlock = false;
  let inDependencies = false;
  for (const line of lines) {
    if (!inBlock) {
      if (isPackageHeader(line, packageKey)) inBlock = true;
      continue;
    }
    if (line.startsWith("  ") && !line.startsWith("   ")) {
      inBlock = false;
      inDependencies = false;
      if (isPackageHeader(line, packageKey)) inBlock = true;
      continue;
    }
    if (line === "    dependencies:") {
      inDependencies = true;
      continue;
    }
    if (inDependencies && /^    \S/.test(line)) inDependencies = false;
    if (!inDependencies) continue;
    const match = line.match(/^      ['"]?([^'":]+)['"]?: (.+)$/);
    if (match && match[1] === dependencyName) {
      return match[2].replaceAll(/['"]/g, "");
    }
  }
  throw new Error(`lockfile has no ${dependencyName} under ${packageKey}`);
}

function isPackageHeader(line, packageKey) {
  if (!line.startsWith("  ") || line.startsWith("   ")) return false;
  return (
    line === `  ${packageKey}:`
    || line.startsWith(`  '${packageKey}`)
    || line.startsWith(`  "${packageKey}`)
    || line.startsWith(`  ${packageKey}(`)
  );
}
