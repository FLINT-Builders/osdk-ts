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

const OPAQUE_BINARY_TYPE = "application/octet-stream";

const MIME_TYPE_ESSENCE =
  /^[!#$%&'*+.^_`|~0-9a-z-]+\/[!#$%&'*+.^_`|~0-9a-z-]+$/u;

// Types a browser renders as a scriptable document, or sniffs into one, when
// a blob URL holding them is opened as a page.
const DOCUMENT_TYPES = new Set([
  "text/html",
  "text/xml",
  "text/xsl",
  "application/xml",
  "unknown/unknown",
  "application/unknown",
  "*/*",
]);

/**
 * Media blobs may be turned into blob URLs, which share the page's origin.
 * Returns the `type/subtype` of `contentType` when it is a single valid MIME
 * type that browsers do not execute as a document, and
 * `application/octet-stream` otherwise. Parameters are dropped so the blob's
 * type cannot be re-parsed as a different MIME type.
 */
export function toInertBlobType(contentType: string | null): string {
  if (contentType == null) {
    return OPAQUE_BINARY_TYPE;
  }
  const essence = (contentType.split(";", 1)[0] ?? "").trim().toLowerCase();
  if (
    !MIME_TYPE_ESSENCE.test(essence) ||
    DOCUMENT_TYPES.has(essence) ||
    essence.endsWith("+xml") ||
    essence.startsWith("multipart/")
  ) {
    return OPAQUE_BINARY_TYPE;
  }
  return essence;
}
