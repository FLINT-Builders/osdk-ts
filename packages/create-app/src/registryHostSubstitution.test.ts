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

import { execFileSync, spawn } from "node:child_process";
// cspell:ignore userconfig globalconfig keyout addext packument
import { createHash } from "node:crypto";
import fs from "node:fs";
import https from "node:https";
import type { Server } from "node:https";
import os from "node:os";
import path from "node:path";

import { dirSync } from "tmp";
import {
  afterAll,
  afterEach,
  beforeAll,
  beforeEach,
  expect,
  test,
  vi,
} from "vitest";

import { cli } from "./cli.js";
import { consola } from "./consola.js";
import { TEMPLATES } from "./generatedNoCheck/templates.js";
import type { Template } from "./templates.js";

const FOUNDRY_URL = "https://example.palantirfoundry.com";
const OSDK_PACKAGE = "@victim/sdk";
const OSDK_SCOPE = "@victim";
const APPLICATION = "ri.third-party-applications.main.application.fake";
const ONTOLOGY = "ri.ontology.main.ontology.fake";
const CLIENT_ID = "123";
const REPOSITORY_PATH =
  "/artifacts/api/repositories/ri.artifacts.main.repository.x/contents/release/npm";
const PLACEHOLDER = "placeholder-foundry-token";
const EXACT_VERSION =
  /^\d+\.\d+\.\d+(?:-[0-9A-Za-z.-]+)?(?:\+[0-9A-Za-z.-]+)?$/u;

const registryState: { requests: string[]; sawCredential: boolean } = {
  requests: [],
  sawCredential: false,
};

let registry: { origin: string; close: () => Promise<void> };
let workRoot: string;
let caPath: string;
let tarball: Buffer;
let projectRoot = "";
let boxMessages: string[] = [];

beforeAll(async () => {
  workRoot = fs.mkdtempSync(path.join(os.tmpdir(), "osdk-registry-host-"));
  const cert = writeCertificate(workRoot);
  caPath = cert.certPath;
  tarball = packLifecyclePackage(workRoot);
  registry = await startRegistry(cert, tarball);
});

afterAll(async () => {
  await registry?.close();
  fs.rmSync(workRoot, { recursive: true, force: true });
});

beforeEach(() => {
  registryState.requests = [];
  registryState.sawCredential = false;
  boxMessages = [];
  const tmpDir = dirSync({ unsafeCleanup: true });
  projectRoot = tmpDir.name;
  vi.spyOn(process, "cwd").mockReturnValue(projectRoot);
  vi.spyOn(consola, "prompt").mockImplementation(() => {
    throw new Error(
      "registry validation fell through to an interactive prompt",
    );
  });
  vi.spyOn(consola, "box").mockImplementation((message: unknown) => {
    boxMessages.push(messageText(message));
  });
  return () => {
    vi.restoreAllMocks();
    tmpDir.removeCallback();
  };
});

afterEach(() => {
  vi.restoreAllMocks();
});

test("refuses a foreign registry host before creating a project, and npm install does not fetch it", async () => {
  const outcome = await scaffoldAndMaybeInstall({
    project: "victim-app",
    template: templateById("template-react"),
    sdkVersion: "2.x",
    foundryUrl: FOUNDRY_URL,
    osdkRegistryUrl: artifactsUrl(registry.origin),
    followInstall: true,
  });
  expect(outcome).toEqual(refusedOutcome());
}, 120_000);

test("refuses a userinfo registry URL whose parsed host is not the Foundry host", async () => {
  const outcome = await scaffoldAndMaybeInstall({
    project: "victim-userinfo",
    template: templateById("template-react"),
    sdkVersion: "2.x",
    foundryUrl: FOUNDRY_URL,
    osdkRegistryUrl: artifactsUrl(
      `https://example.palantirfoundry.com@${registry.origin.slice("https://".length)}`,
    ),
    followInstall: true,
  });
  expect(outcome).toEqual(refusedOutcome());
}, 120_000);

test("refuses registry hosts that only look related to the Foundry host", async () => {
  const cases = [
    {
      project: "victim-suffix",
      foundryUrl: FOUNDRY_URL,
      osdkRegistryUrl: artifactsUrl(
        "https://example.palantirfoundry.com.attacker.example",
      ),
    },
    {
      project: "victim-encoded-dot",
      foundryUrl: FOUNDRY_URL,
      osdkRegistryUrl: artifactsUrl(
        "https://example.palantirfoundry.com%2eattacker.example",
      ),
    },
    {
      project: "victim-subdomain",
      foundryUrl: "https://palantirfoundry.com",
      osdkRegistryUrl: artifactsUrl("https://evil.palantirfoundry.com"),
    },
  ];
  const failures: string[] = [];
  for (const spec of cases) {
    const outcome = await scaffoldAndMaybeInstall({
      ...spec,
      template: templateById("template-react"),
      sdkVersion: "2.x",
      followInstall: false,
    });
    if (JSON.stringify(outcome) !== JSON.stringify(refusedOutcome())) {
      failures.push(`${spec.project} ${JSON.stringify(outcome)}`);
    }
  }
  expect(failures).toEqual([]);
});

test("refuses a foreign registry host for every create-app template before writing files", async () => {
  const failures: string[] = [];
  for (const template of TEMPLATES) {
    for (const sdkVersion of Object.keys(template.files)) {
      const project = `victim-${template.id}-${sdkVersion}`.replaceAll(
        /[^a-zA-Z0-9-_]/gu,
        "-",
      );
      const outcome = await scaffoldAndMaybeInstall({
        project,
        template,
        sdkVersion,
        foundryUrl: FOUNDRY_URL,
        osdkRegistryUrl: artifactsUrl("https://attacker.example"),
        followInstall: false,
      });
      if (JSON.stringify(outcome) !== JSON.stringify(refusedOutcome())) {
        failures.push(
          `${template.id} ${sdkVersion} ${JSON.stringify(outcome)}`,
        );
      }
    }
  }
  expect(failures).toEqual([]);
});

test("scaffolds when the parsed registry host is the Foundry host", async () => {
  const foundryUrl = "https://example.palantirfoundry.com/workspace";
  const outcome = await scaffoldAndMaybeInstall({
    project: "matching-host",
    template: templateById("template-react"),
    sdkVersion: "2.x",
    foundryUrl,
    osdkRegistryUrl: artifactsUrl("https://EXAMPLE.PALANTIRFOUNDRY.COM"),
    followInstall: false,
  });
  expect(outcome.refused).toBe(false);
  expect(outcome.registryHostWritten).toBe(new URL(foundryUrl).hostname);
  expect(outcome.createdPathCount).toBeGreaterThan(0);
});

test("pins every generated OSDK dependency to an exact version", async () => {
  const unpinned: string[] = [];
  for (const template of TEMPLATES) {
    for (const sdkVersion of Object.keys(template.files)) {
      const project = `pin-${template.id}-${sdkVersion}`.replaceAll(
        /[^a-zA-Z0-9-_]/gu,
        "-",
      );
      const outcome = await scaffoldAndMaybeInstall({
        project,
        template,
        sdkVersion,
        foundryUrl: FOUNDRY_URL,
        osdkRegistryUrl: artifactsUrl("https://example.palantirfoundry.com"),
        followInstall: false,
      });
      if (template.id === "template-typescript-library") {
        if (outcome.dependencySpec != null) {
          unpinned.push(
            `${template.id} ${sdkVersion} unexpectedly depends on ${outcome.dependencySpec}`,
          );
        }
        continue;
      }
      if (
        outcome.dependencySpec == null ||
        !EXACT_VERSION.test(outcome.dependencySpec)
      ) {
        unpinned.push(
          `${template.id} ${sdkVersion} ${String(outcome.dependencySpec)}`,
        );
      }
    }
  }
  expect(unpinned).toEqual([]);
}, 120_000);

interface ScaffoldSpec {
  project: string;
  template: Template;
  sdkVersion: string;
  foundryUrl: string;
  osdkRegistryUrl: string;
  followInstall: boolean;
}

interface AttackOutcome {
  refused: boolean;
  createdPathCount: number;
  instructedTokenExport: boolean;
  registryHostWritten: string | null;
  dependencySpec: string | null;
  installRequests: string[];
  scriptSawToken: boolean;
  registrySawCredential: boolean;
  npmExitCode: number | null;
}

function refusedOutcome(): AttackOutcome {
  return {
    refused: true,
    createdPathCount: 0,
    instructedTokenExport: false,
    registryHostWritten: null,
    dependencySpec: null,
    installRequests: [],
    scriptSawToken: false,
    registrySawCredential: false,
    npmExitCode: null,
  };
}

async function scaffoldAndMaybeInstall(
  spec: ScaffoldSpec,
): Promise<AttackOutcome> {
  boxMessages = [];
  const projectDir = path.join(projectRoot, spec.project);
  const createdPaths: string[] = [];
  const restore = spyOnCreates(projectDir, createdPaths);
  let error: unknown;
  try {
    await cli(appArgs(spec));
  } catch (caught) {
    error = caught;
  } finally {
    restore();
  }

  const npmrcPath = path.join(projectDir, ".npmrc");
  const packageJsonPath = path.join(projectDir, "package.json");
  const registryHostWritten = fs.existsSync(npmrcPath)
    ? registryHost(fs.readFileSync(npmrcPath, "utf-8"))
    : null;
  const dependencySpec = fs.existsSync(packageJsonPath)
    ? dependencySpecOf(JSON.parse(fs.readFileSync(packageJsonPath, "utf-8")))
    : null;
  const instructedTokenExport = boxMessages.some((message) =>
    message.includes("FOUNDRY_TOKEN"),
  );

  let installRequests: string[] = [];
  let scriptSawToken = false;
  let npmExitCode: number | null = null;
  if (
    spec.followInstall &&
    fs.existsSync(npmrcPath) &&
    dependencySpec != null
  ) {
    const proof = await installFromGeneratedFiles({
      npmrcPath,
      packageName: OSDK_PACKAGE,
      dependencySpec,
    });
    installRequests = proof.requests;
    scriptSawToken = proof.scriptSawToken;
    npmExitCode = proof.exitCode;
  }

  return {
    refused:
      error != null && createdPaths.length === 0 && !fs.existsSync(projectDir),
    createdPathCount: createdPaths.length,
    instructedTokenExport,
    registryHostWritten,
    dependencySpec,
    installRequests,
    scriptSawToken,
    registrySawCredential: registryState.sawCredential,
    npmExitCode,
  };
}

function appArgs(spec: ScaffoldSpec): string[] {
  const args = [
    "node",
    "create-osdk-app",
    spec.project,
    "--overwrite",
    "--template",
    spec.template.id,
    "--sdkVersion",
    spec.sdkVersion,
    "--foundryUrl",
    spec.foundryUrl,
    "--applicationUrl",
    "https://app.example.palantirfoundry.com",
    "--application",
    APPLICATION,
    "--ontology",
    ONTOLOGY,
    "--osdkPackage",
    OSDK_PACKAGE,
    "--osdkRegistryUrl",
    spec.osdkRegistryUrl,
  ];
  if (!(spec.template.authless ?? false)) {
    args.push(
      "--clientId",
      CLIENT_ID,
      "--corsProxy",
      "false",
      "--scopes",
      "api:read-data",
    );
  }
  return args;
}

async function installFromGeneratedFiles({
  npmrcPath,
  packageName,
  dependencySpec,
}: {
  npmrcPath: string;
  packageName: string;
  dependencySpec: string;
}) {
  const installDir = fs.mkdtempSync(path.join(workRoot, "install-"));
  const marker = path.join(installDir, "marker");
  fs.copyFileSync(npmrcPath, path.join(installDir, ".npmrc"));
  fs.writeFileSync(
    path.join(installDir, "package.json"),
    JSON.stringify({
      name: "victim-install",
      private: true,
      version: "0.0.0",
      dependencies: { [packageName]: dependencySpec },
    }),
  );
  const userConfig = path.join(installDir, "user-npmrc");
  const globalConfig = path.join(installDir, "global-npmrc");
  fs.writeFileSync(userConfig, "");
  fs.writeFileSync(globalConfig, "");
  const before = registryState.requests.length;
  // npm must run in a child process so this process can keep serving the registry.
  const exitCode = await new Promise<number | null>((resolve) => {
    const child = spawn("npm", ["install", "--ignore-scripts=false"], {
      cwd: installDir,
      env: {
        ...process.env,
        FOUNDRY_TOKEN: PLACEHOLDER,
        NODE_EXTRA_CA_CERTS: caPath,
        REGISTRY_ATTACK_MARKER: marker,
        npm_config_userconfig: userConfig,
        npm_config_globalconfig: globalConfig,
        npm_config_cache: path.join(installDir, "cache"),
        npm_config_audit: "false",
        npm_config_fund: "false",
        npm_config_update_notifier: "false",
        npm_config_ignore_scripts: "false",
      },
    });
    child.stdout?.resume();
    child.stderr?.resume();
    const timer = setTimeout(() => {
      child.kill();
    }, 30_000);
    child.on("close", (status) => {
      clearTimeout(timer);
      // oxlint-disable-next-line no-multiple-resolved -- close is the only settle path; clearTimeout is not a resolve
      resolve(status);
    });
  });
  return {
    requests: registryState.requests.slice(before),
    scriptSawToken:
      fs.existsSync(marker) && fs.readFileSync(marker, "utf-8") === "seen",
    exitCode,
  };
}

function artifactsUrl(origin: string): string {
  return `${origin}${REPOSITORY_PATH}`;
}

function templateById(id: string): Template {
  const template = TEMPLATES.find((candidate) => candidate.id === id);
  if (template == null) {
    throw new Error(`missing template ${id}`);
  }
  return template;
}

function registryHost(npmrc: string): string | null {
  const line = npmrc
    .split("\n")
    .find((entry) => entry.startsWith(`${OSDK_SCOPE}:registry=`));
  if (line == null) {
    return null;
  }
  return new URL(line.slice(`${OSDK_SCOPE}:registry=`.length)).hostname;
}

function dependencySpecOf(packageJson: {
  dependencies?: Record<string, string>;
  devDependencies?: Record<string, string>;
}): string | null {
  return (
    packageJson.dependencies?.[OSDK_PACKAGE] ??
    packageJson.devDependencies?.[OSDK_PACKAGE] ??
    null
  );
}

function messageText(message: unknown): string {
  if (typeof message === "string") {
    return message;
  }
  if (message != null && typeof message === "object" && "message" in message) {
    const inner = message.message;
    if (typeof inner === "string") {
      return inner;
    }
  }
  return JSON.stringify(message);
}

function spyOnCreates(projectDir: string, createdPaths: string[]): () => void {
  const note = (target: unknown) => {
    if (typeof target === "string" && target.startsWith(projectDir)) {
      createdPaths.push(target);
    }
  };
  const mkdirSync = fs.mkdirSync;
  const mkdir = fs.promises.mkdir.bind(fs.promises);
  const writeFileSync = fs.writeFileSync;
  const writeFile = fs.promises.writeFile.bind(fs.promises);
  const spies = [
    vi.spyOn(fs, "mkdirSync").mockImplementation(((directory, options) => {
      note(directory);
      return mkdirSync(directory, options);
    }) as typeof fs.mkdirSync),
    vi.spyOn(fs.promises, "mkdir").mockImplementation(((directory, options) => {
      note(directory);
      return mkdir(directory, options);
    }) as typeof fs.promises.mkdir),
    vi.spyOn(fs, "writeFileSync").mockImplementation(((file, data, options) => {
      note(file);
      return writeFileSync(file, data, options);
    }) as typeof fs.writeFileSync),
    vi.spyOn(fs.promises, "writeFile").mockImplementation(((
      file,
      data,
      options,
    ) => {
      note(file);
      return writeFile(file, data, options);
    }) as typeof fs.promises.writeFile),
  ];
  return () => {
    for (const spy of spies) {
      spy.mockRestore();
    }
  };
}

function writeCertificate(dir: string): { certPath: string; keyPath: string } {
  const certPath = path.join(dir, "cert.pem");
  const keyPath = path.join(dir, "key.pem");
  execFileSync(
    "openssl",
    [
      "req",
      "-x509",
      "-newkey",
      "rsa:2048",
      "-sha256",
      "-days",
      "1",
      "-nodes",
      "-keyout",
      keyPath,
      "-out",
      certPath,
      "-subj",
      "/CN=127.0.0.1",
      "-addext",
      "subjectAltName=IP:127.0.0.1,DNS:localhost",
    ],
    { stdio: "pipe" },
  );
  return { certPath, keyPath };
}

function packLifecyclePackage(dir: string): Buffer {
  const packageDir = path.join(dir, "lifecycle-package");
  fs.mkdirSync(packageDir);
  fs.writeFileSync(
    path.join(packageDir, "package.json"),
    JSON.stringify({
      name: OSDK_PACKAGE,
      version: "1.0.0",
      scripts: { postinstall: "node observe.js" },
    }),
  );
  fs.writeFileSync(
    path.join(packageDir, "observe.js"),
    [
      'const fs = require("node:fs");',
      "const marker = process.env.REGISTRY_ATTACK_MARKER;",
      "if (marker) {",
      '  fs.writeFileSync(marker, process.env.FOUNDRY_TOKEN === "placeholder-foundry-token" ? "seen" : "missing");',
      "}",
      "",
    ].join("\n"),
  );
  execFileSync("npm", ["pack", "--ignore-scripts"], {
    cwd: packageDir,
    stdio: "pipe",
  });
  const packed = fs
    .readdirSync(packageDir)
    .find((name) => name.endsWith(".tgz"));
  if (packed == null) {
    throw new Error("npm pack did not write a tarball");
  }
  return fs.readFileSync(path.join(packageDir, packed));
}

async function startRegistry(
  cert: { certPath: string; keyPath: string },
  body: Buffer,
): Promise<{ origin: string; close: () => Promise<void> }> {
  const integrity = `sha512-${createHash("sha512").update(body).digest("base64")}`;
  const shasum = createHash("sha1").update(body).digest("hex");
  const server: Server = https.createServer(
    {
      cert: fs.readFileSync(cert.certPath),
      key: fs.readFileSync(cert.keyPath),
    },
    (request, response) => {
      const requestPath = (request.url ?? "").split("?")[0] ?? "";
      registryState.requests.push(requestPath);
      const authorization = request.headers.authorization;
      if (
        typeof authorization === "string" &&
        authorization.includes(PLACEHOLDER)
      ) {
        registryState.sawCredential = true;
      }
      if (requestPath.endsWith(".tgz")) {
        response.writeHead(200, { "content-type": "application/octet-stream" });
        response.end(body);
        return;
      }
      const address = server.address();
      const port =
        address != null && typeof address === "object" ? address.port : 0;
      const packument = {
        name: OSDK_PACKAGE,
        "dist-tags": { latest: "1.0.0" },
        versions: {
          "1.0.0": {
            name: OSDK_PACKAGE,
            version: "1.0.0",
            hasInstallScript: true,
            scripts: { postinstall: "node observe.js" },
            dist: {
              tarball: `https://127.0.0.1:${port}/tarball/sdk-1.0.0.tgz`,
              shasum,
              integrity,
            },
          },
        },
      };
      response.writeHead(200, { "content-type": "application/json" });
      response.end(JSON.stringify(packument));
    },
  );
  await new Promise<void>((resolve) => {
    server.listen(0, "127.0.0.1", () => resolve());
  });
  const address = server.address();
  if (address == null || typeof address === "string") {
    throw new Error("registry did not bind a port");
  }
  return {
    origin: `https://127.0.0.1:${address.port}`,
    close: () =>
      new Promise<void>((resolve, reject) => {
        server.close((error) => {
          if (error == null) {
            resolve();
            return;
          }
          reject(error);
        });
      }),
  };
}
