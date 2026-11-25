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

import { spawnSync } from "node:child_process";
import { mkdir, mkdtemp, writeFile } from "node:fs/promises";
import { createServer, type Server } from "node:http";
import type { AddressInfo } from "node:net";
import { tmpdir } from "node:os";
import path from "node:path";
import { pathToFileURL } from "node:url";
import ts from "typescript";
import { afterEach, describe, expect, it } from "vitest";

import type { MinimalFs } from "../../../generator/src/MinimalFs.js";
import { generateClientSdkVersionTwoPointZero } from "../../../generator/src/v2.0/generateClientSdkVersionTwoPointZero.js";
import { OntologyMetadataResolver } from "../ontologyMetadata/ontologyMetadataResolver.js";

const SENTINEL = "__osdkMetadataInjection";
const STATEMENT_BREAKOUT = `x"; globalThis.${SENTINEL} = 1; //`;
const OBJECT_BREAKOUT = `x", injected: (globalThis.${SENTINEL} = 1, "y") //`;
const PLACEHOLDER_TOKEN = "placeholder-token";

function metadataDocument(options: {
  ontologyRid: string;
  branchRid?: string;
  objectRid?: string;
}) {
  const ontology = {
    apiName: "default-ontology",
    displayName: "Ontology",
    description: "The default ontology",
    rid: options.ontologyRid,
  };
  const objectRid = options.objectRid;
  return {
    ontology,
    objectTypes: objectRid == null ? {} : {
      Todo: {
        objectType: {
          apiName: "Todo",
          primaryKey: "id",
          displayName: "Todo",
          pluralDisplayName: "Todos",
          description: "A todo",
          titleProperty: "id",
          status: "ACTIVE",
          rid: objectRid,
          aliases: [],
          datasources: [],
          icon: { type: "blueprint", name: "document", color: "blue" },
          properties: {
            id: {
              dataType: { type: "integer" },
              rid:
                "ri.ontology.main.property.aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee",
              typeClasses: [],
            },
          },
        },
        linkTypes: [],
        implementsInterfaces: [],
        implementsInterfaces2: {},
        sharedPropertyTypeMapping: {},
      },
    },
    actionTypes: {},
    actionTypesFullMetadata: {},
    queryTypes: {},
    interfaceTypes: {},
    sharedPropertyTypes: {},
    valueTypes: {},
    ...(options.branchRid == null
      ? {}
      : { branch: { rid: options.branchRid } }),
  };
}

async function listen(
  document: ReturnType<typeof metadataDocument>,
): Promise<{ server: Server; baseUrl: string }> {
  const server = createServer((request, response) => {
    const body = request.url?.includes("/metadata")
      ? document
      : document.ontology;
    response.writeHead(200, { "content-type": "application/json" });
    response.end(JSON.stringify(body));
  });
  await new Promise<void>(resolve => {
    server.listen(0, "127.0.0.1", () => resolve());
  });
  const { port } = server.address() as AddressInfo;
  return { server, baseUrl: `http://127.0.0.1:${port}` };
}

function memoryFs(): { fs: MinimalFs; files: Map<string, string> } {
  const files = new Map<string, string>();
  const fs: MinimalFs = {
    async mkdir() {},
    async writeFile(filePath, contents) {
      files.set(filePath, contents);
    },
    async readdir(dirPath) {
      const prefix = dirPath.endsWith("/") ? dirPath : `${dirPath}/`;
      const names = new Set<string>();
      for (const filePath of files.keys()) {
        if (filePath.startsWith(prefix)) {
          names.add(filePath.slice(prefix.length).split("/")[0]!);
        }
      }
      if (names.size === 0) {
        const error = new Error(`ENOENT: ${dirPath}`) as NodeJS.ErrnoException;
        error.code = "ENOENT";
        throw error;
      }
      return [...names];
    },
  };
  return { fs, files };
}

async function generatedCodeRan(
  files: Map<string, string>,
  outDir: string,
): Promise<boolean> {
  if (files.size === 0) return false;
  const dir = await mkdtemp(path.join(tmpdir(), "osdk-foundry-metadata-"));
  const entries: string[] = [];
  for (const [filePath, contents] of files) {
    if (!filePath.endsWith(".ts")) continue;
    const javascript = ts.transpileModule(contents, {
      compilerOptions: {
        module: ts.ModuleKind.ES2022,
        target: ts.ScriptTarget.ES2022,
      },
    }).outputText;
    const destination = path.join(
      dir,
      path.relative(outDir, filePath).replace(/\.ts$/, ".js"),
    );
    await mkdir(path.dirname(destination), { recursive: true });
    await writeFile(destination, javascript);
    entries.push(pathToFileURL(destination).href);
  }
  const result = spawnSync(
    process.execPath,
    [
      "--input-type=module",
      "-e",
      `
      const sentinel = ${JSON.stringify(SENTINEL)};
      delete globalThis[sentinel];
      for (const entry of ${JSON.stringify(entries)}) {
        try { await import(entry); } catch { /* output that does not parse did not run */ }
      }
      console.log(JSON.stringify(globalThis[sentinel] === 1));
    `,
    ],
    { encoding: "utf8" },
  );
  if (result.status !== 0) {
    throw new Error(result.stderr || "failed to evaluate generated sdk");
  }
  return JSON.parse(result.stdout) === true;
}

describe("Foundry metadata responses are not emitted as code", () => {
  const servers: Server[] = [];

  afterEach(async () => {
    delete (globalThis as Record<string, unknown>)[SENTINEL];
    await Promise.all(
      servers.splice(0).map(server =>
        new Promise<void>(resolve => server.close(() => resolve()))
      ),
    );
  });

  async function generateFromResponse(
    document: ReturnType<typeof metadataDocument>,
  ) {
    const { server, baseUrl } = await listen(document);
    servers.push(server);
    const resolver = new OntologyMetadataResolver(PLACEHOLDER_TOKEN, baseUrl);
    const loaded = await resolver.getWireOntologyDefinition(
      "ri.ontology.main.ontology.c61d9ab5-2919-4127-a0a1-ac64c0ce6367",
      {
        objectTypesApiNamesToLoad: Object.keys(document.objectTypes),
        actionTypesApiNamesToLoad: [],
        queryTypesApiNamesToLoad: [],
        interfaceTypesApiNamesToLoad: [],
      },
    );
    expect(loaded.isOk()).toBe(true);
    if (loaded.isErr()) {
      throw new Error(loaded.error.join("\n"));
    }

    const outDir = "/sdk-out";
    const { fs, files } = memoryFs();
    let error: unknown;
    try {
      await generateClientSdkVersionTwoPointZero(
        loaded.value.requestedMetadata,
        "typescript-sdk/1.2.3 typescript-sdk-generator/2.70.0",
        fs,
        outDir,
        "module",
        loaded.value.externalObjects,
        loaded.value.externalInterfaces,
        new Map(),
        false,
        loaded.value.fixedVersionQueryTypes,
      );
    } catch (caught) {
      error = caught;
    }
    return {
      error,
      files,
      executed: await generatedCodeRan(files, outDir),
    };
  }

  it("does not run an ontology resource identifier taken from the Foundry metadata response", async () => {
    const ontologyRid = `ri.ontology.main.ontology.${STATEMENT_BREAKOUT}`;
    const outcome = await generateFromResponse(metadataDocument({
      ontologyRid,
      branchRid: "ri.branch..branch.d827184f-ee0e-4351-8b70-efbe51e07252",
    }));

    expect(outcome.executed).toBe(false);
    expect(outcome.error).toBeInstanceOf(Error);
    expect([...outcome.files.keys()]).toEqual([]);
  });

  it("does not run a branch resource identifier taken from the Foundry metadata response", async () => {
    const branchRid = `ri.branch..branch.${STATEMENT_BREAKOUT}`;
    const outcome = await generateFromResponse(metadataDocument({
      ontologyRid:
        "ri.ontology.main.ontology.c61d9ab5-2919-4127-a0a1-ac64c0ce6367",
      branchRid,
    }));

    expect(outcome.executed).toBe(false);
    expect(outcome.error).toBeInstanceOf(Error);
    expect([...outcome.files.keys()]).toEqual([]);
  });

  it("does not run an object type resource identifier taken from the Foundry metadata response", async () => {
    const objectRid = `ri.ontology.main.object-type.${OBJECT_BREAKOUT}`;
    const outcome = await generateFromResponse(metadataDocument({
      ontologyRid:
        "ri.ontology.main.ontology.c61d9ab5-2919-4127-a0a1-ac64c0ce6367",
      branchRid: "ri.branch..branch.d827184f-ee0e-4351-8b70-efbe51e07252",
      objectRid,
    }));

    expect(outcome.executed).toBe(false);
    if (outcome.error != null) {
      expect([...outcome.files.keys()]).toEqual([]);
    }
  });
});
