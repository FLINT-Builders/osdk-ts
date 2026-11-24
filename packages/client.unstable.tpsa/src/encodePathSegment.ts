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

/**
 * Encodes a conjure path parameter so it occupies exactly one path segment.
 *
 * conjure-lite concatenates the path it is given, so every path parameter in
 * the generated clients must pass through here. `.` and `..` survive
 * percent-encoding and are removed as dot segments by the URL parser, and an
 * empty segment changes which route the path matches, so those are rejected.
 */
export function encodePathSegment(value: string | number | boolean): string {
  const encoded = encodeURIComponent(String(value));
  if (
    encoded === "" ||
    encoded === "." ||
    encoded === ".." ||
    /[/?#\\]/u.test(encoded)
  ) {
    throw new Error(`Invalid path parameter: ${JSON.stringify(String(value))}`);
  }
  return encoded;
}
