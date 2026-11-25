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

import { ExitProcessError } from "@osdk/cli.common";

/**
 * Encodes a value so it is always exactly one URL path segment.
 *
 * `encodeURIComponent` leaves `.` unescaped and the URL parser resolves `.`
 * and `..` segments, so those (and empty values) are rejected outright.
 */
export function encodePathSegment(value: string): string {
  if (
    typeof value !== "string"
    || value === ""
    || value === "."
    || value === ".."
  ) {
    throw new ExitProcessError(
      2,
      `Invalid identifier for request path: ${JSON.stringify(value)}`,
    );
  }
  return encodeURIComponent(value);
}
