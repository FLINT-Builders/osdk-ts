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
import * as path from "node:path";

import type * as Ontologies from "@osdk/foundry.ontologies";
import { afterEach, describe, expect, it, vi } from "vitest";

import main from "../../cli/main.js";
import { writeImportedOntology } from "../writeImportedOntology.js";

/**
 * These tests describe the safe behavior of ontology-metadata code generation.
 * They fail while untrusted JSON is emitted as executable TypeScript.
 */

const PACKAGE_ROOT = path.resolve(__dirname, "../../..");
const SANDBOX_ROOT = path.join(PACKAGE_ROOT, "test-output-untrusted");
const LOADER_PATH = path.join(SANDBOX_ROOT, "load-generated.mjs");

const ENUM_MEMBERS = [
  "OBJECT_TYPE",
  "LINK_TYPE",
  "INTERFACE_TYPE",
  "SHARED_PROPERTY_TYPE",
  "ACTION_TYPE",
  "VALUE_TYPE",
] as const;

const SAFE_TYPE_LINE = new RegExp(
  `^\\s*"__type":\\s*(?:OntologyEntityTypeEnum\\.(?:${ENUM_MEMBERS.join("|")})|"(?:\\\\.|[^"\\\\])*"),?\\s*$`,
  "u",
);

const SAFE_BINDING = /^[A-Za-z_$][A-Za-z0-9_$]*$/u;

afterEach(() => {
  if (fs.existsSync(SANDBOX_ROOT)) {
    fs.rmSync(SANDBOX_ROOT, { recursive: true, force: true });
  }
});

function probeKey(name: string): string {
  return `__osdkMakerImportProbe${name}`;
}

/** Expression with no double quotes, so the codegen regex keeps it raw. */
function typePayload(marker: string): string {
  return `OBJECT_TYPE, injected: globalThis['${marker}']=1`;
}

function identifierPayload(marker: string): string {
  // camel() rewrites "_" sequences, so the probe name has none.
  return `Z=globalThis['${marker}']=1;let z`;
}

function nestedType(marker: string): { __type: string } {
  return { __type: typePayload(marker) };
}

function outputDirFor(name: string): string {
  return path.join(SANDBOX_ROOT, name);
}

function emptyShell(): Ontologies.OntologyFullMetadata {
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
  } as Ontologies.OntologyFullMetadata;
}

function withObject(
  objectType: Record<string, unknown>,
): Ontologies.OntologyFullMetadata {
  const metadata = emptyShell();
  metadata.objectTypes = {
    Employee: {
      objectType,
      linkTypes: [],
      implementsInterfaces: [],
      implementsInterfaces2: {},
      sharedPropertyTypeMapping: {},
    },
  } as unknown as Ontologies.OntologyFullMetadata["objectTypes"];
  return metadata;
}

function baseObject(
  extra: Record<string, unknown> = {},
): Ontologies.OntologyFullMetadata {
  return withObject({
    apiName: "Employee",
    displayName: "Employee",
    description: "An employee",
    primaryKey: "id",
    titleProperty: "id",
    status: "ACTIVE",
    visibility: "NORMAL",
    properties: {
      id: {
        displayName: "ID",
        description: "Identifier",
        dataType: { type: "string" },
        rid: "ri.property.id",
        typeClasses: [],
      },
    },
    aliases: [],
    datasources: [],
    pluralDisplayName: "Employees",
    icon: { type: "blueprint", color: "", name: "" },
    rid: "ri.object.employee",
    ...extra,
  });
}

function withAction(
  action: Record<string, unknown>,
): Ontologies.OntologyFullMetadata {
  const metadata = emptyShell();
  metadata.actionTypes = {
    createEmployee: action,
  } as unknown as Ontologies.OntologyFullMetadata["actionTypes"];
  return metadata;
}

function baseAction(
  extra: Record<string, unknown> = {},
): Ontologies.OntologyFullMetadata {
  return withAction({
    apiName: "createEmployee",
    displayName: "Create Employee",
    description: "Creates an employee",
    status: "ACTIVE",
    parameters: {},
    operations: [],
    rid: "ri.action.create",
    ...extra,
  });
}

function withInterface(
  iface: Record<string, unknown>,
): Ontologies.OntologyFullMetadata {
  const metadata = emptyShell();
  metadata.interfaceTypes = {
    Person: iface,
  } as unknown as Ontologies.OntologyFullMetadata["interfaceTypes"];
  return metadata;
}

function baseInterface(
  extra: Record<string, unknown> = {},
): Ontologies.OntologyFullMetadata {
  return withInterface({
    apiName: "Person",
    displayName: "Person",
    description: "A person",
    propertiesV2: {},
    extendsInterfaces: [],
    ...extra,
  });
}

function withSharedProperty(
  sharedProperty: Record<string, unknown>,
): Ontologies.OntologyFullMetadata {
  const metadata = emptyShell();
  metadata.sharedPropertyTypes = {
    nickname: sharedProperty,
  } as unknown as Ontologies.OntologyFullMetadata["sharedPropertyTypes"];
  return metadata;
}

function listFiles(dir: string): string[] {
  if (!fs.existsSync(dir)) {
    return [];
  }
  const files: string[] = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...listFiles(fullPath));
    } else {
      files.push(fullPath);
    }
  }
  return files;
}

function stripDoubleQuotedStrings(source: string): string {
  return source.replace(/"(?:\\.|[^"\\])*"/gu, '""');
}

function assertGeneratedSourcesAreData(dir: string, marker: string): void {
  const files = listFiles(dir);
  const outside = files.filter((file) => {
    const relative = path.relative(dir, file);
    return relative.startsWith("..") || path.isAbsolute(relative);
  });
  expect(
    outside,
    "generated files must stay inside the output directory",
  ).toEqual([]);

  for (const file of files) {
    const source = fs.readFileSync(file, "utf-8");
    const relative = path.relative(dir, file);

    expect(
      stripDoubleQuotedStrings(source).includes(marker),
      `${relative} contains an unquoted probe expression`,
    ).toBe(false);

    for (const line of source.split("\n")) {
      if (!line.includes('"__type"')) {
        continue;
      }
      expect(line, `${relative} has a raw __type value`).toMatch(
        SAFE_TYPE_LINE,
      );
    }

    for (const match of source.matchAll(/\b(?:const|export const)\s+(\S+)/gu)) {
      const binding = match[1].replace(/_base\b.*$/u, "");
      expect(binding, `${relative} binding`).toMatch(SAFE_BINDING);
    }

    for (const match of source.matchAll(/export\s*\{([^}]*)\}/gu)) {
      for (const part of match[1].split(",")) {
        const name =
          part
            .trim()
            .split(/\s+as\s+/u)
            .pop() ?? "";
        if (name.length === 0) {
          continue;
        }
        expect(name, `${relative} export`).toMatch(SAFE_BINDING);
      }
    }
  }
}

function writeLoader(): void {
  fs.mkdirSync(SANDBOX_ROOT, { recursive: true });
  fs.writeFileSync(
    LOADER_PATH,
    `import { defineOntology } from "@osdk/maker";
import { readdirSync, statSync } from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const marker = process.env.PROBE_KEY;
const root = process.env.PROBE_ROOT;

async function loadGenerated(dir) {
  let entries = [];
  try {
    entries = readdirSync(dir);
  } catch {
    return;
  }
  for (const name of entries) {
    const fullPath = path.join(dir, name);
    if (statSync(fullPath).isDirectory()) {
      await loadGenerated(fullPath);
    } else if (fullPath.endsWith(".ts")) {
      try {
        await import(pathToFileURL(fullPath).href);
      } catch {
        // A generated module can throw after its object literal already ran.
      }
    }
  }
}

try {
  await defineOntology("", async () => {
    await loadGenerated(root);
  });
} catch {
  // Registration after the import does not undo work the module already did.
}

process.stdout.write(globalThis[marker] === 1 ? "ran" : "clean");
`,
    "utf-8",
  );
}

function loadGeneratedModules(dir: string, marker: string): string {
  writeLoader();
  const result = spawnSync(
    process.execPath,
    ["--experimental-strip-types", LOADER_PATH],
    {
      cwd: PACKAGE_ROOT,
      encoding: "utf-8",
      env: {
        ...process.env,
        PROBE_KEY: marker,
        PROBE_ROOT: dir,
      },
      timeout: 30_000,
    },
  );
  expect(
    result.error,
    result.stderr || result.stdout || "loader failed to start",
  ).toBeUndefined();
  return result.stdout;
}

function assertImportDoesNotRunProbe(dir: string, marker: string): void {
  const loaded = loadGeneratedModules(dir, marker);
  expect(
    loaded,
    "loading the generated module ran the metadata expression",
  ).toBe("clean");
  assertGeneratedSourcesAreData(dir, marker);
}

function generate(
  metadata: Ontologies.OntologyFullMetadata,
  dir: string,
): void {
  fs.rmSync(dir, { recursive: true, force: true });
  try {
    writeImportedOntology(metadata, dir);
  } catch {
    // Rejection is safe only when nothing executable was written first.
  }
}

describe("untrusted ontology metadata code generation", () => {
  it("does not execute a __type expression supplied as object visibility", () => {
    vi.useRealTimers();
    const marker = probeKey("Visibility");
    const dir = outputDirFor("visibility");
    generate(baseObject({ visibility: nestedType(marker) }), dir);
    assertImportDoesNotRunProbe(dir, marker);
  });

  it("does not execute a __type expression supplied as object description", () => {
    vi.useRealTimers();
    const marker = probeKey("ObjectDescription");
    const dir = outputDirFor("object-description");
    generate(baseObject({ description: nestedType(marker) }), dir);
    assertImportDoesNotRunProbe(dir, marker);
  });

  it("does not execute a __type expression supplied as object displayName", () => {
    vi.useRealTimers();
    const marker = probeKey("ObjectDisplayName");
    const dir = outputDirFor("object-display-name");
    generate(baseObject({ displayName: nestedType(marker) }), dir);
    assertImportDoesNotRunProbe(dir, marker);
  });

  it("does not execute a __type expression supplied as object rid", () => {
    vi.useRealTimers();
    const marker = probeKey("ObjectRid");
    const dir = outputDirFor("object-rid");
    generate(baseObject({ rid: nestedType(marker) }), dir);
    assertImportDoesNotRunProbe(dir, marker);
  });

  it("does not execute a __type expression supplied as object titleProperty", () => {
    vi.useRealTimers();
    const marker = probeKey("TitleProperty");
    const dir = outputDirFor("title-property");
    generate(baseObject({ titleProperty: nestedType(marker) }), dir);
    assertImportDoesNotRunProbe(dir, marker);
  });

  it("does not execute a __type expression supplied as object primaryKey", () => {
    vi.useRealTimers();
    const marker = probeKey("PrimaryKey");
    const dir = outputDirFor("primary-key");
    generate(baseObject({ primaryKey: nestedType(marker) }), dir);
    assertImportDoesNotRunProbe(dir, marker);
  });

  it("does not execute a __type expression supplied as a property description", () => {
    vi.useRealTimers();
    const marker = probeKey("PropertyDescription");
    const dir = outputDirFor("property-description");
    generate(
      baseObject({
        properties: {
          id: {
            displayName: "ID",
            description: nestedType(marker),
            dataType: { type: "string" },
            rid: "ri.property.id",
            typeClasses: [],
          },
        },
      }),
      dir,
    );
    assertImportDoesNotRunProbe(dir, marker);
  });

  it("does not execute a __type expression supplied as a property displayName", () => {
    vi.useRealTimers();
    const marker = probeKey("PropertyDisplayName");
    const dir = outputDirFor("property-display-name");
    generate(
      baseObject({
        properties: {
          id: {
            displayName: nestedType(marker),
            description: "Identifier",
            dataType: { type: "string" },
            rid: "ri.property.id",
            typeClasses: [],
          },
        },
      }),
      dir,
    );
    assertImportDoesNotRunProbe(dir, marker);
  });

  it("does not execute a __type expression supplied as action description", () => {
    vi.useRealTimers();
    const marker = probeKey("ActionDescription");
    const dir = outputDirFor("action-description");
    generate(baseAction({ description: nestedType(marker) }), dir);
    assertImportDoesNotRunProbe(dir, marker);
  });

  it("does not execute a __type expression supplied as action displayName", () => {
    vi.useRealTimers();
    const marker = probeKey("ActionDisplayName");
    const dir = outputDirFor("action-display-name");
    generate(baseAction({ displayName: nestedType(marker) }), dir);
    assertImportDoesNotRunProbe(dir, marker);
  });

  it("does not execute a __type expression supplied as an action parameter description", () => {
    vi.useRealTimers();
    const marker = probeKey("ParameterDescription");
    const dir = outputDirFor("parameter-description");
    generate(
      baseAction({
        parameters: {
          name: {
            displayName: "Name",
            description: nestedType(marker),
            dataType: { type: "string" },
            required: true,
            typeClasses: [],
          },
        },
      }),
      dir,
    );
    assertImportDoesNotRunProbe(dir, marker);
  });

  it("does not execute a __type expression supplied as an action parameter displayName", () => {
    vi.useRealTimers();
    const marker = probeKey("ParameterDisplayName");
    const dir = outputDirFor("parameter-display-name");
    generate(
      baseAction({
        parameters: {
          name: {
            displayName: nestedType(marker),
            description: "Name",
            dataType: { type: "string" },
            required: true,
            typeClasses: [],
          },
        },
      }),
      dir,
    );
    assertImportDoesNotRunProbe(dir, marker);
  });

  it("does not execute a __type expression supplied as an action parameter required flag", () => {
    vi.useRealTimers();
    const marker = probeKey("ParameterRequired");
    const dir = outputDirFor("parameter-required");
    generate(
      baseAction({
        parameters: {
          name: {
            displayName: "Name",
            description: "Name",
            dataType: { type: "string" },
            required: nestedType(marker),
            typeClasses: [],
          },
        },
      }),
      dir,
    );
    assertImportDoesNotRunProbe(dir, marker);
  });

  it("does not execute a __type expression supplied as an object parameter api name", () => {
    vi.useRealTimers();
    const marker = probeKey("ObjectParameter");
    const dir = outputDirFor("object-parameter");
    generate(
      baseAction({
        parameters: {
          employee: {
            displayName: "Employee",
            description: "Employee",
            dataType: {
              type: "object",
              objectTypeApiName: nestedType(marker),
              objectApiName: "Employee",
            },
            required: true,
            typeClasses: [],
          },
        },
      }),
      dir,
    );
    assertImportDoesNotRunProbe(dir, marker);
  });

  it("does not execute a __type expression supplied as a struct field object api name", () => {
    vi.useRealTimers();
    const marker = probeKey("StructField");
    const dir = outputDirFor("struct-field");
    generate(
      baseAction({
        parameters: {
          address: {
            displayName: "Address",
            description: "Address",
            dataType: {
              type: "struct",
              fields: [
                {
                  name: "employee",
                  fieldType: {
                    type: "object",
                    objectTypeApiName: nestedType(marker),
                    objectApiName: "Employee",
                  },
                  required: true,
                },
              ],
            },
            required: true,
            typeClasses: [],
          },
        },
      }),
      dir,
    );
    assertImportDoesNotRunProbe(dir, marker);
  });

  it("does not execute a __type expression supplied as interface description", () => {
    vi.useRealTimers();
    const marker = probeKey("InterfaceDescription");
    const dir = outputDirFor("interface-description");
    generate(baseInterface({ description: nestedType(marker) }), dir);
    assertImportDoesNotRunProbe(dir, marker);
  });

  it("does not execute a __type expression supplied as interface displayName", () => {
    vi.useRealTimers();
    const marker = probeKey("InterfaceDisplayName");
    const dir = outputDirFor("interface-display-name");
    generate(baseInterface({ displayName: nestedType(marker) }), dir);
    assertImportDoesNotRunProbe(dir, marker);
  });

  it("does not execute a __type expression supplied on an interface-defined property", () => {
    vi.useRealTimers();
    const marker = probeKey("InterfaceProperty");
    const dir = outputDirFor("interface-property");
    generate(
      baseInterface({
        propertiesV2: {
          nickname: {
            type: "interfaceDefinedPropertyType",
            apiName: "nickname",
            displayName: nestedType(marker),
            description: "Nickname",
            dataType: { type: "string" },
            requireImplementation: false,
          },
        },
      }),
      dir,
    );
    assertImportDoesNotRunProbe(dir, marker);
  });

  it("does not execute a __type expression supplied on an interface shared property", () => {
    vi.useRealTimers();
    const marker = probeKey("InterfaceSharedProperty");
    const dir = outputDirFor("interface-shared-property");
    generate(
      baseInterface({
        propertiesV2: {
          "com.example.nickname": {
            type: "interfaceSharedPropertyType",
            apiName: "com.example.nickname",
            displayName: "Nickname",
            description: nestedType(marker),
            dataType: { type: "string" },
            required: false,
          },
        },
      }),
      dir,
    );
    assertImportDoesNotRunProbe(dir, marker);
  });

  it("does not execute a __type expression supplied as a shared property description", () => {
    vi.useRealTimers();
    const marker = probeKey("SharedPropertyDescription");
    const dir = outputDirFor("shared-property-description");
    generate(
      withSharedProperty({
        apiName: "nickname",
        displayName: "Nickname",
        description: nestedType(marker),
        dataType: { type: "string" },
        rid: "ri.spt.nickname",
        typeClasses: [],
      }),
      dir,
    );
    assertImportDoesNotRunProbe(dir, marker);
  });

  it("does not execute a __type expression supplied as a shared property displayName", () => {
    vi.useRealTimers();
    const marker = probeKey("SharedPropertyDisplayName");
    const dir = outputDirFor("shared-property-display-name");
    generate(
      withSharedProperty({
        apiName: "nickname",
        displayName: nestedType(marker),
        description: "Nickname",
        dataType: { type: "string" },
        rid: "ri.spt.nickname",
        typeClasses: [],
      }),
      dir,
    );
    assertImportDoesNotRunProbe(dir, marker);
  });

  it("does not emit an api name as an executable binding", () => {
    vi.useRealTimers();
    const marker = "osdkMakerImportProbeApiName";
    const dir = outputDirFor("api-name");
    generate(baseObject({ apiName: identifierPayload(marker) }), dir);
    assertImportDoesNotRunProbe(dir, marker);
  });

  it("does not execute a metadata file passed to the maker-import CLI when the generated module is loaded", async () => {
    vi.useRealTimers();
    const marker = probeKey("Cli");
    const dir = outputDirFor("cli");
    const input = path.join(SANDBOX_ROOT, "metadata.json");
    fs.mkdirSync(SANDBOX_ROOT, { recursive: true });
    fs.writeFileSync(
      input,
      JSON.stringify(baseObject({ visibility: nestedType(marker) })),
      "utf-8",
    );

    try {
      await main(["node", "maker-import", "--input", input, "--output", dir]);
    } catch {
      // A rejected file is safe only when the output does not already run.
    }

    assertImportDoesNotRunProbe(dir, marker);
  });
});
