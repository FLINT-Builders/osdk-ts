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

import { mkdtemp, rm, writeFile } from "node:fs/promises";
import http from "node:http";
import os from "node:os";
import path from "node:path";

import { afterEach, expect, test, vi } from "vitest";

import { cli } from "./cli.js";

const MARKER = "ontology-exposure-marker-9a9afb91";

/**
 * Ontology document the developer points the explorer at.
 * The marker is file contents, not a credential.
 */
function ontologyDocument(): string {
  return JSON.stringify({
    apiName: "ExposureProbe",
    description: MARKER,
    objectTypes: {
      Probe: {
        properties: {
          label: { type: "string", description: MARKER },
        },
      },
    },
  });
}

interface ProbeResult {
  reachable: boolean;
  refused: boolean;
  status: number;
  body: string;
  errorCode?: string;
}

function nonLoopbackIpv4(): string[] {
  const hosts: string[] = [];
  for (const entries of Object.values(os.networkInterfaces())) {
    for (const entry of entries ?? []) {
      if (entry.internal || entry.family !== "IPv4") continue;
      hosts.push(entry.address);
    }
  }
  return hosts;
}

/**
 * Talk to the real socket. `fetch` hides HEAD bodies and may rewrite Host.
 */
function probe(options: {
  host: string;
  port: number;
  method: string;
  path: string;
  headers?: Record<string, string>;
}): Promise<ProbeResult> {
  return new Promise((resolve) => {
    const req = http.request(
      {
        host: options.host,
        port: options.port,
        method: options.method,
        path: options.path,
        headers: options.headers,
        timeout: 2000,
      },
      (res) => {
        const chunks: Buffer[] = [];
        res.on("data", (chunk: Buffer) => {
          chunks.push(chunk);
        });
        res.on("end", () => {
          resolve({
            reachable: true,
            refused: false,
            status: res.statusCode ?? 0,
            body: Buffer.concat(chunks).toString("utf-8"),
          });
        });
      },
    );
    req.on("timeout", () => {
      req.destroy();
      resolve({
        reachable: false,
        refused: false,
        status: 0,
        body: "",
        errorCode: "TIMEOUT",
      });
    });
    req.on("error", (err: NodeJS.ErrnoException) => {
      const refused =
        err.code === "ECONNREFUSED" ||
        err.code === "EHOSTUNREACH" ||
        err.code === "ENETUNREACH";
      resolve({
        reachable: false,
        refused,
        status: 0,
        body: "",
        errorCode: err.code,
      });
    });
    req.end();
  });
}

async function reserveLoopbackPort(): Promise<number> {
  const server = http.createServer();
  await new Promise<void>((resolve, reject) => {
    server.once("error", reject);
    server.listen(0, "127.0.0.1", () => resolve());
  });
  const address = server.address();
  if (address == null || typeof address === "string") {
    throw new Error("Could not reserve a TCP port");
  }
  const { port } = address;
  await new Promise<void>((resolve) => {
    server.close(() => {
      resolve();
    });
  });
  return port;
}

const servers: http.Server[] = [];
const originalListen = http.Server.prototype.listen;

http.Server.prototype.listen = function listen(
  this: http.Server,
  ...args: unknown[]
) {
  servers.push(this);
  return originalListen.apply(this, args as Parameters<typeof originalListen>);
} as typeof http.Server.prototype.listen;

afterEach(async () => {
  vi.restoreAllMocks();
  await Promise.all(
    servers.splice(0).map(
      (server) =>
        new Promise<void>((resolve) => {
          if (!server.listening) {
            resolve();
            return;
          }
          server.close(() => resolve());
        }),
    ),
  );
});

test("an unauthenticated client on another interface cannot read the ontology file", async () => {
  const hosts = nonLoopbackIpv4();
  expect(hosts.length).toBeGreaterThan(0);

  const contents = ontologyDocument();
  const directory = await mkdtemp(path.join(os.tmpdir(), "ontology-explorer-"));
  const ontologyFile = path.join(directory, "ontology.json");
  await writeFile(ontologyFile, contents, "utf-8");

  const port = await reserveLoopbackPort();
  vi.spyOn(process, "exit").mockImplementation(((
    code?: string | number | null,
  ) => {
    throw new Error(`process.exit(${String(code)})`);
  }) as typeof process.exit);

  try {
    await cli([
      "node",
      "ontology-explorer",
      "--ontology-file",
      ontologyFile,
      "--port",
      String(port),
    ]);

    const requests: Array<{
      label: string;
      method: string;
      path: string;
      headers?: Record<string, string>;
    }> = [
      {
        label: "no credentials",
        method: "GET",
        path: "/api/ontology",
      },
      {
        label: "query string and no credentials",
        method: "GET",
        path: "/api/ontology?download=1",
      },
      {
        label: "Host localhost and no credentials",
        method: "GET",
        path: "/api/ontology",
        headers: { Host: `localhost:${port}` },
      },
      {
        label: "placeholder Authorization bearer",
        method: "GET",
        path: "/api/ontology",
        headers: { Authorization: "Bearer placeholder-token" },
      },
    ];

    const leaks: string[] = [];
    let sawRemoteListener = false;

    for (const host of hosts) {
      for (const request of requests) {
        const result = await probe({
          host,
          port,
          method: request.method,
          path: request.path,
          headers: request.headers,
        });
        if (result.errorCode === "TIMEOUT") {
          throw new Error(
            `Timed out connecting to ${host}:${port}; cannot tell bind from a filter`,
          );
        }
        if (!result.refused && result.errorCode != null && !result.reachable) {
          throw new Error(
            `Probe ${request.method} ${host}:${port}${request.path} failed with ${result.errorCode}`,
          );
        }
        if (result.reachable) {
          sawRemoteListener = true;
          if (result.body.includes(MARKER)) {
            leaks.push(
              `${request.label}: ${request.method} http://${host}:${port}${request.path} status=${result.status}`,
            );
          }
        }
      }
    }

    expect(leaks).toEqual([]);

    // A refused remote connection is the loopback-bind fix only when the
    // explorer is actually up and still serving the file to the local user.
    // Otherwise a crash, or a listen that never happened, would look closed.
    if (!sawRemoteListener) {
      const loopback = [
        await probe({
          host: "127.0.0.1",
          port,
          method: "GET",
          path: "/api/ontology",
        }),
        await probe({
          host: "::1",
          port,
          method: "GET",
          path: "/api/ontology",
        }),
      ];
      const served = loopback.find(
        (result) =>
          result.reachable && result.status === 200 && result.body === contents,
      );
      expect(served).toBeDefined();
    }
  } finally {
    await rm(directory, { recursive: true, force: true });
  }
});
