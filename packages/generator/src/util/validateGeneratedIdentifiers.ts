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

// Branch RIDs have an empty instance segment (`ri.branch..branch.<id>`) and
// some converters synthesize short RIDs (`ri.00000`), so only the prefix and
// character set are enforced.
const RESOURCE_IDENTIFIER = /^ri\.[A-Za-z0-9._-]+$/;

const IDENTIFIER = /^[\p{ID_Start}$_][\p{ID_Continue}$\u200C\u200D]*$/u;

export function assertResourceIdentifier(
  value: unknown,
  field: string,
): asserts value is string {
  if (typeof value !== "string" || !RESOURCE_IDENTIFIER.test(value)) {
    throw new GeneratorError(
      "Ontology metadata contains an invalid resource identifier",
      { value },
      { field },
    );
  }
}

/**
 * Names emitted unquoted as declaration names must already be valid
 * identifiers; anything else would let metadata write arbitrary source.
 */
export function assertIdentifier(
  value: string,
  entityType: string,
): void {
  if (!IDENTIFIER.test(value)) {
    throw new GeneratorError(
      "Ontology metadata contains a name that is not a valid identifier",
      { name: value },
      { entityType },
    );
  }
}
