/*
 * Copyright 2023 Palantir Technologies, Inc. All rights reserved.
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

import { consola } from "../consola.js";
import { italic } from "../highlight.js";
import {
  containsUnsafeCharacters,
  InvalidUrlError,
  parseFoundryUrl,
} from "../parseFoundryUrl.js";

export async function promptFoundryUrl({
  foundryUrl,
}: {
  foundryUrl?: string;
}): Promise<string> {
  while (true) {
    if (foundryUrl != null) {
      if (containsUnsafeCharacters(foundryUrl)) {
        throw new InvalidUrlError(
          "Foundry URL must not contain whitespace or control characters",
        );
      }
      try {
        return parseFoundryUrl(foundryUrl).origin;
      } catch (e) {
        if (!(e instanceof InvalidUrlError)) {
          throw e;
        }
        consola.fail(`Please enter a valid Foundry URL: ${e.message}`);
      }
    }
    foundryUrl = await consola.prompt(
      `Enter the URL for your Foundry stack:\n${italic(
        "(Example: https://example.palantirfoundry.com)",
      )}`,
      { type: "text" },
    );
  }
}
