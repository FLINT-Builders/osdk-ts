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

import {
  type CliCommonArgs,
  ensureTrailingSlash,
  YargsCheckError,
} from "@osdk/cli.common";
import type { Argv, CommandModule } from "yargs";

import type { WidgetSetRid } from "../../net/WidgetSetRid.js";
import configLoader from "../../util/configLoader.js";
import {
  getFoundryUrlError,
  resolveFoundryUrl,
} from "../../util/resolveFoundryUrl.js";
import { logConfigFileMiddleware } from "../../yargs/logConfigFileMiddleware.js";
import type { CommonWidgetSetArgs } from "./CommonWidgetSetArgs.js";
import deploy from "./deploy/index.js";
import { logWidgetSetCommandConfigFileOverride } from "./logWidgetSetCommandConfigFileOverride.js";
import version from "./version/index.js";

const command: CommandModule<CliCommonArgs, CommonWidgetSetArgs> = {
  command: "widgetset",
  describe: "Manage your widget set",
  builder: async (argv) => {
    const config = await configLoader("widgetSet");
    const widgetSet = config?.foundryConfig.widgetSet.rid;
    const foundryUrl = config?.foundryConfig.foundryUrl;
    const withFoundryUrl = argv
      .options({
        widgetSet: {
          type: "string",
          coerce: (widgetSet) => widgetSet as WidgetSetRid,
          ...(widgetSet ? { default: widgetSet } : { demandOption: true }),
          description: "Widget set resource identifier (rid)",
        },
        foundryUrl: {
          coerce: ensureTrailingSlash,
          type: "string",
          ...(foundryUrl
            ? { defaultDescription: foundryUrl }
            : { demandOption: true }),
          description: "URL for the Foundry stack",
        },
        token: {
          type: "string",
          conflicts: "tokenFile",
          description: "Foundry API token",
        },
        tokenFile: {
          type: "string",
          conflicts: "token",
          description: "Path to file containing Foundry API token",
        },
      })
      .group(
        ["widgetSet", "foundryUrl", "token", "tokenFile"],
        "Common Options",
      )
      .check((args) => {
        const foundryUrlError =
          args.foundryUrl != null
            ? getFoundryUrlError(args.foundryUrl)
            : undefined;
        if (foundryUrlError != null) {
          throw new YargsCheckError(foundryUrlError);
        }
        return true;
      })
      .middleware(async (args) => {
        args.foundryUrl = await resolveFoundryUrl(args.foundryUrl, config);
      }) as Argv<CommonWidgetSetArgs>;
    return withFoundryUrl
      .command(version)
      .command(deploy)
      .middleware((args) => {
        void logConfigFileMiddleware("widgetSet");
        logWidgetSetCommandConfigFileOverride(args, config?.foundryConfig);
      })
      .demandCommand();
  },
  handler: async (args) => {},
};

export default command;
