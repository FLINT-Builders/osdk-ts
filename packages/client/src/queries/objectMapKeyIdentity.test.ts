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

import type { InterfaceDefinition, ObjectMetadata } from "@osdk/api";
import type { OntologyObjectV2, QueryTypeV2 } from "@osdk/foundry.ontologies";
import { wireQueryTypeV2ToSdkQueryMetadata } from "@osdk/generator-converters";
import { describe, expect, it } from "vitest";

import { createMinimalClient } from "../createMinimalClient.js";
import type { MinimalClient } from "../MinimalClientContext.js";
import { convertWireToOsdkObjects } from "../object/convertWireToOsdkObjects.js";
import type { FetchedObjectTypeDefinition } from "../ontology/OntologyProvider.js";
import {
  createObjectSpecifierFromInterfaceSpecifier,
  createObjectSpecifierFromPrimaryKey,
  extractPrimaryKeyFromObjectSpecifier,
} from "../util/objectSpecifierUtils.js";
import { applyQuery } from "./applyQuery.js";
import { applyStreamingQuery } from "./applyStreamingQuery.js";

const VICTIM_PRIMARY_KEY = "victim-id";
const ATTACKER_PRIMARY_KEY = `${VICTIM_PRIMARY_KEY}:chosen-by-attacker`;
const MANY_COLONS_PRIMARY_KEY = `${VICTIM_PRIMARY_KEY}:a:b:c`;
const INTERFACE_PRIMARY_KEY = `${VICTIM_PRIMARY_KEY}:via-interface:more`;
const PLAIN_PRIMARY_KEY = "plain-id";
const ONTOLOGY_RID =
  "ri.ontology.main.ontology.00000000-0000-0000-0000-000000000001";
const QUERY_API_NAME = "applyPerObject";

const objectKey = {
  type: "object",
  objectApiName: "Widget",
  objectTypeApiName: "Widget",
} as const;

const objectMap = {
  type: "entrySet",
  keyType: objectKey,
  valueType: { type: "string" },
} as const;

const widgetDefinition = {
  type: "object",
  apiName: "Widget",
  displayName: "Widget",
  description: undefined,
  properties: {},
  rid: "ri.ontology.main.object-type.widget",
  primaryKeyApiName: "id",
  titleProperty: "id",
  links: {},
  primaryKeyType: "string",
  icon: undefined,
  visibility: undefined,
  pluralDisplayName: "Widgets",
  status: undefined,
  interfaceMap: {},
  inverseInterfaceMap: {},
} as unknown as ObjectMetadata;

function queryType(): QueryTypeV2 {
  return {
    apiName: QUERY_API_NAME,
    displayName: "Apply per object",
    version: "1.0.0",
    rid: "ri.function-registry.main.function.00000000-0000-0000-0000-000000000001",
    typeReferences: {},
    output: objectMap,
    parameters: {
      peopleMap: { dataType: objectMap, required: true },
      labels: {
        dataType: {
          type: "entrySet",
          keyType: { type: "string" },
          valueType: { type: "string" },
        },
        required: true,
      },
      wrapped: {
        dataType: {
          type: "struct",
          fields: [
            {
              name: "listed",
              fieldType: { type: "array", subType: objectMap },
            },
            {
              name: "unique",
              fieldType: { type: "set", subType: objectMap },
            },
            {
              name: "boxed",
              fieldType: {
                type: "struct",
                fields: [{ name: "inner", fieldType: objectMap }],
              },
            },
            {
              name: "nested",
              fieldType: {
                type: "entrySet",
                keyType: { type: "string" },
                valueType: objectMap,
              },
            },
          ],
        },
        required: true,
      },
    },
  };
}

function streamingQueryType(): QueryTypeV2 {
  return {
    ...queryType(),
    apiName: "applyPerObjectStreaming",
    output: { type: "string" },
    parameters: {
      peopleMap: { dataType: objectMap, required: true },
    },
  };
}

async function loadWidget(client: MinimalClient, primaryKey: string) {
  const wire = {
    __apiName: "Widget",
    __primaryKey: primaryKey,
  } as unknown as OntologyObjectV2;
  const [object] = await convertWireToOsdkObjects(
    client,
    [wire],
    undefined,
    {},
    undefined,
    false,
    undefined,
    false,
    {},
    {},
    { Widget: widgetDefinition },
  );
  return object;
}

function clientRecording(
  query: QueryTypeV2,
  onExecute: (
    url: string,
    body: { parameters: Record<string, unknown> },
  ) => unknown,
): { client: MinimalClient; bodies: Array<{ url: string; body: unknown }> } {
  const metadata = wireQueryTypeV2ToSdkQueryMetadata(query);
  const bodies: Array<{ url: string; body: unknown }> = [];
  const client = createMinimalClient(
    { ontologyRid: ONTOLOGY_RID },
    "https://example.test",
    () => Promise.resolve("placeholder"),
    {},
    (input, init) => {
      const url = String(input);
      const rawBody = typeof init?.body === "string" ? init.body : "";
      const parsed = rawBody.length > 0 ? JSON.parse(rawBody) : undefined;
      bodies.push({ url, body: parsed });
      if (url.includes("/streamingExecute")) {
        return Promise.resolve(
          new Response(
            `data: ${JSON.stringify({ type: "data", value: "ok" })}\n\n`,
            { status: 200, headers: { "Content-Type": "text/event-stream" } },
          ),
        );
      }
      const value = onExecute(url, parsed);
      return Promise.resolve(Response.json({ value }));
    },
    undefined,
    () => () => ({
      getQueryDefinition: () => Promise.resolve(metadata),
      getObjectDefinition: () =>
        Promise.resolve(
          widgetDefinition as unknown as FetchedObjectTypeDefinition,
        ),
      getInterfaceDefinition: () => {
        throw new Error("interface definition is not used");
      },
      getActionDefinition: () => {
        throw new Error("action definition is not used");
      },
    }),
  );
  return { client, bodies };
}

describe("object-keyed function map parameters keep the full primary key", () => {
  it("recovers the full primary key from an object specifier", () => {
    const specifier = createObjectSpecifierFromPrimaryKey(
      widgetDefinition,
      MANY_COLONS_PRIMARY_KEY,
    );
    const interfaceSpecifier = createObjectSpecifierFromInterfaceSpecifier(
      { apiName: "HasWidget" } as InterfaceDefinition,
      {
        objectTypeApiName: "Widget",
        primaryKeyValue: INTERFACE_PRIMARY_KEY,
      },
    );
    expect(extractPrimaryKeyFromObjectSpecifier(specifier)).toBe(
      MANY_COLONS_PRIMARY_KEY,
    );
    expect(extractPrimaryKeyFromObjectSpecifier(interfaceSpecifier)).toBe(
      INTERFACE_PRIMARY_KEY,
    );
  });

  it("sends the chosen object's primary key, including colons, when executing a function", async () => {
    const metadata = wireQueryTypeV2ToSdkQueryMetadata(queryType());
    expect(metadata.parameters.peopleMap).toMatchObject({
      type: "map",
      keyType: { type: "object", object: "Widget" },
    });

    const { client, bodies } = clientRecording(queryType(), (_url, request) => {
      return request.parameters.peopleMap;
    });

    const attacker = await loadWidget(client, ATTACKER_PRIMARY_KEY);
    const manyColons = await loadWidget(client, MANY_COLONS_PRIMARY_KEY);
    const plain = await loadWidget(client, PLAIN_PRIMARY_KEY);
    const interfaceSpecifier = createObjectSpecifierFromInterfaceSpecifier(
      { apiName: "HasWidget" } as InterfaceDefinition,
      {
        objectTypeApiName: "Widget",
        primaryKeyValue: INTERFACE_PRIMARY_KEY,
      },
    );

    expect(attacker.$primaryKey).toBe(ATTACKER_PRIMARY_KEY);
    expect(attacker.$objectSpecifier).toBe(`Widget:${ATTACKER_PRIMARY_KEY}`);

    const objectMapValue = {
      [attacker.$objectSpecifier]: "note",
      [manyColons.$objectSpecifier]: "other",
      [plain.$objectSpecifier]: "plain-note",
      [interfaceSpecifier]: "interface-note",
    };

    const result = await applyQuery(
      client,
      { type: "query", apiName: QUERY_API_NAME },
      {
        peopleMap: objectMapValue,
        labels: { "keep:all:colons": "v" },
        wrapped: {
          listed: [objectMapValue],
          unique: new Set([objectMapValue]),
          boxed: { inner: objectMapValue },
          nested: { "group:name": objectMapValue },
        },
      },
    );

    const executeCall = bodies.find((call) =>
      call.url.includes(`/queries/${QUERY_API_NAME}/execute`),
    );
    expect(executeCall).toBeDefined();
    const parameters = (
      executeCall!.body as {
        parameters: Record<string, unknown>;
      }
    ).parameters;

    const expectedEntries = [
      { key: ATTACKER_PRIMARY_KEY, value: "note" },
      { key: MANY_COLONS_PRIMARY_KEY, value: "other" },
      { key: PLAIN_PRIMARY_KEY, value: "plain-note" },
      { key: INTERFACE_PRIMARY_KEY, value: "interface-note" },
    ];
    expect.soft(parameters.peopleMap).toEqual(expectedEntries);
    expect
      .soft(parameters.labels)
      .toEqual([{ key: "keep:all:colons", value: "v" }]);
    expect.soft(parameters.wrapped).toEqual({
      listed: [expectedEntries],
      unique: [expectedEntries],
      boxed: { inner: expectedEntries },
      nested: [{ key: "group:name", value: expectedEntries }],
    });

    expect.soft(result[attacker.$objectSpecifier]).toBe("note");
    expect.soft(result[manyColons.$objectSpecifier]).toBe("other");
    expect.soft(result[plain.$objectSpecifier]).toBe("plain-note");
    expect.soft(result[interfaceSpecifier]).toBe("interface-note");
    const victimSpecifier = createObjectSpecifierFromPrimaryKey(
      widgetDefinition,
      VICTIM_PRIMARY_KEY,
    );
    expect(result[victimSpecifier]).toBeUndefined();
  });

  it("sends the chosen object's primary key, including colons, when streaming a function", async () => {
    const { client, bodies } = clientRecording(
      streamingQueryType(),
      () => "ok",
    );
    const attacker = await loadWidget(client, ATTACKER_PRIMARY_KEY);
    const events = [];
    for await (const event of applyStreamingQuery(
      client,
      { type: "query", apiName: "applyPerObjectStreaming" },
      { peopleMap: { [attacker.$objectSpecifier]: "note" } },
    )) {
      events.push(event);
    }
    const streamingCall = bodies.find((call) =>
      call.url.includes("/streamingExecute"),
    );
    expect(streamingCall).toBeDefined();
    expect(
      (streamingCall!.body as { parameters: { peopleMap: unknown } }).parameters
        .peopleMap,
    ).toEqual([{ key: ATTACKER_PRIMARY_KEY, value: "note" }]);
    expect(events).toEqual(["ok"]);
  });
});
