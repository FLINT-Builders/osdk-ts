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

import { BaseTiffViewer } from "../BaseTiffViewer.js";
import { TiffViewer } from "../TiffViewer.js";
import {
  COMPRESSED_BYTE_CAP,
  grayscaleTiff,
  MAX_DECLARED_PIXELS,
  MAX_DECLARED_SIDE,
  mediaWithBytes,
  type UtifModule,
} from "./tiffDimensionLimit.test-utils.js";

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
    expect(canvas != null || text.trim().length > 0).toBe(true);
  });
}

function expectRejected(container: HTMLElement): void {
  expect(container.querySelector("canvas")).toBeNull();
  expect(container.textContent ?? "").toMatch(/pixel/iu);
  expect(utifCalls.decodeImageCalls).toHaveLength(0);
  expect(utifCalls.toRGBA8Calls).toHaveLength(0);
}

function expectRendered(
  container: HTMLElement,
  width: number,
  height: number,
): void {
  const canvas = container.querySelector("canvas");
  expect(canvas).not.toBeNull();
  expect(canvas?.width).toBe(width);
  expect(canvas?.height).toBe(height);
  expect(utifCalls.decodeImageCalls.length).toBeGreaterThan(0);
  expect(utifCalls.toRGBA8Calls.length).toBeGreaterThan(0);
}

describe("TIFF declared-dimension budget", () => {
  it("renders a TIFF at the side and pixel limits", async () => {
    const atSideLimit = await grayscaleTiff(MAX_DECLARED_SIDE, 1, "rle");
    const onError = vi.fn();
    const side = render(<BaseTiffViewer src={atSideLimit} onError={onError} />);
    await settle(side.container);
    expectRendered(side.container, MAX_DECLARED_SIDE, 1);
    expect(onError).not.toHaveBeenCalled();
    side.unmount();
    utifCalls.reset();

    const width = 10_000;
    const height = MAX_DECLARED_PIXELS / width;
    const atPixelLimit = await grayscaleTiff(width, height, "rle");
    expect(atPixelLimit.byteLength).toBeLessThan(COMPRESSED_BYTE_CAP);
    const pixels = render(<BaseTiffViewer src={atPixelLimit} />);
    await settle(pixels.container);
    expectRendered(pixels.container, width, height);
  });

  it("rejects a deflate TIFF whose side exceeds the limit before allocating pixels", async () => {
    const bytes = await grayscaleTiff(MAX_DECLARED_SIDE + 1, 1, "deflate");
    expect(bytes.byteLength).toBeLessThan(COMPRESSED_BYTE_CAP);
    const onError = vi.fn();

    const { container } = render(
      <BaseTiffViewer src={bytes} onError={onError} />,
    );
    await settle(container);

    expectRejected(container);
    expect(onError).toHaveBeenCalled();
  });

  it("rejects a run-length TIFF whose side exceeds the limit before allocating pixels", async () => {
    const bytes = await grayscaleTiff(1, MAX_DECLARED_SIDE + 1, "rle");
    expect(bytes.byteLength).toBeLessThan(COMPRESSED_BYTE_CAP);
    const onError = vi.fn();

    const { container } = render(
      // eslint-disable-next-line @typescript-eslint/no-deprecated -- same decoder as src
      <BaseTiffViewer content={bytes} onError={onError} />,
    );
    await settle(container);

    expectRejected(container);
    expect(onError).toHaveBeenCalled();
  });

  it("rejects a run-length TIFF over the pixel budget before allocating pixels", async () => {
    const width = 10_000;
    const height = MAX_DECLARED_PIXELS / width + 1;
    const bytes = await grayscaleTiff(width, height, "rle");
    expect(bytes.byteLength).toBeLessThan(COMPRESSED_BYTE_CAP);
    expect(width * height).toBeGreaterThan(MAX_DECLARED_PIXELS);
    const onError = vi.fn();

    const { container } = render(
      <BaseTiffViewer src={bytes} onError={onError} />,
    );
    await settle(container);

    expectRejected(container);
    expect(onError).toHaveBeenCalled();
  });

  it("rejects fetched media whose declared pixel count exceeds the budget", async () => {
    const width = 10_000;
    const height = MAX_DECLARED_PIXELS / width + 1;
    const bytes = await grayscaleTiff(width, height, "deflate");
    expect(bytes.byteLength).toBeLessThan(COMPRESSED_BYTE_CAP);
    const onError = vi.fn();

    const { container } = render(
      <TiffViewer
        media={mediaWithBytes(bytes, "image/tiff")}
        onError={onError}
      />,
    );
    await settle(container);

    expectRejected(container);
    expect(onError).toHaveBeenCalled();
  });
});
