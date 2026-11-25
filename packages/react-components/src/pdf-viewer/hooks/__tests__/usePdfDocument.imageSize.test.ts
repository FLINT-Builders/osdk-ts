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

/* cspell:words flate FlateDecode nendobj nstartxref */

/**
 * The sibling usePdfDocument.test.ts replaces pdfjs-dist with a mock, so it
 * cannot see the bitmap this decoder allocates. These tests load the real
 * library through usePdfDocument and decode the page the viewer paints.
 *
 * Vitest serves the worker module on an http URL, which Node's loader
 * refuses. The file URL below is that same shipped worker, loaded on this
 * thread so the allocation guard can see it. usePdfDocument still builds
 * the getDocument parameters.
 */

import { createServer } from "node:http";
import { createRequire } from "node:module";
import type { AddressInfo } from "node:net";
import { pathToFileURL } from "node:url";
import { deflateSync } from "node:zlib";

import { renderHook, waitFor } from "@testing-library/react";
import { beforeAll, describe, expect, it } from "vitest";

import { usePdfDocument } from "../usePdfDocument.js";

const HUGE_SIDE = 20_000;
const SMALL_SIDE = 8;
/** Bytes. Above a few million pixels of RGBA, and above the small fixture. */
const ALLOCATION_LIMIT = 4_000_000;

const require = createRequire(import.meta.url);
const workerHref = pathToFileURL(
  require.resolve("pdfjs-dist/build/pdf.worker.min.mjs"),
).href;

const compressedPixel = deflateSync(new Uint8Array([0]));

interface AllocationHit {
  kind: "Uint8Array" | "Uint8ClampedArray";
  length: number;
}

const hits: AllocationHit[] = [];

const NativeUint8Array = globalThis.Uint8Array;
const NativeUint8ClampedArray = globalThis.Uint8ClampedArray;

function guardingConstructor<T extends Uint8ArrayConstructor>(
  Native: T,
  kind: AllocationHit["kind"],
): T {
  class Guarded extends Native {
    constructor(...args: ConstructorParameters<Uint8ArrayConstructor>) {
      const requested = typeof args[0] === "number" ? args[0] : 0;
      if (requested >= 64) {
        hits.push({ kind, length: requested });
      }
      if (requested >= ALLOCATION_LIMIT) {
        throw new Error(`blocked ${kind}(${requested})`);
      }
      super(...args);
    }
  }
  return Guarded as T;
}

globalThis.Uint8Array = guardingConstructor(NativeUint8Array, "Uint8Array");
globalThis.Uint8ClampedArray = guardingConstructor(
  NativeUint8ClampedArray,
  "Uint8ClampedArray",
);

beforeAll(async () => {
  await import(/* @vite-ignore */ workerHref);
});

function oversized(): AllocationHit[] {
  return hits.filter((hit) => hit.length >= ALLOCATION_LIMIT);
}

interface ImagePdfOptions {
  width: number;
  height: number;
  imageMask?: boolean;
  colorKeyMask?: boolean;
  flate?: boolean;
  samples?: Uint8Array;
}

function buildImagePdf(options: ImagePdfOptions): Uint8Array {
  const samples = options.samples ?? new Uint8Array([0]);
  const stream = options.flate === true ? compressedPixel : samples;
  const chunks: Uint8Array[] = [];
  const offsets: number[] = [];
  let length = 0;
  const push = (part: string | Uint8Array) => {
    const bytes =
      typeof part === "string"
        ? new NativeUint8Array(new TextEncoder().encode(part))
        : part;
    chunks.push(bytes);
    length += bytes.byteLength;
  };
  const startObject = () => {
    offsets.push(length);
  };

  push("%PDF-1.4\n");
  startObject();
  push("1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n");
  startObject();
  push("2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n");
  startObject();
  push(
    "3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 200 200] /Resources << /XObject << /Im0 4 0 R >> >> /Contents 5 0 R >>\nendobj\n",
  );

  const dictionary = [
    "/Type /XObject",
    "/Subtype /Image",
    `/Width ${options.width}`,
    `/Height ${options.height}`,
    `/BitsPerComponent ${options.imageMask === true ? 1 : 8}`,
    options.imageMask === true ? "/ImageMask true" : "/ColorSpace /DeviceGray",
    options.colorKeyMask === true ? "/Mask [0 0]" : "",
    options.flate === true ? "/Filter /FlateDecode" : "",
    `/Length ${stream.byteLength}`,
  ]
    .filter((entry) => entry !== "")
    .join(" ");

  startObject();
  push(`4 0 obj\n<< ${dictionary} >>\nstream\n`);
  push(stream);
  push("\nendstream\nendobj\n");

  const content = "q\n200 0 0 200 0 0 cm\n/Im0 Do\nQ\n";
  startObject();
  push(
    `5 0 obj\n<< /Length ${content.length} >>\nstream\n${content}endstream\nendobj\n`,
  );

  const xrefAt = length;
  let xref = "xref\n0 6\n0000000000 65535 f \n";
  for (const offset of offsets) {
    xref += `${offset.toString().padStart(10, "0")} 00000 n \n`;
  }
  push(xref);
  push(`trailer\n<< /Size 6 /Root 1 0 R >>\nstartxref\n${xrefAt}\n%%EOF\n`);

  const pdf = new NativeUint8Array(length);
  let offset = 0;
  for (const chunk of chunks) {
    pdf.set(chunk, offset);
    offset += chunk.byteLength;
  }
  return pdf;
}

async function decodeThroughViewer(
  src: Parameters<typeof usePdfDocument>[0],
): Promise<Error | undefined> {
  hits.length = 0;
  const { result, unmount } = renderHook(() => usePdfDocument(src));
  try {
    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });
    const error = result.current.error;
    if (error != null || result.current.document == null) {
      return error;
    }
    const page = await result.current.document.getPage(1);
    // PDFPageProxy.render paints through this same operator-list pump.
    await page.getOperatorList();
    return undefined;
  } finally {
    unmount();
  }
}

function assertBitmapStaysBounded(error: Error | undefined): void {
  expect(oversized()).toEqual([]);
  if (error != null) {
    expect(error.message).not.toMatch(/worker/iu);
    expect(error.message.toLowerCase()).toMatch(/image|pixel|size/u);
  }
}

describe("usePdfDocument image size", () => {
  it("decodes a small image without a large bitmap", async () => {
    const pdf = buildImagePdf({
      width: SMALL_SIDE,
      height: SMALL_SIDE,
      colorKeyMask: true,
      samples: new Uint8Array(SMALL_SIDE * SMALL_SIDE),
    });

    const error = await decodeThroughViewer(pdf.slice());

    expect(error).toBeUndefined();
    expect(oversized()).toEqual([]);
    expect(
      hits.some(
        (hit) =>
          hit.kind === "Uint8ClampedArray" &&
          hit.length === SMALL_SIDE * SMALL_SIDE * 4,
      ),
    ).toBe(true);
  });

  it("does not allocate an RGBA buffer for a color-key image with huge declared dimensions", async () => {
    const pdf = buildImagePdf({
      width: HUGE_SIDE,
      height: HUGE_SIDE,
      colorKeyMask: true,
    });
    expect(pdf.byteLength).toBeLessThan(2_000);

    const bytes = pdf.buffer.slice(
      pdf.byteOffset,
      pdf.byteOffset + pdf.byteLength,
    ) as ArrayBuffer;
    const error = await decodeThroughViewer(bytes);

    assertBitmapStaysBounded(error);
  });

  it("does not allocate an RGB buffer for an unmasked image with huge declared dimensions", async () => {
    const pdf = buildImagePdf({
      width: HUGE_SIDE,
      height: HUGE_SIDE,
    });

    const error = await decodeThroughViewer(
      new Blob([pdf.slice()], { type: "application/pdf" }),
    );

    assertBitmapStaysBounded(error);
  });

  it("does not preallocate a decoded image-mask buffer from declared dimensions", async () => {
    const pdf = buildImagePdf({
      width: HUGE_SIDE,
      height: HUGE_SIDE,
      imageMask: true,
      flate: true,
    });

    const error = await decodeThroughViewer(pdf.slice());

    assertBitmapStaysBounded(error);
  });

  it("does not allocate those buffers when the PDF is loaded from a URL", async () => {
    const pdf = buildImagePdf({
      width: HUGE_SIDE,
      height: HUGE_SIDE,
      colorKeyMask: true,
    });
    const server = createServer((_request, response) => {
      response.setHeader("content-type", "application/pdf");
      response.end(pdf);
    });
    await new Promise<void>((resolve) => {
      server.listen(0, "127.0.0.1", () => {
        resolve();
      });
    });
    const { port } = server.address() as AddressInfo;
    try {
      const error = await decodeThroughViewer(
        `http://127.0.0.1:${port}/oversized.pdf`,
      );
      assertBitmapStaysBounded(error);
    } finally {
      await new Promise<void>((resolve, reject) => {
        server.close((closeError) => {
          if (closeError != null) {
            reject(closeError);
            return;
          }
          resolve();
        });
      });
    }
  });
});
