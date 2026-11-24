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

import { cleanup, render } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";

import {
  captureCreatedBlobs,
  expectNoScriptableBlobs,
  mediaReturning,
  mediaTypeEssence,
  settleMediaViewer,
} from "../../../test/scriptableBlobUrl.js";
import { ImageViewer } from "../ImageViewer.js";

const SCRIPTABLE_CONTENT_TYPES = [
  "image/svg+xml",
  "image/svg+xml; charset=utf-8",
  "image/svg+xml;charset=utf-8",
  "IMAGE/SVG+XML",
  "text/html",
  "text/html;charset=utf-8",
  "text/xml",
  "application/xml",
] as const;

const SAFE_IMAGE_CONTENT_TYPES = [
  "image/png",
  "image/jpeg",
  "image/gif",
  "image/webp",
  "image/bmp",
  "image/png; charset=binary",
] as const;

afterEach(() => {
  cleanup();
});

describe("ImageViewer blob URL content type", () => {
  it.each(SCRIPTABLE_CONTENT_TYPES)(
    "does not publish a scriptable blob URL for %s",
    async (contentType) => {
      const capture = captureCreatedBlobs();
      try {
        render(
          <ImageViewer
            media={mediaReturning(contentType, "image/svg+xml")}
            alt="uploaded"
          />,
        );
        await settleMediaViewer();
        expectNoScriptableBlobs(capture.blobs);
      } finally {
        capture.restore();
      }
    },
  );

  it("does not trust the media reference type when the response is SVG", async () => {
    const capture = captureCreatedBlobs();
    try {
      render(
        <ImageViewer
          media={mediaReturning("image/svg+xml; charset=utf-8", "image/png")}
          alt="uploaded"
        />,
      );
      await settleMediaViewer();
      expectNoScriptableBlobs(capture.blobs);
    } finally {
      capture.restore();
    }
  });

  it.each(SAFE_IMAGE_CONTENT_TYPES)(
    "still renders %s from a blob URL",
    async (contentType) => {
      const capture = captureCreatedBlobs();
      try {
        const { container } = render(
          <ImageViewer
            media={mediaReturning(contentType, contentType, "png-bytes")}
            alt="photo"
          />,
        );
        await settleMediaViewer();
        const img = container.querySelector("img");
        expect(img?.getAttribute("src")?.startsWith("blob:")).toBe(true);
        expect(
          capture.blobs.some(
            (blob) =>
              mediaTypeEssence(blob.type) === mediaTypeEssence(contentType),
          ),
        ).toBe(true);
        expectNoScriptableBlobs(capture.blobs);
      } finally {
        capture.restore();
      }
    },
  );
});
