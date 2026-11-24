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

import { cleanup, render, waitFor } from "@testing-library/react";
import type { IFD } from "utif";
import { afterEach, describe, expect, it, vi } from "vitest";

import {
  grayscaleTiff,
  MAX_DECLARED_SIDE,
  mediaWithBytes,
  type UtifModule,
} from "../../images/tiff-viewer/__tests__/tiffDimensionLimit.test-utils.js";
import { DocumentViewer } from "../DocumentViewer.js";

const reactMock = vi.hoisted(() => {
  const client = {};
  return {
    useOsdkClient: () => client,
  };
});

vi.mock("@osdk/react", () => reactMock);

const utifCalls = vi.hoisted(() => {
  const decodeImageCalls: unknown[] = [];
  const toRGBA8Calls: unknown[] = [];
  return {
    decodeImageCalls,
    toRGBA8Calls,
    reset(): void {
      decodeImageCalls.length = 0;
      toRGBA8Calls.length = 0;
    },
  };
});

vi.mock("utif", async () => {
  const actual = await vi.importActual<UtifModule>("utif");
  return {
    decode: (buffer: ArrayBuffer) => actual.decode(buffer),
    decodeImage: (buffer: ArrayBuffer, ifd: IFD): void => {
      utifCalls.decodeImageCalls.push(ifd);
      actual.decodeImage(buffer, ifd);
    },
    toRGBA8: (ifd: IFD): Uint8Array => {
      utifCalls.toRGBA8Calls.push(ifd);
      return actual.toRGBA8(ifd);
    },
  };
});

afterEach(() => {
  cleanup();
  utifCalls.reset();
});

async function settle(container: HTMLElement): Promise<void> {
  await waitFor(() => {
    const text = container.textContent ?? "";
    const canvas = container.querySelector("canvas");
    expect(text.includes("Loading")).toBe(false);
    expect(text.includes("Converting")).toBe(false);
    expect(
      canvas != null || /pixel|could not render|exceeds/iu.test(text),
    ).toBe(true);
  });
}

function expectRejected(container: HTMLElement): void {
  expect(container.querySelector("canvas")).toBeNull();
  expect(container.textContent ?? "").toMatch(/pixel/iu);
  expect(utifCalls.decodeImageCalls).toHaveLength(0);
  expect(utifCalls.toRGBA8Calls).toHaveLength(0);
}

describe("DocumentViewer TIFF dimension budget", () => {
  it("rejects image/tiff media before allocating the declared bitmap", async () => {
    const bytes = await grayscaleTiff(MAX_DECLARED_SIDE + 1, 1, "deflate");
    const onError = vi.fn();

    const { container } = render(
      <DocumentViewer
        media={mediaWithBytes(bytes, "image/tiff")}
        tiffViewerProps={{ onError }}
      />,
    );
    await settle(container);

    expectRejected(container);
    expect(onError).toHaveBeenCalled();
  });

  it("rejects a .tiff file whose media type is not image/tiff", async () => {
    const bytes = await grayscaleTiff(1, MAX_DECLARED_SIDE + 1, "rle");
    const onError = vi.fn();

    const { container } = render(
      <DocumentViewer
        media={mediaWithBytes(bytes, "application/octet-stream")}
        fileName="scan.tiff"
        tiffViewerProps={{ onError }}
      />,
    );
    await settle(container);

    expectRejected(container);
    expect(onError).toHaveBeenCalled();
  });

  it("rejects a .tif file through the single-page TIFF-to-PDF fallback", async () => {
    const bytes = await grayscaleTiff(MAX_DECLARED_SIDE + 1, 1, "rle");
    const onError = vi.fn();

    const { container } = render(
      <DocumentViewer
        media={mediaWithBytes(bytes, "application/octet-stream")}
        fileName="scan.tif"
        enableTiffToPdf
        tiffViewerProps={{ onError }}
      />,
    );
    await settle(container);

    expectRejected(container);
    expect(onError).toHaveBeenCalled();
  });
});
