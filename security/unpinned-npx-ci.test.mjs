/**
 * Spec for the CI verdaccio login step.
 *
 * The step is safe only when the command it runs cannot execute whatever
 * package the public registry currently marks as the latest
 * `npm-auth-to-token`. These tests run that command with Node 24.19.0
 * (the npm 11.17.0 that cimg/node:24.19.0 ships, and the Node major the
 * GitHub Actions job installs) against a local registry standing in for
 * the public one. They fail while the unpinned `npx` invocation is still
 * in the workflow.
 */
import assert from "node:assert/strict";
import { spawn, spawnSync } from "node:child_process";
import { createHash } from "node:crypto";
import {
  chmodSync,
  existsSync,
  mkdirSync,
  readFileSync,
  writeFileSync,
} from "node:fs";
import { createServer } from "node:http";
import { tmpdir } from "node:os";
import path from "node:path";
import { test } from "node:test";
import { fileURLToPath } from "node:url";

const repoRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
);
const nodeVersion = "24.19.0";
const attackerVersion = "9.9.9";
const pinnedVersion = "1.0.0";
const packageName = "npm-auth-to-token";
const credentialMarker = "AUTHORIZATION: basic PLACEHOLDER_NOT_A_SECRET";

const githubWorkflow = readFileSync(
  path.join(repoRoot, ".github/workflows/ci.yml"),
  "utf8",
);
const circleConfig = readFileSync(
  path.join(repoRoot, ".circleci/config.yml"),
  "utf8",
);
const lockfile = readFileSync(path.join(repoRoot, "pnpm-lock.yaml"), "utf8");

function extractFoldedBlock(text, anchor) {
  const lines = text.split("\n");
  const anchorAt = lines.findIndex((line) => line.includes(anchor));
  assert.notEqual(anchorAt, -1, `missing ${anchor}`);
  let header = -1;
  for (let i = anchorAt + 1; i < lines.length; i++) {
    if (/^\s*(?:run|command):\s*\|/.test(lines[i])) {
      header = i;
      break;
    }
    if (lines[i].trim().startsWith("- ") && i > anchorAt + 1) {
      break;
    }
  }
  assert.notEqual(header, -1, `missing run block after ${anchor}`);
  const headerIndent = lines[header].match(/^(\s*)/)[1].length;
  const body = [];
  for (let i = header + 1; i < lines.length; i++) {
    const line = lines[i];
    if (line.trim() === "") {
      body.push("");
      continue;
    }
    const indent = line.match(/^(\s*)/)[1].length;
    if (indent <= headerIndent) {
      break;
    }
    body.push(line.trim());
  }
  return body.join("\n").trim();
}

function npxPackageSpecs(text) {
  const specs = [];
  const pattern = /\bnpx(?:\s+--yes)?\s+([^\s\\]+)/g;
  for (const match of text.matchAll(pattern)) {
    specs.push(match[1]);
  }
  return specs;
}

function isExactPin(spec) {
  return /^(?:@[^/]+\/)?[^@\s]+@\d+\.\d+\.\d+(?:[-+][0-9A-Za-z.-]+)?$/.test(
    spec,
  );
}

function lockfileContainsPackage(name) {
  const escaped = name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return new RegExp(`(?:^|\\n)\\s*(?:'${escaped}'|"${escaped}"|${escaped}):`)
    .test(lockfile);
}

function ensureNode24() {
  const home = path.join(tmpdir(), `node-v${nodeVersion}-linux-x64`);
  const bin = path.join(home, "bin", "npx");
  if (!existsSync(bin)) {
    const tarball = path.join(
      tmpdir(),
      `node-v${nodeVersion}-linux-x64.tar.gz`,
    );
    if (!existsSync(tarball)) {
      const download = spawnSync("curl", [
        "-fsSL",
        "-o",
        tarball,
        `https://nodejs.org/dist/v${nodeVersion}/node-v${nodeVersion}-linux-x64.tar.gz`,
      ], { encoding: "utf8" });
      assert.equal(
        download.status,
        0,
        `node ${nodeVersion} download failed: ${download.stderr}`,
      );
    }
    mkdirSync(tmpdir(), { recursive: true });
    const extract = spawnSync("tar", [
      "-xzf",
      tarball,
      "-C",
      tmpdir(),
    ], { encoding: "utf8" });
    assert.equal(extract.status, 0, extract.stderr);
  }
  const version = spawnSync(path.join(home, "bin", "node"), [
    "-p",
    "process.version",
  ], {
    encoding: "utf8",
  });
  assert.equal(version.stdout.trim(), `v${nodeVersion}`);
  return home;
}

function pack(dir, version, files) {
  const root = path.join(dir, `pkg-${version}`);
  const folder = path.join(root, "package");
  mkdirSync(folder, { recursive: true });
  for (const [name, contents, mode] of files) {
    const file = path.join(folder, name);
    mkdirSync(path.dirname(file), { recursive: true });
    writeFileSync(file, contents);
    if (mode) {
      chmodSync(file, mode);
    }
  }
  const tarball = path.join(dir, `${packageName}-${version}.tgz`);
  const packed = spawnSync("tar", ["-czf", tarball, "-C", root, "package"], {
    encoding: "utf8",
  });
  assert.equal(packed.status, 0, packed.stderr);
  const bytes = readFileSync(tarball);
  return {
    bytes,
    shasum: createHash("sha1").update(bytes).digest("hex"),
    integrity: "sha512-" + createHash("sha512").update(bytes).digest("base64"),
  };
}

function manifest(version, dist, extra) {
  return {
    name: packageName,
    version,
    dist: {
      tarball: dist.tarball,
      shasum: dist.shasum,
      integrity: dist.integrity,
    },
    ...extra,
  };
}

function startRegistry() {
  const files = new Map();
  let versions = {};
  const server = createServer((req, res) => {
    try {
      req.resume();
      const url = new URL(req.url, "http://127.0.0.1");
      const pathname = decodeURIComponent(url.pathname);
      // npm audit posts here during install. An empty object is the
      // no-advisory report @npmcli/arborist AuditReport treats as clean.
      if (
        req.method === "POST"
        && pathname === "/-/npm/v1/security/advisories/bulk"
      ) {
        const body = "{}";
        res.writeHead(200, {
          "content-type": "application/json",
          "content-length": Buffer.byteLength(body),
        });
        res.end(body);
        return;
      }
      if (req.method === "GET" && pathname === `/${packageName}`) {
        const body = JSON.stringify({
          name: packageName,
          "dist-tags": { latest: attackerVersion },
          versions,
        });
        res.writeHead(200, {
          "content-type": "application/json",
          "content-length": Buffer.byteLength(body),
        });
        res.end(body);
        return;
      }
      const file = files.get(pathname);
      if (req.method === "GET" && file) {
        res.writeHead(200, {
          "content-type": "application/octet-stream",
          "content-length": file.length,
        });
        res.end(file);
        return;
      }
      res.writeHead(404, { "content-type": "text/plain" });
      res.end(`not found ${pathname}`);
    } catch (error) {
      res.writeHead(500, { "content-type": "text/plain" });
      res.end(String(error));
    }
  });
  return new Promise((resolve) => {
    server.listen(0, "127.0.0.1", () => {
      const { port } = server.address();
      const origin = `http://127.0.0.1:${port}`;
      resolve({
        server,
        registry: `${origin}/`,
        publish(version, tar) {
          const pathname = `/${packageName}/-/${packageName}-${version}.tgz`;
          files.set(pathname, tar.bytes);
          versions[version] = manifest(version, {
            tarball: origin + pathname,
            shasum: tar.shasum,
            integrity: tar.integrity,
          }, {
            // The registry manifest is what npx reads to choose a bin
            // before it installs the tarball.
            bin: { [packageName]: "bin.js" },
          });
        },
      });
    });
  });
}

function writeCheckoutCredentials(work) {
  const runnerTemp = path.join(work, "runner-temp");
  mkdirSync(runnerTemp, { recursive: true });
  const credentials = path.join(
    runnerTemp,
    "git-credentials-00000000-0000-4000-8000-000000000001.config",
  );
  spawnSync("git", ["init"], { cwd: work, encoding: "utf8" });
  const written = spawnSync("git", [
    "config",
    "--file",
    credentials,
    "http.https://github.com/.extraheader",
    credentialMarker,
  ], { encoding: "utf8" });
  assert.equal(written.status, 0, written.stderr);
  const gitDir = path.join(work, ".git").replaceAll("\\", "/");
  const included = spawnSync("git", [
    "config",
    `includeIf.gitdir:${gitDir}.path`,
    credentials,
  ], { cwd: work, encoding: "utf8" });
  assert.equal(included.status, 0, included.stderr);
  return credentials;
}

async function runSetup(nodeHome, script, registry, work, markers) {
  writeFileSync(
    path.join(work, ".npmrc"),
    readFileSync(path.join(repoRoot, ".npmrc")),
  );
  mkdirSync(path.join(work, ".turbo", "cache"), { recursive: true });
  const env = {
    ...process.env,
    HOME: work,
    CI: "true",
    GITHUB_ACTIONS: "true",
    CIRCLECI: "true",
    npm_config_registry: registry,
    npm_config_cache: path.join(work, "npm-cache"),
    npm_config_userconfig: path.join(work, "user.npmrc"),
    CANARY_MARKER: markers.canary,
    INSTALL_MARKER: markers.install,
    BENIGN_MARKER: markers.benign,
    TURBO_CACHE_DIR: path.join(work, ".turbo", "cache"),
    PATH: `${path.join(nodeHome, "bin")}:${process.env.PATH}`,
  };
  return await new Promise((resolve) => {
    const child = spawn("bash", ["-lc", script], {
      cwd: work,
      env,
      stdio: ["ignore", "pipe", "pipe"],
    });
    let stdout = "";
    let stderr = "";
    child.stdout.on("data", (chunk) => {
      stdout += chunk;
    });
    child.stderr.on("data", (chunk) => {
      stderr += chunk;
    });
    const timer = setTimeout(() => child.kill("SIGKILL"), 30000);
    child.on("close", (status, signal) => {
      clearTimeout(timer);
      resolve({ status, signal, stdout, stderr });
    });
  });
}

function readOutcome(markers) {
  return {
    canary: existsSync(markers.canary)
      ? JSON.parse(readFileSync(markers.canary, "utf8"))
      : null,
    install: existsSync(markers.install)
      ? readFileSync(markers.install, "utf8")
      : null,
    benign: existsSync(markers.benign)
      ? readFileSync(markers.benign, "utf8")
      : null,
  };
}

let nodeHome;
let registry;

test.before(async () => {
  nodeHome = ensureNode24();
  const build = path.join(tmpdir(), `npx-canary-${process.pid}`);
  mkdirSync(build, { recursive: true });
  const attackerBin = `#!/usr/bin/env node
const { execFileSync } = require("node:child_process");
const fs = require("node:fs");
const outcome = {
  executed: true,
  version: ${JSON.stringify(attackerVersion)},
  credentialFileRead: false,
  cacheWritten: false,
};
try {
  const listed = execFileSync(
    "git",
    ["config", "--get-regexp", "^includeIf\\\\.gitdir:"],
    { encoding: "utf8" },
  );
  const credentialPath = listed.trim().split(/\\s+/).pop();
  const body = fs.readFileSync(credentialPath, "utf8");
  outcome.credentialFileRead = body.includes("AUTHORIZATION: basic ");
} catch {}
const cacheDir = process.env.TURBO_CACHE_DIR;
if (cacheDir) {
  fs.mkdirSync(cacheDir, { recursive: true });
  fs.writeFileSync(cacheDir + "/poisoned-task-output.txt", "poisoned");
  outcome.cacheWritten = true;
}
fs.writeFileSync(process.env.CANARY_MARKER, JSON.stringify(outcome));
`;
  const attackerInstall = `#!/usr/bin/env node
require("node:fs").writeFileSync(process.env.INSTALL_MARKER, "preinstall");
`;
  const benignBin = `#!/usr/bin/env node
require("node:fs").writeFileSync(process.env.BENIGN_MARKER, ${
    JSON.stringify(pinnedVersion)
  });
`;
  const attackerTar = pack(build, attackerVersion, [
    [
      "package.json",
      JSON.stringify({
        name: packageName,
        version: attackerVersion,
        bin: { [packageName]: "bin.js" },
        scripts: { preinstall: "node preinstall.js" },
      }),
    ],
    ["bin.js", attackerBin, 0o755],
    ["preinstall.js", attackerInstall, 0o755],
  ]);
  const benignTar = pack(build, pinnedVersion, [
    [
      "package.json",
      JSON.stringify({
        name: packageName,
        version: pinnedVersion,
        bin: { [packageName]: "bin.js" },
      }),
    ],
    ["bin.js", benignBin, 0o755],
  ]);

  registry = await startRegistry();
  registry.publish(attackerVersion, attackerTar);
  registry.publish(pinnedVersion, benignTar);
});

test.after(() => {
  registry?.server.close();
});

function markersFor(name) {
  const dir = path.join(tmpdir(), `npx-run-${name}-${process.pid}`);
  mkdirSync(dir, { recursive: true });
  return {
    dir,
    canary: path.join(dir, "canary.json"),
    install: path.join(dir, "install.txt"),
    benign: path.join(dir, "benign.txt"),
  };
}

function assertAttackerDidNotRun(outcome, result, context) {
  assert.notEqual(
    result.status,
    null,
    `${context}: command timed out before install finished\n${result.stderr}`,
  );
  assert.equal(
    outcome.install,
    null,
    `${context}: install script of registry latest ran (${outcome.install})\n${result.stderr}`,
  );
  assert.equal(
    outcome.canary,
    null,
    `${context}: registry latest executed ${
      JSON.stringify(outcome.canary)
    }\n${result.stderr}`,
  );
}

test("GitHub Actions e2e Setup Verdaccio does not run registry-latest npm-auth-to-token", async () => {
  const script = extractFoldedBlock(githubWorkflow, "name: Setup Verdaccio");
  const markers = markersFor("gha");
  const work = path.join(markers.dir, "repo");
  mkdirSync(work, { recursive: true });
  writeCheckoutCredentials(work);
  const result = await runSetup(
    nodeHome,
    script,
    registry.registry,
    work,
    markers,
  );
  const outcome = readOutcome(markers);
  assertAttackerDidNotRun(outcome, result, "GitHub Actions Setup Verdaccio");
});

test("CircleCI e2e Setup Verdaccio does not run registry-latest npm-auth-to-token", async () => {
  const script = extractFoldedBlock(circleConfig, "name: Setup Verdaccio");
  const markers = markersFor("circle");
  const work = path.join(markers.dir, "repo");
  mkdirSync(work, { recursive: true });
  writeCheckoutCredentials(work);
  const result = await runSetup(
    nodeHome,
    script,
    registry.registry,
    work,
    markers,
  );
  const outcome = readOutcome(markers);
  assertAttackerDidNotRun(outcome, result, "CircleCI Setup Verdaccio");
});

test("an exact version pin does not execute the registry latest", async () => {
  const markers = markersFor("pin");
  const work = path.join(markers.dir, "repo");
  mkdirSync(work, { recursive: true });
  const result = await runSetup(
    nodeHome,
    `npx --yes ${packageName}@${pinnedVersion}`,
    registry.registry,
    work,
    markers,
  );
  const outcome = readOutcome(markers);
  assert.equal(result.status, 0, result.stderr);
  assertAttackerDidNotRun(outcome, result, "exact pin");
  assert.equal(outcome.benign, pinnedVersion);
});

test("npx uses a local bin instead of registry latest when the package is installed", async () => {
  const markers = markersFor("local-bin");
  const work = path.join(markers.dir, "repo");
  const binDir = path.join(work, "node_modules", ".bin");
  mkdirSync(binDir, { recursive: true });
  const localBin = path.join(binDir, "size-limit");
  writeFileSync(
    localBin,
    `#!/bin/sh\nprintf local > "$BENIGN_MARKER"\n`,
  );
  chmodSync(localBin, 0o755);
  const result = await runSetup(
    nodeHome,
    "npx size-limit --json",
    registry.registry,
    work,
    markers,
  );
  const outcome = readOutcome(markers);
  assert.equal(result.status, 0, `${result.stdout}\n${result.stderr}`);
  assertAttackerDidNotRun(outcome, result, "local size-limit bin");
  assert.equal(outcome.benign, "local");
});

test("every CI npx package is an exact pin or already in the lockfile", () => {
  const specs = [
    ...npxPackageSpecs(githubWorkflow).map((
      spec,
    ) => [".github/workflows/ci.yml", spec]),
    ...npxPackageSpecs(circleConfig).map((
      spec,
    ) => [".circleci/config.yml", spec]),
  ];
  assert.ok(specs.length > 0, "expected the CI configs to invoke npx");
  const unpinned = specs.filter(([, spec]) => {
    if (isExactPin(spec)) {
      return false;
    }
    const name = spec.startsWith("@")
      ? spec.slice(0, spec.indexOf("@", 1))
      : spec.split("@")[0];
    return !lockfileContainsPackage(name);
  });
  assert.deepEqual(unpinned, []);
});
