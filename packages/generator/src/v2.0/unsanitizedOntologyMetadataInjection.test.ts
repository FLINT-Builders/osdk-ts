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

import { mkdtemp, readdir, readFile, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";

import { describe, expect, it } from "vitest";

import type { MinimalFs } from "../MinimalFs.js";
import { TodoWireOntology } from "../util/test/TodoWireOntology.js";
import type { WireOntologyDefinition } from "../WireOntologyDefinition.js";
import { generateClientSdkVersionTwoPointZero } from "./generateClientSdkVersionTwoPointZero.js";

/**
 * Metadata strings are copied into generated TypeScript. Generation must
 * reject names that are not identifier segments (letters, digits, underscores,
 * with dots only between segments) before creating the output directory or
 * writing a file. Formatting must not be what decides whether the text is kept.
 */
const IDENTIFIER = /^[A-Za-z_][A-Za-z0-9_]*$/u;

function singleObjectOntology(): WireOntologyDefinition {
  const ontology = structuredClone(TodoWireOntology) as WireOntologyDefinition;
  ontology.actionTypes = {};
  ontology.queryTypes = {};
  ontology.interfaceTypes = {};
  ontology.sharedPropertyTypes = {};
  const todo = ontology.objectTypes.Todo;
  if (todo == null) {
    throw new Error("Todo fixture missing");
  }
  todo.linkTypes = [];
  todo.implementsInterfaces = [];
  todo.implementsInterfaces2 = {};
  delete ontology.objectTypes.Person;
  return ontology;
}

function recordingFs(): { fs: MinimalFs; mutations: string[] } {
  const mutations: string[] = [];
  const missing = Object.assign(new Error("missing"), { code: "ENOENT" });
  return {
    mutations,
    fs: {
      mkdir: () => {
        mutations.push("mkdir");
        return Promise.resolve();
      },
      writeFile: () => {
        mutations.push("writeFile");
        return Promise.resolve();
      },
      readdir: () => Promise.reject(missing),
    },
  };
}

async function generateOrReject(
  ontology: WireOntologyDefinition,
): Promise<{ rejected: boolean; mutations: string[] }> {
  const { fs, mutations } = recordingFs();
  try {
    await generateClientSdkVersionTwoPointZero(
      ontology,
      "generator-test",
      fs,
      path.join(tmpdir(), "osdk-metadata-injection-unused"),
    );
    return { rejected: false, mutations };
  } catch {
    return { rejected: true, mutations };
  }
}

function expectRejectedBeforeOutput(
  result: { rejected: boolean; mutations: string[] },
): void {
  expect(
    result.mutations,
    "unsafe metadata must be rejected before the output directory or any file is created",
  ).toEqual([]);
  expect(result.rejected, "unsafe metadata must be rejected").toBe(true);
}

function renameObject(
  ontology: WireOntologyDefinition,
  apiName: string,
): void {
  const current = ontology.objectTypes.Todo;
  if (current == null) {
    throw new Error("Todo fixture missing");
  }
  current.objectType.apiName = apiName;
  delete ontology.objectTypes.Todo;
  ontology.objectTypes[apiName] = current;
}

describe("unsanitized ontology metadata", () => {
  it("generates object names that are identifier segments", async () => {
    const ontology = singleObjectOntology();
    renameObject(ontology, "com.example.Todo_1");
    expect(IDENTIFIER.test("Todo_1")).toBe(true);

    const out = await mkdtemp(path.join(tmpdir(), "osdk-safe-"));
    try {
      await generateClientSdkVersionTwoPointZero(
        ontology,
        "generator-test",
        {
          mkdir: (target, options) =>
            import("node:fs/promises").then((fs) => fs.mkdir(target, options)),
          writeFile: (target, contents) =>
            import("node:fs/promises").then((fs) =>
              fs.writeFile(target, contents)
            ),
          readdir: (target) =>
            import("node:fs/promises").then((fs) => fs.readdir(target)),
        },
        out,
      );
      const index = await readFile(path.join(out, "index.ts"), "utf8");
      expect(index).toContain("Todo_1");
      const objectFile = await readFile(
        path.join(out, "ontology", "objects", "Todo_1.ts"),
        "utf8",
      );
      expect(objectFile).toContain("com.example.Todo_1");
    } finally {
      await rm(out, { recursive: true, force: true });
    }
  });

  it("rejects an object api name that closes the entrypoint export list", async () => {
    const ontology = singleObjectOntology();
    renameObject(
      ontology,
      "Todo }; globalThis.__inj = 1; export {",
    );
    expectRejectedBeforeOutput(await generateOrReject(ontology));
  });

  it("rejects a quoted object api name that breaks out of the generated string", async () => {
    const ontology = singleObjectOntology();
    renameObject(
      ontology,
      "x\"; globalThis.__inj = 1; export const z = \"x.Todo",
    );
    expectRejectedBeforeOutput(await generateOrReject(ontology));
  });

  it("rejects a primary key api name that breaks out of the generated string", async () => {
    const ontology = singleObjectOntology();
    const todo = ontology.objectTypes.Todo;
    if (todo == null) throw new Error("Todo fixture missing");
    const payload = "id\"; globalThis.__inj = 1; export const z = \"";
    const property = todo.objectType.properties.id;
    if (property == null) throw new Error("id property missing");
    todo.objectType.primaryKey = payload;
    todo.objectType.properties[payload] = property;
    delete todo.objectType.properties.id;
    expectRejectedBeforeOutput(await generateOrReject(ontology));
  });

  it("rejects an object rid that is emitted as a top-level statement", async () => {
    const ontology = singleObjectOntology();
    const todo = ontology.objectTypes.Todo;
    if (todo == null) throw new Error("Todo fixture missing");
    todo.objectType.rid =
      "x\",\n      },\n    } as Todo;\nglobalThis.__inj = \"rid\";\nexport const __end = {\n      internalDoNotUseMetadata: {\n        rid: \"y";
    expectRejectedBeforeOutput(await generateOrReject(ontology));
  });

  it("rejects an ontology rid that is emitted as a top-level statement", async () => {
    const ontology = singleObjectOntology();
    ontology.ontology.rid = "x\"; globalThis.__inj = \"ont\"; /*";
    expectRejectedBeforeOutput(await generateOrReject(ontology));
  });

  it("rejects a branch rid that is emitted as a top-level statement", async () => {
    const ontology = singleObjectOntology();
    ontology.branch = {
      rid: "x\"; globalThis.__inj = \"branch\"; export const __end = \"",
    };
    expectRejectedBeforeOutput(await generateOrReject(ontology));
  });

  it("rejects a link api name used as an unquoted identifier", async () => {
    const ontology = singleObjectOntology();
    const todo = ontology.objectTypes.Todo;
    if (todo == null) throw new Error("Todo fixture missing");
    todo.linkTypes = [{
      apiName:
        "bad\n}\nglobalThis.__inj = 1\nexport interface Rest {\nreadonly extra",
      cardinality: "ONE",
      displayName: "Link",
      objectTypeApiName: "Todo",
      status: "ACTIVE",
      foreignKeyPropertyApiName: "id",
      linkTypeRid: "ri.link.1",
    }];
    expectRejectedBeforeOutput(await generateOrReject(ontology));
  });

  it("rejects an action parameter id that closes a generated comment", async () => {
    const ontology = singleObjectOntology();
    ontology.actionTypes = {
      markTodoCompleted: {
        apiName: "markTodoCompleted",
        description: "d",
        parameters: {
          "x*/globalThis.__inj=1;/*": {
            displayName: "p",
            description: "d",
            dataType: { type: "string" },
            required: true,
            typeClasses: [],
          },
        },
        rid:
          "ri.ontology.main.action-type.9f84017d-cf17-4fa8-84c3-8e01e5d594f2",
        operations: [],
        status: "ACTIVE",
      },
    };
    expectRejectedBeforeOutput(await generateOrReject(ontology));
  });

  it("rejects an action api name that is not an identifier", async () => {
    const ontology = singleObjectOntology();
    ontology.actionTypes = {
      "doThing }; globalThis.__inj = 1; export {": {
        apiName: "doThing }; globalThis.__inj = 1; export {",
        parameters: {},
        rid:
          "ri.ontology.main.action-type.9f84017d-cf17-4fa8-84c3-8e01e5d594f2",
        operations: [],
        status: "ACTIVE",
      },
    };
    expectRejectedBeforeOutput(await generateOrReject(ontology));
  });

  it("rejects a query api name and a query parameter id that are not identifiers", async () => {
    const ontology = singleObjectOntology();
    ontology.queryTypes = {
      "getCount }; globalThis.__inj = 1; export {": {
        apiName: "getCount }; globalThis.__inj = 1; export {",
        output: { type: "integer" },
        parameters: {
          "done\"; globalThis.__inj = 1; export const q = \"": {
            dataType: { type: "boolean" },
            required: true,
          },
        },
        rid: "rid.query.1",
        version: "1.0.0",
        typeReferences: {},
      },
    };
    expectRejectedBeforeOutput(await generateOrReject(ontology));
  });

  it("rejects an interface api name that is not an identifier", async () => {
    const ontology = singleObjectOntology();
    ontology.interfaceTypes = {
      "Bad Name": {
        apiName: "Bad Name",
        description: "desc",
        displayName: "Bad",
        properties: {},
        propertiesV2: {},
        rid: "ri.interface.1",
        extendsInterfaces: [],
        links: {},
        implementedByObjectTypes: [],
        allProperties: {},
        allPropertiesV2: {},
        allExtendsInterfaces: [],
        allLinks: {},
      },
    };
    expectRejectedBeforeOutput(await generateOrReject(ontology));
  });

  it("keeps a comment-closing description inside a comment", async () => {
    const ontology = singleObjectOntology();
    const todo = ontology.objectTypes.Todo;
    if (todo == null) throw new Error("Todo fixture missing");
    const body = todo.objectType.properties.body;
    if (body == null) throw new Error("body property missing");
    body.description = "text\n*/\nglobalThis.__inj = \"desc\";\n/*";
    const out = await mkdtemp(path.join(tmpdir(), "osdk-desc-"));
    try {
      await generateClientSdkVersionTwoPointZero(
        ontology,
        "generator-test",
        {
          mkdir: (target, options) =>
            import("node:fs/promises").then((fs) => fs.mkdir(target, options)),
          writeFile: (target, contents) =>
            import("node:fs/promises").then((fs) =>
              fs.writeFile(target, contents)
            ),
          readdir: (target) =>
            import("node:fs/promises").then((fs) => fs.readdir(target)),
        },
        out,
      );
      const files = await collectTs(out);
      const combined = files.join("\n");
      expect(combined).not.toMatch(/\*\/\s*\nglobalThis\.__inj/u);
    } finally {
      await rm(out, { recursive: true, force: true });
    }
  });
});

async function collectTs(dir: string): Promise<string[]> {
  const out: string[] = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      out.push(...await collectTs(full));
    } else if (entry.name.endsWith(".ts")) {
      out.push(await readFile(full, "utf8"));
    }
  }
  return out;
}
