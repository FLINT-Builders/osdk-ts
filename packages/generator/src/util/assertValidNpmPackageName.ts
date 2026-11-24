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

import { GeneratorError } from "@osdk/generator-converters";

// https://docs.npmjs.com/cli/v10/configuring-npm/package-json#name
const NPM_PACKAGE_NAME =
  /^(?:@[a-z0-9-~][a-z0-9-._~]*\/)?[a-z0-9-~][a-z0-9-._~]*$/;
const MAX_NPM_PACKAGE_NAME_LENGTH = 214;

/**
 * External package names come from SDK metadata and are written into generated
 * module specifiers, so anything other than a plain npm package name is refused.
 */
export function assertValidNpmPackageName(
  packageName: unknown,
  fullApiName: string,
): asserts packageName is string {
  if (
    typeof packageName !== "string"
    || packageName.length > MAX_NPM_PACKAGE_NAME_LENGTH
    || !NPM_PACKAGE_NAME.test(packageName)
  ) {
    throw new GeneratorError(
      "External type references an invalid npm package name",
      { fullApiName, packageName },
    );
  }
}
