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

// Values validated here are interpolated verbatim into generated source files
// (including inside comments), so every pattern must exclude whitespace, line
// terminators and comment delimiters.

const FOUNDRY_URL_SHAPE = /^https:\/\/[A-Za-z0-9.-]+(?::[0-9]+)?\/?$/u;
const HOSTNAME = /^[a-z0-9-]+(?:\.[a-z0-9-]+)*$/u;
const URL_CHARACTERS = /^[A-Za-z0-9\-._~:/%@+,;=&]+$/u;

export const PROJECT_NAME_REGEX: RegExp = /^[A-Za-z0-9_-][A-Za-z0-9._-]*$/u;
export const APPLICATION_RID_REGEX: RegExp =
  /^ri\.third-party-applications\.[A-Za-z0-9_-]+\.application\.[A-Za-z0-9_-]+$/u;
export const ONTOLOGY_RID_REGEX: RegExp =
  /^ri\.ontology\.[A-Za-z0-9_-]+\.ontology\.[A-Za-z0-9_-]+$/u;
export const CLIENT_ID_REGEX: RegExp = /^[A-Za-z0-9_-]+$/u;
export const SCOPE_NAME_REGEX: RegExp = /^[a-zA-Z-_:]+$/u;
export const NPM_PACKAGE_NAME_REGEX: RegExp =
  /^(?:@[a-z0-9-~][a-z0-9-._~]*\/)?[a-z0-9-~][a-z0-9-._~]*$/u;
export const OSDK_REGISTRY_URL_REGEX: RegExp =
  /^https:\/\/[A-Za-z0-9.-]+(?::[0-9]+)?\/artifacts\/api\/repositories\/ri\.artifacts\.[A-Za-z0-9._-]+\/contents\/release\/npm\/?$/u;

/**
 * Returns the origin of `value` when it is an https URL consisting only of a
 * host and optional port, otherwise `undefined`.
 */
export function parseFoundryUrl(value: string): string | undefined {
  if (!FOUNDRY_URL_SHAPE.test(value)) {
    return undefined;
  }
  const url = parseUrl(value);
  if (
    url == null ||
    url.protocol !== "https:" ||
    url.username !== "" ||
    url.password !== "" ||
    url.pathname !== "/" ||
    url.search !== "" ||
    url.hash !== "" ||
    !HOSTNAME.test(url.hostname)
  ) {
    return undefined;
  }
  return url.origin;
}

/**
 * Returns `value` without a trailing slash when it is an http(s) URL without
 * credentials, query or fragment, otherwise `undefined`.
 */
export function parseApplicationUrl(value: string): string | undefined {
  return parseSafeUrl(value, /^https?:\/\//u);
}

/**
 * Returns `value` without a trailing slash when it is an https URL without
 * credentials, query or fragment, otherwise `undefined`.
 */
export function parseHttpsUrl(value: string): string | undefined {
  return parseSafeUrl(value, /^https:\/\//u);
}

function parseSafeUrl(value: string, scheme: RegExp): string | undefined {
  if (!scheme.test(value) || !URL_CHARACTERS.test(value)) {
    return undefined;
  }
  const url = parseUrl(value);
  if (
    url == null ||
    url.username !== "" ||
    url.password !== "" ||
    url.search !== "" ||
    url.hash !== "" ||
    !HOSTNAME.test(url.hostname)
  ) {
    return undefined;
  }
  return value.replace(/\/$/u, "");
}

function parseUrl(value: string): URL | undefined {
  try {
    return new URL(value);
  } catch {
    return undefined;
  }
}
