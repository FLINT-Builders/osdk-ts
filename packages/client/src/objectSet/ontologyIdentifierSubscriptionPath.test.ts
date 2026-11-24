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

import { createHash } from "node:crypto";
import http from "node:http";
import type { AddressInfo, Socket } from "node:net";

import type { ObjectTypeDefinition } from "@osdk/api";
import {
  __EXPERIMENTAL__NOT_SUPPORTED_YET__linkSubscriptions,
  __EXPERIMENTAL__NOT_SUPPORTED_YET__subscribeToNoTypeObjectSet,
} from "@osdk/api/unstable";
import { afterEach, describe, expect, it } from "vitest";

import type { Client } from "../createClient.js";
import { createClient } from "../createClient.js";

const PLACEHOLDER_TOKEN = "placeholder-token";
const WEBSOCKET_GUID = "258EAFA5-E914-47DA-95CA-C5AB0DC85B11";
const VALID_ONTOLOGY_RID =
  "ri.ontology.main.ontology.aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee";
const TRAVERSAL_ONTOLOGY_RID = `${VALID_ONTOLOGY_RID}/../../../../../other`;
const BACKSLASH_ONTOLOGY_RID = `${VALID_ONTOLOGY_RID}\\..\\..\\..\\..\\..\\other`;
const QUERY_ONTOLOGY_RID = `${VALID_ONTOLOGY_RID}/../../../../../secret?injected=1`;
const UNPREFIXED_ONTOLOGY_RID = "not-a-rid/../../../../../other";

const employee = {
  apiName: "Employee",
  type: "object",
} as ObjectTypeDefinition;

interface Upgrade {
  readonly host: string | undefined;
  readonly path: string;
  readonly protocol: string | undefined;
}

interface RecordedRequest {
  readonly authorization: string | undefined;
  readonly path: string;
}

interface Harness {
  readonly baseUrl: string;
  readonly port: number;
  readonly requests: RecordedRequest[];
  readonly upgrades: Upgrade[];
  close: () => Promise<void>;
}

function objectTypeMetadata(): unknown {
  return {
    implementsInterfaces: [],
    implementsInterfaces2: {},
    linkTypes: [],
    objectType: {
      aliases: [],
      apiName: "Employee",
      datasources: [],
      description: "description",
      displayName: "Employee",
      icon: { color: "blue", name: "person", type: "blueprint" },
      pluralDisplayName: "Employees",
      primaryKey: "employeeId",
      properties: {
        employeeId: {
          dataType: { type: "integer" },
          rid: "ri.ontology.main.property.example",
          typeClasses: [],
        },
      },
      rid: "ri.ontology.main.object-type.example",
      status: "ACTIVE",
      titleProperty: "employeeId",
      visibility: "NORMAL",
    },
    sharedPropertyTypeMapping: {},
  };
}

async function startHarness(
  options: { readonly objectMetadataFor?: string } = {},
): Promise<Harness> {
  const upgrades: Upgrade[] = [];
  const requests: RecordedRequest[] = [];
  const sockets = new Set<Socket>();

  const server = http.createServer((request, response) => {
    const path = request.url ?? "";
    requests.push({
      authorization: request.headers.authorization,
      path,
    });
    const pathname = path.split("?")[0] ?? path;
    const metadataPath =
      options.objectMetadataFor == null
        ? undefined
        : `/api/v2/ontologies/${encodeURIComponent(
            options.objectMetadataFor,
          )}/objectTypes/Employee/fullMetadata`;
    if (metadataPath != null && pathname === metadataPath) {
      response.writeHead(200, { "content-type": "application/json" });
      response.end(JSON.stringify(objectTypeMetadata()));
      return;
    }
    response.writeHead(404, { "content-type": "application/json" });
    response.end(
      JSON.stringify({
        errorCode: "NOT_FOUND",
        errorDescription: "No object type metadata is available.",
        errorInstanceId: "placeholder-error",
        errorName: "ObjectTypeNotFound",
      }),
    );
  });

  server.on("upgrade", (request, socket) => {
    sockets.add(socket);
    socket.on("close", () => {
      sockets.delete(socket);
    });
    const protocolHeader = request.headers["sec-websocket-protocol"];
    upgrades.push({
      host: request.headers.host,
      path: request.url ?? "",
      protocol: Array.isArray(protocolHeader)
        ? protocolHeader.join(",")
        : protocolHeader,
    });
    const key = request.headers["sec-websocket-key"];
    if (typeof key !== "string") {
      socket.destroy();
      return;
    }
    const accept = createHash("sha1")
      .update(key + WEBSOCKET_GUID)
      .digest("base64");
    const protocolLine =
      typeof protocolHeader === "string"
        ? `Sec-WebSocket-Protocol: ${protocolHeader}\r\n`
        : "";
    socket.write(
      "HTTP/1.1 101 Switching Protocols\r\n" +
        "Upgrade: websocket\r\n" +
        "Connection: Upgrade\r\n" +
        `Sec-WebSocket-Accept: ${accept}\r\n` +
        protocolLine +
        "\r\n",
    );
  });

  await new Promise<void>((resolve) => {
    server.listen(0, "127.0.0.1", () => {
      resolve();
    });
  });
  const address = server.address() as AddressInfo;

  return {
    baseUrl: `http://127.0.0.1:${address.port}`,
    close: async () => {
      for (const socket of sockets) {
        socket.destroy();
      }
      await new Promise<void>((resolve, reject) => {
        server.close((error) => {
          if (error != null) {
            reject(error);
            return;
          }
          resolve();
        });
      });
    },
    port: address.port,
    requests,
    upgrades,
  };
}

async function waitForUpgrade(harness: Harness): Promise<void> {
  const started = Date.now();
  while (harness.upgrades.length === 0 && Date.now() - started < 2000) {
    await new Promise((resolve) => {
      setTimeout(resolve, 10);
    });
  }
}

function assertSubscriptionTarget(
  harness: Harness,
  ontologyRid: string,
  endpoint: "linkTypeSubscriptions" | "streamSubscriptions",
): void {
  const expectedPath = `/api/v2/ontologySubscriptions/ontologies/${encodeURIComponent(
    ontologyRid,
  )}/${endpoint}`;
  expect(
    harness.upgrades.map((upgrade) => ({
      host: upgrade.host,
      path: upgrade.path.split("?")[0],
      protocol: upgrade.protocol,
    })),
  ).toEqual(
    harness.upgrades.map(() => ({
      host: `127.0.0.1:${harness.port}`,
      path: expectedPath,
      protocol: `Bearer-${PLACEHOLDER_TOKEN}`,
    })),
  );
}

function openClient(
  harness: Harness,
  ontologyRid: string | Promise<string>,
): Client {
  return createClient(harness.baseUrl, ontologyRid, () =>
    Promise.resolve(PLACEHOLDER_TOKEN),
  );
}

async function finishSubscription(
  unsubscribe: (() => Promise<void> | void) | undefined,
): Promise<void> {
  await unsubscribe?.();
}

describe("ontology identifier subscription paths", () => {
  const harnesses: Harness[] = [];

  afterEach(async () => {
    const closing = harnesses.splice(0);
    await Promise.all(closing.map((harness) => harness.close()));
  });

  async function listen(): Promise<Harness> {
    const harness = await startHarness();
    harnesses.push(harness);
    return harness;
  }

  async function listenWithMetadata(): Promise<Harness> {
    const harness = await startHarness({
      objectMetadataFor: TRAVERSAL_ONTOLOGY_RID,
    });
    harnesses.push(harness);
    return harness;
  }

  it("opens an object subscription for a valid ontology identifier on that identifier's path", async () => {
    const harness = await listen();
    const client = openClient(harness, VALID_ONTOLOGY_RID);
    const subscription = client(
      __EXPERIMENTAL__NOT_SUPPORTED_YET__subscribeToNoTypeObjectSet,
    ).subscribeToNoTypeObjectSet("ri.object-set.main.object-set.example", {});
    await waitForUpgrade(harness);
    await finishSubscription(subscription.unsubscribe);

    expect(harness.upgrades).toHaveLength(1);
    assertSubscriptionTarget(
      harness,
      VALID_ONTOLOGY_RID,
      "streamSubscriptions",
    );
  });

  async function subscribeWithoutType(
    harness: Harness,
    ontologyRid: string | Promise<string>,
  ): Promise<void> {
    let client: Client;
    try {
      client = openClient(harness, ontologyRid);
    } catch {
      return;
    }
    try {
      const subscription = client(
        __EXPERIMENTAL__NOT_SUPPORTED_YET__subscribeToNoTypeObjectSet,
      ).subscribeToNoTypeObjectSet("ri.object-set.main.object-set.example", {});
      await waitForUpgrade(harness);
      await finishSubscription(subscription.unsubscribe);
    } catch {
      // Refusing the identifier can reject the subscription call.
    }
  }

  it("does not aim an object subscription at another path when the identifier contains parent-directory segments", async () => {
    const harness = await listen();
    await subscribeWithoutType(harness, TRAVERSAL_ONTOLOGY_RID);

    assertSubscriptionTarget(
      harness,
      TRAVERSAL_ONTOLOGY_RID,
      "streamSubscriptions",
    );
  });

  it("does not aim an object subscription at another path when the identifier uses backslashes", async () => {
    const harness = await listen();
    await subscribeWithoutType(harness, BACKSLASH_ONTOLOGY_RID);

    assertSubscriptionTarget(
      harness,
      BACKSLASH_ONTOLOGY_RID,
      "streamSubscriptions",
    );
  });

  it("does not aim an object subscription at another path when the identifier contains a query marker", async () => {
    const harness = await listen();
    await subscribeWithoutType(harness, QUERY_ONTOLOGY_RID);

    assertSubscriptionTarget(
      harness,
      QUERY_ONTOLOGY_RID,
      "streamSubscriptions",
    );
  });

  it("does not use a promised identifier that passes only the ri. prefix check", async () => {
    const harness = await listen();
    await subscribeWithoutType(
      harness,
      Promise.resolve(TRAVERSAL_ONTOLOGY_RID),
    );

    assertSubscriptionTarget(
      harness,
      TRAVERSAL_ONTOLOGY_RID,
      "streamSubscriptions",
    );
  });

  it("does not use a promised identifier that fails the prefix check", async () => {
    const harness = await listen();
    await subscribeWithoutType(
      harness,
      Promise.resolve(UNPREFIXED_ONTOLOGY_RID),
    );

    assertSubscriptionTarget(
      harness,
      UNPREFIXED_ONTOLOGY_RID,
      "streamSubscriptions",
    );
  });

  it("does not aim a typed object subscription at another path", async () => {
    const harness = await listenWithMetadata();
    let client: Client;
    try {
      client = openClient(harness, TRAVERSAL_ONTOLOGY_RID);
    } catch {
      assertSubscriptionTarget(
        harness,
        TRAVERSAL_ONTOLOGY_RID,
        "streamSubscriptions",
      );
      return;
    }
    try {
      const subscription = client(employee).subscribe({});
      await waitForUpgrade(harness);
      await finishSubscription(subscription.unsubscribe);
    } catch {
      // Refusing the identifier can reject the subscription call.
    }

    assertSubscriptionTarget(
      harness,
      TRAVERSAL_ONTOLOGY_RID,
      "streamSubscriptions",
    );
  });

  it("does not aim a link subscription at another path", async () => {
    const harness = await listenWithMetadata();
    let client: Client;
    try {
      client = openClient(harness, TRAVERSAL_ONTOLOGY_RID);
    } catch {
      assertSubscriptionTarget(
        harness,
        TRAVERSAL_ONTOLOGY_RID,
        "linkTypeSubscriptions",
      );
      return;
    }
    try {
      const subscription = client(
        __EXPERIMENTAL__NOT_SUPPORTED_YET__linkSubscriptions,
      ).subscribeToLinks(employee, {
        links: ["lead"],
        listener: {},
        objects: [1],
      });
      await waitForUpgrade(harness);
      await finishSubscription(subscription.unsubscribe);
    } catch {
      // Refusing the identifier can reject the subscription call.
    }

    assertSubscriptionTarget(
      harness,
      TRAVERSAL_ONTOLOGY_RID,
      "linkTypeSubscriptions",
    );
  });
});
