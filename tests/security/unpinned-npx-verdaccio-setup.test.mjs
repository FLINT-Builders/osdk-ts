// cspell:disable-file
/**
 * Spec for the e2e Verdaccio login step.
 *
 * The step must not download and execute npm-auth-to-token (or any other
 * package) from a registry at job runtime. These tests run the Setup Verdaccio
 * script taken from each CI config, with CI=true, against a registry that
 * serves an unpinned "latest" build of that package. They fail while that
 * script still runs the package's code.
 *
 * Run:
 *   node --test tests/security/unpinned-npx-verdaccio-setup.test.mjs
 */
import assert from "node:assert/strict";
import { execFile, spawn } from "node:child_process";
import { createHash } from "node:crypto";
import { once } from "node:events";
import {
  chmod,
  mkdir,
  mkdtemp,
  readFile,
  rm,
  writeFile,
} from "node:fs/promises";
import { createServer } from "node:http";
import { tmpdir } from "node:os";
import { dirname, join } from "node:path";
import { test } from "node:test";
import { fileURLToPath } from "node:url";
import { promisify } from "node:util";

const execFileAsync = promisify(execFile);
const repoRoot = join(dirname(fileURLToPath(import.meta.url)), "..", "..");
const NPM_VERSION = "11.17.0";
const NPM_INTEGRITY =
  "sha512-PurxiZexEHDTE4SSaLI3ZrnbAGiZfeyUcQcxcP5D+hfytNAze/D1IzDuInTn9XVLIbAQUnQuSPXJx02LHjLvQw==";
const LATEST_VERSION = "9.9.9";
const OLD_VERSION = "1.0.0";
const PLACEHOLDER = "placeholder";

const cases = [
  {
    name:
      "circleci e2e Setup Verdaccio does not run registry-supplied npm-auth-to-token",
    file: ".circleci/config.yml",
  },
  {
    name:
      "github actions e2e Setup Verdaccio does not run registry-supplied npm-auth-to-token",
    file: ".github/workflows/ci.yml",
  },
];

test("npm 11.17.0 is the npx used by cimg/node:24.19.0", async () => {
  const binDir = await ensureNpm117();
  const { stdout } = await execFileAsync(process.execPath, [
    join(binDir, "npm-cli.js"),
    "--version",
  ]);
  assert.equal(stdout.trim(), NPM_VERSION);
});

for (const spec of cases) {
  test(spec.name, async () => {
    const source = await readFile(join(repoRoot, spec.file), "utf8");
    const script = extractSetupVerdaccioScript(source);
    assert.match(script, /\S/, "Setup Verdaccio script was empty");

    const observed = await runSetupScript(script);
    assert.deepEqual(
      {
        packumentRequested: observed.packumentRequested,
        tarballRequested: observed.tarballRequested,
        installScriptRan: observed.installScriptRan,
        binRan: observed.binRan,
        latestBinRan: observed.latestBinRan,
        olderBinRan: observed.olderBinRan,
        githubTokenVisible: observed.githubTokenVisible,
        circleOidcTokenVisible: observed.circleOidcTokenVisible,
        registryArgReceived: observed.registryArgReceived,
      },
      {
        packumentRequested: false,
        tarballRequested: false,
        installScriptRan: false,
        binRan: false,
        latestBinRan: false,
        olderBinRan: false,
        githubTokenVisible: false,
        circleOidcTokenVisible: false,
        registryArgReceived: false,
      },
      [
        `exit ${observed.exitCode}`,
        `requests ${observed.requests.join(" ") || "(none)"}`,
        observed.stderr.trim(),
      ].filter(Boolean).join("\n"),
    );
  });
}

function extractSetupVerdaccioScript(source) {
  const lines = source.split("\n");
  const nameIndex = lines.findIndex((line) =>
    /^\s*(?:-\s*)?name:\s*Setup Verdaccio\s*$/.test(line)
  );
  if (nameIndex < 0) {
    throw new Error("Setup Verdaccio step not found");
  }
  let keyIndex = -1;
  for (let i = nameIndex; i < Math.min(lines.length, nameIndex + 8); i++) {
    if (/^\s*(?:command|run):\s*\|\s*$/.test(lines[i])) {
      keyIndex = i;
      break;
    }
  }
  if (keyIndex < 0) {
    throw new Error("Setup Verdaccio script block not found");
  }
  const keyIndent = lines[keyIndex].match(/^\s*/)[0].length;
  const body = [];
  for (let i = keyIndex + 1; i < lines.length; i++) {
    const line = lines[i];
    if (line.trim() === "") {
      body.push("");
      continue;
    }
    const indent = line.match(/^\s*/)[0].length;
    if (indent <= keyIndent) {
      break;
    }
    body.push(line);
  }
  const indents = body.filter((line) => line.trim() !== "").map((line) =>
    line.match(/^\s*/)[0].length
  );
  const min = Math.min(...indents);
  return body.map((line) => (line.trim() === "" ? "" : line.slice(min))).join(
    "\n",
  ).replace(/\s*$/, "\n");
}

async function runSetupScript(script) {
  const npmBin = await ensureNpm117();
  const registry = await startRegistry();
  const work = await mkdtemp(join(tmpdir(), "npx-verdaccio-setup-"));
  const evidence = join(work, "evidence.json");
  const installEvidence = `${evidence}.install`;
  const home = join(work, "home");
  const cache = join(work, "npm-cache");
  await mkdir(home, { recursive: true });
  await mkdir(cache, { recursive: true });
  await writeFile(
    join(work, "package.json"),
    "{\"name\":\"ci-job\",\"private\":true}\n",
  );
  await writeFile(join(work, "setup.sh"), script, { mode: 0o755 });

  const childEnv = {
    PATH: `${npmBin}:${process.env.PATH}`,
    HOME: home,
    CI: "true",
    CIRCLECI: "true",
    GITHUB_ACTIONS: "true",
    GITHUB_TOKEN: PLACEHOLDER,
    CIRCLE_OIDC_TOKEN: PLACEHOLDER,
    NPX_EVIDENCE_FILE: evidence,
    npm_config_registry: registry.url,
    npm_config_cache: cache,
    npm_config_userconfig: join(home, ".npmrc"),
    npm_config_update_notifier: "false",
    npm_config_fund: "false",
    npm_config_audit: "false",
    npm_config_fetch_retries: "0",
  };

  let exitCode = 0;
  let stderr = "";
  try {
    const result = await runBash(work, childEnv);
    exitCode = result.exitCode;
    stderr = result.stderr;
  } finally {
    await registry.close();
  }

  let bin = null;
  try {
    bin = JSON.parse(await readFile(evidence, "utf8"));
  } catch {
    bin = null;
  }
  let install = null;
  try {
    install = JSON.parse(await readFile(installEvidence, "utf8"));
  } catch {
    install = null;
  }
  await rm(work, { recursive: true, force: true });

  return {
    exitCode,
    stderr,
    requests: registry.requests,
    packumentRequested: registry.requests.some((url) =>
      url.includes(" /npm-auth-to-token") && !url.includes(".tgz")
    ),
    tarballRequested: registry.requests.some((url) => url.includes(".tgz")),
    installScriptRan: install?.ran === "install",
    binRan: bin?.ran === "bin",
    latestBinRan: bin?.version === LATEST_VERSION,
    olderBinRan: bin?.version === OLD_VERSION,
    githubTokenVisible: bin?.githubTokenVisible === true
      || install?.githubTokenVisible === true,
    circleOidcTokenVisible: bin?.circleOidcTokenVisible === true
      || install?.circleOidcTokenVisible === true,
    registryArgReceived: bin?.registryArgReceived === true,
  };
}

function runBash(cwd, env) {
  return new Promise((resolve) => {
    const child = spawn("bash", ["--noprofile", "--norc", "setup.sh"], {
      cwd,
      env,
      stdio: ["ignore", "pipe", "pipe"],
    });
    let stderr = "";
    child.stderr.on("data", (chunk) => {
      stderr += chunk.toString();
    });
    child.stdout.on("data", () => {});
    child.on("close", (code) => {
      resolve({ exitCode: code ?? 1, stderr });
    });
  });
}

async function startRegistry() {
  const built = await buildPackages();
  const requests = [];
  const server = createServer((req, res) => {
    const url = new URL(req.url ?? "/", "http://127.0.0.1");
    requests.push(`${req.method ?? "GET"} ${url.pathname}`);
    const version = url.pathname.includes(LATEST_VERSION)
      ? LATEST_VERSION
      : url.pathname.includes(OLD_VERSION)
      ? OLD_VERSION
      : null;
    if (req.method === "GET" && url.pathname === "/npm-auth-to-token") {
      const body = JSON.stringify(built.packument);
      res.writeHead(200, {
        "content-type": "application/json",
        "content-length": Buffer.byteLength(body),
      });
      res.end(body);
      return;
    }
    if (req.method === "GET" && version && built.tarballs[version]) {
      const tarball = built.tarballs[version];
      res.writeHead(200, {
        "content-type": "application/octet-stream",
        "content-length": tarball.length,
      });
      res.end(tarball);
      return;
    }
    res.writeHead(404, { "content-type": "application/json" });
    res.end(JSON.stringify({ error: "not found" }));
  });
  server.listen(0, "127.0.0.1");
  await once(server, "listening");
  const address = server.address();
  if (address == null || typeof address === "string") {
    throw new Error("registry failed to bind");
  }
  const origin = `http://127.0.0.1:${address.port}`;
  built.packument.versions[LATEST_VERSION].dist.tarball =
    `${origin}/npm-auth-to-token/-/npm-auth-to-token-${LATEST_VERSION}.tgz`;
  built.packument.versions[OLD_VERSION].dist.tarball =
    `${origin}/npm-auth-to-token/-/npm-auth-to-token-${OLD_VERSION}.tgz`;
  return {
    url: `${origin}/`,
    requests,
    close: () =>
      new Promise((resolve, reject) =>
        server.close((err) => err ? reject(err) : resolve())
      ),
  };
}

async function buildPackages() {
  const root = await mkdtemp(join(tmpdir(), "npm-auth-to-token-pkg-"));
  const tarballs = {};
  const versions = {};
  for (const version of [OLD_VERSION, LATEST_VERSION]) {
    const dir = join(root, version);
    const pkgDir = join(dir, "package");
    await mkdir(pkgDir, { recursive: true });
    const malicious = version === LATEST_VERSION;
    const bin = [
      "#!/usr/bin/env node",
      "const fs = require('node:fs');",
      "const evidence = process.env.NPX_EVIDENCE_FILE;",
      "if (!evidence) process.exit(0);",
      "fs.writeFileSync(evidence, JSON.stringify({",
      "  ran: 'bin',",
      `  version: ${JSON.stringify(version)},`,
      "  githubTokenVisible: Object.prototype.hasOwnProperty.call(process.env, 'GITHUB_TOKEN'),",
      "  circleOidcTokenVisible: Object.prototype.hasOwnProperty.call(process.env, 'CIRCLE_OIDC_TOKEN'),",
      "  registryArgReceived: process.argv.includes('http://localhost:4873'),",
      "}));",
      "",
    ].join("\n");
    await writeFile(join(pkgDir, "bin.js"), bin);
    await chmod(join(pkgDir, "bin.js"), 0o755);
    const manifest = {
      name: "npm-auth-to-token",
      version,
      bin: { "npm-auth-to-token": "bin.js" },
    };
    if (malicious) {
      const install = [
        "const fs = require('node:fs');",
        "const evidence = process.env.NPX_EVIDENCE_FILE;",
        "if (!evidence) process.exit(0);",
        "fs.writeFileSync(evidence + '.install', JSON.stringify({",
        "  ran: 'install',",
        `  version: ${JSON.stringify(version)},`,
        "  githubTokenVisible: Object.prototype.hasOwnProperty.call(process.env, 'GITHUB_TOKEN'),",
        "  circleOidcTokenVisible: Object.prototype.hasOwnProperty.call(process.env, 'CIRCLE_OIDC_TOKEN'),",
        "}));",
        "",
      ].join("\n");
      await writeFile(join(pkgDir, "preinstall.js"), install);
      manifest.scripts = { preinstall: "node preinstall.js" };
    }
    await writeFile(join(pkgDir, "package.json"), JSON.stringify(manifest));
    const tarballPath = join(dir, "pkg.tgz");
    await execFileAsync("tar", ["-czf", tarballPath, "-C", dir, "package"]);
    const tarball = await readFile(tarballPath);
    tarballs[version] = tarball;
    versions[version] = {
      ...manifest,
      dist: {
        shasum: createHash("sha1").update(tarball).digest("hex"),
        integrity: "sha512-"
          + createHash("sha512").update(tarball).digest("base64"),
        tarball: `placeholder-${version}.tgz`,
      },
    };
  }
  await rm(root, { recursive: true, force: true });
  return {
    tarballs,
    packument: {
      name: "npm-auth-to-token",
      "dist-tags": { latest: LATEST_VERSION },
      versions,
    },
  };
}

let npm117Promise;

function ensureNpm117() {
  npm117Promise ??= extractNpm117();
  return npm117Promise;
}

async function extractNpm117() {
  const root = join(tmpdir(), `npm-${NPM_VERSION}-extracted`);
  const binDir = join(root, "package", "bin");
  const marker = join(binDir, "npx-cli.js");
  try {
    await readFile(marker);
    return binDir;
  } catch {
    // download below
  }
  await mkdir(root, { recursive: true });
  const response = await fetch(
    `https://registry.npmjs.org/npm/-/npm-${NPM_VERSION}.tgz`,
  );
  if (!response.ok) {
    throw new Error(
      `failed to download npm ${NPM_VERSION}: ${response.status}`,
    );
  }
  const tarball = Buffer.from(await response.arrayBuffer());
  const actual = "sha512-"
    + createHash("sha512").update(tarball).digest("base64");
  assert.equal(actual, NPM_INTEGRITY);
  const tgzPath = join(root, "npm.tgz");
  await writeFile(tgzPath, tarball);
  await execFileAsync("tar", ["-xzf", tgzPath, "-C", root]);
  await chmod(join(binDir, "npx-cli.js"), 0o755);
  await chmod(join(binDir, "npm-cli.js"), 0o755);
  await writeFile(
    join(binDir, "npx"),
    "#!/bin/sh\nexec node \"$(dirname \"$0\")/npx-cli.js\" \"$@\"\n",
  );
  await writeFile(
    join(binDir, "npm"),
    "#!/bin/sh\nexec node \"$(dirname \"$0\")/npm-cli.js\" \"$@\"\n",
  );
  await chmod(join(binDir, "npx"), 0o755);
  await chmod(join(binDir, "npm"), 0o755);
  return binDir;
}
