/*
 * Copyright 2025 Palantir Technologies, Inc. All rights reserved.
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

import type { AuthorizedFoundryUrl } from "./authorizeFoundryUrl.js";
import { resolveAuthorizedFoundryUrl } from "./authorizeFoundryUrl.js";
import type { DevModeManifest } from "./buildDevModeManifest.js";
import { getFoundryToken } from "./getFoundryToken.js";

const USER_AGENT = `osdk-widget.vite-plugin/${process.env.PACKAGE_VERSION}`;

export function setWidgetSetManifest(
  foundryUrl: AuthorizedFoundryUrl,
  widgetSetRid: string,
  manifest: DevModeManifest,
  viteMode: string | undefined,
): Promise<Response> {
  const url = resolveAuthorizedFoundryUrl(
    foundryUrl,
    "api/v2/widgets/devModeSettingsV2/setWidgetSetManifest",
  );
  url.searchParams.set("preview", "true");
  return fetch(url, {
    body: JSON.stringify({
      widgetSetRid,
      manifest,
    }),
    method: "POST",
    // Redirects would carry the token to a location that was never authorized
    redirect: "error",
    headers: {
      authorization: `Bearer ${getFoundryToken(viteMode)}`,
      accept: "application/json",
      "content-type": "application/json",
      "Fetch-User-Agent": USER_AGENT,
    },
  });
}

export function enableDevMode(
  foundryUrl: AuthorizedFoundryUrl,
  viteMode: string | undefined,
): Promise<Response> {
  const url = resolveAuthorizedFoundryUrl(
    foundryUrl,
    "api/v2/widgets/devModeSettingsV2/enable",
  );
  url.searchParams.set("preview", "true");
  return fetch(url, {
    method: "POST",
    // Redirects would carry the token to a location that was never authorized
    redirect: "error",
    headers: {
      authorization: `Bearer ${getFoundryToken(viteMode)}`,
      accept: "application/json",
      "Fetch-User-Agent": USER_AGENT,
    },
  });
}
