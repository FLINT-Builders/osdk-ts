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

/**
 * Strips namespace prefix from an apiName.
 * "com.example.Employee" -> "Employee"
 * "Employee" -> "Employee"
 */
export function withoutNamespace(apiName: string): string {
  const lastDot = apiName.lastIndexOf(".");
  if (lastDot === -1) {
    return apiName;
  }
  return apiName.substring(lastDot + 1);
}

/**
 * Converts a dot-separated apiName to camelCase, including namespace segments.
 * "com.example.Employee" -> "comExampleEmployee"
 * "Employee" -> "employee"
 */
export function fullCamel(apiName: string): string {
  return camel(apiName.replace(/\./gu, "-"));
}

/**
 * Converts an apiName to camelCase variable name.
 * "Employee" -> "employee"
 * "create-employee" -> "createEmployee"
 */
export function camel(str: string): string {
  if (!str) {
    return str;
  }
  let result = str.replace(/[-_]+(.)?/gu, (_, c) => (c ? c.toUpperCase() : ""));
  result = result.charAt(0).toLowerCase() + result.slice(1);
  return result;
}

export const SAFE_IDENTIFIER_PATTERN: RegExp = /^[A-Za-z_$][A-Za-z0-9_$]*$/u;

// Names that cannot be declared as a module-level `const`/`export`, plus the
// bindings every generated entity file imports.
const RESERVED_IDENTIFIERS = new Set([
  "arguments",
  "await",
  "break",
  "case",
  "catch",
  "class",
  "const",
  "continue",
  "debugger",
  "default",
  "delete",
  "do",
  "else",
  "enum",
  "eval",
  "export",
  "extends",
  "false",
  "finally",
  "for",
  "function",
  "if",
  "implements",
  "import",
  "in",
  "instanceof",
  "interface",
  "let",
  "new",
  "null",
  "package",
  "private",
  "protected",
  "public",
  "return",
  "static",
  "super",
  "switch",
  "this",
  "throw",
  "true",
  "try",
  "typeof",
  "undefined",
  "var",
  "void",
  "while",
  "with",
  "yield",
  "NaN",
  "Infinity",
  "OntologyEntityTypeEnum",
  "wrapWithProxy",
]);

/**
 * Coerces a derived name into an ASCII JavaScript identifier that is also a
 * plain file name. Characters outside [A-Za-z0-9_$] become "_".
 * "employee" -> "employee"
 * "x=1;y" -> "x_1_y"
 * "1abc" -> "_1abc"
 */
export function toSafeIdentifier(name: string): string {
  let result = name.replace(/[^A-Za-z0-9_$]/gu, "_");
  if (!/^[A-Za-z_$]/u.test(result)) {
    result = `_${result}`;
  }
  if (RESERVED_IDENTIFIERS.has(result)) {
    result = `${result}_`;
  }
  return result;
}

export function isSafeIdentifier(name: string): boolean {
  return SAFE_IDENTIFIER_PATTERN.test(name) && !RESERVED_IDENTIFIERS.has(name);
}
