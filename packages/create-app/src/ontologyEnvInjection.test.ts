/*
 * Copyright 2023 Palantir Technologies, Inc. All rights reserved.
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

import fs from "node:fs";
import { createRequire } from "node:module";
import os from "node:os";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import vm from "node:vm";

import Handlebars from "handlebars";
import {
  afterAll,
  afterEach,
  beforeAll,
  beforeEach,
  describe,
  expect,
  test,
  vi,
} from "vitest";

import { createAuthorizationServer } from "../../oauth/src/common.js";
import { consola } from "./consola.js";
import {
  generateAuthlessEnvDevelopment,
  generateAuthlessEnvProduction,
  generateEnvDevelopment,
  generateEnvProduction,
} from "./generate/generateEnv.js";
import { promptOntologyAndOsdkPackageAndOsdkRegistryUrl } from "./prompts/promptOntologyAndOsdkPackageAndOsdkRegistryUrl.js";
import { run } from "./run.js";
import type { Template } from "./templates.js";

vi.mock("./consola.js");

let createdTemplatesModule = false;

beforeAll(() => {
  if (fs.existsSync(templatesModulePath)) {
    return;
  }
  fs.mkdirSync(path.dirname(templatesModulePath), { recursive: true });
  fs.writeFileSync(
    templatesModulePath,
    `import type { Template } from "../templates.js";
export const TEMPLATES: readonly Template[] = [
  {
    id: "template-vue",
    label: "Vue",
    envPrefix: "VITE_",
    buildDirectory: "./dist",
    hidden: false,
    authless: false,
    files: {
      "2.x": () => Promise.resolve(new Map()),
    },
  },
  {
    id: "template-react-public",
    label: "React (Public)",
    envPrefix: "VITE_",
    buildDirectory: "./dist",
    hidden: false,
    authless: true,
    files: {
      "2.x": () => Promise.resolve(new Map()),
    },
  },
];
`,
  );
  createdTemplatesModule = true;
});

afterAll(() => {
  if (!createdTemplatesModule) {
    return;
  }
  fs.rmSync(path.dirname(templatesModulePath), {
    recursive: true,
    force: true,
  });
});

const here = path.dirname(fileURLToPath(import.meta.url));
const packagesDir = path.resolve(here, "../..");
const templatesModulePath = path.join(here, "generatedNoCheck/templates.ts");

const LEGIT_FOUNDRY_URL = "https://example.palantirfoundry.com";
const LEGIT_APPLICATION_URL = "https://app.example.palantirfoundry.com";
const ONTOLOGY_RID =
  "ri.ontology.main.ontology.1df1ce4c-f9d2-0f78-a316-287f6ac80bb2";
const APPLICATION_RID =
  "ri.third-party-applications.main.application.00000000-0000-4000-8000-000000000001";
const PACKAGE_NAME = "@my-app/sdk";
const REGISTRY_URL =
  "https://example.palantirfoundry.com/artifacts/api/repositories/ri.artifacts.main.repository.00000000-0000-4000-8000-000000000002/contents/release/npm";
const CLIENT_ID = "123";
const SAFE_ONTOLOGY = /^ri\.ontology\.[A-Za-z0-9-]+\.ontology\.[A-Za-z0-9-]+$/u;

const ATTACK_URLS = ["http://[::1]", "https://injected%2eexample"] as const;
const LINE_BREAKS = ["\n", "\r\n", "\r"] as const;
const QUOTES = ['"', "'", "`"] as const;
const ENV_KEYS = [
  "VITE_FOUNDRY_API_URL",
  "VITE_FOUNDRY_CLIENT_ID",
  "VITE_FOUNDRY_REDIRECT_URL",
  "VITE_FOUNDRY_ONTOLOGY_RID",
  "EXPO_PUBLIC_FOUNDRY_API_URL",
  "EXPO_PUBLIC_FOUNDRY_CLIENT_ID",
  "EXPO_PUBLIC_FOUNDRY_REDIRECT_URL",
  "EXPO_PUBLIC_FOUNDRY_ONTOLOGY_RID",
];

type EnvPrefix = "VITE_" | "EXPO_PUBLIC_";
type EnvMode = "development" | "production";

interface ViteModule {
  loadEnv: (
    mode: string,
    envDir: string,
    prefixes?: string,
  ) => Record<string, string>;
  createServer: (config: Record<string, unknown>) => Promise<{
    transformIndexHtml: (url: string, html: string) => Promise<string>;
    transformRequest: (url: string) => Promise<{ code: string | null } | null>;
    close: () => Promise<void>;
  }>;
}

interface ExpoEnvModule {
  get: (
    projectRoot: string,
    options?: { force?: boolean },
  ) => { env: Record<string, string | undefined> };
}

type PlatformFetch = (
  client: {
    baseUrl: string;
    fetch: (input: string, init?: RequestInit) => Promise<Response>;
  },
  endpoint: readonly [
    number,
    string,
    number,
    string | undefined,
    string | undefined,
  ],
  ...args: string[]
) => Promise<unknown>;

let savedEnv: Array<[string, string | undefined]> = [];

beforeEach(() => {
  savedEnv = ENV_KEYS.map((key) => [key, process.env[key]]);
  clearScaffoldEnv();
  vi.mocked(consola.prompt).mockImplementation(() => {
    throw new Error("prompt called");
  });
});

afterEach(() => {
  restoreScaffoldEnv(savedEnv);
  vi.restoreAllMocks();
});

describe("ontology values that add an env assignment", () => {
  test("the ontology prompt does not return them", async () => {
    for (const ontology of ontologyPayloads("VITE_")) {
      await assertPromptRejectsOntology(ontology);
    }
    for (const ontology of ontologyPayloads("EXPO_PUBLIC_")) {
      await assertPromptRejectsOntology(ontology);
    }
  });

  test("development and production env files keep the requested Foundry URL", async () => {
    for (const prefix of ["VITE_", "EXPO_PUBLIC_"] as const) {
      for (const ontology of ontologyPayloads(prefix)) {
        await assertGeneratedUrl(
          capture(() =>
            generateEnvDevelopment({
              envPrefix: prefix,
              foundryUrl: LEGIT_FOUNDRY_URL,
              clientId: CLIENT_ID,
              corsProxy: false,
              ontology,
            }),
          ),
          "development",
          prefix,
          LEGIT_FOUNDRY_URL,
          `development ${label(ontology)}`,
        );
        await assertGeneratedUrl(
          capture(() =>
            generateEnvDevelopment({
              envPrefix: prefix,
              foundryUrl: LEGIT_FOUNDRY_URL,
              clientId: CLIENT_ID,
              corsProxy: true,
              ontology,
            }),
          ),
          "development",
          prefix,
          "http://localhost:8080",
          `development cors proxy ${label(ontology)}`,
        );
        await assertGeneratedUrl(
          capture(() =>
            generateEnvProduction({
              envPrefix: prefix,
              foundryUrl: LEGIT_FOUNDRY_URL,
              applicationUrl: LEGIT_APPLICATION_URL,
              clientId: CLIENT_ID,
              ontology,
            }),
          ),
          "production",
          prefix,
          LEGIT_FOUNDRY_URL,
          `production ${label(ontology)}`,
        );
        await assertGeneratedUrl(
          capture(() =>
            generateAuthlessEnvDevelopment({
              envPrefix: prefix,
              ontology,
            }),
          ),
          "development",
          prefix,
          "http://localhost:8080/api-proxy",
          `authless development ${label(ontology)}`,
        );
        await assertGeneratedUrl(
          capture(() =>
            generateAuthlessEnvProduction({
              envPrefix: prefix,
              applicationUrl: LEGIT_APPLICATION_URL,
              ontology,
            }),
          ),
          "production",
          prefix,
          `${LEGIT_APPLICATION_URL}/proxy`,
          `authless production ${label(ontology)}`,
        );
      }
    }
  });

  test("run writes env files that keep the requested Foundry URL", async () => {
    for (const prefix of ["VITE_", "EXPO_PUBLIC_"] as const) {
      for (const ontology of representativePayloads(prefix)) {
        await assertRunKeepsFoundryUrl({
          prefix,
          ontology,
          foundryUrl: LEGIT_FOUNDRY_URL,
          applicationUrl: LEGIT_APPLICATION_URL,
          expectedDevelopmentUrl: LEGIT_FOUNDRY_URL,
        });
      }
    }
  });

  test("the Vue dev server and OAuth client keep the requested Foundry host", async () => {
    for (const ontology of representativePayloads("VITE_")) {
      const contents = capture(() =>
        generateEnvDevelopment({
          envPrefix: "VITE_",
          foundryUrl: LEGIT_FOUNDRY_URL,
          clientId: CLIENT_ID,
          corsProxy: false,
          ontology,
        }),
      );
      if (contents == null) {
        continue;
      }
      const loaded = await loadViteEnv(contents, "development", "VITE_");
      const pageUrl = await readVitePageUrl(contents);
      const authServer = createAuthorizationServer("multipass", pageUrl);
      const apiHost = await foundryApiHost(pageUrl);
      expect(new URL(authServer.token_endpoint).host, label(ontology)).toBe(
        legitHost(),
      );
      expect(
        new URL(authServer.authorization_endpoint).host,
        label(ontology),
      ).toBe(legitHost());
      expect(apiHost, label(ontology)).toBe(legitHost());
      expect(pageUrl, label(ontology)).toBe(LEGIT_FOUNDRY_URL);
      expect(loaded, label(ontology)).toBe(LEGIT_FOUNDRY_URL);
    }
  });

  test("the Expo client keeps the requested Foundry host", async () => {
    for (const ontology of representativePayloads("EXPO_PUBLIC_")) {
      const contents = capture(() =>
        generateEnvDevelopment({
          envPrefix: "EXPO_PUBLIC_",
          foundryUrl: LEGIT_FOUNDRY_URL,
          clientId: CLIENT_ID,
          corsProxy: false,
          ontology,
        }),
      );
      if (contents == null) {
        continue;
      }
      const loaded = await loadExpoEnv(contents, "development");
      expect(loaded, label(ontology)).toBe(LEGIT_FOUNDRY_URL);
      const tokenEndpoint = `${loaded}/multipass/api/oauth2/token`;
      const authorizeEndpoint = `${loaded}/multipass/api/oauth2/authorize`;
      expect(new URL(tokenEndpoint).host).toBe(legitHost());
      expect(new URL(authorizeEndpoint).host).toBe(legitHost());
    }
  });
});

describe("other scaffold values that add an env assignment", () => {
  test("a Foundry URL with a second assignment does not replace the host", async () => {
    for (const prefix of ["VITE_", "EXPO_PUBLIC_"] as const) {
      for (const foundryUrl of urlPayloads(prefix, LEGIT_FOUNDRY_URL)) {
        await assertGeneratedUrl(
          capture(() =>
            generateEnvDevelopment({
              envPrefix: prefix,
              foundryUrl,
              clientId: CLIENT_ID,
              corsProxy: false,
              ontology: ONTOLOGY_RID,
            }),
          ),
          "development",
          prefix,
          LEGIT_FOUNDRY_URL,
          `foundryUrl development ${label(foundryUrl)}`,
        );
        await assertGeneratedUrl(
          capture(() =>
            generateEnvProduction({
              envPrefix: prefix,
              foundryUrl,
              applicationUrl: LEGIT_APPLICATION_URL,
              clientId: CLIENT_ID,
              ontology: ONTOLOGY_RID,
            }),
          ),
          "production",
          prefix,
          LEGIT_FOUNDRY_URL,
          `foundryUrl production ${label(foundryUrl)}`,
        );
      }
    }
  });

  test("an application URL with a second assignment does not replace the host", async () => {
    for (const prefix of ["VITE_", "EXPO_PUBLIC_"] as const) {
      for (const applicationUrl of urlPayloads(prefix, LEGIT_APPLICATION_URL)) {
        await assertGeneratedUrl(
          capture(() =>
            generateAuthlessEnvProduction({
              envPrefix: prefix,
              applicationUrl,
              ontology: ONTOLOGY_RID,
            }),
          ),
          "production",
          prefix,
          `${LEGIT_APPLICATION_URL}/proxy`,
          `applicationUrl ${label(applicationUrl)}`,
        );
        await assertGeneratedUrl(
          capture(() =>
            generateEnvProduction({
              envPrefix: prefix,
              foundryUrl: LEGIT_FOUNDRY_URL,
              applicationUrl,
              clientId: CLIENT_ID,
              ontology: ONTOLOGY_RID,
            }),
          ),
          "production",
          prefix,
          LEGIT_FOUNDRY_URL,
          `applicationUrl beside foundry URL ${label(applicationUrl)}`,
        );
      }
    }
  });

  test("run refuses a Foundry URL that adds an assignment before it writes", async () => {
    const foundryUrl = `${LEGIT_FOUNDRY_URL}\nVITE_FOUNDRY_API_URL=https://injected%2eexample`;
    await assertRunKeepsFoundryUrl({
      prefix: "VITE_",
      ontology: ONTOLOGY_RID,
      foundryUrl,
      applicationUrl: LEGIT_APPLICATION_URL,
      expectedDevelopmentUrl: LEGIT_FOUNDRY_URL,
    });
  });
});

describe("create-app command", () => {
  test("does not scaffold an ontology flag that adds an assignment", async () => {
    for (const ontology of representativePayloads("VITE_")) {
      await assertCliKeepsFoundryUrl(cliArgs({ ontology }), LEGIT_FOUNDRY_URL);
    }
  });

  test("does not scaffold a Foundry URL flag that adds an assignment", async () => {
    const foundryUrl = `${LEGIT_FOUNDRY_URL}\nVITE_FOUNDRY_API_URL=https://injected.example`;
    await assertCliKeepsFoundryUrl(cliArgs({ foundryUrl }), LEGIT_FOUNDRY_URL);
  });

  test("does not scaffold an application URL flag that adds an assignment", async () => {
    const applicationUrl = `${LEGIT_APPLICATION_URL}\nVITE_FOUNDRY_API_URL=https://injected.example`;
    await assertCliKeepsFoundryUrl(
      [
        "node",
        "create-osdk-app",
        "generated-app",
        "--overwrite",
        "--template",
        "template-react-public",
        "--foundryUrl",
        LEGIT_FOUNDRY_URL,
        "--applicationUrl",
        applicationUrl,
        "--application",
        APPLICATION_RID,
        "--sdkVersion",
        "2.x",
        "--ontology",
        ONTOLOGY_RID,
        "--osdkPackage",
        PACKAGE_NAME,
        "--osdkRegistryUrl",
        REGISTRY_URL,
      ],
      `${LEGIT_APPLICATION_URL}/proxy`,
      "production",
    );
  });
});

async function assertPromptRejectsOntology(ontology: string): Promise<void> {
  let returned: string | undefined;
  try {
    const result = await promptOntologyAndOsdkPackageAndOsdkRegistryUrl({
      ontology,
      osdkPackage: PACKAGE_NAME,
      osdkRegistryUrl: REGISTRY_URL,
      sdkVersion: "2.x",
    });
    returned = result.ontology;
  } catch {
    return;
  }
  expect(returned, label(ontology)).toMatch(SAFE_ONTOLOGY);
  expect(returned, label(ontology)).not.toMatch(/[\r\n"'`]/u);
}

async function assertGeneratedUrl(
  contents: string | undefined,
  mode: EnvMode,
  prefix: EnvPrefix,
  expected: string,
  message: string,
): Promise<void> {
  if (contents == null) {
    return;
  }
  const actual =
    prefix === "VITE_"
      ? await loadViteEnv(contents, mode, prefix)
      : await loadExpoEnv(contents, mode);
  expect(actual, message).toBe(expected);
  expect(new URL(actual).host, message).toBe(new URL(expected).host);
}

async function assertRunKeepsFoundryUrl({
  prefix,
  ontology,
  foundryUrl,
  applicationUrl,
  expectedDevelopmentUrl,
}: {
  prefix: EnvPrefix;
  ontology: string;
  foundryUrl: string;
  applicationUrl: string;
  expectedDevelopmentUrl: string;
}): Promise<void> {
  const parent = fs.mkdtempSync(path.join(os.tmpdir(), "osdk-run-"));
  const project = "generated-app";
  vi.spyOn(process, "cwd").mockReturnValue(parent);
  const projectDir = path.join(parent, project);
  let refused = false;
  try {
    await run({
      project,
      overwrite: true,
      template: templateFor(prefix),
      sdkVersion: "2.x",
      foundryUrl,
      applicationUrl,
      application: APPLICATION_RID,
      ontology,
      clientId: CLIENT_ID,
      osdkPackage: PACKAGE_NAME,
      osdkRegistryUrl: REGISTRY_URL,
      corsProxy: false,
      scopes: ["api:read-data"],
    });
  } catch {
    refused = true;
  }
  if (refused) {
    expect(fs.existsSync(projectDir), label(ontology)).toBe(false);
    return;
  }
  const development = fs.readFileSync(
    path.join(projectDir, ".env.development"),
    "utf-8",
  );
  const production = fs.readFileSync(
    path.join(projectDir, ".env.production"),
    "utf-8",
  );
  await assertGeneratedUrl(
    development,
    "development",
    prefix,
    expectedDevelopmentUrl,
    `run development ${label(ontology)}`,
  );
  await assertGeneratedUrl(
    production,
    "production",
    prefix,
    LEGIT_FOUNDRY_URL,
    `run production ${label(foundryUrl)}`,
  );
  fs.rmSync(parent, { recursive: true, force: true });
}

async function assertCliKeepsFoundryUrl(
  args: string[],
  expectedUrl: string,
  mode: EnvMode = "development",
): Promise<void> {
  const { cli } = await import("./cli.js");
  const parent = fs.mkdtempSync(path.join(os.tmpdir(), "osdk-cli-"));
  vi.spyOn(process, "cwd").mockReturnValue(parent);
  const projectDir = path.join(parent, "generated-app");
  let refused = false;
  try {
    await cli(args);
  } catch {
    refused = true;
  } finally {
    vi.mocked(process.cwd).mockRestore();
  }
  try {
    if (refused) {
      expect(fs.existsSync(projectDir)).toBe(false);
      return;
    }
    const envFile = fs.readFileSync(
      path.join(projectDir, `.env.${mode}`),
      "utf-8",
    );
    await assertGeneratedUrl(
      envFile,
      mode,
      "VITE_",
      expectedUrl,
      `cli ${mode}`,
    );
  } finally {
    fs.rmSync(parent, { recursive: true, force: true });
  }
}

async function readVitePageUrl(envContents: string): Promise<string> {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "osdk-vite-"));
  fs.mkdirSync(path.join(dir, "src"));
  fs.writeFileSync(path.join(dir, ".env.development"), envContents);
  fs.writeFileSync(path.join(dir, "src", "main.ts"), "export {};\n");
  fs.writeFileSync(
    path.join(dir, "env-probe.js"),
    "export const foundryUrl = import.meta.env.VITE_FOUNDRY_API_URL;\n",
  );
  const indexTemplate = fs.readFileSync(
    path.join(
      packagesDir,
      "create-app.template.vue.v2/templates/index.html.hbs",
    ),
    "utf-8",
  );
  const indexHtml = Handlebars.compile(indexTemplate)({
    osdkPackage: PACKAGE_NAME,
  });
  fs.writeFileSync(path.join(dir, "index.html"), indexHtml);
  const vite = await loadVite();
  const server = await vite.createServer({
    root: dir,
    configFile: false,
    logLevel: "silent",
    appType: "custom",
    server: { middlewareMode: true, hmr: false },
  });
  try {
    const transformed = await server.transformIndexHtml(
      "index.html",
      indexHtml,
    );
    const fromMeta = readMeta(transformed, "osdk-foundryUrl");
    const transformedModule = await server.transformRequest("/env-probe.js");
    const code = transformedModule?.code ?? "";
    const assignment = code.indexOf("import.meta.env = ");
    const jsonStart = code.indexOf("{", assignment);
    const jsonEnd = code.indexOf("};", jsonStart);
    if (assignment === -1 || jsonStart === -1 || jsonEnd === -1) {
      throw new Error("Vite did not define import.meta.env");
    }
    const envObject: unknown = JSON.parse(code.slice(jsonStart, jsonEnd + 1));
    if (
      typeof envObject !== "object" ||
      envObject == null ||
      !("VITE_FOUNDRY_API_URL" in envObject) ||
      typeof envObject.VITE_FOUNDRY_API_URL !== "string"
    ) {
      throw new Error("Vite did not expose VITE_FOUNDRY_API_URL");
    }
    expect(envObject.VITE_FOUNDRY_API_URL).toBe(fromMeta);
    return fromMeta;
  } finally {
    await server.close();
    fs.rmSync(dir, { recursive: true, force: true });
  }
}

async function foundryApiHost(foundryUrl: string): Promise<string> {
  const seen: string[] = [];
  const platformFetch = await loadPlatformFetch();
  const client = {
    baseUrl: foundryUrl,
    fetch: (input: string): Promise<Response> => {
      seen.push(input);
      return Promise.resolve(new Response(null, { status: 204 }));
    },
  };
  await platformFetch(
    client,
    [0, "/v2/ontologies/{ontologyRid}", 0, undefined, undefined],
    ONTOLOGY_RID,
  );
  const requested = seen[0];
  if (requested == null) {
    throw new Error("platform fetch did not request a URL");
  }
  return new URL(requested).host;
}

function ontologyPayloads(prefix: EnvPrefix): string[] {
  const payloads: string[] = [];
  for (const attackUrl of ATTACK_URLS) {
    for (const lineBreak of LINE_BREAKS) {
      payloads.push(
        `${ONTOLOGY_RID}${lineBreak}${prefix}FOUNDRY_API_URL=${attackUrl}`,
      );
    }
    for (const quote of QUOTES) {
      payloads.push(
        `${ONTOLOGY_RID}${quote}\n${prefix}FOUNDRY_API_URL=${attackUrl}`,
      );
    }
  }
  return payloads;
}

function representativePayloads(prefix: EnvPrefix): string[] {
  return [
    `${ONTOLOGY_RID}\n${prefix}FOUNDRY_API_URL=http://[::1]`,
    `${ONTOLOGY_RID}\n${prefix}FOUNDRY_API_URL=https://injected%2eexample`,
    `${ONTOLOGY_RID}"\n${prefix}FOUNDRY_API_URL=https://injected%2eexample`,
  ];
}

function urlPayloads(prefix: EnvPrefix, legitimate: string): string[] {
  return [
    `${legitimate}\n${prefix}FOUNDRY_API_URL=https://injected.example`,
    `${legitimate}\r\n${prefix}FOUNDRY_API_URL=https://injected%2eexample`,
    `${legitimate}"\n${prefix}FOUNDRY_API_URL=https://injected.example`,
    `${legitimate}'\n${prefix}FOUNDRY_API_URL=https://injected.example`,
  ];
}

function capture(produce: () => string): string | undefined {
  try {
    return produce();
  } catch {
    return undefined;
  }
}

async function loadViteEnv(
  contents: string,
  mode: EnvMode,
  prefix: string,
): Promise<string> {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "osdk-dotenv-"));
  fs.writeFileSync(path.join(dir, `.env.${mode}`), contents);
  try {
    const vite = await loadVite();
    const env = vite.loadEnv(mode, dir, prefix);
    const value = env[`${prefix}FOUNDRY_API_URL`];
    expect(value).toEqual(expect.any(String));
    return value ?? "";
  } finally {
    fs.rmSync(dir, { recursive: true, force: true });
  }
}

async function loadExpoEnv(contents: string, mode: EnvMode): Promise<string> {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "osdk-expo-env-"));
  fs.writeFileSync(path.join(dir, `.env.${mode}`), contents);
  const previous = process.env.NODE_ENV;
  process.env.NODE_ENV = mode === "production" ? "production" : "development";
  try {
    const expoEnv = await loadExpoEnvModule();
    const loaded = expoEnv.get(dir, { force: true });
    const value = loaded.env.EXPO_PUBLIC_FOUNDRY_API_URL;
    expect(value).toEqual(expect.any(String));
    return value ?? "";
  } finally {
    if (previous === undefined) {
      delete process.env.NODE_ENV;
    } else {
      process.env.NODE_ENV = previous;
    }
    fs.rmSync(dir, { recursive: true, force: true });
  }
}

function readMeta(html: string, name: string): string {
  const clientSource = fs.readFileSync(
    path.join(
      packagesDir,
      "create-app.template.vue.v2/templates/src/client.ts.hbs",
    ),
    "utf-8",
  );
  const start = clientSource.indexOf("function getMetaTagContent");
  const end = clientSource.indexOf("const foundryUrl = getMetaTagContent");
  const source = clientSource
    .slice(start, end)
    .replace(
      "function getMetaTagContent(tagName: string): string",
      "function getMetaTagContent(tagName)",
    );
  const context = vm.createContext({
    document: metaDocument(html),
  });
  const script = new vm.Script(
    `${source}\ngetMetaTagContent(${JSON.stringify(name)});`,
  );
  const value: unknown = script.runInContext(context);
  if (typeof value !== "string") {
    throw new TypeError("meta tag reader did not return a string");
  }
  return value;
}

function metaDocument(html: string): {
  querySelectorAll: (selector: string) => {
    length: number;
    item: (
      index: number,
    ) => { getAttribute: (name: string) => string | null } | null;
  };
} {
  return {
    querySelectorAll: (selector) => {
      const match = /^meta\[name="([^"]+)"\]$/u.exec(selector);
      if (match == null) {
        throw new Error(`unsupported selector ${selector}`);
      }
      const expectedName = match[1] ?? "";
      const elements: Array<{
        getAttribute: (name: string) => string | null;
      }> = [];
      for (const tag of html.matchAll(/<meta\b([^>]*)>/giu)) {
        const attrs = new Map<string, string>();
        for (const attr of (tag[1] ?? "").matchAll(/([^\s=/]+)="([^"]*)"/gu)) {
          const attrName = attr[1];
          const attrValue = attr[2];
          if (attrName != null && attrValue != null) {
            attrs.set(attrName, attrValue);
          }
        }
        if (attrs.get("name") === expectedName) {
          elements.push({
            getAttribute: (attrName) => attrs.get(attrName) ?? null,
          });
        }
      }
      return {
        length: elements.length,
        item: (index) => elements[index] ?? null,
      };
    },
  };
}

function templateFor(prefix: EnvPrefix): Template {
  return {
    id: prefix === "VITE_" ? "template-vue" : "template-expo",
    label: prefix === "VITE_" ? "Vue" : "Expo",
    envPrefix: prefix,
    buildDirectory: "./dist",
    files: {
      "2.x": () => Promise.resolve(new Map()),
    },
  };
}

function cliArgs({
  ontology = ONTOLOGY_RID,
  foundryUrl = LEGIT_FOUNDRY_URL,
  applicationUrl = LEGIT_APPLICATION_URL,
}: {
  ontology?: string;
  foundryUrl?: string;
  applicationUrl?: string;
}): string[] {
  return [
    "node",
    "create-osdk-app",
    "generated-app",
    "--overwrite",
    "--template",
    "template-vue",
    "--foundryUrl",
    foundryUrl,
    "--applicationUrl",
    applicationUrl,
    "--application",
    APPLICATION_RID,
    "--clientId",
    CLIENT_ID,
    "--corsProxy",
    "false",
    "--sdkVersion",
    "2.x",
    "--scopes",
    "api:read-data",
    "--ontology",
    ontology,
    "--osdkPackage",
    PACKAGE_NAME,
    "--osdkRegistryUrl",
    REGISTRY_URL,
  ];
}

function legitHost(): string {
  return new URL(LEGIT_FOUNDRY_URL).host;
}

function clearScaffoldEnv(): void {
  delete process.env.VITE_FOUNDRY_API_URL;
  delete process.env.VITE_FOUNDRY_CLIENT_ID;
  delete process.env.VITE_FOUNDRY_REDIRECT_URL;
  delete process.env.VITE_FOUNDRY_ONTOLOGY_RID;
  delete process.env.EXPO_PUBLIC_FOUNDRY_API_URL;
  delete process.env.EXPO_PUBLIC_FOUNDRY_CLIENT_ID;
  delete process.env.EXPO_PUBLIC_FOUNDRY_REDIRECT_URL;
  delete process.env.EXPO_PUBLIC_FOUNDRY_ONTOLOGY_RID;
}

function restoreScaffoldEnv(
  saved: ReadonlyArray<readonly [string, string | undefined]>,
): void {
  clearScaffoldEnv();
  for (const [key, value] of saved) {
    if (value === undefined) {
      continue;
    }
    switch (key) {
      case "VITE_FOUNDRY_API_URL":
        process.env.VITE_FOUNDRY_API_URL = value;
        break;
      case "VITE_FOUNDRY_CLIENT_ID":
        process.env.VITE_FOUNDRY_CLIENT_ID = value;
        break;
      case "VITE_FOUNDRY_REDIRECT_URL":
        process.env.VITE_FOUNDRY_REDIRECT_URL = value;
        break;
      case "VITE_FOUNDRY_ONTOLOGY_RID":
        process.env.VITE_FOUNDRY_ONTOLOGY_RID = value;
        break;
      case "EXPO_PUBLIC_FOUNDRY_API_URL":
        process.env.EXPO_PUBLIC_FOUNDRY_API_URL = value;
        break;
      case "EXPO_PUBLIC_FOUNDRY_CLIENT_ID":
        process.env.EXPO_PUBLIC_FOUNDRY_CLIENT_ID = value;
        break;
      case "EXPO_PUBLIC_FOUNDRY_REDIRECT_URL":
        process.env.EXPO_PUBLIC_FOUNDRY_REDIRECT_URL = value;
        break;
      case "EXPO_PUBLIC_FOUNDRY_ONTOLOGY_RID":
        process.env.EXPO_PUBLIC_FOUNDRY_ONTOLOGY_RID = value;
        break;
      default:
        break;
    }
  }
}

function label(value: string): string {
  return JSON.stringify(value);
}

let viteModule: ViteModule | undefined;
async function loadVite(): Promise<ViteModule> {
  if (viteModule != null) {
    return viteModule;
  }
  const vuePackage = path.join(
    packagesDir,
    "create-app.template.vue.v2/package.json",
  );
  const entry = createRequire(vuePackage).resolve("vite");
  viteModule = (await import(entry)) as ViteModule;
  return viteModule;
}

let expoEnvModule: ExpoEnvModule | undefined;
async function loadExpoEnvModule(): Promise<ExpoEnvModule> {
  if (expoEnvModule != null) {
    return expoEnvModule;
  }
  const expoTemplate = path.join(
    packagesDir,
    "create-app.template.expo.v2/package.json",
  );
  const expoPackage = createRequire(expoTemplate).resolve("expo/package.json");
  const cliPackage = createRequire(expoPackage).resolve(
    "@expo/cli/package.json",
  );
  const envPackage = createRequire(cliPackage).resolve(
    "@expo/env/package.json",
  );
  expoEnvModule = (await import(
    path.join(path.dirname(envPackage), "build/index.js")
  )) as ExpoEnvModule;
  return expoEnvModule;
}

let platformFetch: PlatformFetch | undefined;
async function loadPlatformFetch(): Promise<PlatformFetch> {
  if (platformFetch != null) {
    return platformFetch;
  }
  const clientPackage = path.join(packagesDir, "client/package.json");
  const ontologiesEntry = createRequire(clientPackage).resolve(
    "@osdk/foundry.ontologies",
  );
  const ontologiesPackage = path.resolve(
    path.dirname(ontologiesEntry),
    "../../package.json",
  );
  const platformEntry = createRequire(ontologiesPackage).resolve(
    "@osdk/shared.net.platformapi",
  );
  const loaded = (await import(pathToFileURL(platformEntry).href)) as {
    foundryPlatformFetch: PlatformFetch;
  };
  platformFetch = loaded.foundryPlatformFetch;
  return platformFetch;
}
