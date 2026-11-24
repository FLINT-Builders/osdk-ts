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
import { mkdtempSync, readdirSync, readFileSync, rmSync } from "node:fs";
import type { ServerResponse } from "node:http";
import { createServer } from "node:http";
import type { AddressInfo } from "node:net";
import { connect } from "node:net";
import { networkInterfaces, tmpdir } from "node:os";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

import invokeLoginFlow from "@osdk/cli.common/loginFlow";
import { afterEach, beforeEach, describe, expect, it } from "vitest";

import loginCommand from "../../../cli/src/commands/auth/login/index.js";
import { handleGenerate } from "./handleGenerate.mjs";

const LOGIN_PORT = 8080;
const CLIENT_ID = "public-test-client";
const ATTACKER_CODE = "attacker-owned-code";
const FOREIGN_CODE = "foreign-pkce-code";
const VICTIM_CODE = "victim-owned-code";
const ATTACKER_TOKEN = "attacker-access-token";
const VICTIM_TOKEN = "victim-access-token";
const ATTACKER_TYPE = "AttackerOwnedType";
const VICTIM_TYPE = "VictimOwnedType";
const FOREIGN_CHALLENGE = "foreign-code-challenge-not-issued-for-this-login";

interface IssuedCode {
  challenge: string;
  token: string;
  ontology: OntologyMetadata;
}

interface OntologyMetadata {
  ontology: { apiName: string; displayName: string };
  objectTypes: Record<string, unknown>;
  actionTypes: Record<string, unknown>;
  queryTypes: Record<string, unknown>;
  interfaceTypes: Record<string, unknown>;
  sharedPropertyTypes: Record<string, unknown>;
}

interface TokenPost {
  code: string | null;
  verifier: string | null;
}

interface FoundryHarness {
  origin: string;
  close: () => Promise<void>;
  tokenPosts: TokenPost[];
  ontologyAuthorization: string[];
  issue: (
    code: string,
    challenge: string,
    token: string,
    objectType: string,
  ) => void;
}

interface OpenObservation {
  authorizeUrl: string;
  spawnArguments: string[];
  nonLoopbackConnected: boolean;
}

function s256(verifier: string): string {
  return createHash("sha256").update(verifier).digest("base64url");
}

function nonLoopbackIPv4(): string {
  for (const entries of Object.values(networkInterfaces())) {
    for (const entry of entries ?? []) {
      if (entry.family === "IPv4" && !entry.internal) {
        return entry.address;
      }
    }
  }
  throw new Error("This environment has no non-loopback IPv4 address");
}

async function collectBody(req: NodeJS.ReadableStream): Promise<string> {
  const chunks: Buffer[] = [];
  for await (const chunk of req) {
    chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
  }
  return Buffer.concat(chunks).toString("utf8");
}

function sendJson(res: ServerResponse, status: number, body: unknown): void {
  const payload = JSON.stringify(body);
  res.writeHead(status, {
    "content-type": "application/json",
    "content-length": Buffer.byteLength(payload),
  });
  res.end(payload);
}

function ontologyFor(objectType: string): OntologyMetadata {
  const fixturePath = fileURLToPath(
    new URL("../../../e2e.sandbox.todoapp/ontology.json", import.meta.url),
  );
  const replaced = readFileSync(fixturePath, "utf8").replaceAll(
    '"Todo"',
    `"${objectType}"`,
  );
  const ontology = JSON.parse(replaced) as OntologyMetadata;
  ontology.ontology.apiName = `${objectType}Ontology`;
  ontology.ontology.displayName = objectType;
  return ontology;
}

async function startFoundry(): Promise<FoundryHarness> {
  const issued = new Map<string, IssuedCode>();
  const tokenPosts: TokenPost[] = [];
  const ontologyAuthorization: string[] = [];

  const server = createServer(async (req, res) => {
    const url = new URL(req.url ?? "/", "http://foundry.local");
    if (
      req.method === "POST" &&
      url.pathname === "/multipass/api/oauth2/token"
    ) {
      const body = new URLSearchParams(await collectBody(req));
      const code = body.get("code");
      const verifier = body.get("code_verifier");
      tokenPosts.push({ code, verifier });
      const record = code == null ? undefined : issued.get(code);
      const challenge = verifier == null ? "" : s256(verifier);
      if (record == null || challenge !== record.challenge) {
        sendJson(res, 400, {
          error: "invalid_grant",
          error_description: "code verifier does not match the code challenge",
        });
        return;
      }
      sendJson(res, 200, {
        access_token: record.token,
        token_type: "Bearer",
        refresh_token: "placeholder-refresh-token",
        expires_in: 3600,
      });
      return;
    }

    if (req.method === "GET" && url.pathname === "/api/v2/ontologies") {
      const authorization = req.headers.authorization ?? "";
      ontologyAuthorization.push(authorization);
      const record = [...issued.values()].find(
        (entry) => authorization === `Bearer ${entry.token}`,
      );
      sendJson(res, 200, {
        data:
          record == null
            ? []
            : [
                {
                  apiName: record.ontology.ontology.apiName,
                  rid: "ri.ontology.main.ontology.login-csrf-test",
                },
              ],
      });
      return;
    }

    if (
      req.method === "GET" &&
      url.pathname.startsWith("/api/v2/ontologies/") &&
      url.pathname.endsWith("/fullMetadata")
    ) {
      const authorization = req.headers.authorization ?? "";
      ontologyAuthorization.push(authorization);
      const record = [...issued.values()].find(
        (entry) => authorization === `Bearer ${entry.token}`,
      );
      if (record == null) {
        sendJson(res, 404, { errorCode: "NOT_FOUND" });
        return;
      }
      sendJson(res, 200, record.ontology);
      return;
    }

    sendJson(res, 404, { errorCode: "NOT_FOUND", path: url.pathname });
  });

  await new Promise<void>((resolve) => {
    server.listen(0, "127.0.0.1", () => resolve());
  });
  const address = server.address() as AddressInfo;

  return {
    origin: `http://127.0.0.1:${address.port}`,
    tokenPosts,
    ontologyAuthorization,
    issue(code, challenge, token, objectType) {
      issued.set(code, {
        challenge,
        token,
        ontology: ontologyFor(objectType),
      });
    },
    close() {
      return new Promise((resolve, reject) => {
        server.close((error) => (error ? reject(error) : resolve()));
      });
    },
  };
}

function tcpConnect(host: string, port: number): Promise<boolean> {
  return new Promise((resolve) => {
    const socket = connect({ host, port });
    const finish = (connected: boolean) => {
      socket.removeAllListeners();
      socket.destroy();
      resolve(connected);
    };
    socket.once("connect", () => finish(true));
    socket.once("error", () => finish(false));
  });
}

async function waitForTcp(
  host: string,
  port: number,
  timeoutMs: number,
): Promise<boolean> {
  const started = Date.now();
  while (Date.now() - started < timeoutMs) {
    if (await tcpConnect(host, port)) {
      return true;
    }
    await new Promise((resolve) => setTimeout(resolve, 10));
  }
  return false;
}

async function httpGet(host: string, pathAndQuery: string): Promise<void> {
  try {
    await fetch(`http://${host}:${LOGIN_PORT}${pathAndQuery}`, {
      signal: AbortSignal.timeout(1000),
    });
  } catch {
    // Unreachable callback ports and ignored sockets are not a login.
  }
}

async function presentAttackerCallbacks(state: string): Promise<void> {
  const wrongState = `${state}-attacker`;
  const attackerQuery = `code=${ATTACKER_CODE}&state=${encodeURIComponent(
    wrongState,
  )}`;
  const foreignQuery = `code=${FOREIGN_CODE}&state=${encodeURIComponent(
    wrongState,
  )}`;
  const nonLoopback = nonLoopbackIPv4();

  await httpGet(nonLoopback, `/?${attackerQuery}`);
  await httpGet("127.0.0.1", `/not-the-callback?${attackerQuery}`);
  await httpGet(
    "127.0.0.1",
    `/not-the-callback?code=${ATTACKER_CODE}&state=${encodeURIComponent(
      state,
    )}`,
  );
  await httpGet("127.0.0.1", `/auth/callback?${attackerQuery}`);
  await httpGet("127.0.0.1", `/auth/callback?${foreignQuery}`);
  await httpGet("127.0.0.1", `/auth/callback?code=${ATTACKER_CODE}`);
  await httpGet(
    "127.0.0.1",
    `/auth/callback?code=${VICTIM_CODE}&state=${encodeURIComponent(state)}`,
  );
}

describe("oauth login callback", () => {
  let foundry: FoundryHarness;
  let observation: OpenObservation | undefined;

  beforeEach(async () => {
    observation = undefined;
    foundry = await startFoundry();
    (
      globalThis as { __osdkLoginOpen?: (target: string) => Promise<void> }
    ).__osdkLoginOpen = async (target: string) => {
      const authorize = new URL(target);
      const state = authorize.searchParams.get("state");
      const challenge = authorize.searchParams.get("code_challenge");
      if (state == null || challenge == null) {
        throw new Error("authorize URL is missing state or code_challenge");
      }
      foundry.issue(ATTACKER_CODE, challenge, ATTACKER_TOKEN, ATTACKER_TYPE);
      foundry.issue(VICTIM_CODE, challenge, VICTIM_TOKEN, VICTIM_TYPE);
      foundry.issue(
        FOREIGN_CODE,
        FOREIGN_CHALLENGE,
        ATTACKER_TOKEN,
        ATTACKER_TYPE,
      );
      const loopbackReady = await waitForTcp("127.0.0.1", LOGIN_PORT, 2000);
      if (!loopbackReady) {
        throw new Error(
          "login callback server did not accept loopback connections",
        );
      }
      const nonLoopbackConnected = await tcpConnect(
        nonLoopbackIPv4(),
        LOGIN_PORT,
      );
      observation = {
        authorizeUrl: target,
        spawnArguments: [],
        nonLoopbackConnected,
      };
      await presentAttackerCallbacks(state);
    };
  });

  afterEach(async () => {
    delete (globalThis as { __osdkLoginOpen?: unknown }).__osdkLoginOpen;
    if (foundry != null) {
      await foundry.close();
    }
  });

  function expectAuthorizedLogin(): void {
    const authorize = new URL(observation?.authorizeUrl ?? "http://invalid");
    expect(authorize.searchParams.get("code_challenge")).toBeTruthy();
    expect(authorize.searchParams.get("state")).toBeTruthy();
    expect({
      nonLoopbackConnected: observation?.nonLoopbackConnected,
      tokenCodes: foundry.tokenPosts.map((post) => post.code),
    }).toEqual({
      nonLoopbackConnected: false,
      tokenCodes: [VICTIM_CODE],
    });
  }

  it("exchanges only the loopback callback whose state matches this login", async () => {
    await invokeLoginFlow({
      clientId: CLIENT_ID,
      foundryUrl: foundry.origin,
      verbose: 0,
    });
    expectAuthorizedLogin();
  });

  it("login command uses the same callback rules", async () => {
    await loginCommand.handler!({
      clientId: CLIENT_ID,
      foundryUrl: foundry.origin,
      verbose: 0,
    });
    expectAuthorizedLogin();
  });

  it("writes the ontology for the authorized login into the generated sdk", async () => {
    const root = mkdtempSync(join(tmpdir(), "osdk-login-csrf-"));
    const outDir = join(root, "sdk");
    const ontologyWritePath = join(root, "ontology.json");
    try {
      await handleGenerate({
        outDir,
        ontologyWritePath,
        foundryUrl: foundry.origin,
        clientId: CLIENT_ID,
        packageType: "module",
        version: "0.0.0-test",
        internal: false,
        externalObjects: new Map(),
        externalInterfaces: new Map(),
        skipPackageJsonUpdate: true,
      });

      const ontologyJson = readFileSync(ontologyWritePath, "utf8");
      const objectDir = join(outDir, "ontology", "objects");
      const generatedNames = readdirSync(objectDir);
      const generatedSource = generatedNames
        .map((name) => readFileSync(join(objectDir, name), "utf8"))
        .join("\n");
      const authorize = new URL(observation?.authorizeUrl ?? "http://invalid");
      expect(authorize.searchParams.get("code_challenge")).toBeTruthy();
      expect(authorize.searchParams.get("state")).toBeTruthy();
      expect({
        nonLoopbackConnected: observation?.nonLoopbackConnected,
        tokenCodes: foundry.tokenPosts.map((post) => post.code),
        ontologyAuthorization: foundry.ontologyAuthorization,
        ontologyNamesAttacker: ontologyJson.includes(ATTACKER_TYPE),
        ontologyNamesVictim: ontologyJson.includes(VICTIM_TYPE),
        generatedFiles: generatedNames,
        generatedNamesAttacker: generatedSource.includes(ATTACKER_TYPE),
        generatedNamesVictim: generatedSource.includes(VICTIM_TYPE),
      }).toEqual({
        nonLoopbackConnected: false,
        tokenCodes: [VICTIM_CODE],
        ontologyAuthorization: [
          `Bearer ${VICTIM_TOKEN}`,
          `Bearer ${VICTIM_TOKEN}`,
        ],
        ontologyNamesAttacker: false,
        ontologyNamesVictim: true,
        generatedFiles: [`${VICTIM_TYPE}.ts`],
        generatedNamesAttacker: false,
        generatedNamesVictim: true,
      });
    } finally {
      rmSync(root, { recursive: true, force: true });
    }
  });
});
