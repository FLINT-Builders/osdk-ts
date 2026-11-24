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

import { spawn, spawnSync } from "node:child_process";
import { createHash } from "node:crypto";
import fs from "node:fs";
import http from "node:http";
import os from "node:os";
import path from "node:path";

// cspell:ignore userconfig globalconfig
import { dirSync } from "tmp";
import {
  afterAll,
  beforeAll,
  beforeEach,
  describe,
  expect,
  test,
  vi,
} from "vitest";

import { cli } from "./cli.js";
import { consola } from "./consola.js";

const CANARY_VERSION = "9.9.9";
const PLACEHOLDER_TOKEN = "placeholder";
const EXACT_VERSION =
  /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-[0-9A-Za-z-]+(?:\.[0-9A-Za-z-]+)*)?$/u;

const OSDK_REGISTRY_URL =
  "https://example.palantirfoundry.com/artifacts/api/repositories/ri.artifacts.main.repository.fake/contents/release/npm";

interface Packed {
  buf: Buffer;
  integrity: string;
  shasum: string;
}

interface Registry {
  origin: string;
  /** Publish `version` as a package that is not the `latest` tag. */
  addExact: (version: string) => void;
  close: () => Promise<void>;
}

let registry: Registry;

beforeAll(async () => {
  registry = await startRegistry();
});

afterAll(async () => {
  await registry.close();
});

beforeEach(() => {
  const tmpDir = dirSync({ unsafeCleanup: true });
  vi.spyOn(process, "cwd").mockImplementation(() => tmpDir.name);
  return () => {
    vi.restoreAllMocks();
    tmpDir.removeCallback();
  };
});

describe.each(["template-react", "template-expo"])(
  "%s with unstable features and an Ontology SDK",
  (template) => {
    test("does not execute the latest @osdk/cli tag during npm install", async () => {
      const box = vi.spyOn(consola, "box");
      const projectDir = await scaffold(template, {
        unstableFeatures: true,
        osdkPackage: "@fake/sdk",
      });
      const instructions = box.mock.calls
        .map((call) => JSON.stringify(call))
        .join("\n");
      const npmrc = fs.readFileSync(path.join(projectDir, ".npmrc"), "utf-8");

      // create-app leaves @osdk/cli on npm's default registry. The foundry
      // registry line is only for the Ontology SDK scope, and the install
      // instructions put FOUNDRY_TOKEN in the environment before npm install.
      expect(npmrc).not.toMatch(/^@osdk:registry=/mu);
      expect(npmrc).not.toMatch(/^registry=/mu);
      expect(npmrc).toContain(`\${FOUNDRY_TOKEN}`);
      expect(
        instructions.indexOf("export FOUNDRY_TOKEN"),
      ).toBeGreaterThanOrEqual(0);
      expect(instructions.indexOf("export FOUNDRY_TOKEN")).toBeLessThan(
        instructions.indexOf("npm install"),
      );

      const observations = await npmInstallCli(projectDir);
      expect(observations).toEqual([]);
    }, 60_000);

    test("depends on @osdk/cli at an exact version", async () => {
      const projectDir = await scaffold(template, {
        unstableFeatures: true,
        osdkPackage: "@fake/sdk",
      });
      const spec = cliSpec(readPackageJson(projectDir));
      expect(spec).toEqual(expect.stringMatching(EXACT_VERSION));
    });

    test("does not run osdk from postinstall", async () => {
      const projectDir = await scaffold(template, {
        unstableFeatures: true,
        osdkPackage: "@fake/sdk",
      });
      const postinstall =
        readPackageJson(projectDir).scripts?.postinstall ?? "";
      expect(postinstall).not.toContain("osdk");
    });
  },
);

test("writes the same cli pin when the Ontology package scope is @osdk", async () => {
  const projectDir = await scaffold("template-react", {
    unstableFeatures: true,
    osdkPackage: "@osdk/sdk",
  });
  const npmrc = fs.readFileSync(path.join(projectDir, ".npmrc"), "utf-8");
  expect(npmrc).toMatch(/^@osdk:registry=/mu);
  expect(cliSpec(readPackageJson(projectDir))).toEqual(
    expect.stringMatching(EXACT_VERSION),
  );
  expect(readPackageJson(projectDir).scripts?.postinstall ?? "").not.toContain(
    "osdk",
  );
});

test("does not add @osdk/cli when unstable features are off", async () => {
  const projectDir = await scaffold("template-react", {
    unstableFeatures: false,
    osdkPackage: "@fake/sdk",
  });
  expect(cliSpec(readPackageJson(projectDir))).toBeUndefined();
  expect(readPackageJson(projectDir).scripts?.postinstall ?? "").not.toContain(
    "osdk",
  );
  expect(await npmInstallCli(projectDir)).toEqual([]);
});

interface PackageJson {
  scripts?: { postinstall?: string };
  dependencies?: Record<string, string>;
  devDependencies?: Record<string, string>;
  optionalDependencies?: Record<string, string>;
  peerDependencies?: Record<string, string>;
}

function readPackageJson(projectDir: string): PackageJson {
  return JSON.parse(
    fs.readFileSync(path.join(projectDir, "package.json"), "utf-8"),
  ) as PackageJson;
}

function cliSpec(pkg: PackageJson): string | undefined {
  return (
    pkg.devDependencies?.["@osdk/cli"] ??
    pkg.dependencies?.["@osdk/cli"] ??
    pkg.optionalDependencies?.["@osdk/cli"] ??
    pkg.peerDependencies?.["@osdk/cli"]
  );
}

async function scaffold(
  template: string,
  options: { unstableFeatures: boolean; osdkPackage: string },
): Promise<string> {
  const project = `app-${template}`;
  const args = [
    "npx",
    "@osdk/create-app",
    project,
    "--overwrite",
    "--template",
    template,
    "--foundryUrl",
    "https://example.palantirfoundry.com",
    "--applicationUrl",
    "https://app.example.palantirfoundry.com",
    "--application",
    "ri.third-party-applications.main.application.fake",
    "--clientId",
    "123",
    "--corsProxy",
    "false",
    "--sdkVersion",
    "2.x",
    "--scopes",
    "api:read-data",
    "--ontology",
    "ri.ontology.main.ontology.fake",
    "--osdkPackage",
    options.osdkPackage,
    "--osdkRegistryUrl",
    OSDK_REGISTRY_URL,
  ];
  if (options.unstableFeatures) {
    args.push("--unstableFeatures", "true");
  }
  await cli(args);
  return path.join(process.cwd(), project);
}

/**
 * Install only the @osdk/cli dependency and postinstall create-app wrote.
 * The registry's `latest` tag is a package that records whether FOUNDRY_TOKEN
 * is set. Any other exact version is a package with no install scripts whose
 * bin records the same fact if postinstall executes it.
 */
async function npmInstallCli(projectDir: string): Promise<string[]> {
  const pkg = readPackageJson(projectDir);
  const spec = cliSpec(pkg);
  const postinstall = pkg.scripts?.postinstall;
  if (spec == null && (postinstall == null || !postinstall.includes("osdk"))) {
    return [];
  }
  if (spec != null && spec !== CANARY_VERSION && EXACT_VERSION.test(spec)) {
    registry.addExact(spec);
  }

  const root = fs.mkdtempSync(path.join(os.tmpdir(), "osdk-cli-install-"));
  const marker = path.join(root, "marker.txt");
  fs.writeFileSync(marker, "");
  const userConfig = path.join(root, "user-npmrc");
  const globalConfig = path.join(root, "global-npmrc");
  fs.writeFileSync(userConfig, "");
  fs.writeFileSync(globalConfig, "");

  const installPkg: {
    name: string;
    version: string;
    scripts?: { postinstall: string };
    devDependencies?: Record<string, string>;
  } = { name: "scaffold", version: "1.0.0" };
  if (spec != null) {
    installPkg.devDependencies = { "@osdk/cli": spec };
  }
  if (postinstall != null) {
    installPkg.scripts = { postinstall };
  }
  const installDir = path.join(root, "project");
  fs.mkdirSync(installDir);
  fs.writeFileSync(
    path.join(installDir, "package.json"),
    JSON.stringify(installPkg, null, 2),
  );

  const npmrc = fs.readFileSync(path.join(projectDir, ".npmrc"), "utf-8");
  const ignoreScripts = /^ignore-scripts=true$/mu.test(npmrc);
  const args = [
    "install",
    "--registry",
    registry.origin,
    "--cache",
    path.join(root, "cache"),
    "--userconfig",
    userConfig,
    "--globalconfig",
    globalConfig,
  ];
  if (ignoreScripts) {
    args.push("--ignore-scripts");
  }

  const stderr: Buffer[] = [];
  const code = await new Promise<number | null>((resolve, reject) => {
    const child = spawn("npm", args, {
      cwd: installDir,
      env: {
        PATH: process.env.PATH,
        HOME: process.env.HOME ?? root,
        TMPDIR: os.tmpdir(),
        FOUNDRY_TOKEN: PLACEHOLDER_TOKEN,
        OSDK_INSTALL_MARKER: marker,
      },
    });
    child.stderr.on("data", (chunk: Buffer) => {
      stderr.push(chunk);
    });
    child.on("error", reject);
    child.on("exit", resolve);
  });
  const observations = fs
    .readFileSync(marker, "utf-8")
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line !== "");
  fs.rmSync(root, { recursive: true, force: true });
  expect(code, Buffer.concat(stderr).toString("utf-8")).toBe(0);
  return observations;
}

function startRegistry(): Promise<Registry> {
  const packed = new Map<string, Packed>();
  const exactVersions = new Set<string>();
  const server = http.createServer((req, res) => {
    const url = new URL(req.url ?? "/", "http://127.0.0.1");
    if (decodeURIComponent(url.pathname) === "/@osdk/cli") {
      const versions: Record<string, unknown> = {
        [CANARY_VERSION]: manifest(CANARY_VERSION, true),
      };
      for (const version of exactVersions) {
        versions[version] = manifest(version, false);
      }
      sendJson(res, {
        name: "@osdk/cli",
        "dist-tags": { latest: CANARY_VERSION },
        versions,
      });
      return;
    }
    const packedFile = [...packed.entries()].find(
      ([pathname]) => url.pathname === pathname,
    );
    if (packedFile != null) {
      res.writeHead(200, {
        "content-type": "application/octet-stream",
        "content-length": packedFile[1].buf.length,
      });
      res.end(packedFile[1].buf);
      return;
    }
    sendJson(res, {});
  });

  function manifest(version: string, canary: boolean): unknown {
    const tarballPath = `/osdk-cli-${version}.tgz`;
    let body = packed.get(tarballPath);
    if (body == null) {
      body = packCli(version, canary);
      packed.set(tarballPath, body);
    }
    const address = server.address();
    if (address == null || typeof address === "string") {
      throw new Error("registry is not listening");
    }
    return {
      name: "@osdk/cli",
      version,
      dist: {
        tarball: `http://127.0.0.1:${address.port}${tarballPath}`,
        integrity: body.integrity,
        shasum: body.shasum,
      },
      bin: { osdk: "bin/osdk.js" },
      ...(canary ? { scripts: { preinstall: "node preinstall.js" } } : {}),
    };
  }

  return new Promise((resolve) => {
    server.listen(0, "127.0.0.1", () => {
      const address = server.address();
      if (address == null || typeof address === "string") {
        throw new Error("registry is not listening");
      }
      resolve({
        origin: `http://127.0.0.1:${address.port}`,
        addExact: (version) => {
          exactVersions.add(version);
        },
        close: () =>
          new Promise((closeResolve, closeReject) => {
            server.close((error) => {
              if (error != null) {
                closeReject(error);
              } else {
                closeResolve();
              }
            });
          }),
      });
    });
  });
}

function sendJson(res: http.ServerResponse, body: unknown): void {
  const payload = JSON.stringify(body);
  res.writeHead(200, {
    "content-type": "application/json",
    "content-length": Buffer.byteLength(payload),
  });
  res.end(payload);
}

function packCli(version: string, canary: boolean): Packed {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "osdk-cli-pack-"));
  const pkgDir = path.join(root, "package");
  fs.mkdirSync(path.join(pkgDir, "bin"), { recursive: true });
  const record = [
    'const fs = require("node:fs");',
    "const marker = process.env.OSDK_INSTALL_MARKER;",
    "if (marker) {",
    '  const saw = process.env.FOUNDRY_TOKEN ? "set" : "unset";',
    '  const kind = process.argv[1].includes("preinstall") ? "preinstall" : "bin";',
    '  fs.appendFileSync(marker, kind + " " + saw + "\\n");',
    "}",
    "",
  ].join("\n");
  fs.writeFileSync(
    path.join(pkgDir, "package.json"),
    JSON.stringify({
      name: "@osdk/cli",
      version,
      bin: { osdk: "bin/osdk.js" },
      ...(canary ? { scripts: { preinstall: "node preinstall.js" } } : {}),
    }),
  );
  fs.writeFileSync(path.join(pkgDir, "preinstall.js"), record);
  fs.writeFileSync(
    path.join(pkgDir, "bin/osdk.js"),
    `#!/usr/bin/env node\n${record}`,
  );
  const tarball = path.join(root, "pkg.tgz");
  const tar = spawnSync("tar", ["-czf", tarball, "-C", root, "package"]);
  if (tar.status !== 0) {
    throw new Error(tar.stderr.toString("utf-8"));
  }
  const buf = fs.readFileSync(tarball);
  fs.rmSync(root, { recursive: true, force: true });
  return {
    buf,
    integrity: `sha512-${createHash("sha512").update(buf).digest("base64")}`,
    shasum: createHash("sha1").update(buf).digest("hex"),
  };
}
