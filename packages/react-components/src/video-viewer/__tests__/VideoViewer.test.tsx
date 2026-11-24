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
} from "../../test/scriptableBlobUrl.js";
import { VideoViewer } from "../VideoViewer.js";

const SCRIPTABLE_CONTENT_TYPES = [
  "image/svg+xml",
  "image/svg+xml; charset=utf-8",
  "IMAGE/SVG+XML",
  "text/html",
  "text/html;charset=utf-8",
  "text/xml",
  "application/xml",
] as const;

afterEach(() => {
  cleanup();
});

describe("VideoViewer blob URL content type", () => {
  it.each(SCRIPTABLE_CONTENT_TYPES)(
    "does not publish a scriptable blob URL for %s",
    async (contentType) => {
      const capture = captureCreatedBlobs();
      try {
        render(
          <VideoViewer media={mediaReturning(contentType, "video/mp4")} />,
        );
        await settleMediaViewer();
        expectNoScriptableBlobs(capture.blobs);
      } finally {
        capture.restore();
      }
    },
  );

  it("still renders video/mp4 from a blob URL", async () => {
    const capture = captureCreatedBlobs();
    try {
      const { container } = render(
        <VideoViewer
          media={mediaReturning(
            'video/mp4; codecs="avc1"',
            "video/mp4",
            "mp4-bytes",
          )}
        />,
      );
      await settleMediaViewer();
      const source = container.querySelector("source");
      expect(source?.getAttribute("src")?.startsWith("blob:")).toBe(true);
      expect(
        capture.blobs.some(
          (blob) => mediaTypeEssence(blob.type) === "video/mp4",
        ),
      ).toBe(true);
      expectNoScriptableBlobs(capture.blobs);
    } finally {
      capture.restore();
    }
  });
});
