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

export const ONTOLOGY_RID_REGEX: RegExp =
  /^ri\.ontology\.[a-z0-9-]+\.ontology\.[A-Za-z0-9_-]+$/u;

export const APPLICATION_RID_REGEX: RegExp =
  /^ri\.third-party-applications\.[a-z0-9-]+\.application\.[A-Za-z0-9_-]+$/u;

export const CLIENT_ID_REGEX: RegExp = /^[0-9a-f]+$/u;

export const WHITESPACE_OR_CONTROL_REGEX: RegExp = /[\s\p{Cc}]/u;

// Characters the URL parser leaves untouched in a path but that env and
// config file loaders treat specially (quoting, `$` expansion, escapes).
const UNSAFE_URL_CHARACTER_REGEX = /[\s\p{Cc}"'`$\\]/u;

/**
 * Parses `value` as a URL and returns it without a trailing slash, or
 * `undefined` unless it is already in canonical form. The URL parser silently
 * drops tabs and newlines and rewrites other characters, so anything it would
 * change is rejected rather than normalized.
 */
export function parseUrl(
  value: string,
  {
    protocols,
    allowPath,
  }: { protocols: ReadonlyArray<"http:" | "https:">; allowPath: boolean },
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
    !protocols.some((protocol) => protocol === url.protocol) ||
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
  return parseUrl(value, { protocols: ["https:"], allowPath: false });
}

export function parseApplicationUrl(value: string): string | undefined {
  return parseUrl(value, { protocols: ["http:", "https:"], allowPath: true });
}

const OSDK_REGISTRY_URL_REGEX =
  /^https:\/\/[^/]+\/artifacts\/api\/repositories\/ri\.artifacts\.[^/]+\/contents\/release\/npm$/u;

export function parseOsdkRegistryUrl(value: string): string | undefined {
  const parsed = parseUrl(value, { protocols: ["https:"], allowPath: true });
  return parsed != null && OSDK_REGISTRY_URL_REGEX.test(parsed)
    ? parsed
    : undefined;
}
