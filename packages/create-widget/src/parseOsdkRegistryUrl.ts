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

const REGISTRY_PATH =
  /^\/artifacts\/api\/repositories\/ri\.[^/]+\/contents\/release\/npm\/?$/u;

/**
 * Returns the canonical registry URL (no trailing slash) when `osdkRegistryUrl`
 * is an artifacts npm repository served from the same host as `foundryUrl`,
 * otherwise `undefined`. Callers must use the returned string rather than the
 * input so that what is written to `.npmrc` is exactly what was checked.
 */
export function parseOsdkRegistryUrl(
  osdkRegistryUrl: string,
  foundryUrl: string,
): string | undefined {
  const registry = tryParseUrl(osdkRegistryUrl);
  const foundry = tryParseUrl(foundryUrl);
  if (
    registry == null ||
    foundry == null ||
    registry.protocol !== "https:" ||
    foundry.protocol !== "https:" ||
    registry.username !== "" ||
    registry.password !== "" ||
    registry.search !== "" ||
    registry.hash !== "" ||
    registry.host !== foundry.host ||
    !REGISTRY_PATH.test(registry.pathname)
  ) {
    return undefined;
  }
  return `${registry.origin}${registry.pathname.replace(/\/$/u, "")}`;
}

function tryParseUrl(url: string): URL | undefined {
  try {
    return new URL(url);
  } catch {
    return undefined;
  }
}
