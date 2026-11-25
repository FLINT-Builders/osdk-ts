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

// These values are written unquoted into .npmrc and generated source files,
// so each pattern must match the whole value and only allow characters that
// cannot start a new line, comment, or string in those files.

export function isValidFoundryUrl(value: string): boolean {
  return /^https:\/\/[A-Za-z0-9.-]+(?::[0-9]+)?(?:\/[A-Za-z0-9._~-]+)*\/?$/u.test(
    value,
  );
}

export function isValidWidgetSetRid(value: string): boolean {
  return /^ri\.widgetregistry\.\.widget-set\.[A-Za-z0-9-]+$/u.test(value);
}

export function isValidOsdkPackage(value: string): boolean {
  return /^@[a-z0-9-]+\/sdk$/u.test(value);
}

export function isValidScopedPackageName(value: string): boolean {
  return /^@[a-z0-9-~][a-z0-9-._~]*\/[a-z0-9-~][a-z0-9-._~]*$/u.test(value);
}

export function isValidOsdkRegistryUrl(value: string): boolean {
  return /^https:\/\/[A-Za-z0-9.-]+(?::[0-9]+)?\/artifacts\/api\/repositories\/ri\.[A-Za-z0-9.-]+\/contents\/release\/npm\/?$/u.test(
    value,
  );
}

export function assertSafeConfigValue(name: string, value: string): string {
  if (/[\s\p{Cc}"'`#\\$]/u.test(value)) {
    throw new Error(`Invalid ${name}: ${JSON.stringify(value)}`);
  }
  return value;
}
