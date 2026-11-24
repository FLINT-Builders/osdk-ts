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

import type { Media, MediaReference } from "@osdk/api";
import type { IFD } from "utif";

export interface UtifModule {
  decode: (buffer: ArrayBuffer) => IFD[];
  decodeImage: (buffer: ArrayBuffer, ifd: IFD) => void;
  toRGBA8: (ifd: IFD) => Uint8Array;
}

/**
 * Contract for the TIFF viewer dimension guard.
 *
 * After the IFD is parsed, and before any pixel buffer is allocated, reject
 * when either side is greater than {@link MAX_DECLARED_SIDE} or when
 * width * height is greater than {@link MAX_DECLARED_PIXELS}. Values equal to
 * those limits are accepted. The compressed-byte cap (25 MB) is not a
 * substitute: files under that cap must still be rejected when the declared
 * dimensions are over the budget.
 */
export const MAX_DECLARED_SIDE = 16_384;
export const MAX_DECLARED_PIXELS = 50_000_000;
export const COMPRESSED_BYTE_CAP = 25_000_000;

const COMPRESSION_DEFLATE = 8;
// TIFF compression tag 32773, run-length encoded samples.
const COMPRESSION_RLE = 32_773;

export type TiffCompression = "deflate" | "rle";

function repeatByte(count: number): number {
  return 1 - count + 256;
}

function repeatZeros(pixelCount: number): Uint8Array {
  const runs = Math.floor(pixelCount / 128);
  const tail = pixelCount % 128;
  const tailBytes = tail === 0 ? 0 : 2;
  const out = new Uint8Array(runs * 2 + tailBytes);
  let offset = 0;
  for (let i = 0; i < runs; i++) {
    out[offset++] = repeatByte(128);
    out[offset++] = 0;
  }
  if (tail === 1) {
    out[offset++] = 0;
    out[offset++] = 0;
  } else if (tail > 1) {
    out[offset++] = repeatByte(tail);
    out[offset++] = 0;
  }
  return out;
}

async function deflateZeros(pixelCount: number): Promise<Uint8Array> {
  const raw = new Uint8Array(pixelCount);
  const compressed = new Blob([raw])
    .stream()
    .pipeThrough(new CompressionStream("deflate"));
  return new Uint8Array(await new Response(compressed).arrayBuffer());
}

export async function grayscaleTiff(
  width: number,
  height: number,
  compression: TiffCompression,
): Promise<Uint8Array> {
  const strip =
    compression === "deflate"
      ? await deflateZeros(width * height)
      : repeatZeros(width * height);
  const compressionTag =
    compression === "deflate" ? COMPRESSION_DEFLATE : COMPRESSION_RLE;
  const dataOffset = 8;
  const ifdOffset = dataOffset + strip.byteLength + (strip.byteLength % 2);
  const tags: Array<[number, number, number, number]> = [
    [256, 4, 1, width],
    [257, 4, 1, height],
    [258, 3, 1, 8],
    [259, 3, 1, compressionTag],
    [262, 3, 1, 1],
    [273, 4, 1, dataOffset],
    [277, 3, 1, 1],
    [278, 4, 1, height],
    [279, 4, 1, strip.byteLength],
  ];
  const bytes = new Uint8Array(ifdOffset + 2 + tags.length * 12 + 4);
  const view = new DataView(bytes.buffer);
  bytes[0] = 0x49;
  bytes[1] = 0x49;
  view.setUint16(2, 42, true);
  view.setUint32(4, ifdOffset, true);
  bytes.set(strip, dataOffset);
  view.setUint16(ifdOffset, tags.length, true);
  let cursor = ifdOffset + 2;
  for (const [tag, type, count, value] of tags) {
    view.setUint16(cursor, tag, true);
    view.setUint16(cursor + 2, type, true);
    view.setUint32(cursor + 4, count, true);
    if (type === 3) {
      view.setUint16(cursor + 8, value, true);
    } else {
      view.setUint32(cursor + 8, value, true);
    }
    cursor += 12;
  }
  view.setUint32(cursor, 0, true);
  return bytes;
}

export function mediaWithBytes(bytes: Uint8Array, mimeType: string): Media {
  const reference: MediaReference = {
    mimeType,
    reference: {
      type: "mediaSetViewItem",
      mediaSetViewItem: {
        mediaItemRid: "ri.mio.main.media-item.dimension-limit",
        mediaSetRid: "ri.mio.main.media-set.dimension-limit",
        mediaSetViewRid: "ri.mio.main.media-set-view.dimension-limit",
      },
    },
  };
  return {
    fetchContents: () => Promise.resolve(new Response(bytes)),
    fetchMetadata: () =>
      Promise.resolve({
        sizeBytes: bytes.byteLength,
        mediaType: mimeType,
      }),
    getMediaReference: () => reference,
  };
}
