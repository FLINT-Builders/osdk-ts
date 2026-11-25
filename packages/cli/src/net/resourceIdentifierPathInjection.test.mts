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
import { tmpdir } from "node:os";
import path from "node:path";

import { afterEach, describe, expect, it, vi } from "vitest";

const STACK = "https://stack.example.test";
const TOKEN = "placeholder.placeholder.placeholder";
const VERSION = "1.2.3";
const BENIGN_WIDGET_SET = "ri.widgetregistry..widget-set.legitimate";

const RESPONSE_BODY = {
  version: VERSION,
  subdomains: [] as string[],
  deployedVersion: VERSION,
  data: [
    {
      version: VERSION,
      widgetSetRid: BENIGN_WIDGET_SET,
      locator: {
        repositoryRid: BENIGN_WIDGET_SET,
        repositoryVersion: VERSION,
      },
    },
  ],
};

interface Route {
  method: string;
  prefix: string;
  suffix: string;
  queryKeys: readonly string[];
}

interface CapturedRequest {
  url: string;
  method: string;
  authorization: string | null;
}

interface CommandCase {
  args: readonly string[];
  routes: readonly Route[];
}

const APPLICATION_PREFIX = "/api/v2/thirdPartyApplications/";
const WIDGET_SET_PREFIX = "/api/v2/widgets/widgetSets/";
const REPOSITORY_PREFIX = "/api/v2/widgets/repositories/";

function applicationRoute(
  method: string,
  suffix: string,
  queryKeys: readonly string[],
): Route {
  return { method, prefix: APPLICATION_PREFIX, suffix, queryKeys };
}

function widgetSetRoute(
  method: string,
  suffix: string,
  queryKeys: readonly string[],
): Route {
  return { method, prefix: WIDGET_SET_PREFIX, suffix, queryKeys };
}

function repositoryRoute(
  method: string,
  suffix: string,
  queryKeys: readonly string[],
): Route {
  return { method, prefix: REPOSITORY_PREFIX, suffix, queryKeys };
}

/**
 * Identifiers that the URL parser treats as path, query, or fragment syntax
 * when they are inserted without percent-encoding. Each one avoids the other
 * sentinel characters so a check for only one of them cannot hide the rest.
 */
const IDENTIFIERS = {
  "parent-directory segments":
    "x/../../../../api/v2/widgets/widgetSets/ri.widgetregistry..widget-set.victim/releases/1.2.3",
  "question mark":
    "ri.third-party-applications.main.application.legitimate?injected=1",
  "hash mark":
    "ri.third-party-applications.main.application.legitimate#fragment",
  backslash:
    "x\\..\\..\\..\\..\\api\\v2\\widgets\\widgetSets\\ri.widgetregistry..widget-set.victim\\releases\\1.2.3",
} as const;

function siteCommands(): CommandCase[] {
  return [
    {
      args: ["site", "version", "set", VERSION],
      routes: [applicationRoute("POST", "/website/deploy", ["preview"])],
    },
    {
      args: ["site", "version", "delete", VERSION, "--yes"],
      routes: [
        applicationRoute("DELETE", `/website/versions/${VERSION}`, ["preview"]),
      ],
    },
    {
      args: ["site", "version", "unset", "--yes"],
      routes: [applicationRoute("POST", "/website/undeploy", ["preview"])],
    },
    {
      args: ["site", "version", "get"],
      routes: [applicationRoute("GET", "/website", ["preview"])],
    },
    {
      args: ["site", "version", "list"],
      routes: [
        applicationRoute("GET", "/website/versions", ["preview"]),
        applicationRoute("GET", "/website", ["preview"]),
      ],
    },
    {
      args: ["site", "deploy", "--version", VERSION],
      routes: [
        applicationRoute("POST", "/website/versions/upload", [
          "preview",
          "version",
        ]),
        applicationRoute("POST", "/website/deploy", ["preview"]),
      ],
    },
    {
      args: ["site", "deploy", "--version", VERSION, "--uploadOnly"],
      routes: [
        applicationRoute("POST", "/website/versions/upload", [
          "preview",
          "version",
        ]),
        applicationRoute("GET", "/website", ["preview"]),
      ],
    },
    {
      args: ["site", "deploy", "--version", VERSION, "--snapshot"],
      routes: [
        applicationRoute("POST", "/website/versions/uploadSnapshot", [
          "preview",
          "version",
        ]),
      ],
    },
  ];
}

function widgetSetCommands(): CommandCase[] {
  return [
    {
      args: ["widgetset", "version", "delete", VERSION, "--yes"],
      routes: [widgetSetRoute("DELETE", `/releases/${VERSION}`, ["preview"])],
    },
    {
      args: ["widgetset", "version", "info", VERSION],
      routes: [widgetSetRoute("GET", `/releases/${VERSION}`, ["preview"])],
    },
    {
      args: ["widgetset", "version", "list"],
      routes: [widgetSetRoute("GET", "/releases", ["preview"])],
    },
    {
      // With no repository override, publish still inserts the widget set rid
      // into the repositories path.
      args: ["widgetset", "deploy"],
      routes: [
        repositoryRoute("POST", "/publish", ["preview", "repositoryVersion"]),
      ],
    },
  ];
}

function repositoryCommands(): CommandCase[] {
  return [
    {
      args: ["widgetset", "deploy"],
      routes: [
        repositoryRoute("POST", "/publish", ["preview", "repositoryVersion"]),
      ],
    },
  ];
}

describe.sequential("resource identifier path injection", () => {
  const previousCwd = process.cwd();

  afterEach(() => {
    process.chdir(previousCwd);
    vi.unstubAllGlobals();
    vi.restoreAllMocks();
  });

  for (const [name, identifier] of Object.entries(IDENTIFIERS)) {
    it(`keeps a site ${name} on the third-party application path`, async () => {
      await expectCommands(
        {
          foundryUrl: STACK,
          site: { application: identifier, directory: "site" },
        },
        identifier,
        siteCommands(),
      );
    });

    it(`keeps a widget set ${name} on the widget set path`, async () => {
      await expectCommands(
        {
          foundryUrl: STACK,
          widgetSet: { rid: identifier, directory: "widget" },
        },
        identifier,
        widgetSetCommands(),
      );
    });

    it(`keeps a code repository ${name} on the repository path`, async () => {
      await expectCommands(
        {
          foundryUrl: STACK,
          widgetSet: {
            rid: BENIGN_WIDGET_SET,
            directory: "widget",
            repository: identifier,
          },
        },
        identifier,
        repositoryCommands(),
      );
    });
  }
});

async function expectCommands(
  config: unknown,
  identifier: string,
  commands: readonly CommandCase[],
): Promise<void> {
  const previousCwd = process.cwd();
  const root = await mkdtemp(path.join(tmpdir(), "osdk-rid-"));
  await writeFile(
    path.join(root, "foundry.config.json"),
    JSON.stringify(config),
  );
  await mkdir(path.join(root, "site"), { recursive: true });
  await writeFile(
    path.join(root, "site", "index.html"),
    "<!doctype html><title>site</title>\n",
  );
  await mkdir(path.join(root, "widget", ".palantir"), { recursive: true });
  await writeFile(
    path.join(root, "widget", ".palantir", "widgets.config.json"),
    JSON.stringify({ widgetSet: { version: VERSION } }),
  );

  const savedEnv = clearCredentialEnv();
  process.chdir(root);
  try {
    vi.resetModules();
    const calls: CapturedRequest[] = [];
    installFetch(calls);
    vi.spyOn(process, "exit").mockImplementation(() => {
      throw new Error("process.exit");
    });

    const common = await import("@osdk/cli.common");
    const site = await import("../commands/site/index.js");
    const widgetSet = await import("../commands/widgetset/index.js");

    const failures: string[] = [];
    for (const command of commands) {
      calls.length = 0;
      try {
        await common
          .getYargsBase(["node", "osdk", ...command.args, "--token", TOKEN])
          .command(site.default)
          .command(widgetSet.default)
          .parseAsync();
      } catch {
        // A fix may reject the identifier, or yargs may exit after doing so.
        // Requests already handed to fetch are still asserted below.
      }
      try {
        assertRequestsStayOnRoute(calls, identifier, command.routes);
      } catch (error) {
        const message = error instanceof Error ? error.message : String(error);
        failures.push(`${command.args.join(" ")}: ${message}`);
      }
    }
    expect(failures, failures.join("\n\n")).toEqual([]);
  } finally {
    restoreEnv(savedEnv);
    process.chdir(previousCwd);
    await rm(root, { recursive: true, force: true });
  }
}

function assertRequestsStayOnRoute(
  calls: readonly CapturedRequest[],
  identifier: string,
  routes: readonly Route[],
): void {
  if (calls.length === 0) {
    return;
  }

  const detail = calls
    .map(
      (call) =>
        `${call.method} ${call.url} authorization=${call.authorization ?? "absent"}`,
    )
    .join("\n");
  expect(calls, detail).toHaveLength(routes.length);

  const remaining = [...routes];
  for (const call of calls) {
    const index = remaining.findIndex((route) =>
      requestMatchesRoute(call, identifier, route),
    );
    expect(index, detail).not.toBe(-1);
    if (index !== -1) {
      remaining.splice(index, 1);
    }
  }
}

function requestMatchesRoute(
  call: CapturedRequest,
  identifier: string,
  route: Route,
): boolean {
  if (call.method !== route.method) {
    return false;
  }
  if (call.authorization !== `Bearer ${TOKEN}`) {
    return false;
  }

  let url: URL;
  try {
    url = new URL(call.url);
  } catch {
    return false;
  }

  if (url.origin !== STACK || url.username !== "" || url.password !== "") {
    return false;
  }
  if (url.hash !== "") {
    return false;
  }
  if (
    !url.pathname.startsWith(route.prefix) ||
    !url.pathname.endsWith(route.suffix)
  ) {
    return false;
  }

  const middle = url.pathname.slice(
    route.prefix.length,
    url.pathname.length - route.suffix.length,
  );
  if (middle.length === 0 || middle.includes("/")) {
    return false;
  }

  let decoded: string;
  try {
    decoded = decodeURIComponent(middle);
  } catch {
    return false;
  }
  if (decoded !== identifier) {
    return false;
  }

  for (const key of url.searchParams.keys()) {
    if (!route.queryKeys.includes(key)) {
      return false;
    }
  }
  return true;
}

function installFetch(calls: CapturedRequest[]): void {
  vi.stubGlobal(
    "fetch",
    async (input: RequestInfo | URL, init?: RequestInit) => {
      const url =
        input instanceof URL
          ? input.href
          : typeof input === "string"
            ? input
            : input.url;
      const headers = new Headers(init?.headers);
      calls.push({
        url,
        method: (init?.method ?? "GET").toUpperCase(),
        authorization: headers.get("authorization"),
      });
      await drainBody(init?.body);
      return Response.json(RESPONSE_BODY);
    },
  );
}

async function drainBody(body: BodyInit | null | undefined): Promise<void> {
  if (body == null || typeof body === "string") {
    return;
  }
  if (
    body instanceof Blob ||
    body instanceof ArrayBuffer ||
    ArrayBuffer.isView(body) ||
    body instanceof URLSearchParams ||
    body instanceof FormData
  ) {
    return;
  }
  if ("getReader" in body && typeof body.getReader === "function") {
    const reader = body.getReader();
    while (!(await reader.read()).done) {
      // The upload command finalizes the archive only once the body is read.
    }
  }
}

interface SavedCredentialEnv {
  FOUNDRY_TOKEN: string | undefined;
  FOUNDRY_SDK_AUTH_TOKEN: string | undefined;
  OSDK_APPLICATION: string | undefined;
  OSDK_DIRECTORY: string | undefined;
  OSDK_FOUNDRY_URL: string | undefined;
  OSDK_REPOSITORY: string | undefined;
  OSDK_TOKEN: string | undefined;
  OSDK_TOKEN_FILE: string | undefined;
  OSDK_WIDGET_SET: string | undefined;
}

function clearCredentialEnv(): SavedCredentialEnv {
  const saved: SavedCredentialEnv = {
    FOUNDRY_TOKEN: process.env.FOUNDRY_TOKEN,
    FOUNDRY_SDK_AUTH_TOKEN: process.env.FOUNDRY_SDK_AUTH_TOKEN,
    OSDK_APPLICATION: process.env.OSDK_APPLICATION,
    OSDK_DIRECTORY: process.env.OSDK_DIRECTORY,
    OSDK_FOUNDRY_URL: process.env.OSDK_FOUNDRY_URL,
    OSDK_REPOSITORY: process.env.OSDK_REPOSITORY,
    OSDK_TOKEN: process.env.OSDK_TOKEN,
    OSDK_TOKEN_FILE: process.env.OSDK_TOKEN_FILE,
    OSDK_WIDGET_SET: process.env.OSDK_WIDGET_SET,
  };
  delete process.env.FOUNDRY_TOKEN;
  delete process.env.FOUNDRY_SDK_AUTH_TOKEN;
  delete process.env.OSDK_APPLICATION;
  delete process.env.OSDK_DIRECTORY;
  delete process.env.OSDK_FOUNDRY_URL;
  delete process.env.OSDK_REPOSITORY;
  delete process.env.OSDK_TOKEN;
  delete process.env.OSDK_TOKEN_FILE;
  delete process.env.OSDK_WIDGET_SET;
  return saved;
}

function restoreEnv(saved: SavedCredentialEnv): void {
  if (saved.FOUNDRY_TOKEN === undefined) {
    delete process.env.FOUNDRY_TOKEN;
  } else {
    process.env.FOUNDRY_TOKEN = saved.FOUNDRY_TOKEN;
  }
  if (saved.FOUNDRY_SDK_AUTH_TOKEN === undefined) {
    delete process.env.FOUNDRY_SDK_AUTH_TOKEN;
  } else {
    process.env.FOUNDRY_SDK_AUTH_TOKEN = saved.FOUNDRY_SDK_AUTH_TOKEN;
  }
  if (saved.OSDK_APPLICATION === undefined) {
    delete process.env.OSDK_APPLICATION;
  } else {
    process.env.OSDK_APPLICATION = saved.OSDK_APPLICATION;
  }
  if (saved.OSDK_DIRECTORY === undefined) {
    delete process.env.OSDK_DIRECTORY;
  } else {
    process.env.OSDK_DIRECTORY = saved.OSDK_DIRECTORY;
  }
  if (saved.OSDK_FOUNDRY_URL === undefined) {
    delete process.env.OSDK_FOUNDRY_URL;
  } else {
    process.env.OSDK_FOUNDRY_URL = saved.OSDK_FOUNDRY_URL;
  }
  if (saved.OSDK_REPOSITORY === undefined) {
    delete process.env.OSDK_REPOSITORY;
  } else {
    process.env.OSDK_REPOSITORY = saved.OSDK_REPOSITORY;
  }
  if (saved.OSDK_TOKEN === undefined) {
    delete process.env.OSDK_TOKEN;
  } else {
    process.env.OSDK_TOKEN = saved.OSDK_TOKEN;
  }
  if (saved.OSDK_TOKEN_FILE === undefined) {
    delete process.env.OSDK_TOKEN_FILE;
  } else {
    process.env.OSDK_TOKEN_FILE = saved.OSDK_TOKEN_FILE;
  }
  if (saved.OSDK_WIDGET_SET === undefined) {
    delete process.env.OSDK_WIDGET_SET;
  } else {
    process.env.OSDK_WIDGET_SET = saved.OSDK_WIDGET_SET;
  }
}
