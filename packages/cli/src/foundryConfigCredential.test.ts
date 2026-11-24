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

import * as fs from "node:fs";
import { mkdtemp, mkdir, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { afterEach, describe, expect, it, vi } from "vitest";

/**
 * Obvious non-secret placeholder. It matches the CLI JWT shape check and is
 * the only value these tests put in FOUNDRY_TOKEN.
 */
const PLACEHOLDER_TOKEN = "placeholder.placeholder.placeholder";

const INITIAL_STACK_URL = "https://untrusted.example";
const REWRITTEN_STACK_URL = "https://rewritten.example";

const SITE_DIRECTORY = "site-dist";
const WIDGET_DIRECTORY = "widget-dist";
const APPLICATION = "application-placeholder";
const WIDGET_SET = "widget-set-placeholder";

function clearEnv(saved: Map<string, string | undefined>): void {
  saved.set("FOUNDRY_TOKEN", process.env.FOUNDRY_TOKEN);
  saved.set("FOUNDRY_SDK_AUTH_TOKEN", process.env.FOUNDRY_SDK_AUTH_TOKEN);
  saved.set("OSDK_FOUNDRY_URL", process.env.OSDK_FOUNDRY_URL);
  saved.set("OSDK_TOKEN", process.env.OSDK_TOKEN);
  saved.set("OSDK_TOKEN_FILE", process.env.OSDK_TOKEN_FILE);
  saved.set("OSDK_APPLICATION", process.env.OSDK_APPLICATION);
  saved.set("OSDK_WIDGET_SET", process.env.OSDK_WIDGET_SET);
  saved.set("OSDK_DIRECTORY", process.env.OSDK_DIRECTORY);
  saved.set("OSDK_VERSION", process.env.OSDK_VERSION);
  saved.set("OSDK_YES", process.env.OSDK_YES);
  saved.set("OSDK_UPLOAD_ONLY", process.env.OSDK_UPLOAD_ONLY);
  saved.set("OSDK_SNAPSHOT", process.env.OSDK_SNAPSHOT);
  saved.set("OSDK_REPOSITORY", process.env.OSDK_REPOSITORY);
  saved.set(
    "JEMMA_JOB_CUSTOM_METADATA_PATH",
    process.env.JEMMA_JOB_CUSTOM_METADATA_PATH,
  );
  delete process.env.FOUNDRY_TOKEN;
  delete process.env.FOUNDRY_SDK_AUTH_TOKEN;
  delete process.env.OSDK_FOUNDRY_URL;
  delete process.env.OSDK_TOKEN;
  delete process.env.OSDK_TOKEN_FILE;
  delete process.env.OSDK_APPLICATION;
  delete process.env.OSDK_WIDGET_SET;
  delete process.env.OSDK_DIRECTORY;
  delete process.env.OSDK_VERSION;
  delete process.env.OSDK_YES;
  delete process.env.OSDK_UPLOAD_ONLY;
  delete process.env.OSDK_SNAPSHOT;
  delete process.env.OSDK_REPOSITORY;
  delete process.env.JEMMA_JOB_CUSTOM_METADATA_PATH;
}

function restoreEnv(saved: Map<string, string | undefined>): void {
  assignEnv("FOUNDRY_TOKEN", saved.get("FOUNDRY_TOKEN"));
  assignEnv("FOUNDRY_SDK_AUTH_TOKEN", saved.get("FOUNDRY_SDK_AUTH_TOKEN"));
  assignEnv("OSDK_FOUNDRY_URL", saved.get("OSDK_FOUNDRY_URL"));
  assignEnv("OSDK_TOKEN", saved.get("OSDK_TOKEN"));
  assignEnv("OSDK_TOKEN_FILE", saved.get("OSDK_TOKEN_FILE"));
  assignEnv("OSDK_APPLICATION", saved.get("OSDK_APPLICATION"));
  assignEnv("OSDK_WIDGET_SET", saved.get("OSDK_WIDGET_SET"));
  assignEnv("OSDK_DIRECTORY", saved.get("OSDK_DIRECTORY"));
  assignEnv("OSDK_VERSION", saved.get("OSDK_VERSION"));
  assignEnv("OSDK_YES", saved.get("OSDK_YES"));
  assignEnv("OSDK_UPLOAD_ONLY", saved.get("OSDK_UPLOAD_ONLY"));
  assignEnv("OSDK_SNAPSHOT", saved.get("OSDK_SNAPSHOT"));
  assignEnv("OSDK_REPOSITORY", saved.get("OSDK_REPOSITORY"));
  assignEnv(
    "JEMMA_JOB_CUSTOM_METADATA_PATH",
    saved.get("JEMMA_JOB_CUSTOM_METADATA_PATH"),
  );
}

function assignEnv(key: string, value: string | undefined): void {
  if (value === undefined) {
    if (key === "FOUNDRY_TOKEN") delete process.env.FOUNDRY_TOKEN;
    else if (key === "FOUNDRY_SDK_AUTH_TOKEN") {
      delete process.env.FOUNDRY_SDK_AUTH_TOKEN;
    } else if (key === "OSDK_FOUNDRY_URL") delete process.env.OSDK_FOUNDRY_URL;
    else if (key === "OSDK_TOKEN") delete process.env.OSDK_TOKEN;
    else if (key === "OSDK_TOKEN_FILE") delete process.env.OSDK_TOKEN_FILE;
    else if (key === "OSDK_APPLICATION") delete process.env.OSDK_APPLICATION;
    else if (key === "OSDK_WIDGET_SET") delete process.env.OSDK_WIDGET_SET;
    else if (key === "OSDK_DIRECTORY") delete process.env.OSDK_DIRECTORY;
    else if (key === "OSDK_VERSION") delete process.env.OSDK_VERSION;
    else if (key === "OSDK_YES") delete process.env.OSDK_YES;
    else if (key === "OSDK_UPLOAD_ONLY") delete process.env.OSDK_UPLOAD_ONLY;
    else if (key === "OSDK_SNAPSHOT") delete process.env.OSDK_SNAPSHOT;
    else if (key === "OSDK_REPOSITORY") delete process.env.OSDK_REPOSITORY;
    else if (key === "JEMMA_JOB_CUSTOM_METADATA_PATH") {
      delete process.env.JEMMA_JOB_CUSTOM_METADATA_PATH;
    }
    return;
  }
  if (key === "FOUNDRY_TOKEN") process.env.FOUNDRY_TOKEN = value;
  else if (key === "FOUNDRY_SDK_AUTH_TOKEN") {
    process.env.FOUNDRY_SDK_AUTH_TOKEN = value;
  } else if (key === "OSDK_FOUNDRY_URL") process.env.OSDK_FOUNDRY_URL = value;
  else if (key === "OSDK_TOKEN") process.env.OSDK_TOKEN = value;
  else if (key === "OSDK_TOKEN_FILE") process.env.OSDK_TOKEN_FILE = value;
  else if (key === "OSDK_APPLICATION") process.env.OSDK_APPLICATION = value;
  else if (key === "OSDK_WIDGET_SET") process.env.OSDK_WIDGET_SET = value;
  else if (key === "OSDK_DIRECTORY") process.env.OSDK_DIRECTORY = value;
  else if (key === "OSDK_VERSION") process.env.OSDK_VERSION = value;
  else if (key === "OSDK_YES") process.env.OSDK_YES = value;
  else if (key === "OSDK_UPLOAD_ONLY") process.env.OSDK_UPLOAD_ONLY = value;
  else if (key === "OSDK_SNAPSHOT") process.env.OSDK_SNAPSHOT = value;
  else if (key === "OSDK_REPOSITORY") process.env.OSDK_REPOSITORY = value;
  else if (key === "JEMMA_JOB_CUSTOM_METADATA_PATH") {
    process.env.JEMMA_JOB_CUSTOM_METADATA_PATH = value;
  }
}

interface CommandCase {
  name: string;
  kind: "site" | "widgetSet";
  args: string[];
  /** When set, the project file uses this stack URL instead of the initial host. */
  stackUrl?: string;
}

const COMMANDS: CommandCase[] = [
  {
    name: "site deploy",
    kind: "site",
    args: ["site", "deploy", "--version", "1.2.3"],
  },
  {
    name: "site deploy --uploadOnly",
    kind: "site",
    args: ["site", "deploy", "--version", "1.2.3", "--uploadOnly"],
  },
  {
    name: "site deploy --snapshot",
    kind: "site",
    args: ["site", "deploy", "--version", "1.2.3", "--snapshot"],
  },
  {
    name: "site version list",
    kind: "site",
    args: ["site", "version", "list"],
  },
  {
    name: "site version get",
    kind: "site",
    args: ["site", "version", "get"],
  },
  {
    name: "site version set",
    kind: "site",
    args: ["site", "version", "set", "1.2.3"],
  },
  {
    name: "site version unset --yes",
    kind: "site",
    args: ["site", "version", "unset", "--yes"],
  },
  {
    name: "site version delete --yes",
    kind: "site",
    args: ["site", "version", "delete", "1.2.3", "--yes"],
  },
  {
    name: "site version get with a path on the project stack URL",
    kind: "site",
    args: ["site", "version", "get"],
    stackUrl: `${INITIAL_STACK_URL}/stack`,
  },
  {
    name: "widgetset deploy",
    kind: "widgetSet",
    args: ["widgetset", "deploy"],
  },
  {
    name: "widgetset version list",
    kind: "widgetSet",
    args: ["widgetset", "version", "list"],
  },
  {
    name: "widgetset version info",
    kind: "widgetSet",
    args: ["widgetset", "version", "info", "1.2.3"],
  },
  {
    name: "widgetset version delete --yes",
    kind: "widgetSet",
    args: ["widgetset", "version", "delete", "1.2.3", "--yes"],
  },
];

interface ObservedRequest {
  url: string;
  method: string;
  authorization: string | null;
}

/**
 * Fails while a foundry.config.json stack URL can receive the developer token.
 * Passes when that token stays off every request until the host from the
 * project file is authorized outside the repository. The file is rewritten to
 * a second host after the first read, so a later read of the same path cannot
 * receive the token either. The developer passes no stack URL and confirms nothing.
 */
describe("project foundryUrl credential boundary", () => {
  const originalCwd = process.cwd();
  const savedEnv = new Map<string, string | undefined>();

  afterEach(() => {
    process.chdir(originalCwd);
    restoreEnv(savedEnv);
    savedEnv.clear();
    vi.unstubAllGlobals();
    vi.restoreAllMocks();
    vi.resetModules();
  });

  it.each(COMMANDS)(
    "$name does not attach the developer token to an untrusted project stack URL",
    async (command) => {
      const projectDir = await createProject(command);
      const configPath = path.join(projectDir, "foundry.config.json");
      const initialConfig = fs.readFileSync(configPath, "utf8");
      const rewrittenConfig = JSON.stringify(
        command.kind === "site"
          ? siteConfig(REWRITTEN_STACK_URL)
          : widgetSetConfig(REWRITTEN_STACK_URL),
      );
      const before = snapshotProject(projectDir);
      const output = captureOutput();
      const observed = installNetworkStandIn();
      installConfigRewrite(configPath, rewrittenConfig);
      installProcessExitGuard();

      clearEnv(savedEnv);
      process.env.FOUNDRY_TOKEN = PLACEHOLDER_TOKEN;
      process.chdir(projectDir);

      vi.resetModules();
      const { cli } = await import("./cli.js");
      let thrown: unknown;
      try {
        // hideBin drops the first two entries. No --foundryUrl and no --token:
        // the stack URL comes from the project file and the token from the environment.
        await cli(["node", "osdk", ...command.args]);
      } catch (error) {
        thrown = error;
      } finally {
        output.restore();
      }

      const leaked = observed.requests.filter(carriesPlaceholderToken);
      const outputText = output.text();
      const after = snapshotProject(projectDir);

      expect(
        leaked.map((request) => `${request.method} ${request.url}`),
        [
          `${command.name} attached the FOUNDRY_TOKEN placeholder to a request.`,
          `Request targets: ${
            observed.requests
              .map((request) => `${request.method} ${request.url}`)
              .join(", ") || "(none)"
          }`,
          `Command output mentioned an untrusted host: ${
            outputText.includes("untrusted.example") ||
            outputText.includes("rewritten.example")
          }`,
          `Thrown: ${
            thrown instanceof Error ? thrown.message : String(thrown ?? "")
          }`,
        ].join("\n"),
      ).toEqual([]);

      expect(
        projectDiff(before, after, [initialConfig, rewrittenConfig]),
      ).toEqual([]);
    },
    20_000,
  );
});

function siteConfig(foundryUrl: string): {
  foundryUrl: string;
  site: { application: string; directory: string };
} {
  return {
    foundryUrl,
    site: {
      application: APPLICATION,
      directory: SITE_DIRECTORY,
    },
  };
}

function widgetSetConfig(foundryUrl: string): {
  foundryUrl: string;
  widgetSet: { rid: string; directory: string };
} {
  return {
    foundryUrl,
    widgetSet: {
      rid: WIDGET_SET,
      directory: WIDGET_DIRECTORY,
    },
  };
}

async function createProject(command: CommandCase): Promise<string> {
  const projectDir = await mkdtemp(path.join(tmpdir(), "osdk-stack-url-"));
  const foundryUrl = command.stackUrl ?? INITIAL_STACK_URL;
  const config =
    command.kind === "site"
      ? siteConfig(foundryUrl)
      : widgetSetConfig(foundryUrl);
  await writeFile(
    path.join(projectDir, "foundry.config.json"),
    JSON.stringify(config),
  );
  await mkdir(path.join(projectDir, SITE_DIRECTORY), { recursive: true });
  await writeFile(
    path.join(projectDir, SITE_DIRECTORY, "index.html"),
    "<p>site</p>",
  );
  const manifestDir = path.join(projectDir, WIDGET_DIRECTORY, ".palantir");
  await mkdir(manifestDir, { recursive: true });
  await writeFile(
    path.join(manifestDir, "widgets.config.json"),
    JSON.stringify({ widgetSet: { version: "1.2.3" } }),
  );
  return projectDir;
}

function installNetworkStandIn(): { requests: ObservedRequest[] } {
  const requests: ObservedRequest[] = [];
  const fetchImpl: typeof fetch = async (input, init) => {
    const url = requestUrl(input);
    const headers = new Headers(init?.headers);
    if (input instanceof Request) {
      input.headers.forEach((value, key) => {
        if (!headers.has(key)) {
          headers.set(key, value);
        }
      });
    }
    await drainBody(
      init?.body ?? (input instanceof Request ? input.body : undefined),
    );
    requests.push({
      url,
      method: init?.method ?? (input instanceof Request ? input.method : "GET"),
      authorization: headers.get("authorization"),
    });
    return Response.json({
      data: [],
      subdomains: [],
      version: "1.2.3",
      deployedVersion: "1.2.3",
    });
  };
  vi.stubGlobal("fetch", fetchImpl);
  return { requests };
}

function installConfigRewrite(
  configPath: string,
  rewrittenConfig: string,
): void {
  const readFile = fs.promises.readFile.bind(fs.promises);
  let rewritten = false;
  vi.spyOn(fs.promises, "readFile").mockImplementation(
    async (file, options) => {
      const contents = await readFile(file, options);
      if (!rewritten && samePath(file, configPath)) {
        rewritten = true;
        await fs.promises.writeFile(configPath, rewrittenConfig);
      }
      return contents;
    },
  );
}

function installProcessExitGuard(): void {
  vi.spyOn(process, "exit").mockImplementation((code) => {
    throw new Error(`process.exit ${String(code)}`);
  });
}

function carriesPlaceholderToken(request: ObservedRequest): boolean {
  const headerCarriesToken =
    request.authorization === `Bearer ${PLACEHOLDER_TOKEN}`;
  const urlCarriesToken = request.url.includes(PLACEHOLDER_TOKEN);
  return headerCarriesToken || urlCarriesToken;
}

function requestUrl(input: RequestInfo | URL): string {
  if (typeof input === "string") {
    return input;
  }
  if (input instanceof URL) {
    return input.toString();
  }
  return input.url;
}

async function drainBody(body: BodyInit | null | undefined): Promise<void> {
  if (body == null || typeof body === "string") {
    return;
  }
  if (
    body instanceof URLSearchParams ||
    body instanceof Blob ||
    body instanceof FormData
  ) {
    return;
  }
  if (body instanceof ArrayBuffer || ArrayBuffer.isView(body)) {
    return;
  }
  if (typeof body.getReader !== "function") {
    return;
  }
  const reader = body.getReader();
  try {
    while (!(await reader.read()).done) {
      // The upload path streams a zip. Drain it so the archiver can finish.
    }
  } finally {
    reader.releaseLock();
  }
}

function samePath(
  file: Parameters<typeof fs.promises.readFile>[0],
  expected: string,
): boolean {
  if (typeof file === "string") {
    return path.resolve(file) === path.resolve(expected);
  }
  if (file instanceof URL) {
    return fileURLToPath(file) === path.resolve(expected);
  }
  return false;
}

function snapshotProject(dir: string): Map<string, string> {
  const files = new Map<string, string>();
  const walk = (current: string): void => {
    for (const entry of fs.readdirSync(current, { withFileTypes: true })) {
      const full = path.join(current, entry.name);
      if (entry.isDirectory()) {
        walk(full);
      } else if (entry.isFile()) {
        files.set(path.relative(dir, full), fs.readFileSync(full, "utf8"));
      }
    }
  };
  walk(dir);
  return files;
}

function projectDiff(
  before: Map<string, string>,
  after: Map<string, string>,
  allowedConfig: string[],
): string[] {
  const problems: string[] = [];
  for (const [file, contents] of after) {
    if (file === "foundry.config.json") {
      if (!allowedConfig.includes(contents)) {
        problems.push("foundry.config.json changed to unexpected contents");
      }
      continue;
    }
    if (!before.has(file)) {
      problems.push(`created ${file}`);
    } else if (before.get(file) !== contents) {
      problems.push(`modified ${file}`);
    }
  }
  for (const file of before.keys()) {
    if (!after.has(file)) {
      problems.push(`deleted ${file}`);
    }
  }
  return problems;
}

function captureOutput(): { text: () => string; restore: () => void } {
  const chunks: string[] = [];
  const stdout = process.stdout.write.bind(process.stdout);
  const stderr = process.stderr.write.bind(process.stderr);
  const record = (chunk: unknown): void => {
    if (typeof chunk === "string") {
      chunks.push(chunk);
    } else if (chunk instanceof Uint8Array) {
      chunks.push(Buffer.from(chunk).toString("utf8"));
    }
  };
  process.stdout.write = ((
    chunk: unknown,
    encoding?: unknown,
    cb?: unknown,
  ) => {
    record(chunk);
    return stdout(chunk as never, encoding as never, cb as never);
  }) as typeof process.stdout.write;
  process.stderr.write = ((
    chunk: unknown,
    encoding?: unknown,
    cb?: unknown,
  ) => {
    record(chunk);
    return stderr(chunk as never, encoding as never, cb as never);
  }) as typeof process.stderr.write;
  return {
    text: () => chunks.join(""),
    restore: () => {
      process.stdout.write = stdout as typeof process.stdout.write;
      process.stderr.write = stderr as typeof process.stderr.write;
    },
  };
}
