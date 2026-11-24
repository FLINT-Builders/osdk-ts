/*
 * Copyright 2025 Palantir Technologies, Inc. All rights reserved.
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
import * as fs from "node:fs";
import * as os from "node:os";
import * as path from "node:path";

import type * as Ontologies from "@osdk/foundry.ontologies";
import { afterEach, describe, expect, it } from "vitest";

import main from "../../cli/main.js";

/**
 * Runs when a generated module is evaluated. No ".", "/", "-", or "_", so
 * withoutNamespace and camel leave the text intact.
 */
const CANARY_STATEMENT =
  // cspell:disable-next-line
  "await import('node:fs')['then'](fs=>fs['writeFileSync'](process['env']['CANARYPATH'],'1'))";

/**
 * Closes `export { ... }`, runs the canary, and swallows the rest of the
 * re-export line. The same string is a single path segment, so the entity
 * file is written before index.ts.
 */
function shortNamePayload(): string {
  return `y as x }\n${CANARY_STATEMENT}\nvar y=1;void(\`);void "`;
}

const tempDirs: string[] = [];

afterEach(() => {
  for (const dir of tempDirs.splice(0)) {
    fs.rmSync(dir, { recursive: true, force: true });
  }
});

function makeTemp(prefix: string): string {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), prefix));
  tempDirs.push(dir);
  return dir;
}

function emptyMetadata(): Ontologies.OntologyFullMetadata {
  return {
    ontology: {
      apiName: "test",
      displayName: "Test",
      description: "",
      rid: "ri.test",
    },
    objectTypes: {},
    actionTypes: {},
    actionTypesFullMetadata: {},
    interfaceTypes: {},
    sharedPropertyTypes: {},
    queryTypes: {},
    valueTypes: {},
  };
}

function objectType(apiName: string): Ontologies.ObjectTypeFullMetadata {
  return {
    objectType: {
      apiName,
      displayName: "Object",
      aliases: [],
      datasources: [],
      description: "",
      primaryKey: "id",
      titleProperty: "id",
      status: "ACTIVE",
      properties: {},
      pluralDisplayName: "",
      icon: { type: "blueprint", color: "", name: "" },
      rid: "ri.object",
    },
    linkTypes: [],
    implementsInterfaces: [],
    implementsInterfaces2: {},
    sharedPropertyTypeMapping: {},
  };
}

function actionType(apiName: string): Ontologies.ActionTypeV2 {
  return {
    apiName,
    displayName: "Action",
    description: "",
    status: "ACTIVE",
    parameters: {},
    rid: "ri.action",
    operations: [],
  };
}

function interfaceType(apiName: string): Ontologies.InterfaceType {
  return {
    rid: "ri.interface",
    apiName,
    displayName: "Interface",
    description: "",
    properties: {},
    allProperties: {},
    propertiesV2: {},
    allPropertiesV2: {},
    extendsInterfaces: [],
    allExtendsInterfaces: [],
    implementedByObjectTypes: [],
    links: {},
    allLinks: {},
  };
}

function sharedPropertyType(apiName: string): Ontologies.SharedPropertyType {
  return {
    rid: "ri.spt",
    apiName,
    displayName: "Shared",
    description: "",
    dataType: { type: "string" },
    typeClasses: [],
  };
}

/**
 * Runs maker-import the way the CLI does: metadata is a JSON file passed
 * with --input. A generator that rejects the file is fine; modules it
 * already wrote are still executed below.
 */
async function runImport(
  metadata: Ontologies.OntologyFullMetadata,
  outputDir: string,
): Promise<void> {
  const inputPath = path.join(outputDir, "ontology.json");
  fs.mkdirSync(outputDir, { recursive: true });
  fs.writeFileSync(inputPath, JSON.stringify(metadata));
  try {
    await main([
      "node",
      "maker-import",
      "--input",
      inputPath,
      "--output",
      outputDir,
    ]);
  } catch {
    // Rejection is a valid fix only when no generated module runs the
    // api name first.
  }
}

function generatedSources(dir: string): string[] {
  if (!fs.existsSync(dir)) {
    return [];
  }
  const files: string[] = [];
  const visit = (current: string): void => {
    for (const entry of fs.readdirSync(current, { withFileTypes: true })) {
      const fullPath = path.join(current, entry.name);
      if (entry.isDirectory()) {
        visit(fullPath);
      } else if (entry.isFile() && /\.(?:ts|js|mjs|cjs)$/u.test(entry.name)) {
        files.push(fullPath);
      }
    }
  };
  visit(dir);
  return files;
}

/** Evaluates each generated module's source with Node, unchanged. */
function executeGenerated(outputDir: string, canaryPath: string): void {
  for (const filePath of generatedSources(outputDir)) {
    spawnSync(
      process.execPath,
      ["--input-type=module", "-e", fs.readFileSync(filePath, "utf-8")],
      {
        // cspell:disable-next-line
        env: { ...process.env, CANARYPATH: canaryPath },
        encoding: "utf-8",
      },
    );
  }
}

async function expectNoExecution(
  metadata: Ontologies.OntologyFullMetadata,
): Promise<void> {
  const root = makeTemp("api-name");
  const outputDir = path.join(root, "out");
  const canaryPath = path.join(root, "canary.txt");
  await runImport(metadata, outputDir);
  executeGenerated(outputDir, canaryPath);
  expect(
    fs.existsSync(canaryPath),
    "a generated module executed statements taken from an api name",
  ).toBe(false);
}

describe("maker-import api name code injection", () => {
  it("does not run code from an object type api name", async () => {
    const metadata = emptyMetadata();
    metadata.objectTypes.Employee = objectType(shortNamePayload());
    await expectNoExecution(metadata);
  });

  it("does not run code from an action type api name", async () => {
    const metadata = emptyMetadata();
    metadata.actionTypes.createEmployee = actionType(shortNamePayload());
    await expectNoExecution(metadata);
  });

  it("does not run code from an interface type api name", async () => {
    const metadata = emptyMetadata();
    metadata.interfaceTypes.Employee = interfaceType(shortNamePayload());
    await expectNoExecution(metadata);
  });

  it("does not run code from a shared property type api name", async () => {
    const metadata = emptyMetadata();
    metadata.sharedPropertyTypes.employeeId =
      sharedPropertyType(shortNamePayload());
    await expectNoExecution(metadata);
  });

  it("does not run code when colliding api names are expanded with the namespace", async () => {
    // Identical suffixes share a short name, so resolveVarNames uses fullCamel.
    // The leading "y" is glued to the namespace and still closes `export {`.
    // cspell:disable-next-line
    const suffix = `y}\n${CANARY_STATEMENT}\nvar nsoneY=1;var nstwoY=1;void(\`);void "`;
    const metadata = emptyMetadata();
    // cspell:disable-next-line
    metadata.objectTypes.One = objectType(`nsone.${suffix}`);
    // cspell:disable-next-line
    metadata.objectTypes.Two = objectType(`nstwo.${suffix}`);
    await expectNoExecution(metadata);
  });
});
