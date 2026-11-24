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

import { OntologyEntityTypeEnum } from "../api/common/OntologyEntityTypeEnum.js";

const ENTITY_TYPE_MEMBERS: ReadonlySet<string> = new Set(
  Object.values(OntologyEntityTypeEnum),
);

const INDENT = "  ";

/**
 * Serializes a value as a TypeScript expression laid out like
 * `JSON.stringify(value, null, 2)`. A `__type` value that is an
 * `OntologyEntityTypeEnum` member is emitted as an enum reference; every
 * other value goes through `JSON.stringify`, so metadata can only ever
 * appear in the output as literal data, never as code.
 */
export function serializeEntitySource(value: unknown): string {
  return serializeValue(value, "", "") ?? "undefined";
}

function serializeValue(
  value: unknown,
  key: string,
  indent: string,
): string | undefined {
  if (
    key === "__type" &&
    typeof value === "string" &&
    ENTITY_TYPE_MEMBERS.has(value)
  ) {
    return `OntologyEntityTypeEnum.${value}`;
  }

  const resolved = hasToJSON(value) ? value.toJSON(key) : value;

  if (Array.isArray(resolved)) {
    if (resolved.length === 0) {
      return "[]";
    }
    const inner = indent + INDENT;
    const items = Array.from(
      resolved,
      (item: unknown, index) =>
        `${inner}${serializeValue(item, String(index), inner) ?? "null"}`,
    );
    return `[\n${items.join(",\n")}\n${indent}]`;
  }

  if (resolved != null && typeof resolved === "object") {
    const inner = indent + INDENT;
    const members: string[] = [];
    for (const [memberKey, memberValue] of Object.entries(resolved)) {
      const serialized = serializeValue(memberValue, memberKey, inner);
      if (serialized !== undefined) {
        members.push(`${inner}${serializeKey(memberKey)}: ${serialized}`);
      }
    }
    if (members.length === 0) {
      return "{}";
    }
    return `{\n${members.join(",\n")}\n${indent}}`;
  }

  return JSON.stringify(resolved);
}

function serializeKey(key: string): string {
  // A literal "__proto__" key would set the prototype instead of an own property.
  return key === "__proto__" ? `[${JSON.stringify(key)}]` : JSON.stringify(key);
}

function hasToJSON(
  value: unknown,
): value is { toJSON: (key: string) => unknown } {
  return (
    value != null &&
    typeof value === "object" &&
    typeof (value as { toJSON?: unknown }).toJSON === "function"
  );
}
