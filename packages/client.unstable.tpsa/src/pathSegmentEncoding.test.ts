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

import { createServer, type Server } from "node:http";
import type { AddressInfo } from "node:net";

import type { ConjureContext } from "conjure-lite";
import { describe, expect, it } from "vitest";

import { createClient } from "./generated/third-party-application-service/ApplicationClientService/createClient.js";
import { getApplicationForClient } from "./generated/third-party-application-service/ApplicationClientService/getApplicationForClient.js";
import { getClientState } from "./generated/third-party-application-service/ApplicationClientService/getClientState.js";
import { getMetrics } from "./generated/third-party-application-service/ApplicationMetricsService/getMetrics.js";
import { getMetricsDelay } from "./generated/third-party-application-service/ApplicationMetricsService/getMetricsDelay.js";
import { getRequestDurationMetrics } from "./generated/third-party-application-service/ApplicationMetricsService/getRequestDurationMetrics.js";
import { getRequestDurationMetricsDelay } from "./generated/third-party-application-service/ApplicationMetricsService/getRequestDurationMetricsDelay.js";
import { bulkGetEntitySdkVersions } from "./generated/third-party-application-service/ApplicationSdkService/bulkGetEntitySdkVersions.js";
import { createSdk as createApplicationSdk } from "./generated/third-party-application-service/ApplicationSdkService/createSdk.js";
import { createSdkV2 } from "./generated/third-party-application-service/ApplicationSdkService/createSdkV2.js";
import { getApplicationForSdkRepository } from "./generated/third-party-application-service/ApplicationSdkService/getApplicationForSdkRepository.js";
import { getSdk as getApplicationSdk } from "./generated/third-party-application-service/ApplicationSdkService/getSdk.js";
import { listSdks as listApplicationSdks } from "./generated/third-party-application-service/ApplicationSdkService/listSdks.js";
import { deleteApplication } from "./generated/third-party-application-service/ApplicationService/deleteApplication.js";
import { getApplication } from "./generated/third-party-application-service/ApplicationService/getApplication.js";
import { getApplicationVersion } from "./generated/third-party-application-service/ApplicationService/getApplicationVersion.js";
import { listApplicationVersions } from "./generated/third-party-application-service/ApplicationService/listApplicationVersions.js";
import { updateApplication } from "./generated/third-party-application-service/ApplicationService/updateApplication.js";
import { updateApplicationRoles } from "./generated/third-party-application-service/ApplicationService/updateApplicationRoles.js";
import { updateApplicationV2 } from "./generated/third-party-application-service/ApplicationService/updateApplicationV2.js";
import { updateApplicationV3 } from "./generated/third-party-application-service/ApplicationService/updateApplicationV3.js";
import { createApiToken } from "./generated/third-party-application-service/ApplicationTokenService/createApiToken.js";
import { getApplicationForWebsiteRepository } from "./generated/third-party-application-service/ApplicationWebsiteService/getApplicationForWebsiteRepository.js";
import { getWebsite } from "./generated/third-party-application-service/ApplicationWebsiteService/getWebsite.js";
import { getWebsiteRepository } from "./generated/third-party-application-service/ApplicationWebsiteService/getWebsiteRepository.js";
import { getWebsitesForCodeRepository } from "./generated/third-party-application-service/ApplicationWebsiteService/getWebsitesForCodeRepository.js";
import { linkWebsiteCodeRepository } from "./generated/third-party-application-service/ApplicationWebsiteService/linkWebsiteCodeRepository.js";
import { updateWebsiteRoles } from "./generated/third-party-application-service/ApplicationWebsiteService/updateWebsiteRoles.js";
import { getRecalledSdkGeneratorVersions } from "./generated/third-party-application-service/SdkDiscoveryService/getRecalledSdkGeneratorVersions.js";
import { listSdkGeneratorVersions } from "./generated/third-party-application-service/SdkDiscoveryService/listSdkGeneratorVersions.js";
import { createSdk } from "./generated/third-party-application-service/SdkService/createSdk.js";
import { getResourceBindings } from "./generated/third-party-application-service/SdkService/getResourceBindings.js";
import { getSdk } from "./generated/third-party-application-service/SdkService/getSdk.js";
import { getSdkPackage } from "./generated/third-party-application-service/SdkService/getSdkPackage.js";
import { getSdkPackageRid } from "./generated/third-party-application-service/SdkService/getSdkPackageRid.js";
import { listSdkPackages } from "./generated/third-party-application-service/SdkService/listSdkPackages.js";
import { listSdks } from "./generated/third-party-application-service/SdkService/listSdks.js";

/**
 * Placeholder only. The test asserts that this exact header value is attached
 * to the request the local server receives.
 */
const PLACEHOLDER_TOKEN = "PLACEHOLDER_TOKEN";
const SERVICE_PATH = "/third-party-application-service/api";
const SAFE_SLOT = "safe-segment";

/**
 * Characters that must not change the request target. `..` and `.` are included
 * because percent-encoding leaves them unchanged, and the fetch URL parser then
 * removes them as dot segments. `%2E%2E` is included because that same parser
 * decodes it to `..` before removing dot segments.
 */
const OPAQUE_IDENTIFIERS = [
  "../../../../../../secret-resource",
  "safe/extra",
  "name?injected=secret-resource",
  "name#secret-resource",
  "..",
  ".",
  "%2E%2E",
] as const;

interface SeenRequest {
  method: string;
  url: string;
  authorization: string | undefined;
}

interface Operation {
  name: string;
  httpMethod: string;
  slots: number;
  path: (segments: readonly string[]) => string;
  call: (ctx: ConjureContext, segments: readonly string[]) => Promise<unknown>;
  search?: (segments: readonly string[]) => string;
}

function body<T>(): T {
  return {} as T;
}

function pathSegment(segments: readonly string[], index: number): string {
  const value = segments[index];
  if (value === undefined) {
    throw new Error(`missing path segment ${index}`);
  }
  return value;
}

function operationNamed(name: string): Operation {
  const operation = operations.find((item) => item.name === name);
  if (operation === undefined) {
    throw new Error(`missing operation ${name}`);
  }
  return operation;
}

const operations: readonly Operation[] = [
  {
    name: "SdkService.getSdk",
    httpMethod: "GET",
    slots: 3,
    path: ([repositoryRid, packageName, sdkVersion]) =>
      `/sdks/${repositoryRid}/${packageName}/${sdkVersion}`,
    call: (ctx, segments) =>
      getSdk(
        ctx,
        pathSegment(segments, 0),
        pathSegment(segments, 1),
        pathSegment(segments, 2),
      ),
  },
  {
    name: "SdkService.createSdk",
    httpMethod: "POST",
    slots: 3,
    path: ([repositoryRid, packageName, sdkVersion]) =>
      `/sdks/${repositoryRid}/${packageName}/${sdkVersion}`,
    call: (ctx, segments) =>
      createSdk(
        ctx,
        pathSegment(segments, 0),
        pathSegment(segments, 1),
        pathSegment(segments, 2),
        body(),
      ),
  },
  {
    name: "SdkService.getResourceBindings",
    httpMethod: "GET",
    slots: 2,
    path: ([repositoryRid, packageName]) =>
      `/sdks/${repositoryRid}/${packageName}/bindings`,
    call: (ctx, segments) =>
      getResourceBindings(
        ctx,
        pathSegment(segments, 0),
        pathSegment(segments, 1),
      ),
  },
  {
    name: "SdkService.getSdkPackage",
    httpMethod: "GET",
    slots: 1,
    path: ([sdkPackageRid]) => `/sdks/packages/${sdkPackageRid}`,
    call: (ctx, segments) => getSdkPackage(ctx, pathSegment(segments, 0)),
  },
  {
    name: "SdkService.getSdkPackageRid",
    httpMethod: "GET",
    slots: 2,
    path: ([repositoryRid, packageName]) =>
      `/sdks/${repositoryRid}/${packageName}/rid`,
    call: (ctx, segments) =>
      getSdkPackageRid(ctx, pathSegment(segments, 0), pathSegment(segments, 1)),
  },
  {
    name: "SdkService.listSdkPackages",
    httpMethod: "GET",
    slots: 1,
    path: ([repositoryRid]) => `/sdks/${repositoryRid}`,
    call: (ctx, segments) =>
      listSdkPackages(ctx, pathSegment(segments, 0), undefined, undefined),
  },
  {
    name: "SdkService.listSdks",
    httpMethod: "GET",
    slots: 2,
    path: ([repositoryRid, packageName]) =>
      `/sdks/${repositoryRid}/${packageName}`,
    call: (ctx, segments) =>
      listSdks(
        ctx,
        pathSegment(segments, 0),
        pathSegment(segments, 1),
        undefined,
        undefined,
      ),
  },
  {
    name: "ApplicationService.deleteApplication",
    httpMethod: "DELETE",
    slots: 1,
    path: ([applicationRid]) => `/applications/${applicationRid}`,
    call: (ctx, segments) => deleteApplication(ctx, pathSegment(segments, 0)),
  },
  {
    name: "ApplicationService.getApplication",
    httpMethod: "GET",
    slots: 1,
    path: ([applicationRid]) => `/applications/${applicationRid}`,
    call: (ctx, segments) => getApplication(ctx, pathSegment(segments, 0)),
  },
  {
    name: "ApplicationService.updateApplication",
    httpMethod: "PUT",
    slots: 1,
    path: ([applicationRid]) => `/applications/${applicationRid}`,
    call: (ctx, segments) =>
      updateApplication(ctx, pathSegment(segments, 0), body()),
  },
  {
    name: "ApplicationService.updateApplicationV2",
    httpMethod: "PUT",
    slots: 1,
    path: ([applicationRid]) => `/applications/v2/${applicationRid}`,
    call: (ctx, segments) =>
      updateApplicationV2(ctx, pathSegment(segments, 0), body()),
  },
  {
    name: "ApplicationService.updateApplicationV3",
    httpMethod: "PUT",
    slots: 1,
    path: ([applicationRid]) => `/applications/v3/${applicationRid}`,
    call: (ctx, segments) =>
      updateApplicationV3(ctx, pathSegment(segments, 0), body()),
  },
  {
    name: "ApplicationService.getApplicationVersion",
    httpMethod: "GET",
    slots: 2,
    path: ([applicationRid, applicationVersion]) =>
      `/applications/${applicationRid}/versions/${applicationVersion}`,
    call: (ctx, segments) =>
      getApplicationVersion(
        ctx,
        pathSegment(segments, 0),
        pathSegment(segments, 1),
      ),
  },
  {
    name: "ApplicationService.listApplicationVersions",
    httpMethod: "GET",
    slots: 1,
    path: ([applicationRid]) => `/applications/${applicationRid}/versions`,
    call: (ctx, segments) =>
      listApplicationVersions(
        ctx,
        pathSegment(segments, 0),
        undefined,
        undefined,
      ),
  },
  {
    name: "ApplicationService.updateApplicationRoles",
    httpMethod: "PUT",
    slots: 1,
    path: ([applicationRid]) => `/applications/${applicationRid}/roles`,
    call: (ctx, segments) =>
      updateApplicationRoles(ctx, pathSegment(segments, 0), body()),
  },
  {
    name: "ApplicationTokenService.createApiToken",
    httpMethod: "POST",
    slots: 1,
    path: ([applicationRid]) => `/application-tokens/${applicationRid}`,
    call: (ctx, segments) =>
      createApiToken(ctx, pathSegment(segments, 0), body()),
  },
  {
    name: "ApplicationClientService.createClient",
    httpMethod: "PUT",
    slots: 1,
    path: ([applicationRid]) => `/application-clients/${applicationRid}`,
    call: (ctx, segments) => createClient(ctx, pathSegment(segments, 0)),
  },
  {
    name: "ApplicationClientService.getClientState",
    httpMethod: "GET",
    slots: 1,
    path: ([applicationRid]) => `/application-clients/${applicationRid}`,
    call: (ctx, segments) => getClientState(ctx, pathSegment(segments, 0)),
  },
  {
    name: "ApplicationClientService.getApplicationForClient",
    httpMethod: "GET",
    slots: 1,
    path: ([clientId]) => `/application-clients/for-client/${clientId}`,
    call: (ctx, segments) =>
      getApplicationForClient(ctx, pathSegment(segments, 0)),
  },
  {
    name: "ApplicationSdkService.createSdk",
    httpMethod: "POST",
    slots: 1,
    path: ([applicationRid]) => `/application-sdks/${applicationRid}`,
    call: (ctx, segments) =>
      createApplicationSdk(ctx, pathSegment(segments, 0), body()),
  },
  {
    name: "ApplicationSdkService.createSdkV2",
    httpMethod: "POST",
    slots: 1,
    path: ([applicationRid]) => `/application-sdks/v2/${applicationRid}`,
    call: (ctx, segments) => createSdkV2(ctx, pathSegment(segments, 0), body()),
  },
  {
    name: "ApplicationSdkService.getSdk",
    httpMethod: "GET",
    slots: 2,
    path: ([applicationRid, sdkVersion]) =>
      `/application-sdks/${applicationRid}/${sdkVersion}`,
    call: (ctx, segments) =>
      getApplicationSdk(
        ctx,
        pathSegment(segments, 0),
        pathSegment(segments, 1),
      ),
  },
  {
    name: "ApplicationSdkService.listSdks",
    httpMethod: "GET",
    slots: 1,
    path: ([applicationRid]) => `/application-sdks/${applicationRid}`,
    call: (ctx, segments) =>
      listApplicationSdks(ctx, pathSegment(segments, 0), undefined, undefined),
  },
  {
    name: "ApplicationSdkService.getApplicationForSdkRepository",
    httpMethod: "GET",
    slots: 1,
    path: ([repositoryRid]) =>
      `/application-sdks/for-repository/${repositoryRid}`,
    call: (ctx, segments) =>
      getApplicationForSdkRepository(ctx, pathSegment(segments, 0)),
  },
  {
    name: "ApplicationSdkService.bulkGetEntitySdkVersions",
    httpMethod: "PUT",
    slots: 1,
    path: ([applicationRid]) =>
      `/application-sdks/${applicationRid}/entity-sdk-versions`,
    call: (ctx, segments) =>
      bulkGetEntitySdkVersions(ctx, pathSegment(segments, 0), body()),
  },
  {
    name: "ApplicationWebsiteService.getWebsite",
    httpMethod: "GET",
    slots: 1,
    path: ([applicationRid]) => `/application-websites/v2/${applicationRid}`,
    call: (ctx, segments) => getWebsite(ctx, pathSegment(segments, 0)),
  },
  {
    name: "ApplicationWebsiteService.getWebsiteRepository",
    httpMethod: "GET",
    slots: 1,
    path: ([applicationRid]) => `/application-websites/${applicationRid}`,
    call: (ctx, segments) =>
      getWebsiteRepository(ctx, pathSegment(segments, 0)),
  },
  {
    name: "ApplicationWebsiteService.getWebsitesForCodeRepository",
    httpMethod: "GET",
    slots: 1,
    path: ([codeRepositoryRid]) =>
      `/application-websites/for-code-repository/${codeRepositoryRid}`,
    call: (ctx, segments) =>
      getWebsitesForCodeRepository(ctx, pathSegment(segments, 0)),
  },
  {
    name: "ApplicationWebsiteService.linkWebsiteCodeRepository",
    httpMethod: "PUT",
    slots: 1,
    path: ([applicationRid]) => `/application-websites/${applicationRid}/link`,
    call: (ctx, segments) =>
      linkWebsiteCodeRepository(ctx, pathSegment(segments, 0), body()),
  },
  {
    name: "ApplicationWebsiteService.updateWebsiteRoles",
    httpMethod: "PUT",
    slots: 1,
    path: ([applicationRid]) => `/application-websites/${applicationRid}/roles`,
    call: (ctx, segments) =>
      updateWebsiteRoles(ctx, pathSegment(segments, 0), body()),
  },
  {
    name: "ApplicationWebsiteService.getApplicationForWebsiteRepository",
    httpMethod: "GET",
    slots: 1,
    path: ([repositoryRid]) =>
      `/application-websites/for-repository/${repositoryRid}`,
    call: (ctx, segments) =>
      getApplicationForWebsiteRepository(ctx, pathSegment(segments, 0)),
  },
  {
    name: "ApplicationMetricsService.getMetrics",
    httpMethod: "PUT",
    slots: 1,
    path: ([applicationRid]) =>
      `/application-metrics/${applicationRid}/metrics`,
    call: (ctx, segments) => getMetrics(ctx, pathSegment(segments, 0), body()),
  },
  {
    name: "ApplicationMetricsService.getMetricsDelay",
    httpMethod: "GET",
    slots: 1,
    path: ([applicationRid]) =>
      `/application-metrics/delays/${applicationRid}/getMetrics`,
    call: (ctx, segments) => getMetricsDelay(ctx, pathSegment(segments, 0)),
  },
  {
    name: "ApplicationMetricsService.getRequestDurationMetrics",
    httpMethod: "PUT",
    slots: 1,
    path: ([applicationRid]) =>
      `/application-metrics/${applicationRid}/requestDurationMetrics`,
    call: (ctx, segments) =>
      getRequestDurationMetrics(ctx, pathSegment(segments, 0), body()),
  },
  {
    name: "ApplicationMetricsService.getRequestDurationMetricsDelay",
    httpMethod: "GET",
    slots: 1,
    path: ([applicationRid]) =>
      `/application-metrics/delays/${applicationRid}/getRequestDurationMetrics`,
    call: (ctx, segments) =>
      getRequestDurationMetricsDelay(ctx, pathSegment(segments, 0)),
  },
  {
    name: "SdkDiscoveryService.getRecalledSdkGeneratorVersions",
    httpMethod: "GET",
    slots: 1,
    path: ([sdkGeneratorType]) =>
      `/sdk-discovery/generator/${sdkGeneratorType}/recalled`,
    call: (ctx, segments) =>
      getRecalledSdkGeneratorVersions(ctx, pathSegment(segments, 0)),
  },
  {
    name: "SdkDiscoveryService.listSdkGeneratorVersions",
    httpMethod: "GET",
    slots: 1,
    path: ([sdkGeneratorType]) =>
      `/sdk-discovery/generator/${sdkGeneratorType}/versions`,
    call: (ctx, segments) =>
      listSdkGeneratorVersions(
        ctx,
        pathSegment(segments, 0),
        undefined,
        undefined,
        undefined,
      ),
  },
];

function encodedTarget(
  operation: Operation,
  rawSegments: readonly string[],
): string {
  const encoded = rawSegments.map((segment) => encodeURIComponent(segment));
  const path = `${SERVICE_PATH}${operation.path(encoded)}`;
  const search = operation.search?.(encoded) ?? "";
  return `${path}${search}`;
}

/**
 * True when fetch's URL parser would put this exact string on the wire.
 * A segment of `.`, `..`, or `%2E%2E` is not stable: the parser decodes it
 * and then removes the dot segment.
 */
function targetSurvivesFetchUrlParser(target: string): boolean {
  const parsed = new URL(target, "http://127.0.0.1");
  return (
    parsed.pathname + parsed.search === target &&
    parsed.hash === "" &&
    parsed.username === "" &&
    parsed.password === ""
  );
}

async function listen(): Promise<{
  server: Server;
  baseUrl: string;
  requests: SeenRequest[];
}> {
  const requests: SeenRequest[] = [];
  const server = createServer((req, res) => {
    req.on("data", () => undefined);
    req.on("end", () => {
      const url = req.url ?? "";
      requests.push({
        method: req.method ?? "",
        url,
        authorization: req.headers.authorization,
      });
      const payload = JSON.stringify({
        servedPath: url,
        servedMethod: req.method,
      });
      res.writeHead(200, {
        "content-type": "application/json",
        "content-length": Buffer.byteLength(payload),
      });
      res.end(payload);
    });
  });
  await new Promise<void>((resolve) => {
    server.listen(0, "127.0.0.1", resolve);
  });
  const { port } = server.address() as AddressInfo;
  return {
    server,
    baseUrl: `http://127.0.0.1:${port}`,
    requests,
  };
}

async function withServer(
  run: (ctx: ConjureContext, requests: SeenRequest[]) => Promise<void>,
): Promise<void> {
  const { server, baseUrl, requests } = await listen();
  try {
    await run(
      {
        baseUrl,
        servicePath: SERVICE_PATH,
        tokenProvider: () => Promise.resolve(PLACEHOLDER_TOKEN),
      },
      requests,
    );
  } finally {
    await new Promise<void>((resolve, reject) => {
      server.close((error) => {
        if (error) {
          reject(error);
          return;
        }
        resolve();
      });
    });
  }
}

async function expectIdentifierStaysInItsSegment(
  operation: Operation,
  rawSegments: readonly string[],
): Promise<void> {
  const target = encodedTarget(operation, rawSegments);
  await withServer(async (ctx, requests) => {
    let returned: unknown;
    let thrown: unknown;
    try {
      returned = await operation.call(ctx, rawSegments);
    } catch (error) {
      thrown = error;
    }

    if (!targetSurvivesFetchUrlParser(target)) {
      expect(
        requests,
        `${operation.name} must reject ${JSON.stringify(rawSegments)} before fetch resolves dot segments`,
      ).toEqual([]);
      expect(thrown).toBeTruthy();
      expect(returned).toBeUndefined();
      return;
    }

    expect(requests, operation.name).toEqual([
      {
        method: operation.httpMethod,
        url: target,
        authorization: `Bearer ${PLACEHOLDER_TOKEN}`,
      },
    ]);
    expect(thrown).toBeUndefined();
    expect(returned).toEqual({
      servedPath: target,
      servedMethod: operation.httpMethod,
    });
  });
}

describe("third-party application path segments", () => {
  it("requests a dotted application identifier as one unchanged segment", async () => {
    const repositoryRid = "ri.artifacts.main.repository.abc";
    const packageName = "my-package";
    const sdkVersion = "1.2.3";
    await expectIdentifierStaysInItsSegment(
      operationNamed("SdkService.getSdk"),
      [repositoryRid, packageName, sdkVersion],
    );
    await expectIdentifierStaysInItsSegment(
      operationNamed("ApplicationService.deleteApplication"),
      ["ri.third-party-applications.main.application.abc"],
    );
    await expectIdentifierStaysInItsSegment(
      operationNamed("ApplicationTokenService.createApiToken"),
      ["ri.third-party-applications.main.application.abc"],
    );
  });

  for (const operation of operations) {
    it(`${operation.name} keeps each identifier in one path segment`, async () => {
      for (const identifier of OPAQUE_IDENTIFIERS) {
        for (let slot = 0; slot < operation.slots; slot++) {
          const segments = Array.from({ length: operation.slots }, (_, index) =>
            index === slot ? identifier : SAFE_SLOT,
          );
          await expectIdentifierStaysInItsSegment(operation, segments);
        }
      }
    });
  }

  it("keeps a question mark in the package segment when a query parameter is also set", async () => {
    const packageName = "name?injected=secret-resource";
    const operation: Operation = {
      name: "SdkService.listSdks with pageSize",
      httpMethod: "GET",
      slots: 2,
      path: ([repositoryRid, name]) => `/sdks/${repositoryRid}/${name}`,
      search: () => "?pageSize=10",
      call: (ctx, segments) =>
        listSdks(
          ctx,
          pathSegment(segments, 0),
          pathSegment(segments, 1),
          10,
          undefined,
        ),
    };
    await expectIdentifierStaysInItsSegment(operation, [
      SAFE_SLOT,
      packageName,
    ]);
  });
});
