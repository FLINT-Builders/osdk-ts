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
import { tmpdir } from "node:os";
import path from "node:path";
import { pathToFileURL } from "node:url";
import ts from "typescript";
import { beforeEach, describe, expect, it } from "vitest";

import { createMockMinimalFiles } from "../util/test/createMockMinimalFiles.js";
import type { WireOntologyDefinition } from "../WireOntologyDefinition.js";
import { generateClientSdkVersionTwoPointZero } from "./generateClientSdkVersionTwoPointZero.js";

const OUT_DIR = "/out";
const SENTINEL = "__osdkMetadataInjection";

/**
 * Resource identifiers the generator is expected to accept. The shape matches
 * identifiers returned by the Foundry ontologies API, including branch RIDs
 * whose instance segment is empty (`ri.branch..branch.<id>`).
 */
const RESOURCE_IDENTIFIER = /^ri\.[A-Za-z0-9_-]*(?:\.[A-Za-z0-9_-]*)+$/;

const VALID_ONTOLOGY_RID =
  "ri.ontology.main.ontology.c61d9ab5-2919-4127-a0a1-ac64c0ce6367";
const VALID_BRANCH_RID =
  "ri.branch..branch.d827184f-ee0e-4351-8b70-efbe51e07252";

const STATEMENT_BREAKOUT = `x"; globalThis.${SENTINEL} = 1; //`;
const OBJECT_BREAKOUT = `x", injected: (globalThis.${SENTINEL} = 1, "y") //`;
const USER_AGENT_BREAKOUT =
  `x", injected: (globalThis.${SENTINEL} = 1, "y") + "`;

interface GenerationOutcome {
  error: unknown;
  files: Record<string, string>;
  executed: boolean;
}

function baseOntology(
  ontologyRid: string,
  branchRid: string | undefined,
): WireOntologyDefinition {
  return {
    ontology: {
      apiName: "default-ontology",
      displayName: "Ontology",
      description: "The default ontology",
      rid: ontologyRid,
    },
    objectTypes: {},
    actionTypes: {},
    actionTypesFullMetadata: {},
    queryTypes: {},
    interfaceTypes: {},
    sharedPropertyTypes: {},
    valueTypes: {},
    ...(branchRid == null ? {} : { branch: { rid: branchRid } }),
  };
}

function withObject(
  ontology: WireOntologyDefinition,
  objectRid: string,
  apiName = "Todo",
): WireOntologyDefinition {
  return {
    ...ontology,
    objectTypes: {
      [apiName]: {
        objectType: {
          apiName,
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
  };
}

function withInterface(
  ontology: WireOntologyDefinition,
  interfaceRid: string,
): WireOntologyDefinition {
  const apiName = "Widget";
  const properties = {
    score: {
      apiName: "score",
      dataType: { type: "integer" as const },
      rid: "ri.ontology.main.property.bbbbbbbb-bbbb-cccc-dddd-eeeeeeeeeeee",
      displayName: "Score",
      required: true,
      typeClasses: [],
    },
  };
  return {
    ...ontology,
    interfaceTypes: {
      [apiName]: {
        apiName,
        rid: interfaceRid,
        displayName: "Widget",
        description: "A widget",
        extendsInterfaces: [],
        links: {},
        properties,
        propertiesV2: {},
        implementedByObjectTypes: [],
        allExtendsInterfaces: [],
        allLinks: {},
        allProperties: properties,
        allPropertiesV2: {},
      },
    },
    sharedPropertyTypes: {
      score: {
        apiName: "score",
        dataType: { type: "integer" },
        rid: "ri.ontology.main.property.bbbbbbbb-bbbb-cccc-dddd-eeeeeeeeeeee",
        displayName: "Score",
        typeClasses: [],
      },
    },
  };
}

async function generate(
  ontology: WireOntologyDefinition,
  userAgent: string,
): Promise<GenerationOutcome> {
  const { minimalFiles, getFiles } = createMockMinimalFiles();
  let error: unknown;
  try {
    await generateClientSdkVersionTwoPointZero(
      ontology,
      userAgent,
      minimalFiles,
      OUT_DIR,
    );
  } catch (caught) {
    error = caught;
  }
  const files = getFiles();
  return {
    error,
    files,
    executed: await generatedCodeRan(files),
  };
}

async function materialize(
  files: Record<string, string>,
): Promise<string> {
  const dir = await mkdtemp(path.join(tmpdir(), "osdk-metadata-injection-"));
  for (const [filePath, contents] of Object.entries(files)) {
    if (!filePath.endsWith(".ts")) continue;
    const javascript = ts.transpileModule(contents, {
      compilerOptions: {
        module: ts.ModuleKind.ES2022,
        target: ts.ScriptTarget.ES2022,
      },
    }).outputText;
    const destination = path.join(
      dir,
      path.relative(OUT_DIR, filePath).replace(/\.ts$/, ".js"),
    );
    await mkdir(path.dirname(destination), { recursive: true });
    await writeFile(destination, javascript);
  }
  return dir;
}

function runNode(script: string): unknown {
  const result = spawnSync(process.execPath, [
    "--input-type=module",
    "-e",
    script,
  ], {
    encoding: "utf8",
  });
  if (result.status !== 0) {
    throw new Error(result.stderr || result.stdout || "node evaluation failed");
  }
  return JSON.parse(result.stdout);
}

async function generatedCodeRan(
  files: Record<string, string>,
): Promise<boolean> {
  if (Object.keys(files).length === 0) return false;
  const dir = await materialize(files);
  const entries = Object.keys(files)
    .filter(filePath => filePath.endsWith(".ts"))
    .map(filePath =>
      pathToFileURL(
        path.join(
          dir,
          path.relative(OUT_DIR, filePath).replace(/\.ts$/, ".js"),
        ),
      ).href
    );
  const report = runNode(`
    const sentinel = ${JSON.stringify(SENTINEL)};
    delete globalThis[sentinel];
    for (const entry of ${JSON.stringify(entries)}) {
      try { await import(entry); } catch { /* a file that does not parse did not run */ }
    }
    console.log(JSON.stringify(globalThis[sentinel] === 1));
  `);
  return report === true;
}

async function importGenerated(
  files: Record<string, string>,
  entry: string,
): Promise<Record<string, unknown>> {
  const dir = await materialize(files);
  const href = pathToFileURL(path.join(dir, entry)).href;
  const report = runNode(`
    const loaded = await import(${JSON.stringify(href)});
    console.log(JSON.stringify({
      $ontologyRid: loaded.$ontologyRid,
      $branch: loaded.$branch,
      $osdkMetadata: loaded.$osdkMetadata,
      Todo: loaded.Todo,
      Widget: loaded.Widget,
    }));
  `);
  return report as Record<string, unknown>;
}

describe("generated metadata strings stay data", () => {
  beforeEach(() => {
    delete (globalThis as Record<string, unknown>)[SENTINEL];
  });

  it("embeds accepted ontology and branch resource identifiers as data", async () => {
    expect(RESOURCE_IDENTIFIER.test(VALID_ONTOLOGY_RID)).toBe(true);
    expect(RESOURCE_IDENTIFIER.test(VALID_BRANCH_RID)).toBe(true);

    const outcome = await generate(
      baseOntology(VALID_ONTOLOGY_RID, VALID_BRANCH_RID),
      "typescript-sdk/1.2.3 typescript-sdk-generator/2.70.0",
    );

    expect(outcome.error).toBeUndefined();
    expect(outcome.executed).toBe(false);
    const metadata = await importGenerated(
      outcome.files,
      "OntologyMetadata.js",
    );
    expect(metadata.$ontologyRid).toBe(VALID_ONTOLOGY_RID);
    expect(metadata.$branch).toBe(VALID_BRANCH_RID);
    expect(metadata.$osdkMetadata).toEqual({
      extraUserAgent: "typescript-sdk/1.2.3 typescript-sdk-generator/2.70.0",
    });
  });

  it("rejects an ontology resource identifier that breaks out of the generated string before writing files", async () => {
    const hostileRid = `ri.ontology.main.ontology.${STATEMENT_BREAKOUT}`;
    expect(RESOURCE_IDENTIFIER.test(hostileRid)).toBe(false);

    const outcome = await generate(
      baseOntology(hostileRid, VALID_BRANCH_RID),
      "typescript-sdk/1.2.3 typescript-sdk-generator/2.70.0",
    );

    expect(outcome.executed).toBe(false);
    expect(outcome.error).toBeInstanceOf(Error);
    expect(outcome.files).toEqual({});
  });

  it("rejects a branch resource identifier that breaks out of the generated string before writing files", async () => {
    const hostileRid = `ri.branch..branch.${STATEMENT_BREAKOUT}`;
    expect(RESOURCE_IDENTIFIER.test(hostileRid)).toBe(false);

    const outcome = await generate(
      baseOntology(VALID_ONTOLOGY_RID, hostileRid),
      "typescript-sdk/1.2.3 typescript-sdk-generator/2.70.0",
    );

    expect(outcome.executed).toBe(false);
    expect(outcome.error).toBeInstanceOf(Error);
    expect(outcome.files).toEqual({});
  });

  it("rejects ontology and branch identifiers that contain quotes, newlines, or backslashes before writing files", async () => {
    const hostile = [
      STATEMENT_BREAKOUT,
      `ri.ok\n${STATEMENT_BREAKOUT}`,
      "ri.ontology.main.ontology.abc\\",
      "not a resource identifier",
      "",
    ];
    for (const ontologyRid of hostile) {
      const outcome = await generate(
        baseOntology(ontologyRid, VALID_BRANCH_RID),
        "typescript-sdk/1.2.3",
      );
      expect(outcome.executed, ontologyRid).toBe(false);
      expect(outcome.error, ontologyRid).toBeInstanceOf(Error);
      expect(outcome.files, ontologyRid).toEqual({});
    }
    for (const branchRid of hostile) {
      const outcome = await generate(
        baseOntology(VALID_ONTOLOGY_RID, branchRid),
        "typescript-sdk/1.2.3",
      );
      expect(outcome.executed, branchRid).toBe(false);
      expect(outcome.error, branchRid).toBeInstanceOf(Error);
      expect(outcome.files, branchRid).toEqual({});
    }
  });

  it("keeps a hostile generator user-agent string as data", async () => {
    const userAgent = `typescript-sdk/1.2.3 ${USER_AGENT_BREAKOUT}`;
    const outcome = await generate(
      baseOntology(VALID_ONTOLOGY_RID, VALID_BRANCH_RID),
      userAgent,
    );

    expect(outcome.executed).toBe(false);
    expect(outcome.error).toBeUndefined();
    const metadata = await importGenerated(
      outcome.files,
      "OntologyMetadata.js",
    );
    expect(metadata.$osdkMetadata).toEqual({ extraUserAgent: userAgent });
    expect(metadata.$ontologyRid).toBe(VALID_ONTOLOGY_RID);
    expect(metadata.$branch).toBe(VALID_BRANCH_RID);
  });

  it("keeps newlines and backslashes in the generator user-agent inside the string literal", async () => {
    const userAgent = "typescript-sdk/1.2.3\nquote\"backslash\\end";
    const outcome = await generate(
      baseOntology(VALID_ONTOLOGY_RID, VALID_BRANCH_RID),
      userAgent,
    );

    expect(outcome.executed).toBe(false);
    expect(outcome.error).toBeUndefined();
    const metadata = await importGenerated(
      outcome.files,
      "OntologyMetadata.js",
    );
    expect(metadata.$osdkMetadata).toEqual({ extraUserAgent: userAgent });
  });

  it("keeps a hostile object type resource identifier as data", async () => {
    const objectRid = `ri.ontology.main.object-type.${OBJECT_BREAKOUT}`;
    const outcome = await generate(
      withObject(
        baseOntology(VALID_ONTOLOGY_RID, VALID_BRANCH_RID),
        objectRid,
      ),
      "typescript-sdk/1.2.3 typescript-sdk-generator/2.70.0",
    );

    expect(outcome.executed).toBe(false);
    if (outcome.error != null) {
      expect(outcome.files).toEqual({});
      return;
    }
    const loaded = await importGenerated(
      outcome.files,
      "ontology/objects/Todo.js",
    );
    const todo = loaded.Todo as {
      internalDoNotUseMetadata: { rid: string };
    };
    expect(todo.internalDoNotUseMetadata.rid).toBe(objectRid);
  });

  it("keeps a hostile interface resource identifier as data", async () => {
    const interfaceRid = `ri.ontology.main.interface.${OBJECT_BREAKOUT}`;
    const outcome = await generate(
      withInterface(
        baseOntology(VALID_ONTOLOGY_RID, VALID_BRANCH_RID),
        interfaceRid,
      ),
      "typescript-sdk/1.2.3 typescript-sdk-generator/2.70.0",
    );

    expect(outcome.executed).toBe(false);
    if (outcome.error != null) {
      expect(outcome.files).toEqual({});
      return;
    }
    const loaded = await importGenerated(
      outcome.files,
      "ontology/interfaces/Widget.js",
    );
    const widget = loaded.Widget as {
      internalDoNotUseMetadata: { rid: string };
    };
    expect(widget.internalDoNotUseMetadata.rid).toBe(interfaceRid);
  });
});
