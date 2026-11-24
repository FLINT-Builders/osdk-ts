// @vitest-environment node
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

import { mkdir, mkdtemp, rm, writeFile } from "node:fs/promises";
import {
  createServer as createHttpServer,
  type IncomingMessage,
  request as httpRequest,
} from "node:http";
import type { AddressInfo } from "node:net";
import { tmpdir } from "node:os";
import path from "node:path";

import { createServer, type ViteDevServer } from "vite";
import { afterAll, beforeAll, describe, expect, test, vi } from "vitest";

import { FoundryWidgetDevPlugin } from "../FoundryWidgetDevPlugin.js";

/**
 * The finish route may publish developer mode only for a POST whose Origin
 * is this dev server and whose `x-osdk-finish-secret` header equals the
 * secret the server embeds in the setup page as
 * `<meta name="osdk-finish-secret" content="...">`.
 * Every other request must be rejected before Foundry is called.
 */

const PLACEHOLDER_TOKEN = "placeholder-foundry-token";
const FINISH_SECRET_HEADER = "x-osdk-finish-secret";
const FINISH_SECRET_META = "osdk-finish-secret";
const WIDGET_SET_RID = "ri.widgetregistry..widget-set.finish-auth-test";
const WIDGET_ID = "widgetOne";

const SET_MANIFEST_PATH =
  "/api/v2/widgets/devModeSettingsV2/setWidgetSetManifest?preview=true";
const ENABLE_PATH = "/api/v2/widgets/devModeSettingsV2/enable?preview=true";

interface RecordedFoundryCall {
  method: string | undefined;
  url: string | undefined;
  authorization: string | undefined;
  body: string;
}

interface HttpResult {
  statusCode: number;
  body: string;
}

describe("finish route authentication", () => {
  let projectDir: string;
  let previousCwd: string;
  let previousToken: string | undefined;
  let previousVitest: string | undefined;
  let devServer: ViteDevServer;
  let foundryServer: ReturnType<typeof createHttpServer>;
  let origin: string;
  let hostHeader: string;
  const foundryCalls: RecordedFoundryCall[] = [];

  beforeAll(async () => {
    vi.useRealTimers();
    previousCwd = process.cwd();
    previousToken = process.env.FOUNDRY_TOKEN;
    previousVitest = process.env.VITEST;
    // The dev plugin refuses to install itself while Vitest is set. The
    // product path is `vite` serve, which does not set that variable.
    delete process.env.VITEST;
    process.env.FOUNDRY_TOKEN = PLACEHOLDER_TOKEN;

    foundryServer = createHttpServer((req, res) => {
      const chunks: Buffer[] = [];
      req.on("data", (chunk: Buffer) => {
        chunks.push(chunk);
      });
      req.on("end", () => {
        foundryCalls.push({
          method: req.method,
          url: req.url,
          authorization: req.headers.authorization,
          body: Buffer.concat(chunks).toString("utf8"),
        });
        res.statusCode = 200;
        res.setHeader("content-type", "application/json");
        res.end("{}");
      });
    });
    await listen(foundryServer, "127.0.0.1");
    const foundryAddress = foundryServer.address() as AddressInfo;

    projectDir = await mkdtemp(path.join(tmpdir(), "widget-finish-auth-"));
    await mkdir(path.join(projectDir, "src"), { recursive: true });
    await writeFile(
      path.join(projectDir, "package.json"),
      JSON.stringify({
        name: "widget-finish-auth-fixture",
        private: true,
        version: "0.0.0",
      }),
    );
    await writeFile(
      path.join(projectDir, "foundry.config.json"),
      JSON.stringify({
        foundryUrl: `http://127.0.0.1:${foundryAddress.port}/`,
        widgetSet: {
          rid: WIDGET_SET_RID,
          directory: ".",
        },
      }),
    );
    await writeFile(
      path.join(projectDir, "index.html"),
      `<!doctype html>
<html>
  <body>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
`,
    );
    await writeFile(
      path.join(projectDir, "src", "main.tsx"),
      `import "./main.config.js";\n`,
    );
    await writeFile(
      path.join(projectDir, "src", "main.config.ts"),
      `export default {
  id: "${WIDGET_ID}",
  name: "Widget One",
  description: "First widget",
  type: "workshop",
  parameters: {
    headerText: {
      displayName: "Widget title",
      type: "string",
    },
  },
  events: {},
};
`,
    );

    process.chdir(projectDir);
    devServer = await createServer({
      root: projectDir,
      configFile: false,
      logLevel: "silent",
      // Same server options the widget template ships, minus a fixed port.
      plugins: [FoundryWidgetDevPlugin()],
      server: {
        cors: true,
        strictPort: true,
        port: 0,
        watch: null,
      },
      build: {
        rollupOptions: {
          input: ["./index.html"],
        },
      },
    });
    await devServer.listen();
    const address = devServer.httpServer?.address();
    if (address == null || typeof address === "string") {
      throw new Error("Dev server did not bind a TCP port");
    }
    hostHeader = `localhost:${address.port}`;
    origin = `http://${hostHeader}`;
    await loadWidgetModules(origin);
  }, 60_000);

  afterAll(async () => {
    await devServer?.close();
    if (foundryServer?.listening) {
      await new Promise<void>((resolve, reject) => {
        foundryServer.close((error) => {
          if (error != null) {
            reject(error);
          } else {
            resolve();
          }
        });
      });
    }
    if (projectDir != null) {
      await rm(projectDir, { recursive: true, force: true });
    }
    if (previousCwd != null) {
      process.chdir(previousCwd);
    }
    if (previousToken == null) {
      delete process.env.FOUNDRY_TOKEN;
    } else {
      process.env.FOUNDRY_TOKEN = previousToken;
    }
    if (previousVitest == null) {
      delete process.env.VITEST;
    } else {
      process.env.VITEST = previousVitest;
    }
  });

  test("does not publish developer mode for an unauthenticated request", async () => {
    const cases: Array<{
      name: string;
      method: string;
      path: string;
      headers: Record<string, string>;
      body?: string;
    }> = [
      {
        name: "GET with no origin, as a local client",
        method: "GET",
        path: "/.palantir/finish?attempt=0",
        headers: {},
      },
      {
        name: "GET from another site",
        method: "GET",
        path: "/.palantir/finish?attempt=0",
        headers: { origin: "https://attacker.example" },
      },
      {
        name: "cross-site form POST",
        method: "POST",
        path: "/.palantir/finish?attempt=0",
        headers: {
          origin: "https://attacker.example",
          "content-type": "application/x-www-form-urlencoded",
        },
        body: "attempt=0",
      },
      {
        name: "cross-site text POST",
        method: "POST",
        path: "/.palantir/finish",
        headers: {
          origin: "https://attacker.example",
          "content-type": "text/plain",
        },
        body: "{}",
      },
      {
        name: "POST with the dev server origin spoofed and no secret",
        method: "POST",
        path: "/.palantir/finish?attempt=0",
        headers: { origin },
      },
      {
        name: "POST with a wrong secret",
        method: "POST",
        path: "/.palantir/finish?attempt=0",
        headers: {
          origin,
          [FINISH_SECRET_HEADER]: "not-the-finish-secret",
        },
      },
      {
        name: "PUT",
        method: "PUT",
        path: "/.palantir/finish?attempt=0",
        headers: { origin: "https://attacker.example" },
      },
      {
        name: "PATCH",
        method: "PATCH",
        path: "/.palantir/finish?attempt=0",
        headers: {},
      },
      {
        name: "DELETE",
        method: "DELETE",
        path: "/.palantir/finish?attempt=0",
        headers: {},
      },
      {
        name: "HEAD",
        method: "HEAD",
        path: "/.palantir/finish?attempt=0",
        headers: {},
      },
      {
        name: "OPTIONS preflight",
        method: "OPTIONS",
        path: "/.palantir/finish?attempt=0",
        headers: {
          origin: "https://attacker.example",
          "access-control-request-method": "POST",
        },
      },
      {
        name: "GET under a nested finish path",
        method: "GET",
        path: "/.palantir/finish/extra?attempt=0",
        headers: { origin: "https://attacker.example" },
      },
    ];

    const failures: string[] = [];
    for (const attack of cases) {
      foundryCalls.length = 0;
      const response = await send(origin, {
        method: attack.method,
        path: attack.path,
        hostHeader,
        headers: attack.headers,
        body: attack.body,
      });
      if (foundryCalls.length !== 0) {
        failures.push(
          `${attack.name} published developer mode (${response.statusCode}, ${foundryCalls.length} Foundry calls)`,
        );
        continue;
      }
      if (
        attack.method !== "OPTIONS" &&
        response.statusCode !== 401 &&
        response.statusCode !== 403
      ) {
        failures.push(
          `${attack.name} returned ${response.statusCode} ${response.body}`,
        );
      }
    }
    expect(failures).toEqual([]);
  }, 30_000);

  test("publishes developer mode only for the setup page's same-origin POST", async () => {
    const setup = await send(origin, {
      method: "GET",
      path: "/.palantir/setup/",
      hostHeader,
      headers: { origin },
    });
    const secret = readFinishSecret(setup.body);
    expect(secret.length).toBeGreaterThanOrEqual(32);
    expect(secret).toMatch(/^[A-Za-z0-9_-]+$/u);

    foundryCalls.length = 0;
    const getWithSecret = await send(origin, {
      method: "GET",
      path: "/.palantir/finish?attempt=0",
      hostHeader,
      headers: { origin, [FINISH_SECRET_HEADER]: secret },
    });
    expect(foundryCalls, getWithSecret.body).toEqual([]);
    expect([401, 403]).toContain(getWithSecret.statusCode);

    foundryCalls.length = 0;
    const crossSite = await send(origin, {
      method: "POST",
      path: "/.palantir/finish?attempt=0",
      hostHeader,
      headers: {
        origin: "https://attacker.example",
        [FINISH_SECRET_HEADER]: secret,
      },
    });
    expect(foundryCalls, crossSite.body).toEqual([]);
    expect([401, 403]).toContain(crossSite.statusCode);

    foundryCalls.length = 0;
    const authorized = await send(origin, {
      method: "POST",
      path: "/.palantir/finish?attempt=0",
      hostHeader,
      headers: {
        origin,
        [FINISH_SECRET_HEADER]: secret,
        "content-type": "application/json",
      },
      body: "{}",
    });
    expect(authorized.statusCode).toBe(200);
    expect(foundryCalls.map((call) => call.url)).toEqual([
      SET_MANIFEST_PATH,
      ENABLE_PATH,
    ]);
    expect(foundryCalls.every((call) => call.method === "POST")).toBe(true);
    expect(
      foundryCalls.every(
        (call) => call.authorization === `Bearer ${PLACEHOLDER_TOKEN}`,
      ),
    ).toBe(true);
    const manifestCall = foundryCalls[0];
    if (manifestCall == null) {
      throw new Error("setWidgetSetManifest was not called");
    }
    const manifestBody = JSON.parse(manifestCall.body) as {
      widgetSetRid?: string;
      manifest?: { devSettings?: { widgets?: Record<string, unknown> } };
    };
    expect(manifestBody.widgetSetRid).toBe(WIDGET_SET_RID);
    expect(
      manifestBody.manifest?.devSettings?.widgets?.[WIDGET_ID],
    ).toBeDefined();
  }, 30_000);
});

function readFinishSecret(html: string): string {
  const pattern = new RegExp(
    `<meta\\s+[^>]*name=["']${FINISH_SECRET_META}["'][^>]*>`,
    "iu",
  );
  const tag = html.match(pattern)?.[0];
  const secret = tag?.match(/\bcontent=["']([^"']+)["']/iu)?.[1];
  if (secret == null || secret.length === 0) {
    throw new Error(
      `Setup page did not embed a ${FINISH_SECRET_META} meta tag`,
    );
  }
  return secret;
}

async function loadWidgetModules(serverOrigin: string): Promise<void> {
  const seen = new Set<string>();

  const visit = async (urlPath: string): Promise<void> => {
    if (seen.has(urlPath)) {
      return;
    }
    seen.add(urlPath);
    const response = await fetch(new URL(urlPath, serverOrigin));
    if (!response.ok) {
      throw new Error(`Widget module ${urlPath} returned ${response.status}`);
    }
    const text = await response.text();
    const specs = new Set<string>();
    for (const match of text.matchAll(
      /(?:import|export)\s+(?:[^'"\n]*?\s+from\s+)?["']([^"']+)["']/gu,
    )) {
      const spec = match[1];
      if (spec != null) {
        specs.add(spec);
      }
    }
    for (const match of text.matchAll(
      /<script\b[^>]*\bsrc=["']([^"']+)["']/gu,
    )) {
      const spec = match[1];
      if (spec != null) {
        specs.add(spec);
      }
    }
    for (const spec of specs) {
      if (
        spec.startsWith("http:") ||
        spec.startsWith("https:") ||
        spec.startsWith("data:")
      ) {
        continue;
      }
      const nextPath = new URL(spec, new URL(urlPath, serverOrigin)).pathname;
      if (nextPath.startsWith("/src/") || nextPath.endsWith(".html")) {
        await visit(`${nextPath}`);
      }
    }
  };

  await visit("/");
}

function send(
  serverOrigin: string,
  request: {
    method: string;
    path: string;
    hostHeader: string;
    headers: Record<string, string>;
    body?: string;
  },
): Promise<HttpResult> {
  const url = new URL(request.path, serverOrigin);
  return new Promise((resolve, reject) => {
    const req = httpRequest(url, {
      method: request.method,
      headers: {
        host: request.hostHeader,
        ...request.headers,
      },
    });
    req.setTimeout(15_000, () => {
      req.destroy(
        new Error(`Timed out waiting for ${request.method} ${request.path}`),
      );
    });
    req.on("error", reject);
    req.on("response", (res: IncomingMessage) => {
      const chunks: Buffer[] = [];
      res.on("data", (chunk: Buffer) => {
        chunks.push(chunk);
      });
      res.on("end", () => {
        resolve({
          statusCode: res.statusCode ?? 0,
          body: Buffer.concat(chunks).toString("utf8"),
        });
      });
    });
    if (request.body != null) {
      req.end(request.body);
    } else {
      req.end();
    }
  });
}

function listen(
  server: ReturnType<typeof createHttpServer>,
  host: string,
): Promise<void> {
  return new Promise((resolve) => {
    server.listen(0, host, () => {
      resolve();
    });
  });
}
