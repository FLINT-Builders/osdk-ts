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

import { readFileSync } from "node:fs";
import { configDefaults, defineConfig } from "vitest/config";

// The transpile step inlines this; tests run untranspiled source.
const PACKAGE_CLI_VERSION: string = JSON.parse(
  readFileSync(new URL("../cli/package.json", import.meta.url), "utf-8"),
).version;

export default defineConfig({
  test: {
    pool: "forks",
    env: { PACKAGE_CLI_VERSION },
    exclude: [...configDefaults.exclude, "**/build/**/*"],
    coverage: {
      include: ["src/**"],
      // Exclude tests, generated code, and index.ts barrels (no logic).
      exclude: [
        "**/*.test.*",
        "**/__tests__/**",
        "**/__mocks__/**",
        "**/generatedNoCheck/**",
        "**/*.d.ts",
        "**/index.ts",
      ],
    },
    // Classnames are package-prefixed: test paths repeat across packages.
    reporters: process.env.CI
      ? [
        "default",
        [
          "junit",
          {
            classnameTemplate: (v) =>
              v.filepath.split("/packages/").pop() ?? v.filepath,
          },
        ],
      ]
      : ["default"],
    outputFile: { junit: "reports/junit.xml" },
    fakeTimers: {
      toFake: ["setTimeout", "clearTimeout", "Date"],
    },
  },
});
