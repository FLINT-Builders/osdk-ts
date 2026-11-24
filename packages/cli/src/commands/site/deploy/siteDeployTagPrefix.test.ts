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

import { mkdtemp, rm, stat, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";

import { afterEach, describe, expect, it } from "vitest";
import yargs from "yargs";

const CANARY_ENV = "OSDK_VERSION_CANARY";
const CANARY_VALUE = "canary-placeholder";
const PLACEHOLDER_TOKEN = "placeholder.placeholder.placeholder";

describe("osdk site deploy gitTagPrefix", () => {
  let directory: string | undefined;
  const originalCwd = process.cwd();
  const originalCanary = process.env[CANARY_ENV];

  afterEach(async () => {
    process.chdir(originalCwd);
    if (originalCanary === undefined) {
      delete process.env.OSDK_VERSION_CANARY;
    } else {
      process.env.OSDK_VERSION_CANARY = originalCanary;
    }
    if (directory != null) {
      await rm(directory, { recursive: true, force: true });
      directory = undefined;
    }
  });

  it("does not execute a shell command from foundry.config.json tagPrefix", async () => {
    directory = await mkdtemp(path.join(tmpdir(), "osdk-site-deploy-"));
    const marker = path.join(directory, "marker");
    process.env[CANARY_ENV] = CANARY_VALUE;
    const tagPrefix = `$(printf '%s' "$${CANARY_ENV}" > ${marker})`;
    await writeFile(
      path.join(directory, "foundry.config.json"),
      JSON.stringify({
        foundryUrl: "https://example.invalid/",
        site: {
          application:
            "ri.third-party-applications.main.application.placeholder",
          directory,
          autoVersion: {
            type: "git-describe",
            tagPrefix,
          },
        },
      }),
      "utf8",
    );
    process.chdir(directory);

    const { default: deploy } = await import("./index.js");
    await expect(
      yargs(["deploy", "--token", PLACEHOLDER_TOKEN])
        .command(deploy)
        .fail((message, error) => {
          throw error ?? new Error(message);
        })
        .parseAsync(),
    ).rejects.toThrow(/git/iu);
    await expect(stat(marker)).rejects.toThrow();
  });
});
