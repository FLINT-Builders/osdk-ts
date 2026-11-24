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
 * A non-loopback client must not be able to change files through the
 * Storybook dev server that `packages/react-components-storybook` starts.
 *
 * The dev script runs `storybook dev` with whatever host flag it contains
 * (today it contains none). These tests start that same command against a
 * temporary project and then connect to a non-loopback address. They fail
 * while that client can rewrite stories or the Storybook config.
 *
 * Run:
 *   node --test packages/react-components-storybook/security/lan-dev-server.test.mjs
 */

// cspell:ignore Storyfile

import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import {
  mkdtemp,
  mkdir,
  readFile,
  rm,
  symlink,
  writeFile,
} from "node:fs/promises";
import { createRequire } from "node:module";
import net from "node:net";
import os from "node:os";
import path from "node:path";
import { test } from "node:test";
import { fileURLToPath } from "node:url";

const packageDir = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
);
const require = createRequire(path.join(packageDir, "package.json"));
const storybookDir = path.dirname(require.resolve("storybook/package.json"));
const storybookBin = path.join(storybookDir, "dist/bin/dispatcher.js");
const { WebSocket } = createRequire(path.join(storybookDir, "package.json"))(
  "ws",
);

const PLAY_MARKER = "INJECTED_PLAY_BODY";
const OUTSIDE_MARKER = "OUTSIDE_STORY_MARKER";
const NEW_STORY_MARKER = "NEW_STORY_BODY";
const CONFIG_FLAG = "disableWhatsNewNotifications";

const storySource = `const meta = { title: "Button" };
export default meta;
export const Primary = { args: { label: "before" } };
`;

function lanIpv4() {
  for (const entries of Object.values(os.networkInterfaces())) {
    for (const entry of entries ?? []) {
      if (entry.family === "IPv4" && !entry.internal) return entry.address;
    }
  }
  return undefined;
}

function freePort() {
  return new Promise((resolve, reject) => {
    const server = net.createServer();
    server.once("error", reject);
    server.listen(0, "127.0.0.1", () => {
      const address = server.address();
      server.close(() => {
        if (address && typeof address === "object") resolve(address.port);
        else reject(new Error("Could not allocate a port"));
      });
    });
  });
}

function devArguments(script, port) {
  const marker = "storybook ";
  const at = script.lastIndexOf(marker);
  assert.ok(at !== -1, "dev script does not launch storybook");
  const args = script
    .slice(at + marker.length)
    .trim()
    .split(/\s+/u);
  const portFlag = args.findIndex((arg) => arg === "-p" || arg === "--port");
  if (portFlag !== -1) args[portFlag + 1] = String(port);
  else args.push("-p", String(port));
  return args;
}

function filesContaining(root, marker) {
  const hits = [];
  const visit = (dir) => {
    for (const name of readdirSync(dir)) {
      if (name === "node_modules") continue;
      const full = path.join(dir, name);
      const stat = statSync(full);
      if (stat.isDirectory()) visit(full);
      else if (stat.isFile() && readFileSync(full, "utf-8").includes(marker)) {
        hits.push(full);
      }
    }
  };
  if (existsSync(root)) visit(root);
  return hits;
}

async function waitForLocalServer(port, child) {
  const deadline = Date.now() + 90_000;
  let lastLog = "";
  while (Date.now() < deadline) {
    if (child.exitCode != null) {
      throw new Error(
        `Storybook exited before listening (code ${child.exitCode}): ${lastLog}`,
      );
    }
    try {
      const response = await fetch(`http://127.0.0.1:${port}/`, {
        signal: AbortSignal.timeout(1_000),
      });
      if (response.ok) return;
    } catch {
      // The server is still starting.
    }
    lastLog = child.output ?? "";
    await new Promise((resolve) => setTimeout(resolve, 250));
  }
  throw new Error(`Storybook did not listen on 127.0.0.1:${port}: ${lastLog}`);
}

function channelToken(html) {
  const match = html.match(/CHANNEL_OPTIONS['\]]*\s*=\s*(\{.*?\})/u);
  if (!match) return undefined;
  try {
    const parsed = JSON.parse(match[1]);
    return typeof parsed.wsToken === "string" && parsed.wsToken.length > 0
      ? parsed.wsToken
      : undefined;
  } catch {
    return undefined;
  }
}

function sendChannel(url, origin, token, message) {
  let finish;
  const done = new Promise((resolve) => {
    finish = resolve;
  });
  const socket = new WebSocket(
    `${url}/storybook-server-channel?token=${encodeURIComponent(token)}`,
    { headers: { Origin: origin } },
  );
  let settled = false;
  const timer = setTimeout(() => {
    complete({ timedOut: true });
  }, 8_000);
  function complete(result) {
    if (settled) return;
    settled = true;
    clearTimeout(timer);
    socket.close();
    finish(result);
  }
  socket.on("open", () => socket.send(JSON.stringify(message)));
  socket.on("unexpected-response", (_request, response) => {
    complete({ status: response.statusCode });
  });
  socket.on("error", () => {
    complete({ refused: true });
  });
  socket.on("message", (data) => {
    const text = data.toString();
    if (!text.includes(message.type.replace("Request", "Response"))) return;
    complete({ replied: true });
  });
  return done;
}

test("a non-loopback client cannot write files through the Storybook dev server", async () => {
  const lan = lanIpv4();
  assert.ok(
    lan,
    "This test needs a non-loopback IPv4 address so it can act as another host on the machine's network.",
  );

  const pkg = JSON.parse(
    readFileSync(path.join(packageDir, "package.json"), "utf-8"),
  );
  const port = await freePort();
  const args = devArguments(pkg.scripts.dev, port);

  const root = await mkdtemp(path.join(os.tmpdir(), "storybook-lan-"));
  const project = path.join(root, "project");
  const outside = path.join(root, "outside");
  const storyFile = path.join(project, "src", "Button.stories.tsx");
  const outsideFile = path.join(outside, "Victim.stories.tsx");
  const mainFile = path.join(project, ".storybook", "main.ts");
  const newStory = path.join(project, "src", "Widget.stories.tsx");

  await mkdir(path.join(project, "src"), { recursive: true });
  await mkdir(path.join(project, ".storybook"), { recursive: true });
  await mkdir(outside, { recursive: true });
  await writeFile(
    path.join(project, "package.json"),
    JSON.stringify({ name: "storybook-lan-fixture", private: true }),
  );
  await symlink(
    path.join(packageDir, "node_modules"),
    path.join(project, "node_modules"),
  );
  await writeFile(
    mainFile,
    `import type { StorybookConfig } from "@storybook/react-vite";
const config: StorybookConfig = {
  stories: ["../src/**/*.stories.tsx"],
  framework: { name: "@storybook/react-vite", options: {} },
};
export default config;
`,
  );
  await writeFile(storyFile, storySource);
  await writeFile(outsideFile, storySource);

  const child = spawn(process.execPath, [storybookBin, ...args], {
    cwd: project,
    env: {
      ...process.env,
      BROWSER: "none",
      CI: "1",
      STORYBOOK_DISABLE_TELEMETRY: "1",
    },
    stdio: ["ignore", "pipe", "pipe"],
  });
  child.output = "";
  child.stdout.on("data", (chunk) => {
    child.output += chunk.toString();
  });
  child.stderr.on("data", (chunk) => {
    child.output += chunk.toString();
  });

  let sawPlay = false;
  let sawOutside = false;
  let sawNewStory = false;
  let sawConfig = false;
  const watch = setInterval(() => {
    if (
      existsSync(storyFile) &&
      readFileSync(storyFile, "utf-8").includes(PLAY_MARKER)
    ) {
      sawPlay = true;
    }
    if (
      existsSync(outsideFile) &&
      readFileSync(outsideFile, "utf-8").includes(OUTSIDE_MARKER)
    ) {
      sawOutside = true;
    }
    if (filesContaining(root, NEW_STORY_MARKER).length > 0) sawNewStory = true;
    if (
      existsSync(mainFile) &&
      readFileSync(mainFile, "utf-8").includes(CONFIG_FLAG)
    ) {
      sawConfig = true;
    }
  }, 20);

  try {
    await waitForLocalServer(port, child);

    const origin = `http://${lan}:${port}`;
    let indexHtml = "";
    let reachable = true;
    try {
      const response = await fetch(`${origin}/`, {
        signal: AbortSignal.timeout(5_000),
      });
      indexHtml = await response.text();
      reachable = response.ok;
    } catch {
      reachable = false;
    }

    if (reachable) {
      let iframeHtml = "";
      try {
        iframeHtml = await fetch(`${origin}/iframe.html`, {
          signal: AbortSignal.timeout(5_000),
        }).then((response) => response.text());
      } catch {
        iframeHtml = "";
      }
      const token = channelToken(indexHtml) ?? channelToken(iframeHtml);
      if (token) {
        const socketUrl = origin.replace(/^http/u, "ws");
        const injectedName = `Zed\nexport const Evil = { play() { return "${PLAY_MARKER}" } }\nexport const Tail`;
        await sendChannel(socketUrl, origin, token, {
          type: "saveStoryRequest",
          args: [
            {
              id: "save-in-project",
              payload: {
                csfId: "button--primary",
                importPath: "src/Button.stories.tsx",
                args: "{}",
                name: injectedName,
              },
            },
          ],
          from: "lan-client",
        });
        await sendChannel(socketUrl, origin, token, {
          type: "saveStoryRequest",
          args: [
            {
              id: "save-outside",
              payload: {
                csfId: "button--primary",
                importPath: "../outside/Victim.stories.tsx",
                args: JSON.stringify({ label: OUTSIDE_MARKER }),
              },
            },
          ],
          from: "lan-client",
        });
        await sendChannel(socketUrl, origin, token, {
          type: "createNewStoryfileRequest",
          args: [
            {
              id: "create-story",
              payload: {
                componentFilePath: "src/Widget.tsx",
                componentExportName: `Widget }\nexport const Evil = { play() { return "${NEW_STORY_MARKER}" } };\nconst unused = {`,
                componentIsDefaultExport: false,
                componentExportCount: 1,
              },
            },
          ],
          from: "lan-client",
        });
        await sendChannel(socketUrl, origin, token, {
          type: "toggleWhatsNewNotifications",
          args: [{ disableWhatsNewNotifications: true }],
          from: "lan-client",
        });
        await new Promise((resolve) => setTimeout(resolve, 1_000));
      }
    }

    assert.equal(
      sawPlay,
      false,
      "A non-loopback client wrote a play function into a story file",
    );
    assert.equal(
      (await readFile(storyFile, "utf-8")).includes(PLAY_MARKER),
      false,
      "A story file kept source written by a non-loopback client",
    );
    assert.equal(
      sawOutside,
      false,
      "A non-loopback client wrote a story file outside the project",
    );
    assert.equal(
      (await readFile(outsideFile, "utf-8")).includes(OUTSIDE_MARKER),
      false,
      "A file outside the project kept content written by a non-loopback client",
    );
    assert.equal(
      sawNewStory,
      false,
      "A non-loopback client created a story file",
    );
    assert.equal(
      existsSync(newStory) &&
        readFileSync(newStory, "utf-8").includes(NEW_STORY_MARKER),
      false,
      "A new story file kept source written by a non-loopback client",
    );
    assert.equal(
      sawConfig,
      false,
      "A non-loopback client rewrote the Storybook main config",
    );
    assert.equal(
      (await readFile(mainFile, "utf-8")).includes(CONFIG_FLAG),
      false,
      "The Storybook main config kept a change from a non-loopback client",
    );
  } finally {
    clearInterval(watch);
    if (child.exitCode == null && child.signalCode == null) {
      child.kill("SIGTERM");
      let finish;
      const exited = new Promise((resolve) => {
        finish = resolve;
      });
      const timer = setTimeout(() => {
        child.kill("SIGKILL");
        finish();
      }, 5_000);
      child.once("exit", () => {
        clearTimeout(timer);
        finish();
      });
      await exited;
    }
    await rm(root, { recursive: true, force: true });
  }
});
