/*
 * Copyright 2024 Palantir Technologies, Inc. All rights reserved.
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

import { parseFoundryUrl, parseRegistryUrl } from "../parseFoundryUrl.js";

const PACKAGE_SCOPE = /^@[a-z0-9][a-z0-9._~-]*$/u;

export function generateNpmRc({
  foundryUrl,
  osdkPackage,
  osdkRegistryUrl,
}: {
  foundryUrl: string;
  osdkPackage: string;
  osdkRegistryUrl: string;
}): string {
  const foundryHost = parseFoundryUrl(
    /^[a-z][a-z0-9+.-]*:\/\//iu.test(foundryUrl)
      ? foundryUrl
      : `https://${foundryUrl}`,
  ).host;
  // pnpm requires a trailing slash in .npmrc
  // https://github.com/pnpm/pnpm/issues/5941
  const osdkRegistryUrlWithTrailingSlash =
    parseRegistryUrl(osdkRegistryUrl).href;
  const packageScope = osdkPackage.split("/")[0];
  if (!PACKAGE_SCOPE.test(packageScope)) {
    throw new Error(
      `Invalid OSDK package scope: ${JSON.stringify(osdkPackage)}`,
    );
  }

  return (
    `//${foundryHost}/artifacts/api/:_authToken=\${FOUNDRY_TOKEN}\n` +
    `${packageScope}:registry=${osdkRegistryUrlWithTrailingSlash}\n`
  );
}
