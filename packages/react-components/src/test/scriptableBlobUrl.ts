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

import type { Media, MediaMetadata, MediaReference } from "@osdk/api";
import { screen, waitFor } from "@testing-library/react";
import { expect, vi } from "vitest";

/**
 * Content types Chrome executes as a top-level blob: document in the
 * creating page's origin, including when a parameter follows the essence.
 */
const SCRIPTABLE_DOCUMENT_TYPES = new Set([
  "image/svg+xml",
  "text/html",
  "text/xml",
  "application/xml",
]);

export const SVG_WITH_STORAGE_READ = `<svg xmlns="http://www.w3.org/2000/svg"><script>localStorage.getItem("@osdk/oauth : refresh : placeholder-client")</script></svg>`;

export function mediaTypeEssence(type: string): string {
  return type.split(";")[0]?.trim().toLowerCase() ?? "";
}

export function isScriptableDocumentType(type: string): boolean {
  return SCRIPTABLE_DOCUMENT_TYPES.has(mediaTypeEssence(type));
}

export function mediaReturning(
  contentType: string,
  referenceMimeType: string,
  body: string = SVG_WITH_STORAGE_READ,
): Media {
  const reference: MediaReference = {
    mimeType: referenceMimeType,
    reference: {
      type: "mediaSetViewItem",
      mediaSetViewItem: {
        mediaItemRid: "ri.mio.main.media-item.placeholder",
        mediaSetRid: "ri.mio.main.media-set.placeholder",
        mediaSetViewRid: "ri.mio.main.view.placeholder",
      },
    },
  };
  const metadata: MediaMetadata = {
    sizeBytes: body.length,
    mediaType: referenceMimeType,
  };
  return {
    fetchContents: () =>
      Promise.resolve(
        new Response(body, { headers: { "content-type": contentType } }),
      ),
    fetchMetadata: () => Promise.resolve(metadata),
    getMediaReference: () => reference,
  };
}

export function captureCreatedBlobs(): {
  blobs: Blob[];
  restore: () => void;
} {
  const blobs: Blob[] = [];
  const original = URL.createObjectURL;
  const spy = vi.spyOn(URL, "createObjectURL").mockImplementation((value) => {
    if (value instanceof Blob) {
      blobs.push(value);
    }
    return original.call(URL, value);
  });
  return {
    blobs,
    restore: () => {
      spy.mockRestore();
    },
  };
}

export function expectNoScriptableBlobs(blobs: readonly Blob[]): void {
  for (const blob of blobs) {
    expect(
      isScriptableDocumentType(blob.type),
      `same-origin blob URL kept scriptable type ${JSON.stringify(blob.type)}`,
    ).toBe(false);
  }
}

export async function settleMediaViewer(): Promise<void> {
  await waitFor(() => {
    expect(screen.queryByText("Loading…")).toBeNull();
  });
}
