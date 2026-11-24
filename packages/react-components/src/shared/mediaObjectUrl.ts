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

const MIME_TYPE_ESSENCE =
  /^[!#$%&'*+.^_`|~0-9a-z-]+\/[!#$%&'*+.^_`|~0-9a-z-]+$/u;

export const OPAQUE_BINARY_TYPE = "application/octet-stream";

/**
 * Returns the lowercased `type/subtype` of a Content-Type header, or
 * `undefined` when the header is missing or is not a single valid MIME type.
 */
export function getMediaTypeEssence(
  contentType: string | null | undefined,
): string | undefined {
  if (contentType == null) {
    return undefined;
  }
  const essence = (contentType.split(";", 1)[0] ?? "").trim().toLowerCase();
  return MIME_TYPE_ESSENCE.test(essence) ? essence : undefined;
}

/**
 * Creates a blob URL for the response bytes. Blob URLs share the page's
 * origin, so a blob a browser would render as a document (SVG, HTML, XML)
 * runs its scripts with access to the app's storage when opened in a tab.
 * The blob is therefore typed with `allowedType`'s result, never with the
 * server's Content-Type as-is.
 */
export async function createSameOriginObjectUrl(
  response: Response,
  allowedType: (essence: string | undefined) => string,
): Promise<string> {
  const bytes = await response.arrayBuffer();
  const essence = getMediaTypeEssence(response.headers.get("content-type"));
  return URL.createObjectURL(new Blob([bytes], { type: allowedType(essence) }));
}

export function readBlobAsDataUrl(blob: Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      if (typeof reader.result === "string") {
        resolve(reader.result);
      } else {
        reject(new Error("Failed to read media contents"));
      }
    });
    reader.addEventListener("error", () => {
      reject(reader.error ?? new Error("Failed to read media contents"));
    });
    reader.readAsDataURL(blob);
  });
}

export function revokeIfObjectUrl(url: string): void {
  if (url.startsWith("blob:")) {
    URL.revokeObjectURL(url);
  }
}
