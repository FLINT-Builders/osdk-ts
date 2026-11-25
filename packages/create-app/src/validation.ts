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

// These values are interpolated into generated source files (including
// comments and string literals), `.env`, `.npmrc` and other config files, so
// they are restricted to characters that cannot terminate a comment, string or
// line.

export const FOUNDRY_URL_REGEX: RegExp =
  /^https:\/\/[A-Za-z0-9.-]+(?::\d{1,5})?(?:\/[A-Za-z0-9._~%-]+)*\/?$/u;

export const APPLICATION_URL_REGEX: RegExp =
  /^https?:\/\/[A-Za-z0-9.-]+(?::\d{1,5})?(?:\/[A-Za-z0-9._~%-]+)*\/?$/u;

export const APPLICATION_RID_REGEX: RegExp =
  /^ri\.third-party-applications\.[A-Za-z0-9_-]+\.application\.[A-Za-z0-9_-]+$/u;

export const ONTOLOGY_RID_REGEX: RegExp =
  /^ri\.ontology\.[A-Za-z0-9_-]+\.ontology\.[A-Za-z0-9_-]+$/u;

export const OSDK_REGISTRY_URL_REGEX: RegExp =
  /^https:\/\/[A-Za-z0-9.-]+(?::\d{1,5})?\/artifacts\/api\/repositories\/ri\.artifacts\.[A-Za-z0-9._-]+\/contents\/release\/npm\/?$/u;

const LINE_BREAK_OR_CONTROL_CHARACTER_REGEX = /[\p{Cc}\p{Zl}\p{Zp}]/u;

export function assertNoLineBreaks(label: string, value: string): void {
  if (LINE_BREAK_OR_CONTROL_CHARACTER_REGEX.test(value)) {
    throw new Error(
      `${label} must not contain line breaks or control characters`,
    );
  }
}

const PROJECT_DIRECTORY_REGEX = /^(?!\.{1,2}$)[A-Za-z0-9._-]+$/u;

const NPM_PACKAGE_NAME_REGEX =
  /^(?:@[a-z0-9~-][a-z0-9._~-]*\/)?[a-z0-9~-][a-z0-9._~-]*$/u;

const CLIENT_ID_REGEX = /^[A-Za-z0-9_-]+$/u;

const SCOPE_REGEX = /^[a-zA-Z_:-]+$/u;

export function validateRunArgs({
  project,
  foundryUrl,
  applicationUrl,
  application,
  ontology,
  clientId,
  osdkPackage,
  osdkRegistryUrl,
  scopes,
}: {
  project: string;
  foundryUrl: string;
  applicationUrl: string | undefined;
  application: string;
  ontology: string | undefined;
  clientId: string | undefined;
  osdkPackage: string | undefined;
  osdkRegistryUrl: string | undefined;
  scopes: string[] | undefined;
}): void {
  if (!PROJECT_DIRECTORY_REGEX.test(project)) {
    throw new Error(`Invalid project name: ${JSON.stringify(project)}`);
  }
  if (!FOUNDRY_URL_REGEX.test(foundryUrl)) {
    throw new Error(`Invalid Foundry URL: ${JSON.stringify(foundryUrl)}`);
  }
  if (applicationUrl != null && !APPLICATION_URL_REGEX.test(applicationUrl)) {
    throw new Error(
      `Invalid application URL: ${JSON.stringify(applicationUrl)}`,
    );
  }
  if (!APPLICATION_RID_REGEX.test(application)) {
    throw new Error(
      `Invalid application resource identifier: ${JSON.stringify(application)}`,
    );
  }
  if (ontology != null && !ONTOLOGY_RID_REGEX.test(ontology)) {
    throw new Error(
      `Invalid Ontology resource identifier: ${JSON.stringify(ontology)}`,
    );
  }
  if (clientId != null && !CLIENT_ID_REGEX.test(clientId)) {
    throw new Error(`Invalid OAuth client ID: ${JSON.stringify(clientId)}`);
  }
  if (osdkPackage != null && !NPM_PACKAGE_NAME_REGEX.test(osdkPackage)) {
    throw new Error(
      `Invalid OSDK package name: ${JSON.stringify(osdkPackage)}`,
    );
  }
  if (
    osdkRegistryUrl != null &&
    !OSDK_REGISTRY_URL_REGEX.test(osdkRegistryUrl)
  ) {
    throw new Error(
      `Invalid OSDK registry URL: ${JSON.stringify(osdkRegistryUrl)}`,
    );
  }
  const invalidScope = scopes?.find((scope) => !SCOPE_REGEX.test(scope));
  if (invalidScope != null) {
    throw new Error(`Invalid OAuth scope: ${JSON.stringify(invalidScope)}`);
  }
}
