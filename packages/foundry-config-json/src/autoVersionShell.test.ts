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

import { autoVersion } from "./autoVersion.js";
import type { AutoVersionConfig } from "./config.js";
import { loadFoundryConfig } from "./config.js";

const CANARY_ENV = "OSDK_VERSION_CANARY";
const CANARY_VALUE = "canary-placeholder";

describe("git-describe tagPrefix is not a shell command", () => {
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

  it("does not run a command substitution embedded in tagPrefix", async () => {
    const { marker } = await createProject();
    process.env[CANARY_ENV] = CANARY_VALUE;
    const tagPrefix = `$(printf '%s' "$${CANARY_ENV}" > ${marker})`;

    await expectShellNotExecuted(tagPrefix, marker);
  });

  it("does not run a command after a tagPrefix closes the double quote", async () => {
    const { marker } = await createProject();
    const tagPrefix = `"; touch ${marker}; #`;

    await expectShellNotExecuted(tagPrefix, marker);
  });

  it("does not run a command after a tagPrefix breaks out with a newline", async () => {
    const { marker } = await createProject();
    const tagPrefix = `"\ntouch ${marker}\n#`;

    await expectShellNotExecuted(tagPrefix, marker);
  });

  it("does not run a site foundry.config.json tagPrefix after schema validation", async () => {
    const { directory: projectDir, marker } = await createProject();
    process.env[CANARY_ENV] = CANARY_VALUE;
    const tagPrefix = `$(printf '%s' "$${CANARY_ENV}" > ${marker})`;
    await writeFoundryConfig(projectDir, {
      foundryUrl: "https://example.invalid/",
      site: {
        application: "ri.third-party-applications.main.application.placeholder",
        directory: projectDir,
        autoVersion: {
          type: "git-describe",
          tagPrefix,
        },
      },
    });

    const loaded = await loadFoundryConfig("site");
    const autoVersionConfig = loaded?.foundryConfig.site.autoVersion;
    expect(autoVersionConfig).toEqual({
      type: "git-describe",
      tagPrefix,
    });
    await expectShellNotExecuted(
      gitDescribeTagPrefix(autoVersionConfig),
      marker,
    );
  });

  it("does not run a widget set foundry.config.json tagPrefix after schema validation", async () => {
    const { directory: projectDir, marker } = await createProject();
    process.env[CANARY_ENV] = CANARY_VALUE;
    const tagPrefix = `$(printf '%s' "$${CANARY_ENV}" > ${marker})`;
    await writeFoundryConfig(projectDir, {
      foundryUrl: "https://example.invalid/",
      widgetSet: {
        rid: "ri.widget-registry.main.widget-set.placeholder",
        directory: projectDir,
        autoVersion: {
          type: "git-describe",
          tagPrefix,
        },
      },
    });

    const loaded = await loadFoundryConfig("widgetSet");
    const autoVersionConfig = loaded?.foundryConfig.widgetSet.autoVersion;
    expect(autoVersionConfig).toEqual({
      type: "git-describe",
      tagPrefix,
    });
    await expectShellNotExecuted(
      gitDescribeTagPrefix(autoVersionConfig),
      marker,
    );
  });

  async function createProject(): Promise<{
    directory: string;
    marker: string;
  }> {
    directory = await mkdtemp(path.join(tmpdir(), "osdk-version-"));
    process.chdir(directory);
    return { directory, marker: path.join(directory, "marker") };
  }
});

async function writeFoundryConfig(
  directory: string,
  config: unknown,
): Promise<void> {
  await writeFile(
    path.join(directory, "foundry.config.json"),
    JSON.stringify(config),
    "utf8",
  );
}

function gitDescribeTagPrefix(config: AutoVersionConfig | undefined): string {
  if (config?.type !== "git-describe" || config.tagPrefix == null) {
    throw new Error("git-describe tagPrefix did not survive schema validation");
  }
  return config.tagPrefix;
}

async function expectShellNotExecuted(
  tagPrefix: string,
  marker: string,
): Promise<void> {
  await expect(
    autoVersion({
      type: "git-describe",
      tagPrefix,
    }),
  ).rejects.toThrow();
  await expect(stat(marker)).rejects.toThrow();
}
