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

import { execFileSync } from "node:child_process";
import { mkdtempSync, readFileSync, rmSync } from "node:fs";
import { createServer, type Server } from "node:https";
import type { AddressInfo } from "node:net";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { afterEach, describe, expect, it, vi } from "vitest";

// cspell:ignore tpsa keyout
import { OntologyMetadataResolver } from "./ontologyMetadataResolver.js";

vi.mock("@osdk/shared.client.impl", () => ({
  createSharedClientContext: () => {
    throw new Error(
      "getInfoForPackages does not build a shared client context",
    );
  },
}));

vi.mock("@osdk/client.unstable.tpsa", () =>
  import(
    "../../../client.unstable.tpsa/src/index.ts"
  ));

const PLACEHOLDER_TOKEN = "PLACEHOLDER_TOKEN";
const SERVICE_PATH = "/third-party-application-service/api";
const SAFE_PACKAGE_RID = "ri.sdk-package.main.package.abc";
const SAFE_REPOSITORY_RID = "ri.artifacts.main.repository.abc";
const SAFE_PACKAGE_NAME = "my-package";
const SAFE_VERSION = "1.2.3";

interface SeenRequest {
  method: string;
  url: string;
  authorization: string | undefined;
}

interface PackageFields {
  repositoryRid: string;
  packageName: string;
}

function targetSurvivesFetchUrlParser(target: string): boolean {
  const parsed = new URL(target, "https://127.0.0.1");
  return parsed.pathname + parsed.search === target
    && parsed.hash === ""
    && parsed.username === ""
    && parsed.password === "";
}

function packagePath(packageRid: string): string {
  return `${SERVICE_PATH}/sdks/packages/${encodeURIComponent(packageRid)}`;
}

function sdkPath(
  repositoryRid: string,
  packageName: string,
  packageVersion: string,
): string {
  return `${SERVICE_PATH}/sdks/${encodeURIComponent(repositoryRid)}/${
    encodeURIComponent(packageName)
  }/${encodeURIComponent(packageVersion)}`;
}

describe("OntologyMetadataResolver.getInfoForPackages path segments", () => {
  const open: Array<{ server: Server; directory: string }> = [];

  afterEach(async () => {
    await Promise.all(
      open.splice(0).map(async ({ server, directory }) => {
        await new Promise<void>((resolve, reject) => {
          server.close((error) => error ? reject(error) : resolve());
        });
        rmSync(directory, { recursive: true, force: true });
      }),
    );
  });

  async function listen(
    packageFields: PackageFields,
  ): Promise<{ port: number; requests: SeenRequest[] }> {
    const directory = mkdtempSync(join(tmpdir(), "path-encoding-"));
    const key = join(directory, "key.pem");
    const cert = join(directory, "cert.pem");
    execFileSync("openssl", [
      "req",
      "-x509",
      "-newkey",
      "rsa:2048",
      "-keyout",
      key,
      "-out",
      cert,
      "-days",
      "1",
      "-nodes",
      "-subj",
      "/CN=127.0.0.1",
    ], { stdio: "ignore" });

    const requests: SeenRequest[] = [];
    const server = createServer(
      {
        key: readFileSync(key),
        cert: readFileSync(cert),
      },
      (req, res) => {
        req.on("data", () => undefined);
        req.on("end", () => {
          const url = req.url ?? "";
          requests.push({
            method: req.method ?? "",
            url,
            authorization: req.headers.authorization,
          });
          // The resolver's first call is getSdkPackage. Answer that with the
          // service document even when the path was rewritten, so the following
          // getSdk call still receives the document's identifiers.
          const payload = requests.length === 1
            ? {
              rid: SAFE_PACKAGE_RID,
              repositoryRid: packageFields.repositoryRid,
              packageName: packageFields.packageName,
            }
            : {
              servedPath: url,
              servedMethod: req.method,
              marker: "sdk-body",
            };
          const body = JSON.stringify(payload);
          res.writeHead(200, {
            "content-type": "application/json",
            "content-length": Buffer.byteLength(body),
          });
          res.end(body);
        });
      },
    );
    await new Promise<void>((resolve) => {
      server.listen(0, "127.0.0.1", resolve);
    });
    open.push({ server, directory });
    return { port: (server.address() as AddressInfo).port, requests };
  }

  async function loadPackages(
    packageFields: PackageFields,
    packageRid: string,
    packageVersion: string,
  ): Promise<{ requests: SeenRequest[]; returned: unknown; thrown: unknown }> {
    const previousTls = process.env.NODE_TLS_REJECT_UNAUTHORIZED;
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
    const { port, requests } = await listen(packageFields);
    let returned: unknown;
    let thrown: unknown;
    try {
      const resolver = new OntologyMetadataResolver(
        PLACEHOLDER_TOKEN,
        `127.0.0.1:${port}`,
      );
      returned = await resolver.getInfoForPackages(
        new Map([[packageRid, packageVersion]]),
      );
    } catch (error) {
      thrown = error;
    } finally {
      if (previousTls === undefined) {
        delete process.env.NODE_TLS_REJECT_UNAUTHORIZED;
      } else {
        process.env.NODE_TLS_REJECT_UNAUTHORIZED = previousTls;
      }
    }
    return { requests, returned, thrown };
  }

  function expectConfined(
    requests: SeenRequest[],
    returned: unknown,
    thrown: unknown,
    packageRid: string,
    packageFields: PackageFields,
    packageVersion: string,
  ): void {
    const packageTarget = packagePath(packageRid);
    const sdkTarget = sdkPath(
      packageFields.repositoryRid,
      packageFields.packageName,
      packageVersion,
    );
    const packageStable = targetSurvivesFetchUrlParser(packageTarget);
    const sdkStable = targetSurvivesFetchUrlParser(sdkTarget);
    const allowed: SeenRequest[] = [];
    if (packageStable) {
      allowed.push({
        method: "GET",
        url: packageTarget,
        authorization: `Bearer ${PLACEHOLDER_TOKEN}`,
      });
    }
    if (packageStable && sdkStable) {
      allowed.push({
        method: "GET",
        url: sdkTarget,
        authorization: `Bearer ${PLACEHOLDER_TOKEN}`,
      });
    }

    const info = returned instanceof Map
      ? returned as Map<string, {
        sdk: { servedPath?: string; marker?: string };
        packageVersion: string;
      }>
      : undefined;

    if (packageStable && sdkStable) {
      expect(info?.get(packageRid)?.sdk).toEqual({
        servedPath: sdkTarget,
        servedMethod: "GET",
        marker: "sdk-body",
      });
    }

    expect(requests).toEqual(allowed);

    if (!packageStable || !sdkStable) {
      expect(thrown).toBeTruthy();
      expect(returned).toBeUndefined();
      return;
    }

    expect(thrown).toBeUndefined();
    expect(info?.get(packageRid)?.packageVersion).toBe(packageVersion);
  }

  it("uses a package name returned by the service as one path segment", async () => {
    const packageFields = {
      repositoryRid: SAFE_REPOSITORY_RID,
      packageName: "../../../../../../secret-resource",
    };
    const result = await loadPackages(
      packageFields,
      SAFE_PACKAGE_RID,
      SAFE_VERSION,
    );
    expectConfined(
      result.requests,
      result.returned,
      result.thrown,
      SAFE_PACKAGE_RID,
      packageFields,
      SAFE_VERSION,
    );
  });

  it("uses a repository rid returned by the service as one path segment", async () => {
    const packageFields = {
      repositoryRid: "../../../../../../secret-resource",
      packageName: SAFE_PACKAGE_NAME,
    };
    const result = await loadPackages(
      packageFields,
      SAFE_PACKAGE_RID,
      SAFE_VERSION,
    );
    expectConfined(
      result.requests,
      result.returned,
      result.thrown,
      SAFE_PACKAGE_RID,
      packageFields,
      SAFE_VERSION,
    );
  });

  it("rejects a package name that fetch would resolve as a parent segment", async () => {
    const packageFields = {
      repositoryRid: SAFE_REPOSITORY_RID,
      packageName: "..",
    };
    const result = await loadPackages(
      packageFields,
      SAFE_PACKAGE_RID,
      SAFE_VERSION,
    );
    expectConfined(
      result.requests,
      result.returned,
      result.thrown,
      SAFE_PACKAGE_RID,
      packageFields,
      SAFE_VERSION,
    );
  });

  it("keeps a question mark inside the package name returned by the service", async () => {
    const packageFields = {
      repositoryRid: SAFE_REPOSITORY_RID,
      packageName: "name?injected=secret-resource",
    };
    const result = await loadPackages(
      packageFields,
      SAFE_PACKAGE_RID,
      SAFE_VERSION,
    );
    expectConfined(
      result.requests,
      result.returned,
      result.thrown,
      SAFE_PACKAGE_RID,
      packageFields,
      SAFE_VERSION,
    );
  });

  it("keeps a hash inside the package version supplied with the package rid", async () => {
    const packageFields = {
      repositoryRid: SAFE_REPOSITORY_RID,
      packageName: SAFE_PACKAGE_NAME,
    };
    const version = "1.2.3#secret-resource";
    const result = await loadPackages(
      packageFields,
      SAFE_PACKAGE_RID,
      version,
    );
    expectConfined(
      result.requests,
      result.returned,
      result.thrown,
      SAFE_PACKAGE_RID,
      packageFields,
      version,
    );
  });

  it("keeps a slash inside the package rid passed to the resolver", async () => {
    const packageFields = {
      repositoryRid: SAFE_REPOSITORY_RID,
      packageName: SAFE_PACKAGE_NAME,
    };
    const packageRid = `${SAFE_PACKAGE_RID}/../../../../../../secret-resource`;
    const result = await loadPackages(
      packageFields,
      packageRid,
      SAFE_VERSION,
    );
    expectConfined(
      result.requests,
      result.returned,
      result.thrown,
      packageRid,
      packageFields,
      SAFE_VERSION,
    );
  });

  it("returns the sdk body for an ordinary package name", async () => {
    const packageFields = {
      repositoryRid: SAFE_REPOSITORY_RID,
      packageName: SAFE_PACKAGE_NAME,
    };
    const result = await loadPackages(
      packageFields,
      SAFE_PACKAGE_RID,
      SAFE_VERSION,
    );
    expectConfined(
      result.requests,
      result.returned,
      result.thrown,
      SAFE_PACKAGE_RID,
      packageFields,
      SAFE_VERSION,
    );
  });
});
