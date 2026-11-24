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

import { execFileSync } from "node:child_process";
import * as fs from "node:fs";
import os from "node:os";
import path from "node:path";

import { getYargsBase } from "@osdk/cli.common";
import { afterEach, describe, expect, it, vi } from "vitest";

const PLACEHOLDER_TOKEN = "placeholder.placeholder.placeholder";
const OUTSIDE_MARKER = "OUTSIDE_DIRECTORY_MARKER";
const INSIDE_MARKER = "INSIDE_DIRECTORY_MARKER";
const STACK_HOST = "attacker.example";
const SITE_APPLICATION =
  "ri.third-party-applications.main.application.placeholder";
const WIDGET_SET_RID = "ri.widget.main.widget-set.placeholder";
const WIDGET_MANIFEST = JSON.stringify({
  widgetSet: { version: "1.2.3" },
});

interface CapturedRequest {
  url: string;
  method: string;
  authorization: string | null;
  body: Buffer;
}

interface ArchiveUpload {
  host: string;
  pathname: string;
  authorization: string | null;
  entries: string[];
  text: string;
}

interface CommandResult {
  threw: boolean;
  uploads: ArchiveUpload[];
}

const tempDirs: string[] = [];

afterEach(() => {
  vi.restoreAllMocks();
  vi.unstubAllGlobals();
  vi.resetModules();
  for (const dir of tempDirs.splice(0)) {
    fs.rmSync(dir, { recursive: true, force: true });
  }
});

describe("deploy directory stays inside the project", () => {
  it("uploads an in-project site directory to the configured stack", async () => {
    const project = writeProject("site", "safe");
    const result = await runDeploy(project.projectDir, [
      "site",
      "deploy",
      "--version",
      "1.2.3",
      "--uploadOnly",
      "--token",
      PLACEHOLDER_TOKEN,
    ]);

    expect(result.threw).toBe(false);
    expect(result.uploads).toHaveLength(1);
    expect(result.uploads[0]).toMatchObject({
      host: STACK_HOST,
      pathname: `/api/v2/thirdPartyApplications/${SITE_APPLICATION}/website/versions/upload`,
      authorization: `Bearer ${PLACEHOLDER_TOKEN}`,
    });
    expect(result.uploads[0]?.text).toContain(INSIDE_MARKER);
    expect(result.uploads[0]?.text).not.toContain(OUTSIDE_MARKER);
  });

  it("refuses a site directory that climbs out of the project", async () => {
    const project = writeProject("site", "..");
    const result = await runDeploy(project.projectDir, [
      "site",
      "deploy",
      "--version",
      "1.2.3",
      "--uploadOnly",
      "--token",
      PLACEHOLDER_TOKEN,
    ]);
    expectRefused(result);
  });

  it("refuses a site directory that points at a sibling outside the project", async () => {
    const project = writeProject("site", "../outside");
    const result = await runDeploy(project.projectDir, [
      "site",
      "deploy",
      "--version",
      "1.2.3",
      "--uploadOnly",
      "--token",
      PLACEHOLDER_TOKEN,
    ]);
    expectRefused(result);
  });

  it("refuses an absolute site directory outside the project", async () => {
    const project = writeProject("site", null);
    writeConfig(project.projectDir, "site", project.outsideDir);
    const result = await runDeploy(project.projectDir, [
      "site",
      "deploy",
      "--version",
      "1.2.3",
      "--uploadOnly",
      "--token",
      PLACEHOLDER_TOKEN,
    ]);
    expectRefused(result);
  });

  it("refuses a site directory symlink that resolves outside the project", async () => {
    const project = writeProject("site", "linked");
    fs.symlinkSync(project.outsideDir, path.join(project.projectDir, "linked"));
    const result = await runDeploy(project.projectDir, [
      "site",
      "deploy",
      "--version",
      "1.2.3",
      "--uploadOnly",
      "--token",
      PLACEHOLDER_TOKEN,
    ]);
    expectRefused(result);
  });

  it("does not upload files swapped onto a site directory after the path is checked", async () => {
    const project = writeProject("site", "linked");
    const link = path.join(project.projectDir, "linked");
    fs.symlinkSync(project.safeDir, link);
    const restore = armSymlinkSwap(link, project.outsideDir);
    try {
      const result = await runDeploy(project.projectDir, [
        "site",
        "deploy",
        "--version",
        "1.2.3",
        "--uploadOnly",
        "--token",
        PLACEHOLDER_TOKEN,
      ]);
      expect(
        result.uploads.every((upload) => !upload.text.includes(OUTSIDE_MARKER)),
      ).toBe(true);
    } finally {
      restore();
    }
  });

  it("uploads an in-project site snapshot without files from outside the project", async () => {
    const project = writeProject("site", "safe");
    const result = await runDeploy(project.projectDir, [
      "site",
      "deploy",
      "--version",
      "1.2.3",
      "--snapshot",
      "--token",
      PLACEHOLDER_TOKEN,
    ]);

    expect(result.threw).toBe(false);
    expect(result.uploads).toHaveLength(1);
    expect(result.uploads[0]?.pathname).toBe(
      `/api/v2/thirdPartyApplications/${SITE_APPLICATION}/website/versions/uploadSnapshot`,
    );
    expect(result.uploads[0]?.authorization).toBe(
      `Bearer ${PLACEHOLDER_TOKEN}`,
    );
    expect(result.uploads[0]?.text).toContain(INSIDE_MARKER);
    expect(result.uploads[0]?.text).not.toContain(OUTSIDE_MARKER);
  });

  it("refuses a site snapshot whose directory is outside the project", async () => {
    const project = writeProject("site", "../outside");
    const result = await runDeploy(project.projectDir, [
      "site",
      "deploy",
      "--version",
      "1.2.3",
      "--snapshot",
      "--token",
      PLACEHOLDER_TOKEN,
    ]);
    expectRefused(result);
  });

  it("publishes an in-project widget set to the configured stack", async () => {
    const project = writeProject("widgetSet", "safe");
    const result = await runDeploy(project.projectDir, [
      "widgetset",
      "deploy",
      "--token",
      PLACEHOLDER_TOKEN,
    ]);

    expect(result.threw).toBe(false);
    expect(result.uploads).toHaveLength(1);
    expect(result.uploads[0]).toMatchObject({
      host: STACK_HOST,
      pathname: `/api/v2/widgets/repositories/${WIDGET_SET_RID}/publish`,
      authorization: `Bearer ${PLACEHOLDER_TOKEN}`,
    });
    expect(result.uploads[0]?.text).toContain(INSIDE_MARKER);
    expect(result.uploads[0]?.text).not.toContain(OUTSIDE_MARKER);
  });

  it("refuses a widget set directory outside the project", async () => {
    const project = writeProject("widgetSet", "../outside");
    const result = await runDeploy(project.projectDir, [
      "widgetset",
      "deploy",
      "--token",
      PLACEHOLDER_TOKEN,
    ]);
    expectRefused(result);
  });

  it("refuses an absolute widget set directory outside the project", async () => {
    const project = writeProject("widgetSet", null);
    writeConfig(project.projectDir, "widgetSet", project.outsideDir);
    const result = await runDeploy(project.projectDir, [
      "widgetset",
      "deploy",
      "--token",
      PLACEHOLDER_TOKEN,
    ]);
    expectRefused(result);
  });

  it("refuses a widget set directory symlink that resolves outside the project", async () => {
    const project = writeProject("widgetSet", "linked");
    fs.symlinkSync(project.outsideDir, path.join(project.projectDir, "linked"));
    const result = await runDeploy(project.projectDir, [
      "widgetset",
      "deploy",
      "--token",
      PLACEHOLDER_TOKEN,
    ]);
    expectRefused(result);
  });

  it("does not publish files swapped onto a widget set directory after the path is checked", async () => {
    const project = writeProject("widgetSet", "linked");
    const link = path.join(project.projectDir, "linked");
    fs.symlinkSync(project.safeDir, link);
    const restore = armSymlinkSwap(link, project.outsideDir);
    try {
      const result = await runDeploy(project.projectDir, [
        "widgetset",
        "deploy",
        "--token",
        PLACEHOLDER_TOKEN,
      ]);
      expect(
        result.uploads.every((upload) => !upload.text.includes(OUTSIDE_MARKER)),
      ).toBe(true);
    } finally {
      restore();
    }
  });
});

function expectRefused(result: CommandResult): void {
  expect({
    refused: result.threw,
    uploads: result.uploads.map((upload) => ({
      host: upload.host,
      pathname: upload.pathname,
      sentPlaceholderToken:
        upload.authorization === `Bearer ${PLACEHOLDER_TOKEN}`,
      entries: upload.entries,
      containsOutsideMarker: upload.text.includes(OUTSIDE_MARKER),
    })),
  }).toEqual({
    refused: true,
    uploads: [],
  });
}

interface ProjectPaths {
  rootDir: string;
  projectDir: string;
  outsideDir: string;
  safeDir: string;
}

function writeProject(
  kind: "site" | "widgetSet",
  directory: string | null,
): ProjectPaths {
  const rootDir = fs.mkdtempSync(
    path.join(os.tmpdir(), "osdk-deploy-containment-"),
  );
  tempDirs.push(rootDir);
  const projectDir = path.join(rootDir, "project");
  const outsideDir = path.join(rootDir, "outside");
  const safeDir = path.join(projectDir, "safe");
  fs.mkdirSync(safeDir, { recursive: true });
  fs.mkdirSync(path.join(outsideDir, ".palantir"), { recursive: true });
  fs.mkdirSync(path.join(safeDir, ".palantir"), { recursive: true });
  fs.writeFileSync(path.join(safeDir, "index.html"), INSIDE_MARKER);
  fs.writeFileSync(
    path.join(safeDir, ".palantir", "widgets.config.json"),
    WIDGET_MANIFEST,
  );
  fs.writeFileSync(path.join(outsideDir, "secret.txt"), OUTSIDE_MARKER);
  fs.writeFileSync(
    path.join(outsideDir, ".palantir", "widgets.config.json"),
    WIDGET_MANIFEST,
  );
  if (directory != null) {
    writeConfig(projectDir, kind, directory);
  }
  return { rootDir, projectDir, outsideDir, safeDir };
}

function writeConfig(
  projectDir: string,
  kind: "site" | "widgetSet",
  directory: string,
): void {
  const config =
    kind === "site"
      ? {
          foundryUrl: `https://${STACK_HOST}`,
          site: {
            application: SITE_APPLICATION,
            directory,
          },
        }
      : {
          foundryUrl: `https://${STACK_HOST}`,
          widgetSet: {
            rid: WIDGET_SET_RID,
            directory,
          },
        };
  fs.mkdirSync(projectDir, { recursive: true });
  fs.writeFileSync(
    path.join(projectDir, "foundry.config.json"),
    JSON.stringify(config),
  );
}

async function runDeploy(
  projectDir: string,
  args: string[],
): Promise<CommandResult> {
  const previousCwd = process.cwd();
  const previousEnv = snapshotDeployEnv();
  const requests: CapturedRequest[] = [];
  vi.resetModules();
  vi.stubGlobal("fetch", (input: RequestInfo | URL, init?: RequestInit) =>
    captureFetch(input, init, requests),
  );
  const exitSpy = vi
    .spyOn(process, "exit")
    .mockImplementation((code?: string | number | null) => {
      throw new Error(`process.exit:${String(code)}`);
    });
  let threw = false;
  try {
    process.chdir(projectDir);
    const command =
      args[0] === "widgetset"
        ? (await import("./widgetset/index.js")).default
        : (await import("./site/index.js")).default;
    await getYargsBase(["node", "osdk", ...args])
      .command(command)
      .parseAsync();
  } catch {
    threw = true;
  } finally {
    exitSpy.mockRestore();
    restoreDeployEnv(previousEnv);
    process.chdir(previousCwd);
  }

  return {
    threw,
    uploads: requests.filter(isArchiveUpload).map(describeUpload),
  };
}

async function captureFetch(
  input: RequestInfo | URL,
  init: RequestInit | undefined,
  requests: CapturedRequest[],
): Promise<Response> {
  const url =
    input instanceof Request
      ? input.url
      : input instanceof URL
        ? input.toString()
        : input;
  const headers = new Headers(
    init?.headers ?? (input instanceof Request ? input.headers : undefined),
  );
  const rawBody =
    init?.body ?? (input instanceof Request ? input.body : undefined);
  const bodyPromise =
    rawBody == null ? Promise.resolve(Buffer.alloc(0)) : readBody(rawBody);
  await new Promise((resolve) => {
    setImmediate(resolve);
  });
  const body = await bodyPromise;
  requests.push({
    url,
    method: init?.method ?? (input instanceof Request ? input.method : "GET"),
    authorization: headers.get("authorization"),
    body,
  });
  return Response.json({ subdomains: [] });
}

async function readBody(body: BodyInit): Promise<Buffer> {
  if (typeof body === "string") {
    return Buffer.from(body);
  }
  if (body instanceof Uint8Array) {
    return Buffer.from(body);
  }
  if (body instanceof Blob) {
    return Buffer.from(await body.arrayBuffer());
  }
  return Buffer.from(await new Response(body).arrayBuffer());
}

function isArchiveUpload(request: CapturedRequest): boolean {
  return (
    request.method === "POST" && request.body.subarray(0, 2).toString() === "PK"
  );
}

function describeUpload(request: CapturedRequest): ArchiveUpload {
  const url = new URL(request.url);
  const listing = listZip(request.body);
  return {
    host: url.host,
    pathname: url.pathname,
    authorization: request.authorization,
    entries: listing.entries,
    text: listing.text,
  };
}

function listZip(body: Buffer): { entries: string[]; text: string } {
  const zipPath = path.join(
    os.tmpdir(),
    `osdk-deploy-zip-${process.pid}-${Date.now()}.zip`,
  );
  fs.writeFileSync(zipPath, body);
  try {
    const output = execFileSync(
      "python3",
      [
        "-c",
        [
          "import json, sys, zipfile",
          "archive = zipfile.ZipFile(sys.argv[1])",
          "rows = []",
          "for info in archive.infolist():",
          "    payload = archive.read(info)",
          "    rows.append({'name': info.filename, 'text': payload.decode('utf-8', 'replace')})",
          "print(json.dumps(rows))",
        ].join("\n"),
        zipPath,
      ],
      { encoding: "utf8" },
    );
    const rows = JSON.parse(output) as Array<{ name: string; text: string }>;
    return {
      entries: rows.map((row) => row.name),
      text: rows.map((row) => row.text).join("\n"),
    };
  } finally {
    fs.rmSync(zipPath, { force: true });
  }
}

const DEPLOY_ENV_KEYS = [
  "FOUNDRY_TOKEN",
  "FOUNDRY_SDK_AUTH_TOKEN",
  "OSDK_TOKEN",
  "OSDK_TOKEN_FILE",
  "OSDK_DIRECTORY",
  "OSDK_FOUNDRY_URL",
  "OSDK_APPLICATION",
  "OSDK_WIDGET_SET",
  "OSDK_UPLOAD_ONLY",
  "OSDK_VERSION",
  "OSDK_SNAPSHOT",
] as const;

function snapshotDeployEnv(): Record<
  (typeof DEPLOY_ENV_KEYS)[number],
  string | undefined
> {
  const saved = {
    FOUNDRY_TOKEN: process.env.FOUNDRY_TOKEN,
    FOUNDRY_SDK_AUTH_TOKEN: process.env.FOUNDRY_SDK_AUTH_TOKEN,
    OSDK_TOKEN: process.env.OSDK_TOKEN,
    OSDK_TOKEN_FILE: process.env.OSDK_TOKEN_FILE,
    OSDK_DIRECTORY: process.env.OSDK_DIRECTORY,
    OSDK_FOUNDRY_URL: process.env.OSDK_FOUNDRY_URL,
    OSDK_APPLICATION: process.env.OSDK_APPLICATION,
    OSDK_WIDGET_SET: process.env.OSDK_WIDGET_SET,
    OSDK_UPLOAD_ONLY: process.env.OSDK_UPLOAD_ONLY,
    OSDK_VERSION: process.env.OSDK_VERSION,
    OSDK_SNAPSHOT: process.env.OSDK_SNAPSHOT,
  };
  delete process.env.FOUNDRY_TOKEN;
  delete process.env.FOUNDRY_SDK_AUTH_TOKEN;
  delete process.env.OSDK_TOKEN;
  delete process.env.OSDK_TOKEN_FILE;
  delete process.env.OSDK_DIRECTORY;
  delete process.env.OSDK_FOUNDRY_URL;
  delete process.env.OSDK_APPLICATION;
  delete process.env.OSDK_WIDGET_SET;
  delete process.env.OSDK_UPLOAD_ONLY;
  delete process.env.OSDK_VERSION;
  delete process.env.OSDK_SNAPSHOT;
  return saved;
}

function restoreDeployEnv(
  saved: Record<(typeof DEPLOY_ENV_KEYS)[number], string | undefined>,
): void {
  restoreEnv("FOUNDRY_TOKEN", saved.FOUNDRY_TOKEN);
  restoreEnv("FOUNDRY_SDK_AUTH_TOKEN", saved.FOUNDRY_SDK_AUTH_TOKEN);
  restoreEnv("OSDK_TOKEN", saved.OSDK_TOKEN);
  restoreEnv("OSDK_TOKEN_FILE", saved.OSDK_TOKEN_FILE);
  restoreEnv("OSDK_DIRECTORY", saved.OSDK_DIRECTORY);
  restoreEnv("OSDK_FOUNDRY_URL", saved.OSDK_FOUNDRY_URL);
  restoreEnv("OSDK_APPLICATION", saved.OSDK_APPLICATION);
  restoreEnv("OSDK_WIDGET_SET", saved.OSDK_WIDGET_SET);
  restoreEnv("OSDK_UPLOAD_ONLY", saved.OSDK_UPLOAD_ONLY);
  restoreEnv("OSDK_VERSION", saved.OSDK_VERSION);
  restoreEnv("OSDK_SNAPSHOT", saved.OSDK_SNAPSHOT);
}

function restoreEnv(
  key: (typeof DEPLOY_ENV_KEYS)[number],
  value: string | undefined,
): void {
  if (value == null) {
    switch (key) {
      case "FOUNDRY_TOKEN":
        delete process.env.FOUNDRY_TOKEN;
        break;
      case "FOUNDRY_SDK_AUTH_TOKEN":
        delete process.env.FOUNDRY_SDK_AUTH_TOKEN;
        break;
      case "OSDK_TOKEN":
        delete process.env.OSDK_TOKEN;
        break;
      case "OSDK_TOKEN_FILE":
        delete process.env.OSDK_TOKEN_FILE;
        break;
      case "OSDK_DIRECTORY":
        delete process.env.OSDK_DIRECTORY;
        break;
      case "OSDK_FOUNDRY_URL":
        delete process.env.OSDK_FOUNDRY_URL;
        break;
      case "OSDK_APPLICATION":
        delete process.env.OSDK_APPLICATION;
        break;
      case "OSDK_WIDGET_SET":
        delete process.env.OSDK_WIDGET_SET;
        break;
      case "OSDK_UPLOAD_ONLY":
        delete process.env.OSDK_UPLOAD_ONLY;
        break;
      case "OSDK_VERSION":
        delete process.env.OSDK_VERSION;
        break;
      case "OSDK_SNAPSHOT":
        delete process.env.OSDK_SNAPSHOT;
        break;
      default: {
        const neverKey: never = key;
        throw new Error(neverKey);
      }
    }
    return;
  }
  process.env[key] = value;
}

function armSymlinkSwap(linkPath: string, outsidePath: string): () => void {
  const link = path.resolve(linkPath);
  let swapped = false;
  const swap = (): void => {
    if (swapped) {
      return;
    }
    swapped = true;
    fs.unlinkSync(link);
    fs.symlinkSync(outsidePath, link);
  };
  const matches = (target: fs.PathLike): boolean =>
    path.resolve(String(target)) === link;

  const originalStat = fs.promises.stat;
  const originalLstat = fs.promises.lstat;
  const originalRealpath = fs.promises.realpath;
  const originalRealpathNative = fs.realpathSync.native;

  fs.promises.stat = (async (target, options) => {
    const result = await originalStat(target, options);
    if (matches(target)) {
      swap();
    }
    return result;
  }) as typeof fs.promises.stat;
  fs.promises.lstat = (async (target, options) => {
    const result = await originalLstat(target, options);
    if (matches(target)) {
      swap();
    }
    return result;
  }) as typeof fs.promises.lstat;
  fs.promises.realpath = (async (target: fs.PathLike) => {
    const result = await originalRealpath(target);
    if (matches(target)) {
      swap();
    }
    return result;
  }) as typeof fs.promises.realpath;
  fs.realpathSync.native = ((target: fs.PathLike) => {
    const result = originalRealpathNative(target);
    if (matches(target)) {
      swap();
    }
    return result;
  }) as typeof fs.realpathSync.native;

  return () => {
    fs.promises.stat = originalStat;
    fs.promises.lstat = originalLstat;
    fs.promises.realpath = originalRealpath;
    fs.realpathSync.native = originalRealpathNative;
  };
}
