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

import { createHash, randomBytes, timingSafeEqual } from "node:crypto";
import type { IncomingMessage, ServerResponse } from "node:http";
import net from "node:net";

import type { ViteDevServer } from "vite";

import {
  FINISH_SECRET_HEADER,
  FINISH_SECRET_META_NAME,
} from "../common/constants.js";
import { getBaseHref } from "./getBaseHref.js";

const CORS_RESPONSE_HEADERS = [
  "Access-Control-Allow-Origin",
  "Access-Control-Allow-Credentials",
  "Access-Control-Allow-Headers",
  "Access-Control-Allow-Methods",
  "Access-Control-Expose-Headers",
];

const INVALID_HOST_HEADER_CHARS = /[\s/\\?#@]/u;

export function generateFinishSecret(): string {
  return randomBytes(32).toString("base64url");
}

export function injectFinishSecretMeta(html: string, secret: string): string {
  const metaTag = `<meta name="${FINISH_SECRET_META_NAME}" content="${secret}" />`;
  return /<head[^>]*>/iu.test(html)
    ? html.replace(/<head[^>]*>/iu, (headTag) => `${headTag}\n    ${metaTag}`)
    : `${metaTag}\n${html}`;
}

/**
 * The setup page embeds the finish secret, so it must not be readable by other origins even when
 * the dev server is configured with permissive CORS. Depending on the Vite version, Vite's CORS
 * middleware runs either before or after plugin middlewares, so headers are both removed and
 * blocked from being set later.
 */
export function preventCorsHeaders(res: ServerResponse): void {
  for (const header of CORS_RESPONSE_HEADERS) {
    res.removeHeader(header);
  }
  const setHeader = res.setHeader.bind(res);
  res.setHeader = (name, value) =>
    isCorsResponseHeader(name) ? res : setHeader(name, value);
}

function isCorsResponseHeader(name: string): boolean {
  return CORS_RESPONSE_HEADERS.some(
    (header) => header.toLowerCase() === name.toLowerCase(),
  );
}

/**
 * Returns a reason for rejecting the request, or undefined if the request was sent by the setup
 * page served by this dev server. Only a same-origin POST that echoes the per-server secret
 * embedded in the setup page may publish dev mode settings to Foundry.
 */
export function getFinishRequestRejection(
  server: ViteDevServer,
  req: IncomingMessage,
  secret: string,
): string | undefined {
  if (req.method !== "POST") {
    return "Developer mode can only be started with a POST request from the setup page.";
  }

  const origin = req.headers.origin;
  if (origin == null || !isAllowedOrigin(server, origin, req.headers.host)) {
    return "Developer mode can only be started from the setup page served by this dev server.";
  }

  const fetchSite = req.headers["sec-fetch-site"];
  if (fetchSite != null && fetchSite !== "same-origin") {
    return "Developer mode can only be started from the setup page served by this dev server.";
  }

  const providedSecret = req.headers[FINISH_SECRET_HEADER];
  if (
    typeof providedSecret !== "string" ||
    !secretsMatch(providedSecret, secret)
  ) {
    return "Missing or invalid developer mode setup secret. Reload the setup page and try again.";
  }

  return undefined;
}

/**
 * Mirrors Vite's own host validation so that a DNS-rebound hostname is not trusted even on Vite
 * versions that run plugin middlewares before their host check.
 */
export function isTrustedHost(
  server: ViteDevServer,
  hostHeader: string | undefined,
): boolean {
  if (hostHeader == null || INVALID_HOST_HEADER_CHARS.test(hostHeader.trim())) {
    return false;
  }
  let hostname: string;
  try {
    hostname = new URL(`http://${hostHeader}`).hostname;
  } catch {
    return false;
  }
  return isTrustedHostname(server, hostname);
}

function isAllowedOrigin(
  server: ViteDevServer,
  origin: string,
  hostHeader: string | undefined,
): boolean {
  let originUrl: URL;
  try {
    originUrl = new URL(origin);
  } catch {
    return false;
  }
  if (originUrl.protocol !== "http:" && originUrl.protocol !== "https:") {
    return false;
  }
  if (originUrl.origin === getDevServerOrigin(server)) {
    return true;
  }
  return (
    hostHeader != null &&
    originUrl.host === normalizeHost(originUrl.protocol, hostHeader) &&
    isTrustedHostname(server, originUrl.hostname)
  );
}

function normalizeHost(
  protocol: string,
  hostHeader: string,
): string | undefined {
  if (INVALID_HOST_HEADER_CHARS.test(hostHeader.trim())) {
    return undefined;
  }
  try {
    return new URL(`${protocol}//${hostHeader.trim()}`).host;
  } catch {
    return undefined;
  }
}

function getDevServerOrigin(server: ViteDevServer): string | undefined {
  try {
    return new URL(getBaseHref(server)).origin;
  } catch {
    return undefined;
  }
}

function isTrustedHostname(server: ViteDevServer, hostname: string): boolean {
  const { allowedHosts, https } = server.config.server;
  if (allowedHosts === true || https != null) {
    return true;
  }
  const bareHostname = hostname.replace(/^\[(.*)\]$/u, "$1");
  if (net.isIP(bareHostname) !== 0) {
    return true;
  }
  if (hostname === "localhost" || hostname.endsWith(".localhost")) {
    return true;
  }
  const devServerOrigin = getDevServerOrigin(server);
  if (
    devServerOrigin != null &&
    new URL(devServerOrigin).hostname === hostname
  ) {
    return true;
  }
  return (allowedHosts ?? []).some(
    (allowedHost) =>
      allowedHost === hostname ||
      (allowedHost.startsWith(".") &&
        (allowedHost.slice(1) === hostname || hostname.endsWith(allowedHost))),
  );
}

function secretsMatch(provided: string, expected: string): boolean {
  return timingSafeEqual(
    createHash("sha256").update(provided).digest(),
    createHash("sha256").update(expected).digest(),
  );
}
