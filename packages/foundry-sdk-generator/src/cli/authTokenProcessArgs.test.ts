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

import { execFileSync, spawn } from "node:child_process";
import { mkdtempSync, readFileSync } from "node:fs";
import { createServer as createHttpServer } from "node:http";
import { createServer as createHttpsServer } from "node:https";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

import { afterEach, describe, expect, it } from "vitest";

// cspell:ignore cmdline keyout

/**
 * Placeholder only. This is not a credential.
 * generatePackage must read it from FOUNDRY_TOKEN and must not take it
 * from the process argument vector.
 */
const CREDENTIAL = "placeholder-auth-token";
const BEARER = `Bearer ${CREDENTIAL}`;
const BIN = fileURLToPath(
  new URL("../../bin/foundry-sdk-generator.mjs", import.meta.url),
);

interface CapturedRequest {
  authorization: string | undefined;
  url: string;
}

interface RunningCommand {
  pid: number;
  requests: CapturedRequest[];
  state: { stopped: boolean };
  exited: Promise<{ code: number | null; stdout: string; stderr: string }>;
}

const cleanups: Array<() => void> = [];

afterEach(() => {
  for (const cleanup of cleanups.splice(0)) {
    cleanup();
  }
});

describe("generatePackage credential is not a command argument", () => {
  it("documents FOUNDRY_TOKEN in generatePackage help", async () => {
    const result = await runHelp();
    expect(result.code).toBe(0);
    expect(result.stdout).toContain("FOUNDRY_TOKEN");
  }, 30_000);

  it(
    "sends the ontology bearer from FOUNDRY_TOKEN and keeps it out of argv",
    async () => {
      const command = await startCommand({
        protocol: "http",
        args: [],
        env: { FOUNDRY_TOKEN: CREDENTIAL },
      });
      const request = await firstRequest(command);
      const commandLine = readCommandLine(command.pid);

      expect(commandLine.includes("generatePackage")).toBe(true);
      expect(Buffer.from(commandLine).includes(CREDENTIAL)).toBe(false);
      expect(request.url).toContain("/api/v2/ontologies/");
      expect(request.authorization).toBe(BEARER);
    },
    30_000,
  );

  it(
    "sends the SDK package bearer from FOUNDRY_TOKEN and keeps it out of argv",
    async () => {
      const command = await startCommand({
        protocol: "https",
        args: [
          "--sdkPackages",
          "ri.third-party-applications.placeholder=1.0.0",
        ],
        env: { FOUNDRY_TOKEN: CREDENTIAL },
      });
      const request = await firstRequest(command);
      const commandLine = readCommandLine(command.pid);

      expect(commandLine.includes("generatePackage")).toBe(true);
      expect(Buffer.from(commandLine).includes(CREDENTIAL)).toBe(false);
      expect(request.url).toContain(
        "/third-party-application-service/api/sdks/packages/",
      );
      expect(request.authorization).toBe(BEARER);
    },
    30_000,
  );

  it.each([
    { name: "--authToken", args: ["--authToken", CREDENTIAL] },
    { name: "--auth-token", args: ["--auth-token", CREDENTIAL] },
    { name: "--authToken=", args: [`--authToken=${CREDENTIAL}`] },
    { name: "positional", args: [CREDENTIAL] },
  ])("does not use a $name credential as the bearer", async ({ args }) => {
    const command = await startCommand({
      protocol: "http",
      args,
      env: {},
    });
    await requestOrExit(command);
    const authorizations = command.requests.map((request) =>
      request.authorization
    );
    expect(authorizations).not.toContain(BEARER);
  }, 30_000);
});

async function runHelp(): Promise<{ code: number | null; stdout: string }> {
  return await new Promise((resolve, reject) => {
    const child = spawn(
      process.execPath,
      [BIN, "generatePackage", "--help"],
      { env: baseEnv({}) },
    );
    let stdout = "";
    let stderr = "";
    child.stdout.setEncoding("utf8");
    child.stderr.setEncoding("utf8");
    child.stdout.on("data", (chunk: string) => {
      stdout += chunk;
    });
    child.stderr.on("data", (chunk: string) => {
      stderr += chunk;
    });
    child.on("error", reject);
    child.on("exit", (code) => {
      if (stdout.length === 0 && stderr.length > 0) {
        reject(new Error(stderr));
        return;
      }
      resolve({ code, stdout: stdout + stderr });
    });
  });
}

async function startCommand(options: {
  protocol: "http" | "https";
  args: string[];
  env: Record<string, string>;
}): Promise<RunningCommand> {
  const outputDir = mkdtempSync(join(tmpdir(), "osdk-auth-argv-"));
  const requests: CapturedRequest[] = [];
  const pending: Array<
    { writeHead: (code: number) => void; end: (body: string) => void }
  > = [];
  const commandState = { stopped: false };

  const onRequest = (
    req: { headers: { authorization?: string }; url?: string },
    res: { writeHead: (code: number) => void; end: (body: string) => void },
  ) => {
    requests.push({
      authorization: req.headers.authorization,
      url: req.url ?? "",
    });
    pending.push(res);
  };

  const tls = options.protocol === "https" ? makeCertificate() : undefined;
  const server = tls == null
    ? createHttpServer(onRequest)
    : createHttpsServer(tls, onRequest);

  await new Promise<void>((resolve) => {
    server.listen(0, "127.0.0.1", () => resolve());
  });
  const address = server.address();
  if (address == null || typeof address === "string") {
    throw new Error("test server did not bind to a port");
  }
  const hostname = options.protocol === "https"
    ? `127.0.0.1:${address.port}`
    : `http://127.0.0.1:${address.port}`;

  const args = [
    BIN,
    "generatePackage",
    "--foundryHostname",
    hostname,
    "--packageName",
    "placeholder-package",
    "--packageVersion",
    "1.0.0",
    "--outputDir",
    outputDir,
    "--ontology",
    "ri.ontology.main.ontology.00000000-0000-0000-0000-000000000000",
    ...options.args,
  ];

  let stdout = "";
  let stderr = "";
  const child = spawn(process.execPath, args, {
    env: baseEnv(options.env),
  });
  if (child.pid == null) {
    throw new Error("generator process did not start");
  }
  cleanups.push(() => {
    commandState.stopped = true;
    for (const response of pending.splice(0)) {
      response.writeHead(500);
      response.end("{}");
    }
    child.kill();
    server.close();
  });
  child.stdout.setEncoding("utf8");
  child.stderr.setEncoding("utf8");
  child.stdout.on("data", (chunk: string) => {
    stdout += chunk;
  });
  child.stderr.on("data", (chunk: string) => {
    stderr += chunk;
  });

  const exited = new Promise<{
    code: number | null;
    stdout: string;
    stderr: string;
  }>((resolve, reject) => {
    child.on("error", reject);
    child.on("exit", (code) => {
      resolve({ code, stdout, stderr });
    });
  });

  return {
    pid: child.pid,
    requests,
    state: commandState,
    exited,
  };
}

async function firstRequest(command: RunningCommand): Promise<CapturedRequest> {
  const outcome = await requestOrExit(command);
  const request = command.requests[0];
  if (outcome !== "request" || request == null) {
    const exit = await command.exited;
    throw new Error(
      `generator exited before the bearer request\nstdout: ${exit.stdout}\nstderr: ${exit.stderr}`,
    );
  }
  return request;
}

async function requestOrExit(
  command: RunningCommand,
): Promise<"request" | "exit"> {
  const exitResult = command.exited.then(() => "exit" as const);
  const requestResult = waitForRequest(command).then(() => "request" as const);
  const outcome = await Promise.race([
    requestResult,
    exitResult,
    timeout(20_000),
  ]);
  if (outcome === "timeout") {
    const exit = await Promise.race([
      command.exited,
      Promise.resolve({ code: null, stdout: "", stderr: "timed out waiting" }),
    ]);
    throw new Error(
      `timed out\nstdout: ${exit.stdout}\nstderr: ${exit.stderr}\nrequests: ${
        JSON.stringify(command.requests)
      }`,
    );
  }
  return outcome;
}

async function waitForRequest(command: RunningCommand): Promise<void> {
  while (command.requests.length === 0 && !command.state.stopped) {
    await delay(25);
  }
}

function readCommandLine(pid: number): string {
  return readFileSync(`/proc/${pid}/cmdline`).toString("utf8");
}

function baseEnv(extra: Record<string, string>): NodeJS.ProcessEnv {
  return {
    PATH: process.env.PATH,
    HOME: process.env.HOME,
    NODE_TLS_REJECT_UNAUTHORIZED: "0",
    npm_package_version: "0.0.0-test",
    ...extra,
  };
}

function makeCertificate(): { key: Buffer; cert: Buffer } {
  const directory = mkdtempSync(join(tmpdir(), "osdk-auth-argv-cert-"));
  const keyPath = join(directory, "key.pem");
  const certPath = join(directory, "cert.pem");
  execFileSync("openssl", [
    "req",
    "-x509",
    "-newkey",
    "rsa:2048",
    "-keyout",
    keyPath,
    "-out",
    certPath,
    "-days",
    "1",
    "-nodes",
    "-subj",
    "/CN=127.0.0.1",
  ], { stdio: "ignore" });
  return {
    key: readFileSync(keyPath),
    cert: readFileSync(certPath),
  };
}

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

function timeout(ms: number): Promise<"timeout"> {
  return delay(ms).then(() => "timeout");
}
