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

import { createSharedClientContext } from "@osdk/shared.client.impl";
import { LegacyFauxFoundry, startNodeApiServer } from "@osdk/shared.test";
import { beforeAll, describe, expect, it } from "vitest";

import { createClient } from "../createClient.js";
import { GeotimeSeriesPropertyImpl } from "../createGeotimeSeriesProperty.js";
import { TimeSeriesPropertyImpl } from "../createTimeseriesProperty.js";
import type { MinimalClient } from "../MinimalClientContext.js";
import { parseStreamedResponse } from "./streamutils.js";
import { asyncIterPointsHelper } from "./timeseriesUtils.js";

/**
 * Wire shape of StreamTimeSeriesPointsResponse / StreamTimeSeriesValuesResponse
 * (`{ data: TimeSeriesPoint[] }`). The stream reader also accepts the bare
 * array emitted by the in-repo faux handler via `Response.json`.
 */
const DATA_PREFIX = `{"data":[`;

interface SeriesPoint<T> {
  time: string;
  value: T;
}

const closingBracePoints: SeriesPoint<string>[] = [
  { time: "2020-01-01T00:00:00.000Z", value: "steady" },
  { time: "2020-01-02T00:00:00.000Z", value: "}" },
  { time: "2020-01-03T00:00:00.000Z", value: "after" },
];

const openingBracePoints: SeriesPoint<string>[] = [
  { time: "2020-01-01T00:00:00.000Z", value: "steady" },
  { time: "2020-01-02T00:00:00.000Z", value: "{" },
  { time: "2020-01-03T00:00:00.000Z", value: "after" },
];

const escapedBracePoints: SeriesPoint<string>[] = [
  { time: "2020-01-01T00:00:00.000Z", value: "steady" },
  { time: "2020-01-02T00:00:00.000Z", value: 'say "}"' },
  { time: "2020-01-03T00:00:00.000Z", value: "\\}" },
  { time: "2020-01-04T00:00:00.000Z", value: "café }" },
  { time: "2020-01-05T00:00:00.000Z", value: "after" },
];

const stringCases: Array<{ name: string; points: SeriesPoint<string>[] }> = [
  { name: "unmatched closing brace", points: closingBracePoints },
  { name: "unmatched opening brace", points: openingBracePoints },
  {
    name: "escaped quote, escaped backslash, and non-ascii text before a brace",
    points: escapedBracePoints,
  },
];

const geotimeClosingPoints: SeriesPoint<GeoJSON.Point>[] = [
  {
    time: "2020-01-01T00:00:00.000Z",
    value: { type: "Point", coordinates: [1, 2] },
  },
  {
    time: "status }",
    value: { type: "Point", coordinates: [3, 4] },
  },
  {
    time: "2020-01-03T00:00:00.000Z",
    value: { type: "Point", coordinates: [5, 6] },
  },
];

const geotimeOpeningPoints: SeriesPoint<GeoJSON.Point>[] = [
  {
    time: "2020-01-01T00:00:00.000Z",
    value: { type: "Point", coordinates: [1, 2] },
  },
  {
    time: "status {",
    value: { type: "Point", coordinates: [3, 4] },
  },
  {
    time: "2020-01-03T00:00:00.000Z",
    value: { type: "Point", coordinates: [5, 6] },
  },
];

function wrappedBody(points: ReadonlyArray<SeriesPoint<unknown>>): string {
  const body = JSON.stringify({ data: points });
  expect(body.startsWith(DATA_PREFIX)).toBe(true);
  return body;
}

/**
 * First chunk is the `{"data":[` prefix so the reader takes its normal fast
 * path. Every later byte is its own chunk, including a backslash that ends a
 * chunk and the escaped quote that starts the next one.
 */
function chunkWrappedBody(body: string): Uint8Array[] {
  const bytes = new TextEncoder().encode(body);
  const prefixLength = new TextEncoder().encode(DATA_PREFIX).length;
  const parts: Uint8Array[] = [bytes.slice(0, prefixLength)];
  for (let i = prefixLength; i < bytes.length; i++) {
    parts.push(bytes.slice(i, i + 1));
  }
  return parts;
}

async function* iterateParts(
  parts: Uint8Array[],
): AsyncGenerator<Uint8Array, void, unknown> {
  for (const part of parts) {
    yield part;
  }
}

function responseFromParts(parts: Uint8Array[]): Response {
  return new Response(
    new ReadableStream<Uint8Array>({
      start(controller) {
        for (const part of parts) {
          controller.enqueue(part);
        }
        controller.close();
      },
    }),
    { status: 200, headers: { "Content-Type": "application/json" } },
  );
}

async function collect<T>(source: AsyncIterable<T>): Promise<T[]> {
  const out: T[] = [];
  for await (const item of source) {
    out.push(item);
  }
  return out;
}

function clientFor(
  property: string,
  endpoint: "streamPoints" | "streamValues",
  parts: Uint8Array[],
): MinimalClient {
  return {
    baseUrl: "https://example.test",
    ontologyRid: "ri.ontology.main.ontology.brace-test",
    fetch: (input, init) => {
      const url = String(input);
      expect(url).toContain(`/timeseries/${property}/${endpoint}`);
      expect(init?.method).toBe("POST");
      return responseFromParts(parts);
    },
  } as MinimalClient;
}

describe("streamed timeseries strings that contain braces", () => {
  describe("documented {data:[]} JSON body", () => {
    for (const { name, points } of stringCases) {
      it(`parseStreamedResponse returns every string point for ${name}`, async () => {
        const body = wrappedBody(points);
        const parsed = await collect(
          parseStreamedResponse(iterateParts(chunkWrappedBody(body))),
        );
        expect(parsed).toEqual(points);
      });

      it(`asyncIterPointsHelper returns every string point for ${name}`, async () => {
        const body = wrappedBody(points);
        const parsed = await collect(
          asyncIterPointsHelper<string>(
            responseFromParts(chunkWrappedBody(body)),
          ),
        );
        expect(parsed).toEqual(points);
      });

      it(`getAllPoints returns every string point for ${name}`, async () => {
        const parts = chunkWrappedBody(wrappedBody(points));
        const property = new TimeSeriesPropertyImpl<string>(
          clientFor("employeeStatus", "streamPoints", parts),
          "Employee",
          "50030",
          "employeeStatus",
        );
        await expect(property.getAllPoints()).resolves.toEqual(points);
      });

      it(`asyncIterPoints returns every string point for ${name}`, async () => {
        const parts = chunkWrappedBody(wrappedBody(points));
        const property = new TimeSeriesPropertyImpl<string>(
          clientFor("employeeStatus", "streamPoints", parts),
          "Employee",
          "50030",
          "employeeStatus",
        );
        await expect(collect(property.asyncIterPoints())).resolves.toEqual(
          points,
        );
      });
    }

    it("getAllValues returns every geotime point when a time string contains }", async () => {
      const parts = chunkWrappedBody(wrappedBody(geotimeClosingPoints));
      const property = new GeotimeSeriesPropertyImpl(
        clientFor("employeeLocation", "streamValues", parts),
        "Employee",
        "50030",
        "employeeLocation",
      );
      await expect(property.getAllValues()).resolves.toEqual(
        geotimeClosingPoints,
      );
    });

    it("asyncIterValues returns every geotime point when a time string contains {", async () => {
      const parts = chunkWrappedBody(wrappedBody(geotimeOpeningPoints));
      const property = new GeotimeSeriesPropertyImpl(
        clientFor("employeeLocation", "streamValues", parts),
        "Employee",
        "50030",
        "employeeLocation",
      );
      await expect(collect(property.asyncIterValues())).resolves.toEqual(
        geotimeOpeningPoints,
      );
    });
  });

  describe("stored series read back through the faux stream handler", () => {
    let client: MinimalClient;
    let register: (
      property: string,
      data: ReadonlyArray<SeriesPoint<unknown>>,
    ) => void;

    beforeAll(() => {
      const fauxFoundry = new LegacyFauxFoundry();
      const testSetup = startNodeApiServer(fauxFoundry, createClient);
      client = {
        ...createSharedClientContext(
          fauxFoundry.baseUrl,
          testSetup.auth,
          "osdk-ts-test",
        ),
        ontologyRid: fauxFoundry.defaultOntologyRid,
      } as MinimalClient;
      register = (property, data) => {
        fauxFoundry
          .getDefaultDataStore()
          .registerTimeSeriesData("Employee", "50030", property, [...data]);
      };
      return () => {
        testSetup.apiServer.close();
      };
    });

    for (const { name, points } of stringCases) {
      it(`getAllPoints returns a stored string series for ${name}`, async () => {
        register("employeeStatus", points);
        const property = new TimeSeriesPropertyImpl<string>(
          client,
          "Employee",
          "50030",
          "employeeStatus",
        );
        await expect(property.getAllPoints()).resolves.toEqual(points);
      });

      it(`asyncIterPoints returns a stored string series for ${name}`, async () => {
        register("employeeSensor", points);
        const property = new TimeSeriesPropertyImpl<string>(
          client,
          "Employee",
          "50030",
          "employeeSensor",
        );
        await expect(collect(property.asyncIterPoints())).resolves.toEqual(
          points,
        );
      });
    }

    it("getAllValues returns a stored geotime series whose time contains }", async () => {
      register("employeeLocation", geotimeClosingPoints);
      const property = new GeotimeSeriesPropertyImpl(
        client,
        "Employee",
        "50030",
        "employeeLocation",
      );
      await expect(property.getAllValues()).resolves.toEqual(
        geotimeClosingPoints,
      );
    });

    it("asyncIterValues returns a stored geotime series whose time contains {", async () => {
      register("employeeLocation", geotimeOpeningPoints);
      const property = new GeotimeSeriesPropertyImpl(
        client,
        "Employee",
        "50030",
        "employeeLocation",
      );
      await expect(collect(property.asyncIterValues())).resolves.toEqual(
        geotimeOpeningPoints,
      );
    });
  });
});
