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
 * Comma-separated list of Foundry origins (e.g. `https://example.palantirfoundry.com`) that dev
 * mode may send the Foundry token to. This must come from the developer's environment rather than
 * the project, since anyone who can edit foundry.config.json can choose the stack URL.
 */
export const FOUNDRY_ORIGINS_ENV_VAR = "OSDK_WIDGET_DEV_FOUNDRY_ORIGINS";

/**
 * A Foundry stack URL that has been checked and may receive the Foundry token. Instances can only
 * be created by the functions in this module, and requests must be resolved against the instance
 * so that the URL that was checked is the URL that is used.
 */
export interface AuthorizedFoundryUrl {
  readonly origin: string;
  readonly baseUrl: string;
}

const authorizedUrls = new WeakSet<AuthorizedFoundryUrl>();

/**
 * Authorize a stack URL that comes from the project (foundry.config.json). The parsed origin must
 * use https and be listed in {@link FOUNDRY_ORIGINS_ENV_VAR}.
 */
export function authorizeProjectFoundryUrl(
  rawUrl: string,
): AuthorizedFoundryUrl {
  const url = parseHttpsUrl(rawUrl);
  if (!getAllowedFoundryOrigins().has(url.origin)) {
    throw new Error(
      `Refusing to send the Foundry token to ${url.origin} because it is not listed in the` +
        ` ${FOUNDRY_ORIGINS_ENV_VAR} environment variable. If you trust this Foundry stack, set` +
        ` ${FOUNDRY_ORIGINS_ENV_VAR}=${url.origin} and restart the dev server.`,
    );
  }
  return bind(url);
}

/**
 * Authorize a stack URL that comes from the developer's environment rather than the project, such
 * as the Code Workspaces proxy URL.
 */
export function authorizeEnvironmentFoundryUrl(
  rawUrl: string,
): AuthorizedFoundryUrl {
  return bind(parseHttpsUrl(rawUrl));
}

/**
 * Resolve an API path against an authorized stack URL, refusing anything that does not stay on
 * the authorized origin.
 */
export function resolveAuthorizedFoundryUrl(
  authorized: AuthorizedFoundryUrl,
  path: string,
): URL {
  if (!authorizedUrls.has(authorized)) {
    throw new Error("Foundry URL has not been authorized.");
  }
  const url = new URL(path, authorized.baseUrl);
  if (url.origin !== authorized.origin) {
    throw new Error(
      `Refusing to send the Foundry token to ${url.origin}, expected ${authorized.origin}.`,
    );
  }
  return url;
}

function bind(url: URL): AuthorizedFoundryUrl {
  const pathname = url.pathname.endsWith("/")
    ? url.pathname
    : `${url.pathname}/`;
  const authorized: AuthorizedFoundryUrl = Object.freeze({
    origin: url.origin,
    baseUrl: `${url.origin}${pathname}`,
  });
  authorizedUrls.add(authorized);
  return authorized;
}

function parseHttpsUrl(rawUrl: string): URL {
  let url: URL;
  try {
    url = new URL(rawUrl);
  } catch {
    throw new Error(`Invalid Foundry URL: ${JSON.stringify(rawUrl)}`);
  }
  if (url.protocol !== "https:") {
    throw new Error(
      `Refusing to send the Foundry token to ${url.origin} because it does not use https.`,
    );
  }
  if (url.username !== "" || url.password !== "") {
    throw new Error(
      `Refusing to send the Foundry token to a URL that contains credentials.`,
    );
  }
  return url;
}

function getAllowedFoundryOrigins(): Set<string> {
  const origins = new Set<string>();
  for (const entry of (process.env[FOUNDRY_ORIGINS_ENV_VAR] ?? "").split(",")) {
    const trimmed = entry.trim();
    if (trimmed === "") {
      continue;
    }
    let url: URL;
    try {
      url = new URL(trimmed);
    } catch {
      continue;
    }
    if (url.protocol === "https:") {
      origins.add(url.origin);
    }
  }
  return origins;
}
