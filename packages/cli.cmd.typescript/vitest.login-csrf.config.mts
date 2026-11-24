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

import path from "node:path";
import { fileURLToPath } from "node:url";

import { defineConfig } from "vitest/config";

const repoRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "../..",
);

function source(packageDir: string, entry = "src/index.ts"): string {
  return path.join(repoRoot, "packages", packageDir, entry);
}

export default defineConfig({
  server: {
    fs: {
      allow: [repoRoot],
    },
    deps: {
      inline: ["open"],
    },
  },
  resolve: {
    alias: [
      {
        find: /^open$/,
        replacement: path.join(
          repoRoot,
          "packages/cli.cmd.typescript/src/generate/loginCsrfOpen.ts",
        ),
      },
      {
        find: "@osdk/cli.common/loginFlow",
        replacement: source("cli.common", "src/public/loginFlow.ts"),
      },
      {
        find: "@osdk/cli.common",
        replacement: source("cli.common"),
      },
      {
        find: "@osdk/generator-converters",
        replacement: source("generator-converters"),
      },
      {
        find: "@osdk/generator",
        replacement: source("generator"),
      },
      {
        find: "@osdk/shared.client.impl",
        replacement: source("shared.client.impl"),
      },
      {
        find: "@osdk/shared.net.fetch",
        replacement: source("shared.net.fetch"),
      },
      {
        find: "@osdk/shared.net.errors",
        replacement: source("shared.net.errors"),
      },
    ],
  },
  test: {
    pool: "forks",
    fileParallelism: false,
    maxWorkers: 1,
    testTimeout: 30000,
    sequence: {
      concurrent: false,
    },
    include: ["src/generate/loginCsrf.test.ts"],
  },
});
