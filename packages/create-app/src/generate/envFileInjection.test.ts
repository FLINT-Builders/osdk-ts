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

import {
  mkdirSync,
  mkdtempSync,
  readFileSync,
  rmSync,
  writeFileSync,
} from "node:fs";
import { createRequire } from "node:module";
import { tmpdir } from "node:os";
import path from "node:path";
import { pathToFileURL } from "node:url";

import { afterEach, expect, test, vi } from "vitest";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";

import { createAuthorizationServer } from "../../../oauth/src/common.js";
import { consola } from "../consola.js";
import { promptApplicationUrl } from "../prompts/promptApplicationUrl.js";
import { promptFoundryUrl } from "../prompts/promptFoundryUrl.js";
import { promptOntologyAndOsdkPackageAndOsdkRegistryUrl } from "../prompts/promptOntologyAndOsdkPackageAndOsdkRegistryUrl.js";
import {
  generateAuthlessEnvDevelopment,
  generateAuthlessEnvProduction,
  generateEnvDevelopment,
  generateEnvProduction,
} from "./generateEnv.js";

vi.mock("../consola.js");

const TRUSTED_FOUNDRY = "https://trusted.example";
const TRUSTED_APPLICATION = "https://app.example";
const LOCAL_DEV_ORIGIN = "http://localhost:8080";
const ATTACKER_ORIGIN = "https://attacker.example";
const CLIENT_ID = "abcdef";
const VALID_OSDK_PACKAGE = "@myapp/sdk";
const VALID_OSDK_REGISTRY_URL =
  "https://example.palantirfoundry.com/artifacts/api/repositories/ri.artifacts.main.repository.fake/contents/release/npm";

const requireFromExpoTemplate = createRequire(
  new URL("../../../create-app.template.expo.v2/package.json", import.meta.url),
);
const requireFromReactTemplate = createRequire(
  new URL(
    "../../../create-app.template.react.beta/package.json",
    import.meta.url,
  ),
);

interface DotenvModule {
  config: (options: { path: string; quiet?: boolean }) => {
    parsed?: Record<string, string>;
  };
}

interface ExpoEnvModule {
  load: (
    projectRoot: string,
    options?: { force?: boolean; silent?: boolean },
  ) => NodeJS.ProcessEnv;
}

const dotenv = requireFromExpoTemplate("dotenv") as DotenvModule;

function loadExpoEnv(): ExpoEnvModule {
  const expoPackageJson = requireFromExpoTemplate.resolve("expo/package.json");
  const requireFromExpo = createRequire(expoPackageJson);
  const cliPackageJson = requireFromExpo.resolve("@expo/cli/package.json");
  return createRequire(cliPackageJson)("@expo/env") as ExpoEnvModule;
}

const viteEntry = requireFromReactTemplate.resolve("vite");
const vite = (await import(pathToFileURL(viteEntry).href)) as {
  loadEnv: (
    mode: string,
    envDir: string,
    prefixes?: string | string[],
  ) => Record<string, string>;
  createServer: (inlineConfig: {
    root: string;
    configFile: false;
    logLevel: "silent";
    server: { middlewareMode: true };
  }) => Promise<{
    transformIndexHtml: (url: string, html: string) => Promise<string>;
    close: () => Promise<void>;
  }>;
  build: (inlineConfig: {
    root: string;
    configFile: false;
    logLevel: "silent";
    build: { outDir: string; emptyOutDir: boolean };
  }) => Promise<unknown>;
};

const tempDirs: string[] = [];

afterEach(() => {
  vi.restoreAllMocks();
  for (const dir of tempDirs.splice(0)) {
    rmSync(dir, { recursive: true, force: true });
  }
});

function tempDir(): string {
  const dir = mkdtempSync(path.join(tmpdir(), "create-app-env-"));
  tempDirs.push(dir);
  return dir;
}

function textOrRefusal(produce: () => string): string | undefined {
  try {
    return produce();
  } catch {
    return undefined;
  }
}

/**
 * Same acceptance rule as the generated React client's getMetaTagContent:
 * the last osdk-foundryUrl meta value, rejected when it is empty or still
 * contains a %placeholder%.
 */
function foundryUrlFromHtml(html: string): string {
  const elements = [
    ...html.matchAll(
      /<meta\s+name="osdk-foundryUrl"\s+content="([^"]*)"\s*\/?>/gu,
    ),
  ];
  const value = elements.at(-1)?.[1] ?? null;
  if (value == null || value === "") {
    throw new Error("Meta tag osdk-foundryUrl not found or empty");
  }
  if (/%.+%/u.test(value)) {
    throw new Error(
      `Meta tag osdk-foundryUrl contains placeholder value. Please add ${value.replaceAll(
        "%",
        "",
      )} to your .env files`,
    );
  }
  return value;
}

function expectOauthHost(foundryUrl: string, origin: string): void {
  const server = createAuthorizationServer("multipass", foundryUrl);
  expect(new URL(server.authorization_endpoint).origin).toBe(origin);
  expect(new URL(server.token_endpoint).origin).toBe(origin);
  expect(new URL(server.revocation_endpoint).origin).toBe(origin);
}

function expectExpoOauthHost(foundryUrl: string, origin: string): void {
  const discovery = {
    authorizationEndpoint: `${foundryUrl}/multipass/api/oauth2/authorize`,
    tokenEndpoint: `${foundryUrl}/multipass/api/oauth2/token`,
  };
  expect(new URL(discovery.authorizationEndpoint).origin).toBe(origin);
  expect(new URL(discovery.tokenEndpoint).origin).toBe(origin);
}

function assignEnv(
  key: "VITE_FOUNDRY_API_URL" | "EXPO_PUBLIC_FOUNDRY_API_URL" | "NODE_ENV",
  value: string | undefined,
): void {
  if (value === undefined) {
    if (key === "VITE_FOUNDRY_API_URL") {
      delete process.env.VITE_FOUNDRY_API_URL;
    } else if (key === "EXPO_PUBLIC_FOUNDRY_API_URL") {
      delete process.env.EXPO_PUBLIC_FOUNDRY_API_URL;
    } else {
      delete process.env.NODE_ENV;
    }
    return;
  }
  if (key === "VITE_FOUNDRY_API_URL") {
    process.env.VITE_FOUNDRY_API_URL = value;
  } else if (key === "EXPO_PUBLIC_FOUNDRY_API_URL") {
    process.env.EXPO_PUBLIC_FOUNDRY_API_URL = value;
  } else {
    process.env.NODE_ENV = value;
  }
}

async function withEnv<T>(
  updates: {
    VITE_FOUNDRY_API_URL?: string | undefined;
    EXPO_PUBLIC_FOUNDRY_API_URL?: string | undefined;
    NODE_ENV?: string | undefined;
  },
  run: () => T | Promise<T>,
): Promise<T> {
  const saved = {
    VITE_FOUNDRY_API_URL: process.env.VITE_FOUNDRY_API_URL,
    EXPO_PUBLIC_FOUNDRY_API_URL: process.env.EXPO_PUBLIC_FOUNDRY_API_URL,
    NODE_ENV: process.env.NODE_ENV,
  };
  if ("VITE_FOUNDRY_API_URL" in updates) {
    assignEnv("VITE_FOUNDRY_API_URL", updates.VITE_FOUNDRY_API_URL);
  }
  if ("EXPO_PUBLIC_FOUNDRY_API_URL" in updates) {
    assignEnv(
      "EXPO_PUBLIC_FOUNDRY_API_URL",
      updates.EXPO_PUBLIC_FOUNDRY_API_URL,
    );
  }
  if ("NODE_ENV" in updates) {
    assignEnv("NODE_ENV", updates.NODE_ENV);
  }
  try {
    return await run();
  } finally {
    if ("VITE_FOUNDRY_API_URL" in updates) {
      assignEnv("VITE_FOUNDRY_API_URL", saved.VITE_FOUNDRY_API_URL);
    }
    if ("EXPO_PUBLIC_FOUNDRY_API_URL" in updates) {
      assignEnv(
        "EXPO_PUBLIC_FOUNDRY_API_URL",
        saved.EXPO_PUBLIC_FOUNDRY_API_URL,
      );
    }
    if ("NODE_ENV" in updates) {
      assignEnv("NODE_ENV", saved.NODE_ENV);
    }
  }
}

async function viteLoadedUrl(
  contents: string,
  fileName: ".env.development" | ".env.production",
): Promise<string | undefined> {
  const dir = tempDir();
  writeFileSync(path.join(dir, fileName), contents);
  const mode = fileName === ".env.development" ? "development" : "production";
  return await withEnv({ VITE_FOUNDRY_API_URL: undefined }, () => {
    return vite.loadEnv(mode, dir, "VITE_").VITE_FOUNDRY_API_URL;
  });
}

async function metroLoadedUrl(contents: string): Promise<string | undefined> {
  const dir = tempDir();
  const file = path.join(dir, ".env.development");
  writeFileSync(file, contents);
  return await withEnv({ EXPO_PUBLIC_FOUNDRY_API_URL: undefined }, () => {
    dotenv.config({ path: file, quiet: true });
    return process.env.EXPO_PUBLIC_FOUNDRY_API_URL;
  });
}

async function expoLoadedUrl(
  contents: string,
  fileName: ".env.development" | ".env.production",
): Promise<string | undefined> {
  const dir = tempDir();
  writeFileSync(path.join(dir, fileName), contents);
  const mode = fileName === ".env.development" ? "development" : "production";
  return await withEnv(
    {
      EXPO_PUBLIC_FOUNDRY_API_URL: undefined,
      NODE_ENV: mode,
    },
    () => {
      const loaded = loadExpoEnv().load(dir, { force: true, silent: true });
      return loaded.EXPO_PUBLIC_FOUNDRY_API_URL;
    },
  );
}

async function expectLoadedHost(
  contents: string,
  envPrefix: "VITE_" | "EXPO_PUBLIC_",
  fileName: ".env.development" | ".env.production",
  origin: string,
): Promise<void> {
  if (envPrefix === "VITE_") {
    const loaded = await viteLoadedUrl(contents, fileName);
    expect(loaded, `${fileName} ${envPrefix}FOUNDRY_API_URL`).toBeDefined();
    expectOauthHost(loaded ?? "", origin);
    return;
  }
  const loaded =
    fileName === ".env.development"
      ? await metroLoadedUrl(contents)
      : await expoLoadedUrl(contents, fileName);
  expect(loaded, `${fileName} ${envPrefix}FOUNDRY_API_URL`).toBeDefined();
  expectExpoOauthHost(loaded ?? "", origin);
  if (fileName === ".env.development") {
    const fromExpo = await expoLoadedUrl(contents, fileName);
    expect(fromExpo).toBeDefined();
    expectExpoOauthHost(fromExpo ?? "", origin);
  }
}

function flagValue(
  option: "ontology" | "foundryUrl" | "applicationUrl",
  value: string,
): string {
  const parsed = yargs(
    hideBin(["node", "create-osdk-app", `--${option}`, value]),
  )
    .exitProcess(false)
    .option("ontology", { type: "string" })
    .option("foundryUrl", { type: "string" })
    .option("applicationUrl", { type: "string" })
    .parseSync();
  const parsedValue = parsed[option];
  if (typeof parsedValue !== "string") {
    throw new TypeError(`${option} was not parsed as a string`);
  }
  return parsedValue;
}

async function ontologyFromFlag(value: string): Promise<string | undefined> {
  vi.mocked(consola.prompt).mockRejectedValue(
    new Error("non-interactive flag was rejected"),
  );
  try {
    const result = await promptOntologyAndOsdkPackageAndOsdkRegistryUrl({
      ontology: flagValue("ontology", value),
      osdkPackage: VALID_OSDK_PACKAGE,
      osdkRegistryUrl: VALID_OSDK_REGISTRY_URL,
      sdkVersion: "2.x",
    });
    return result.ontology;
  } catch {
    return undefined;
  }
}

async function foundryUrlFromFlag(value: string): Promise<string | undefined> {
  vi.mocked(consola.prompt).mockRejectedValue(
    new Error("non-interactive flag was rejected"),
  );
  try {
    return await promptFoundryUrl({
      foundryUrl: flagValue("foundryUrl", value),
    });
  } catch {
    return undefined;
  }
}

async function applicationUrlFromFlag(
  value: string,
): Promise<string | undefined> {
  vi.mocked(consola.prompt).mockRejectedValue(
    new Error("non-interactive flag was rejected"),
  );
  try {
    return await promptApplicationUrl({
      applicationUrl: flagValue("applicationUrl", value),
    });
  } catch {
    return undefined;
  }
}

function ontologyPayload(
  envPrefix: "VITE_" | "EXPO_PUBLIC_",
  host: string,
): string {
  return `ri.ontology.main.ontology.legit\n${envPrefix}FOUNDRY_API_URL=${host}`;
}

function foundryPayload(envPrefix: "VITE_" | "EXPO_PUBLIC_"): string {
  return `${TRUSTED_FOUNDRY}\n${envPrefix}FOUNDRY_API_URL=${ATTACKER_ORIGIN}`;
}

function applicationPayload(envPrefix: "VITE_" | "EXPO_PUBLIC_"): string {
  return `${TRUSTED_APPLICATION}\n${envPrefix}FOUNDRY_API_URL=${ATTACKER_ORIGIN}`;
}

function clientIdPayload(envPrefix: "VITE_" | "EXPO_PUBLIC_"): string {
  return `${CLIENT_ID}\n${envPrefix}FOUNDRY_API_URL=${ATTACKER_ORIGIN}`;
}

interface EnvCase {
  name: string;
  envPrefix: "VITE_" | "EXPO_PUBLIC_";
  fileName: ".env.development" | ".env.production";
  origin: string;
  produce: () => string;
}

function casesForOntology(ontology: string): EnvCase[] {
  const prefixes = ["VITE_", "EXPO_PUBLIC_"] as const;
  const cases: EnvCase[] = [];
  for (const envPrefix of prefixes) {
    cases.push(
      {
        name: `${envPrefix} development`,
        envPrefix,
        fileName: ".env.development",
        origin: TRUSTED_FOUNDRY,
        produce: () =>
          generateEnvDevelopment({
            envPrefix,
            foundryUrl: TRUSTED_FOUNDRY,
            clientId: CLIENT_ID,
            corsProxy: false,
            ontology,
          }),
      },
      {
        name: `${envPrefix} development with the CORS proxy`,
        envPrefix,
        fileName: ".env.development",
        origin: new URL(LOCAL_DEV_ORIGIN).origin,
        produce: () =>
          generateEnvDevelopment({
            envPrefix,
            foundryUrl: TRUSTED_FOUNDRY,
            clientId: CLIENT_ID,
            corsProxy: true,
            ontology,
          }),
      },
      {
        name: `${envPrefix} production`,
        envPrefix,
        fileName: ".env.production",
        origin: TRUSTED_FOUNDRY,
        produce: () =>
          generateEnvProduction({
            envPrefix,
            foundryUrl: TRUSTED_FOUNDRY,
            applicationUrl: TRUSTED_APPLICATION,
            clientId: CLIENT_ID,
            ontology,
          }),
      },
      {
        name: `${envPrefix} authless development`,
        envPrefix,
        fileName: ".env.development",
        origin: new URL(LOCAL_DEV_ORIGIN).origin,
        produce: () =>
          generateAuthlessEnvDevelopment({
            envPrefix,
            ontology,
          }),
      },
      {
        name: `${envPrefix} authless production`,
        envPrefix,
        fileName: ".env.production",
        origin: new URL(TRUSTED_APPLICATION).origin,
        produce: () =>
          generateAuthlessEnvProduction({
            envPrefix,
            applicationUrl: TRUSTED_APPLICATION,
            ontology,
          }),
      },
    );
  }
  return cases;
}

test("a clean scaffold keeps the Foundry host the caller set", async () => {
  const contents = generateEnvProduction({
    envPrefix: "VITE_",
    foundryUrl: TRUSTED_FOUNDRY,
    applicationUrl: TRUSTED_APPLICATION,
    clientId: CLIENT_ID,
    ontology: "ri.ontology.main.ontology.legit",
  });
  await expectLoadedHost(contents, "VITE_", ".env.production", TRUSTED_FOUNDRY);
});

test("an ontology flag cannot replace the Foundry API host", async () => {
  const encodedHost = "https://attacker%2Eexample";
  const fullwidthHost = "https://attacker\uFF0Eexample";
  for (const host of [encodedHost, fullwidthHost]) {
    for (const envPrefix of ["VITE_", "EXPO_PUBLIC_"] as const) {
      const flagged = await ontologyFromFlag(ontologyPayload(envPrefix, host));
      if (flagged == null) {
        continue;
      }
      for (const envCase of casesForOntology(flagged)) {
        if (envCase.envPrefix !== envPrefix) {
          continue;
        }
        const contents = textOrRefusal(envCase.produce);
        if (contents == null) {
          continue;
        }
        await expectLoadedHost(
          contents,
          envCase.envPrefix,
          envCase.fileName,
          envCase.origin,
        );
      }
    }
  }
});

test("ontology text is still safe when written without the prompt", async () => {
  const payloads = [
    ontologyPayload("VITE_", "https://attacker%2Eexample"),
    ontologyPayload("VITE_", "https://attacker\uFF0Eexample"),
    `ri.ontology.main.ontology.legit\r\nVITE_FOUNDRY_API_URL=https://attacker%2Eexample`,
    ontologyPayload("EXPO_PUBLIC_", "https://attacker%2Eexample"),
  ];
  for (const ontology of payloads) {
    const envPrefix = ontology.includes("EXPO_PUBLIC_")
      ? "EXPO_PUBLIC_"
      : "VITE_";
    for (const envCase of casesForOntology(ontology)) {
      if (envCase.envPrefix !== envPrefix) {
        continue;
      }
      const contents = textOrRefusal(envCase.produce);
      if (contents == null) {
        continue;
      }
      await expectLoadedHost(
        contents,
        envCase.envPrefix,
        envCase.fileName,
        envCase.origin,
      );
    }
  }
});

test("a Foundry URL flag cannot append a second API host", async () => {
  for (const envPrefix of ["VITE_", "EXPO_PUBLIC_"] as const) {
    const foundryUrl = await foundryUrlFromFlag(foundryPayload(envPrefix));
    if (foundryUrl == null) {
      continue;
    }
    const development = textOrRefusal(() =>
      generateEnvDevelopment({
        envPrefix,
        foundryUrl,
        clientId: CLIENT_ID,
        corsProxy: false,
        ontology: "ri.ontology.main.ontology.legit",
      }),
    );
    if (development != null) {
      await expectLoadedHost(
        development,
        envPrefix,
        ".env.development",
        TRUSTED_FOUNDRY,
      );
    }
    const production = textOrRefusal(() =>
      generateEnvProduction({
        envPrefix,
        foundryUrl,
        applicationUrl: TRUSTED_APPLICATION,
        clientId: CLIENT_ID,
        ontology: "ri.ontology.main.ontology.legit",
      }),
    );
    if (production != null) {
      await expectLoadedHost(
        production,
        envPrefix,
        ".env.production",
        TRUSTED_FOUNDRY,
      );
    }
  }
});

test("Foundry URL text is still safe when written without the prompt", async () => {
  for (const envPrefix of ["VITE_", "EXPO_PUBLIC_"] as const) {
    const foundryUrl = foundryPayload(envPrefix);
    const production = textOrRefusal(() =>
      generateEnvProduction({
        envPrefix,
        foundryUrl,
        applicationUrl: TRUSTED_APPLICATION,
        clientId: CLIENT_ID,
        ontology: "ri.ontology.main.ontology.legit",
      }),
    );
    if (production == null) {
      continue;
    }
    await expectLoadedHost(
      production,
      envPrefix,
      ".env.production",
      TRUSTED_FOUNDRY,
    );
  }
});

test("an application URL flag cannot replace the authless production API host", async () => {
  for (const envPrefix of ["VITE_", "EXPO_PUBLIC_"] as const) {
    const applicationUrl = await applicationUrlFromFlag(
      applicationPayload(envPrefix),
    );
    if (applicationUrl == null) {
      continue;
    }
    const contents = textOrRefusal(() =>
      generateAuthlessEnvProduction({
        envPrefix,
        applicationUrl,
        ontology: "ri.ontology.main.ontology.legit",
      }),
    );
    if (contents == null) {
      continue;
    }
    await expectLoadedHost(
      contents,
      envPrefix,
      ".env.production",
      new URL(TRUSTED_APPLICATION).origin,
    );
  }
});

test("application URL text is still safe when written without the prompt", async () => {
  for (const envPrefix of ["VITE_", "EXPO_PUBLIC_"] as const) {
    const contents = textOrRefusal(() =>
      generateAuthlessEnvProduction({
        envPrefix,
        applicationUrl: applicationPayload(envPrefix),
        ontology: "ri.ontology.main.ontology.legit",
      }),
    );
    if (contents == null) {
      continue;
    }
    await expectLoadedHost(
      contents,
      envPrefix,
      ".env.production",
      new URL(TRUSTED_APPLICATION).origin,
    );
    const authenticated = textOrRefusal(() =>
      generateEnvProduction({
        envPrefix,
        foundryUrl: TRUSTED_FOUNDRY,
        applicationUrl: applicationPayload(envPrefix),
        clientId: CLIENT_ID,
        ontology: "ri.ontology.main.ontology.legit",
      }),
    );
    if (authenticated == null) {
      continue;
    }
    await expectLoadedHost(
      authenticated,
      envPrefix,
      ".env.production",
      TRUSTED_FOUNDRY,
    );
  }
});

test("a client id with a newline cannot replace the Foundry API host", async () => {
  for (const envPrefix of ["VITE_", "EXPO_PUBLIC_"] as const) {
    const contents = textOrRefusal(() =>
      generateEnvProduction({
        envPrefix,
        foundryUrl: TRUSTED_FOUNDRY,
        applicationUrl: TRUSTED_APPLICATION,
        clientId: clientIdPayload(envPrefix),
        ontology: "ri.ontology.main.ontology.legit",
      }),
    );
    if (contents == null) {
      continue;
    }
    await expectLoadedHost(
      contents,
      envPrefix,
      ".env.production",
      TRUSTED_FOUNDRY,
    );
  }
});

test("the generated React client reads the trusted host from the HTML meta tag", async () => {
  const ontology = await ontologyFromFlag(
    ontologyPayload("VITE_", "https://attacker%2Eexample"),
  );
  if (ontology == null) {
    return;
  }
  const development = textOrRefusal(() =>
    generateEnvDevelopment({
      envPrefix: "VITE_",
      foundryUrl: TRUSTED_FOUNDRY,
      clientId: CLIENT_ID,
      corsProxy: false,
      ontology,
    }),
  );
  const production = textOrRefusal(() =>
    generateEnvProduction({
      envPrefix: "VITE_",
      foundryUrl: TRUSTED_FOUNDRY,
      applicationUrl: TRUSTED_APPLICATION,
      clientId: CLIENT_ID,
      ontology,
    }),
  );
  if (development == null || production == null) {
    return;
  }
  const dir = tempDir();
  mkdirSync(path.join(dir, "src"), { recursive: true });
  writeFileSync(path.join(dir, ".env.development"), development);
  writeFileSync(path.join(dir, ".env.production"), production);
  writeFileSync(path.join(dir, "src", "main.js"), "export {}\n");
  writeFileSync(
    path.join(dir, "index.html"),
    `<!doctype html>
<html>
  <head>
    <meta name="osdk-foundryUrl" content="%VITE_FOUNDRY_API_URL%" />
  </head>
  <body>
    <script type="module" src="/src/main.js"></script>
  </body>
</html>
`,
  );

  await withEnv({ VITE_FOUNDRY_API_URL: undefined }, async () => {
    const server = await vite.createServer({
      root: dir,
      configFile: false,
      logLevel: "silent",
      server: { middlewareMode: true },
    });
    try {
      const devHtml = await server.transformIndexHtml(
        "/index.html",
        readFileSync(path.join(dir, "index.html"), "utf-8"),
      );
      expectOauthHost(foundryUrlFromHtml(devHtml), TRUSTED_FOUNDRY);
    } finally {
      await server.close();
    }
    await vite.build({
      root: dir,
      configFile: false,
      logLevel: "silent",
      build: { outDir: "dist", emptyOutDir: true },
    });
    const prodHtml = readFileSync(
      path.join(dir, "dist", "index.html"),
      "utf-8",
    );
    expectOauthHost(foundryUrlFromHtml(prodHtml), TRUSTED_FOUNDRY);
  });
}, 30_000);
