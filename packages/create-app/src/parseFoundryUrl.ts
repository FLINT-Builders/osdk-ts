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

// The standard URL parser silently drops tabs and newlines, so these must be
// rejected on the raw input before parsing. Values flow into line-based files
// such as .npmrc and .env where a line break starts a new directive.
const UNSAFE_CHARACTERS = /[\s\p{Cc}\p{Cf}]/u;
const HOSTNAME = /^[a-z0-9](?:[a-z0-9.-]*[a-z0-9])?$/u;

export function containsUnsafeCharacters(value: string): boolean {
  return UNSAFE_CHARACTERS.test(value);
}

export class InvalidUrlError extends Error {
  override name = "InvalidUrlError";
}

function parseHttpsUrl(value: string, description: string): URL {
  if (containsUnsafeCharacters(value)) {
    throw new InvalidUrlError(
      `${description} must not contain whitespace or control characters`,
    );
  }
  let url: URL;
  try {
    url = new URL(value);
  } catch {
    throw new InvalidUrlError(`${description} is not a valid URL`);
  }
  if (url.protocol !== "https:") {
    throw new InvalidUrlError(`${description} must use https`);
  }
  if (url.username !== "" || url.password !== "") {
    throw new InvalidUrlError(`${description} must not contain credentials`);
  }
  if (url.search !== "" || url.hash !== "") {
    throw new InvalidUrlError(
      `${description} must not contain a query or fragment`,
    );
  }
  if (!HOSTNAME.test(url.hostname)) {
    throw new InvalidUrlError(`${description} has an invalid hostname`);
  }
  return url;
}

/**
 * Parses a Foundry stack URL, which must be an https origin with no path,
 * credentials, query, or fragment. A single trailing slash is permitted.
 */
export function parseFoundryUrl(foundryUrl: string): URL {
  const url = parseHttpsUrl(foundryUrl, "Foundry URL");
  if (url.pathname !== "/") {
    throw new InvalidUrlError("Foundry URL must not contain a path");
  }
  return url;
}

/**
 * Parses an npm registry URL, which must be https with no credentials, query,
 * or fragment. The returned URL's href always ends with a trailing slash.
 */
export function parseRegistryUrl(registryUrl: string): URL {
  const url = parseHttpsUrl(registryUrl, "NPM registry URL");
  if (!url.pathname.endsWith("/")) {
    url.pathname += "/";
  }
  return url;
}
