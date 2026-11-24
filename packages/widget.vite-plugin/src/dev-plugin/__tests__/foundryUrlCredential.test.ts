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

// @vitest-environment node

import { spawnSync } from "node:child_process";
import { mkdtemp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import http from "node:http";
import type {
  IncomingHttpHeaders,
  IncomingMessage,
  ServerResponse,
} from "node:http";
import https from "node:https";
import os from "node:os";
import path from "node:path";
import tls from "node:tls";

import type { ViteDevServer } from "vite";
import {
  afterAll,
  beforeAll,
  beforeEach,
  describe,
  expect,
  test,
} from "vitest";

import { FoundryWidgetDevPlugin } from "../FoundryWidgetDevPlugin.js";

/**
 * Out-of-project authorization for the Foundry origin used by widget dev setup.
 * The finish route may attach FOUNDRY_TOKEN only when every condition holds:
 *
 * - The stack URL is parsed as a URL, then both dev-mode calls use that same
 *   parsed value. A later read of foundry.config.json must not send the token
 *   to a different host.
 * - The scheme is https. An http origin is not authorized, including when this
 *   variable lists it.
 * - The parsed origin is equal to an origin listed here. The list is
 *   comma-separated and is not read from the project. Equivalent spellings of
 *   one origin (for example https://127.1 and https://127.0.0.1 with the same
 *   port) are the same origin.
 * - A URL that merely contains an authorized origin as a substring, userinfo,
 *   or fragment is not that origin.
 * - setWidgetSetManifest and enableDevMode both follow this rule. A cross-origin
 *   redirect must not receive the bearer token.
 */
const FOUNDRY_ORIGIN_ALLOWLIST = "OSDK_WIDGET_DEV_FOUNDRY_ORIGINS";

const TOKEN_PLACEHOLDER = "placeholder-foundry-token";

const MANIFEST_PATH = "/api/v2/widgets/devModeSettingsV2/setWidgetSetManifest";
const ENABLE_PATH = "/api/v2/widgets/devModeSettingsV2/enable";

interface RecordedRequest {
  method: string;
  url: string;
  headers: IncomingHttpHeaders;
  body: string;
}

interface RecordingServer {
  origin: string;
  port: number;
  requests: RecordedRequest[];
  close: () => Promise<void>;
  setResponder: (
    responder: (
      request: RecordedRequest,
      response: http.ServerResponse,
    ) => void,
  ) => void;
}

interface FinishBody {
  status: string;
  error?: string;
  redirectUrl?: string | null;
}

const WIDGET_CONFIG = {
  id: "exampleWidget",
  name: "Example",
  type: "workshop" as const,
  parameters: {},
  events: {},
};

describe("widget dev setup Foundry credential", () => {
  let projectParent: string;
  let previousToken: string | undefined;
  let previousAllowlist: string | undefined;
  let previousCwd: string;
  let previousCas: readonly string[];
  let allowed: RecordingServer;
  let attacker: RecordingServer;
  let plain: RecordingServer;

  beforeAll(async () => {
    previousToken = process.env.FOUNDRY_TOKEN;
    previousAllowlist = process.env[FOUNDRY_ORIGIN_ALLOWLIST];
    previousCwd = process.cwd();
    previousCas = tls.getCACertificates("default");
    process.env.FOUNDRY_TOKEN = TOKEN_PLACEHOLDER;

    projectParent = await mkdtemp(
      path.join(os.tmpdir(), "widget-dev-credential-"),
    );
    const certificate = await createCertificate(projectParent);
    tls.setDefaultCACertificates([...previousCas, certificate.caPem]);
    allowed = await listenHttps(certificate);
    attacker = await listenHttps(certificate);
    plain = await listenHttp();
  });

  beforeEach(() => {
    delete process.env.OSDK_WIDGET_DEV_FOUNDRY_ORIGINS;
    allowed.requests.length = 0;
    attacker.requests.length = 0;
    plain.requests.length = 0;
    allowed.setResponder(respondJson);
    attacker.setResponder(respondJson);
    plain.setResponder(respondJson);
  });

  afterAll(async () => {
    restoreToken(previousToken);
    restoreAllowlist(previousAllowlist);
    tls.setDefaultCACertificates([...previousCas]);
    process.chdir(previousCwd);
    await allowed.close();
    await attacker.close();
    await plain.close();
    await rm(projectParent, { recursive: true, force: true });
  });

  test("does not send the bearer token when the setup page polls finish before widgets are parsed", async () => {
    const project = await createProject(attacker.origin);
    const body = await finishSetup(project, { widgetsParsed: false });

    expect(body.status).toBe("pending");
    expect(destinationsCarryingToken(attacker.requests)).toEqual([]);
    expect(destinationsCarryingToken(allowed.requests)).toEqual([]);
  });

  test("does not send the bearer token to an https stack URL taken only from foundry.config.json", async () => {
    const project = await createProject(attacker.origin);
    const body = await finishSetup(project, { widgetsParsed: true });

    expect(body.status).not.toBe("pending");
    expectHarnessReachedPublish(body, attacker.requests);
    expect(destinationsCarryingToken(attacker.requests)).toEqual([]);
    expect(destinationsCarryingToken(allowed.requests)).toEqual([]);
  });

  test("does not send the bearer token when a different origin is authorized", async () => {
    authorize(allowed.origin);
    const project = await createProject(attacker.origin);
    const body = await finishSetup(project, { widgetsParsed: true });

    expect(body.status).not.toBe("pending");
    expectHarnessReachedPublish(body, attacker.requests);
    expect(destinationsCarryingToken(attacker.requests)).toEqual([]);
    expect(destinationsCarryingToken(allowed.requests)).toEqual([]);
  });

  test("does not send the bearer token to an http stack URL even when that origin is listed", async () => {
    authorize(plain.origin);
    const project = await createProject(plain.origin);
    const body = await finishSetup(project, { widgetsParsed: true });

    expect(body.status).not.toBe("pending");
    expectHarnessReachedPublish(body, plain.requests);
    expect(destinationsCarryingToken(plain.requests)).toEqual([]);
  });

  test("does not send the bearer token when the authorized origin only appears in the URL fragment", async () => {
    authorize(allowed.origin);
    const project = await createProject(`${attacker.origin}#${allowed.origin}`);
    const body = await finishSetup(project, { widgetsParsed: true });

    expect(body.status).not.toBe("pending");
    expectHarnessReachedPublish(body, attacker.requests);
    expect(destinationsCarryingToken(attacker.requests)).toEqual([]);
    expect(destinationsCarryingToken(allowed.requests)).toEqual([]);
  });

  test("does not send the bearer token when userinfo makes the URL start with an authorized origin", async () => {
    authorize(allowed.origin);
    const authorized = new URL(allowed.origin);
    const project = await createProject(
      `https://${authorized.host}@127.0.0.1:${attacker.port}/`,
    );
    const body = await finishSetup(project, { widgetsParsed: true });

    expect(body.status).not.toBe("pending");
    expectHarnessReachedPublish(body, [
      ...attacker.requests,
      ...allowed.requests,
    ]);
    expect(destinationsCarryingToken(attacker.requests)).toEqual([]);
    expect(destinationsCarryingToken(allowed.requests)).toEqual([]);
  });

  test("sends the bearer token only to the authorized https origin for both dev-mode calls", async () => {
    authorize(allowed.origin);
    const project = await createProject(allowed.origin);
    const body = await finishSetup(project, { widgetsParsed: true });

    expect(body.status).toBe("success");
    expect(pathsCarryingToken(allowed.requests)).toEqual([
      MANIFEST_PATH,
      ENABLE_PATH,
    ]);
    expect(hostsCarryingToken(allowed.requests)).toEqual([
      `127.0.0.1:${allowed.port}`,
      `127.0.0.1:${allowed.port}`,
    ]);
    expect(destinationsCarryingToken(attacker.requests)).toEqual([]);
  });

  test("treats an alternate spelling of the authorized origin as that same origin", async () => {
    authorize(allowed.origin);
    const project = await createProject(`https://127.1:${allowed.port}`);
    const body = await finishSetup(project, { widgetsParsed: true });

    expect(body.status).toBe("success");
    expect(pathsCarryingToken(allowed.requests)).toEqual([
      MANIFEST_PATH,
      ENABLE_PATH,
    ]);
    expect(destinationsCarryingToken(attacker.requests)).toEqual([]);
  });

  test("does not follow a cross-origin redirect with the bearer token", async () => {
    authorize(allowed.origin);
    allowed.setResponder((_request, response) => {
      response.writeHead(302, {
        location: `${attacker.origin}/collected`,
      });
      response.end();
    });
    const project = await createProject(allowed.origin);
    const body = await finishSetup(project, { widgetsParsed: true });

    expect(body.status).not.toBe("pending");
    expect(destinationsCarryingToken(attacker.requests)).toEqual([]);
  });

  test("does not send the bearer token to a stack URL read after the authorized URL was checked", async () => {
    authorize(allowed.origin);
    const project = await createProject(allowed.origin);
    let replaced = false;
    allowed.setResponder((request, response) => {
      if (!replaced && request.url.startsWith(MANIFEST_PATH)) {
        replaced = true;
        void writeFile(
          path.join(project, "foundry.config.json"),
          widgetConfig(attacker.origin),
        ).then(() => {
          respondJson(request, response);
        });
        return;
      }
      respondJson(request, response);
    });

    const body = await finishSetup(project, { widgetsParsed: true });

    expect(replaced).toBe(true);
    expect(body.status).not.toBe("pending");
    expect(destinationsCarryingToken(attacker.requests)).toEqual([]);
    expect(pathsCarryingToken(allowed.requests)).toEqual([
      MANIFEST_PATH,
      ENABLE_PATH,
    ]);
  });

  async function createProject(foundryUrl: string): Promise<string> {
    const project = await mkdtemp(path.join(projectParent, "project-"));
    await mkdir(path.join(project, "src"), { recursive: true });
    await writeFile(
      path.join(project, "package.json"),
      JSON.stringify({ name: "widget-fixture", version: "0.0.0" }),
    );
    await writeFile(
      path.join(project, "foundry.config.json"),
      widgetConfig(foundryUrl),
    );
    return project;
  }
});

function authorize(origin: string): void {
  process.env[FOUNDRY_ORIGIN_ALLOWLIST] = origin;
}

function restoreToken(previous: string | undefined): void {
  if (previous == null) {
    delete process.env.FOUNDRY_TOKEN;
  } else {
    process.env.FOUNDRY_TOKEN = previous;
  }
}

function restoreAllowlist(previous: string | undefined): void {
  if (previous == null) {
    delete process.env.OSDK_WIDGET_DEV_FOUNDRY_ORIGINS;
  } else {
    process.env.OSDK_WIDGET_DEV_FOUNDRY_ORIGINS = previous;
  }
}

function widgetConfig(foundryUrl: string): string {
  return JSON.stringify({
    foundryUrl,
    widgetSet: {
      rid: "ri.widgetregistry..widget-set.test",
      directory: "./dist",
    },
  });
}

function respondJson(
  _request: RecordedRequest,
  response: http.ServerResponse,
): void {
  response.writeHead(200, { "content-type": "application/json" });
  response.end("{}");
}

function carriesToken(request: RecordedRequest): boolean {
  const marker = process.env.FOUNDRY_TOKEN;
  if (marker == null || marker.length === 0) {
    throw new Error("FOUNDRY_TOKEN placeholder was not set");
  }
  if (request.body.includes(marker)) {
    return true;
  }
  return Object.values(request.headers).some((value) => {
    const entries = value == null ? [] : Array.isArray(value) ? value : [value];
    return entries.some((entry) => entry.includes(marker));
  });
}

function destinationsCarryingToken(requests: RecordedRequest[]): string[] {
  return requests
    .filter(carriesToken)
    .map((request) => `${request.headers.host ?? ""} ${request.url}`);
}

function pathsCarryingToken(requests: RecordedRequest[]): string[] {
  return requests
    .filter(carriesToken)
    .map((request) => request.url.split("?")[0] ?? request.url);
}

function hostsCarryingToken(requests: RecordedRequest[]): string[] {
  return requests
    .filter(carriesToken)
    .map((request) => String(request.headers.host));
}

function expectHarnessReachedPublish(
  body: FinishBody,
  requests: RecordedRequest[],
): void {
  if (body.status !== "error" || requests.length > 0) {
    return;
  }
  const errorText = body.error ?? "";
  if (
    /widget config|entrypoint|ssrLoadModule|package\.json|Cannot read properties/u.test(
      errorText,
    )
  ) {
    throw new Error(
      `finish route failed before the Foundry request: ${errorText.slice(0, 400)}`,
    );
  }
}

async function finishSetup(
  project: string,
  options: { widgetsParsed: boolean },
): Promise<FinishBody> {
  const previousCwd = process.cwd();
  process.chdir(project);
  try {
    const plugin = FoundryWidgetDevPlugin();
    const routes = new Map<
      string,
      (req: IncomingMessage, res: ServerResponse) => Promise<void> | void
    >();
    const server = {
      config: {
        mode: "development",
        base: "/",
        root: project,
        server: { https: false, port: 5173 },
        logger: {
          info() {},
          warn() {},
          error() {},
          warnOnce() {},
          hasWarnLogged() {
            return false;
          },
          clearScreen() {},
          hasErrorLogged() {
            return false;
          },
        },
      },
      middlewares: {
        use(
          route: string,
          handler: (
            req: IncomingMessage,
            res: ServerResponse,
          ) => Promise<void> | void,
        ) {
          routes.set(route, handler);
        },
      },
      printUrls() {},
      ssrLoadModule: () => Promise.resolve({ default: WIDGET_CONFIG }),
      transformIndexHtml: () => Promise.resolve(""),
    } as unknown as ViteDevServer;

    const { buildStart, resolveId, configureServer } = plugin;
    if (
      typeof buildStart !== "function" ||
      typeof resolveId !== "function" ||
      typeof configureServer !== "function"
    ) {
      throw new Error("widget dev plugin did not expose its server hooks");
    }

    const htmlEntrypoint = path.join(project, "index.html");
    // Vite root-absolute ids are joined with the project directory. See
    // FoundryWidgetDevPlugin.resolveId.
    const sourceEntrypoint = "/src/main.tsx";
    const configModule = "/src/widget.config.ts";
    await buildStart({ input: [htmlEntrypoint] });
    if (options.widgetsParsed) {
      await resolveId(sourceEntrypoint, htmlEntrypoint);
      await resolveId(configModule, path.join(project, "src", "main.tsx"));
    }
    await configureServer(server);

    const finish = routes.get("/.palantir/finish");
    if (finish == null) {
      throw new Error(
        `finish route was not registered (${[...routes.keys()].join(", ")})`,
      );
    }

    let body = "";
    const response = {
      statusCode: 200,
      setHeader() {},
      end(chunk?: string) {
        body = chunk ?? "";
      },
    };
    await finish(
      {
        url: "/?attempt=0",
        headers: { host: "127.0.0.1:5173" },
      } as IncomingMessage,
      response as unknown as ServerResponse,
    );
    return JSON.parse(body) as FinishBody;
  } finally {
    process.chdir(previousCwd);
  }
}

interface CertificateMaterial {
  key: Buffer;
  cert: Buffer;
  caPem: string;
}

async function createCertificate(
  directory: string,
): Promise<CertificateMaterial> {
  const caKey = path.join(directory, "ca.key");
  const caCert = path.join(directory, "ca.crt");
  const serverKey = path.join(directory, "server.key");
  const serverCsr = path.join(directory, "server.csr");
  const serverCert = path.join(directory, "server.crt");
  const caConfig = path.join(directory, "ca.cnf");
  const serverExt = path.join(directory, "server.ext");
  await writeFile(
    caConfig,
    [
      "[req]",
      "distinguished_name=req_dn",
      "x509_extensions=v3_ca",
      "prompt=no",
      "[req_dn]",
      "CN=Widget dev test CA",
      "[v3_ca]",
      "basicConstraints=critical,CA:true",
      "keyUsage=critical,keyCertSign,cRLSign",
      "subjectKeyIdentifier=hash",
      "",
    ].join("\n"),
  );
  await writeFile(
    serverExt,
    [
      "basicConstraints=CA:FALSE",
      "subjectAltName=IP:127.0.0.1",
      "extendedKeyUsage=serverAuth",
      "keyUsage=digitalSignature,keyEncipherment",
      "",
    ].join("\n"),
  );
  // cspell:disable openssl flag names
  runOpenSsl([
    "req",
    "-x509",
    "-newkey",
    "rsa:2048",
    "-keyout",
    caKey,
    "-out",
    caCert,
    "-days",
    "1",
    "-nodes",
    "-config",
    caConfig,
  ]);
  runOpenSsl([
    "req",
    "-newkey",
    "rsa:2048",
    "-keyout",
    serverKey,
    "-out",
    serverCsr,
    "-nodes",
    "-subj",
    "/CN=127.0.0.1",
  ]);
  runOpenSsl([
    "x509",
    "-req",
    "-in",
    serverCsr,
    "-CA",
    caCert,
    "-CAkey",
    caKey,
    "-CAcreateserial",
    "-out",
    serverCert,
    "-days",
    "1",
    "-extfile",
    serverExt,
  ]);
  // cspell:enable
  return {
    key: await readFile(serverKey),
    cert: await readFile(serverCert),
    caPem: await readFile(caCert, "utf8"),
  };
}

function runOpenSsl(args: string[]): void {
  const result = spawnSync("openssl", args, { encoding: "utf8" });
  if (result.status !== 0) {
    throw new Error(`openssl ${args[0]} failed: ${result.stderr}`);
  }
}

function listenHttps(
  certificate: CertificateMaterial,
): Promise<RecordingServer> {
  return listen(
    (handler) =>
      https.createServer(
        { key: certificate.key, cert: certificate.cert },
        handler,
      ),
    "https",
  );
}

function listenHttp(): Promise<RecordingServer> {
  return listen((handler) => http.createServer(handler), "http");
}

async function listen(
  create: (
    handler: (req: IncomingMessage, res: http.ServerResponse) => void,
  ) => http.Server | https.Server,
  protocol: "http" | "https",
): Promise<RecordingServer> {
  const requests: RecordedRequest[] = [];
  let responder = respondJson;
  const server = create((request, response) => {
    const chunks: Buffer[] = [];
    request.on("data", (chunk: Buffer) => {
      chunks.push(chunk);
    });
    request.on("end", () => {
      const recorded = {
        method: request.method ?? "",
        url: request.url ?? "",
        headers: request.headers,
        body: Buffer.concat(chunks).toString("utf8"),
      };
      requests.push(recorded);
      responder(recorded, response);
    });
  });
  await new Promise<void>((resolve) => {
    server.listen(0, "127.0.0.1", () => {
      resolve();
    });
  });
  const address = server.address();
  if (address == null || typeof address === "string") {
    throw new Error("recording server did not bind a TCP port");
  }
  return {
    origin: `${protocol}://127.0.0.1:${address.port}`,
    port: address.port,
    requests,
    setResponder(next) {
      responder = next;
    },
    close() {
      return new Promise((resolve, reject) => {
        server.close((error) => {
          if (error != null) {
            reject(error);
          } else {
            resolve();
          }
        });
      });
    },
  };
}
