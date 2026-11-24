/*
 * Copyright 2025 Palantir Technologies, Inc. All rights reserved.
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

import type { Media } from "@osdk/api";
import { cleanup, render } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";

import { TiffViewer } from "../../images/tiff-viewer/TiffViewer.js";
import {
  captureCreatedBlobs,
  expectNoScriptableBlobs,
  mediaReturning,
  mediaTypeEssence,
  settleMediaViewer,
} from "../../test/scriptableBlobUrl.js";
import { DocumentViewer } from "../DocumentViewer.js";
import { TiffDocumentViewer } from "../TiffDocumentViewer.js";

vi.mock("../../images/tiff-viewer/TiffViewer.js", () => ({
  TiffViewer: vi.fn(() => null),
}));
vi.mock("../TiffDocumentViewer.js", () => ({
  TiffDocumentViewer: vi.fn(() => null),
}));

const mockedTiffViewer = vi.mocked(TiffViewer);
const mockedTiffDocumentViewer = vi.mocked(TiffDocumentViewer);

function tiffMedia(): Media {
  return {
    getMediaReference: () => ({ mimeType: "image/tiff" }),
  } as unknown as Media;
}

afterEach(() => {
  cleanup();
  vi.clearAllMocks();
});

// `tiffRendererProps` is the only deprecated alias left: the markdown, spreadsheet,
// email and XML prop bags were dropped because their Base props are just the
// primary input plus `className`, both of which DocumentViewer omits, leaving
// nothing left to forward.
describe("DocumentViewer deprecated viewer props", () => {
  it("should forward the deprecated tiffRendererProps to the TIFF viewer", () => {
    const onError = vi.fn();

    render(
      <DocumentViewer media={tiffMedia()} tiffRendererProps={{ onError }} />,
    );

    expect(mockedTiffViewer.mock.calls[0]?.[0]).toMatchObject({ onError });
  });

  it("should prefer tiffViewerProps when both names are supplied", () => {
    const preferred = vi.fn();
    const deprecated = vi.fn();

    render(
      <DocumentViewer
        media={tiffMedia()}
        tiffViewerProps={{ onError: preferred }}
        tiffRendererProps={{ onError: deprecated }}
      />,
    );

    expect(mockedTiffViewer.mock.calls[0]?.[0]).toMatchObject({
      onError: preferred,
    });
  });

  it("should forward the deprecated tiffRendererProps through the TIFF-to-PDF path", () => {
    const onError = vi.fn();

    render(
      <DocumentViewer
        media={tiffMedia()}
        enableTiffToPdf
        tiffRendererProps={{ onError }}
      />,
    );

    expect(mockedTiffDocumentViewer.mock.calls[0]?.[0]).toMatchObject({
      tiffViewerProps: { onError },
    });
  });
});

describe("DocumentViewer image blob URL content type", () => {
  it.each([
    ["image/svg+xml", undefined],
    ["image/svg+xml; charset=utf-8", undefined],
    ["image/svg+xml", "image/svg+xml"],
    ["text/html", "image/png"],
  ] as const)(
    "does not publish a scriptable blob URL when the response is %s",
    async (contentType, mimeTypeOverride) => {
      const capture = captureCreatedBlobs();
      try {
        render(
          <DocumentViewer
            media={mediaReturning(contentType, "image/svg+xml")}
            mimeTypeOverride={mimeTypeOverride}
          />,
        );
        await settleMediaViewer();
        expectNoScriptableBlobs(capture.blobs);
      } finally {
        capture.restore();
      }
    },
  );

  it("still renders a png media reference from a blob URL", async () => {
    const capture = captureCreatedBlobs();
    try {
      const { container } = render(
        <DocumentViewer
          media={mediaReturning("image/png", "image/png", "png-bytes")}
        />,
      );
      await settleMediaViewer();
      const img = container.querySelector("img");
      expect(img?.getAttribute("src")?.startsWith("blob:")).toBe(true);
      expect(
        capture.blobs.some(
          (blob) => mediaTypeEssence(blob.type) === "image/png",
        ),
      ).toBe(true);
      expectNoScriptableBlobs(capture.blobs);
    } finally {
      capture.restore();
    }
  });
});
