// @vitest-environment node
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

import type { Plugin, ResolvedConfig } from "vite";
import { afterEach, describe, expect, it, vi } from "vitest";

import { FoundryWidgetBuildPlugin } from "../FoundryWidgetBuildPlugin.js";

vi.mock("vite", () => {
  return {
    createServer: () => {
      return {
        close: () => Promise.resolve(),
      };
    },
  };
});

const CANARY_ENV = "OSDK_VERSION_CANARY";
const CANARY_VALUE = "canary-placeholder";

describe("widget set build autoVersion tagPrefix", () => {
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

  it("does not execute a shell command from widgetSet.autoVersion.tagPrefix", async () => {
    directory = await mkdtemp(path.join(tmpdir(), "osdk-widget-version-"));
    const marker = path.join(directory, "marker");
    process.env[CANARY_ENV] = CANARY_VALUE;
    const tagPrefix = `$(printf '%s' "$${CANARY_ENV}" > ${marker})`;
    await writeFile(
      path.join(directory, "foundry.config.json"),
      JSON.stringify({
        foundryUrl: "https://example.invalid/",
        widgetSet: {
          rid: "ri.widget-registry.main.widget-set.placeholder",
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

    const plugin: Plugin = FoundryWidgetBuildPlugin();
    if (
      typeof plugin.configResolved !== "function" ||
      typeof plugin.writeBundle !== "function"
    ) {
      throw new Error("FoundryWidgetBuildPlugin hooks were not functions");
    }
    plugin.configResolved({
      configFile: false,
      build: { outDir: directory },
    } as ResolvedConfig);

    await expect(plugin.writeBundle({} as never, {})).rejects.toThrow(/git/iu);
    await expect(stat(marker)).rejects.toThrow();
  });
});
