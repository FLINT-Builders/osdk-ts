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

import type { IncomingMessage } from "node:http";

import { loadFoundryConfig } from "@osdk/foundry-config-json";

import {
  getCodeWorkspacesFoundryUrl,
  isCodeWorkspacesMode,
} from "./codeWorkspacesMode.js";

/**
 * Mirrors Vite's default `server.cors` origin policy, which only allows pages served from the
 * developer's own machine.
 */
export const LOCALHOST_ORIGIN_PATTERN: RegExp =
  /^https?:\/\/(?:(?:[^:]+\.)?localhost|127\.0\.0\.1|\[::1\])(?::\d+)?$/u;

/**
 * Origins that may read responses from the dev server: localhost pages and the Foundry origin
 * that loads dev mode scripts into the widget iframe.
 */
export async function getAllowedDevServerOrigins(
  mode: string | undefined,
): Promise<Array<string | RegExp>> {
  const origins: Array<string | RegExp> = [LOCALHOST_ORIGIN_PATTERN];
  const foundryConfig = await loadFoundryConfig("widgetSet").catch(
    () => undefined,
  );
  const foundryUrls = [foundryConfig?.foundryConfig.foundryUrl];
  if (isCodeWorkspacesMode(mode)) {
    try {
      foundryUrls.push(getCodeWorkspacesFoundryUrl());
    } catch {
      // Reported when dev mode settings are published
    }
  }
  for (const foundryUrl of foundryUrls) {
    const origin = toOrigin(foundryUrl);
    if (origin != null && !origins.includes(origin)) {
      origins.push(origin);
    }
  }
  return origins;
}

export function isAllowedOrigin(
  origin: string | undefined,
  allowedOrigins: ReadonlyArray<string | RegExp>,
): origin is string {
  if (origin == null) {
    return false;
  }
  return allowedOrigins.some((allowed) =>
    typeof allowed === "string" ? allowed === origin : allowed.test(origin),
  );
}

/**
 * Whether a request was made by a page on another origin. Requests from browsers that send
 * neither `Sec-Fetch-Site` nor `Origin` cannot be attributed and are treated as same-origin.
 */
export function isCrossOriginRequest(req: IncomingMessage): boolean {
  const fetchSite = req.headers["sec-fetch-site"];
  if (fetchSite != null) {
    return fetchSite !== "same-origin" && fetchSite !== "none";
  }
  const origin = req.headers.origin;
  if (origin == null) {
    return false;
  }
  try {
    return new URL(origin).host !== req.headers.host;
  } catch {
    return true;
  }
}

function toOrigin(url: string | undefined): string | undefined {
  if (url == null) {
    return undefined;
  }
  try {
    const { origin } = new URL(url);
    return origin === "null" ? undefined : origin;
  } catch {
    return undefined;
  }
}
