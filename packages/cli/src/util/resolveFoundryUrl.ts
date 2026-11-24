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

import { ensureTrailingSlash, ExitProcessError } from "@osdk/cli.common";
import type { LoadedFoundryConfig } from "@osdk/foundry-config-json";
import { consola } from "consola";
import { colorize } from "consola/utils";

/**
 * Returns a description of why `foundryUrl` cannot be used as a Foundry stack
 * URL, or undefined if it is an https URL with a host and no credentials.
 */
export function getFoundryUrlError(foundryUrl: string): string | undefined {
  let url: URL;
  try {
    url = new URL(foundryUrl);
  } catch {
    return `foundryUrl "${foundryUrl}" is not a valid URL`;
  }
  if (url.protocol !== "https:" || url.hostname === "") {
    return "foundryUrl must be an https:// URL with a host";
  }
  if (url.username !== "" || url.password !== "") {
    return "foundryUrl must not contain a username or password";
  }
  return undefined;
}

/**
 * Resolves the Foundry stack URL that the developer token may be sent to.
 *
 * A URL passed with `--foundryUrl` or `OSDK_FOUNDRY_URL` was chosen by the
 * developer and is used as is. A URL that only comes from the project's
 * `foundry.config.json` can be changed by anyone who can edit the project, so
 * its host must be confirmed interactively before it is returned. Without an
 * interactive terminal it is refused.
 */
export async function resolveFoundryUrl(
  foundryUrl: string | undefined,
  config: LoadedFoundryConfig<"site" | "widgetSet"> | undefined,
): Promise<string> {
  if (foundryUrl != null) {
    return foundryUrl;
  }

  if (config == null) {
    throw new ExitProcessError(2, "Missing required argument: foundryUrl");
  }

  const { configFilePath } = config;
  const configFoundryUrl = ensureTrailingSlash(config.foundryConfig.foundryUrl);
  const error = getFoundryUrlError(configFoundryUrl);
  if (error != null) {
    throw new ExitProcessError(2, `${error} (from ${configFilePath})`);
  }
  const { host } = new URL(configFoundryUrl);

  if (!process.stdin.isTTY || !process.stdout.isTTY) {
    throw new ExitProcessError(
      2,
      `The Foundry stack URL ${configFoundryUrl} from ${configFilePath} must be confirmed before your Foundry token is sent to ${host}`,
      `Pass --foundryUrl ${configFoundryUrl} or set the OSDK_FOUNDRY_URL environment variable to use this stack without a prompt`,
    );
  }

  const confirmed = await consola.prompt(
    `${configFilePath} sets the Foundry stack URL to ${configFoundryUrl}\nSend your Foundry token to ${colorize(
      "bold",
      host,
    )}?`,
    { type: "confirm", initial: false, cancel: "symbol" },
  );
  if (confirmed !== true) {
    throw new ExitProcessError(
      1,
      `Foundry stack URL ${configFoundryUrl} was not confirmed`,
    );
  }
  return configFoundryUrl;
}
