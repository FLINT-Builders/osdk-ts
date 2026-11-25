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

export const WHITESPACE_OR_CONTROL_REGEX: RegExp = /[\s\p{Cc}]/u;

// Characters the URL parser leaves untouched in a path but that config file
// loaders treat specially (quoting, `$` expansion, escapes).
const UNSAFE_URL_CHARACTER_REGEX = /[\s\p{Cc}"'`$\\]/u;

/**
 * Parses `value` as an https URL and returns it without a trailing slash, or
 * `undefined` unless it is already in canonical form. The URL parser silently
 * drops tabs and newlines and rewrites other characters, so anything it would
 * change is rejected rather than normalized.
 */
function parseHttpsUrl(
  value: string,
  { allowPath }: { allowPath: boolean },
): string | undefined {
  if (UNSAFE_URL_CHARACTER_REGEX.test(value)) {
    return undefined;
  }
  let url: URL;
  try {
    url = new URL(value);
  } catch {
    return undefined;
  }
  if (
    url.protocol !== "https:" ||
    url.username !== "" ||
    url.password !== "" ||
    url.search !== "" ||
    url.hash !== "" ||
    (!allowPath && url.pathname !== "/")
  ) {
    return undefined;
  }
  const canonical = url.href.replace(/\/$/u, "");
  return value.replace(/\/$/u, "") === canonical ? canonical : undefined;
}

export function parseFoundryUrl(value: string): string | undefined {
  return parseHttpsUrl(value, { allowPath: false });
}

const OSDK_REGISTRY_URL_REGEX =
  /^https:\/\/[^/]+\/artifacts\/api\/repositories\/ri\.[^/]+\/contents\/release\/npm$/u;

export function parseOsdkRegistryUrl(value: string): string | undefined {
  const parsed = parseHttpsUrl(value, { allowPath: true });
  return parsed != null && OSDK_REGISTRY_URL_REGEX.test(parsed)
    ? parsed
    : undefined;
}
