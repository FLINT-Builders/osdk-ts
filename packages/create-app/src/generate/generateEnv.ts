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

import {
  CLIENT_ID_REGEX,
  ONTOLOGY_RID_REGEX,
  parseApplicationUrl,
  parseFoundryUrl,
} from "../validate.js";

const LOCALHOST_URL = "http://localhost:8080";

// dotenv ends a value at a line break and treats quotes, `#`, and (with
// dotenv-expand in Vite/Expo) `$` specially, so none of these may be written.
const UNSAFE_ENV_VALUE_REGEX = /[\s\p{Cc}#"'`$\\]/u;

function envValue(name: string, value: string): string {
  if (UNSAFE_ENV_VALUE_REGEX.test(value)) {
    throw new Error(`Invalid ${name} for env file: ${JSON.stringify(value)}`);
  }
  return value;
}

function clientIdEnvValue(clientId: string): string {
  if (!CLIENT_ID_REGEX.test(clientId)) {
    throw new Error(`Invalid OAuth client ID: ${JSON.stringify(clientId)}`);
  }
  return envValue("client ID", clientId);
}

function foundryUrlEnvValue(foundryUrl: string): string {
  const parsed = parseFoundryUrl(foundryUrl);
  if (parsed == null) {
    throw new Error(`Invalid Foundry URL: ${JSON.stringify(foundryUrl)}`);
  }
  return envValue("Foundry URL", parsed);
}

function applicationUrlEnvValue(
  applicationUrl: string | undefined,
): string | undefined {
  if (applicationUrl == null) {
    return undefined;
  }
  const parsed = parseApplicationUrl(applicationUrl);
  if (parsed == null) {
    throw new Error(
      `Invalid application URL: ${JSON.stringify(applicationUrl)}`,
    );
  }
  return envValue("application URL", parsed);
}

interface AuthDevelopmentArgs {
  envPrefix: string;
  foundryUrl: string;
  clientId: string;
  corsProxy: boolean;
  ontology: string | undefined;
}

interface AuthlessDevelopmentArgs {
  envPrefix: string;
  ontology: string | undefined;
}

interface AuthProductionArgs {
  envPrefix: string;
  foundryUrl: string;
  applicationUrl: string | undefined;
  clientId: string;
  ontology: string | undefined;
}

interface AuthlessProductionArgs {
  envPrefix: string;
  applicationUrl: string | undefined;
  ontology: string | undefined;
}

function ontologySection(
  envPrefix: string,
  ontology: string | undefined,
): string {
  if (ontology != null && !ONTOLOGY_RID_REGEX.test(ontology)) {
    throw new Error(`Invalid Ontology RID: ${JSON.stringify(ontology)}`);
  }
  return ontology == null
    ? ""
    : `

# This Ontology RID must match the Ontology RID your Developer Console is associated with.
# You can check the Ontology on the "Ontology SDK" tab of Developer Console.
# It typically does not need to be changed.

${envPrefix}FOUNDRY_ONTOLOGY_RID=${ontology}
`;
}

export function generateEnvDevelopment({
  envPrefix,
  foundryUrl,
  clientId,
  corsProxy,
  ontology,
}: AuthDevelopmentArgs): string {
  const validatedFoundryUrl = foundryUrlEnvValue(foundryUrl);
  const foundryApiUrl = corsProxy ? LOCALHOST_URL : validatedFoundryUrl;
  const applicationUrl = LOCALHOST_URL;
  const validatedClientId = clientIdEnvValue(clientId);
  const ontologyText = ontologySection(envPrefix, ontology);

  return `# This env file is intended for developing on your local computer.
# To set up development in Foundry's Code Workspaces, see .env.code-workspaces.
# To deploy your application to production, see .env.production.
# Note that .env.code-workspaces is only present for projects that were set up
# using the "Bootstrap in Foundry" option in Developer Console.


# This URL is the URL your users will be redirected back to after signing in.
# This URL must exactly match one of the URLs listed in the "OAuth & scopes"
# page of Developer Console.
#
# If your application in development is not hosted on port 8080, you will need
# to change this URL here and in Developer Console.

${envPrefix}FOUNDRY_REDIRECT_URL=${applicationUrl}/auth/callback


# This URL is the Foundry host that your OSDK will use. It typically does not
# need to be changed.

${envPrefix}FOUNDRY_API_URL=${foundryApiUrl}


# This client ID must match the client ID given on the "OAuth & scopes" page of
# Developer Console. It typically does not need to be changed.

${envPrefix}FOUNDRY_CLIENT_ID=${validatedClientId}
${ontologyText}`;
}

export function generateAuthlessEnvDevelopment({
  envPrefix,
  ontology,
}: AuthlessDevelopmentArgs): string {
  const ontologyText = ontologySection(envPrefix, ontology);
  return `# This env file is intended for developing on your local computer.
# To deploy your application to production, see .env.production.


# This URL is the local proxy that forwards requests to Foundry.
# The Vite dev server proxies requests through /api-proxy to avoid CORS issues.

${envPrefix}FOUNDRY_API_URL=${LOCALHOST_URL}/api-proxy
${ontologyText}`;
}

export function generateEnvProduction({
  envPrefix,
  foundryUrl,
  applicationUrl,
  clientId,
  ontology,
}: AuthProductionArgs): string {
  const validatedFoundryUrl = foundryUrlEnvValue(foundryUrl);
  const validatedApplicationUrl = applicationUrlEnvValue(applicationUrl);
  const validatedClientId = clientIdEnvValue(clientId);
  const ontologyText = ontologySection(envPrefix, ontology);
  const applicationUrlOrDefault =
    validatedApplicationUrl ??
    "<Fill in the domain at which you deploy your application>";

  return `# This env file is intended for deploying your application to production.
# To set up development on your local computer, see .env.development.
# To set up development in Foundry's Code Workspaces, see .env.code-workspaces.
# Note that .env.code-workspaces is only present for projects that were set up
# using the "Bootstrap in Foundry" option in Developer Console.


# This URL is the URL your users will be redirected back to after signing in.
# This URL must exactly match one of the URLs listed in the "OAuth & scopes"
# page of Developer Console.
#
# If you change where your application is hosted, you will need to change this
# URL here and in Developer Console.

${
  validatedApplicationUrl == null ? "# " : ""
}${envPrefix}FOUNDRY_REDIRECT_URL=${applicationUrlOrDefault}/auth/callback


# This URL is the Foundry host that your OSDK will use. It typically does not
# need to be changed.

${envPrefix}FOUNDRY_API_URL=${validatedFoundryUrl}


# This client ID must match the client ID given on the "OAuth & scopes" page of
# Developer Console. It typically does not need to be changed.

${envPrefix}FOUNDRY_CLIENT_ID=${validatedClientId}
${ontologyText}`;
}

export function generateAuthlessEnvProduction({
  envPrefix,
  applicationUrl,
  ontology,
}: AuthlessProductionArgs): string {
  const validatedApplicationUrl = applicationUrlEnvValue(applicationUrl);
  const ontologyText = ontologySection(envPrefix, ontology);
  const applicationUrlOrDefault =
    validatedApplicationUrl ?? "<Fill in your application's subdomain URL>";

  return `# This env file is intended for deploying your application to production.
# To set up development on your local computer, see .env.development.


# This URL is the Foundry proxy URL for your application.
${
  validatedApplicationUrl == null ? "# " : ""
}${envPrefix}FOUNDRY_API_URL=${applicationUrlOrDefault}/proxy
${ontologyText}`;
}
