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

import { Readable } from "node:stream";

import { ExitProcessError } from "@osdk/cli.common";
import type { WidgetSetManifest } from "@osdk/widget.api";
import { MANIFEST_FILE_LOCATION } from "@osdk/widget.api";
import archiver from "archiver";
import { consola } from "consola";

import { createInternalClientContext, widgetRegistry } from "#net";

import type { StemmaRepositoryRid } from "../../../net/StemmaRepositoryRid.js";
import type { WidgetSetRid } from "../../../net/WidgetSetRid.js";
import type { DeployDirectory } from "../../../util/deployDirectory.js";
import {
  readDeployDirectoryFile,
  resolveDeployDirectory,
  writeDeployArchive,
} from "../../../util/deployDirectory.js";
import { loadToken } from "../../../util/token.js";
import type { WidgetSetDeployArgs } from "./WidgetSetDeployArgs.js";

interface WidgetSetDeployInternalArgs extends WidgetSetDeployArgs {
  /** When set, `directory` came from the config file and must resolve inside this root. */
  projectRoot: string | undefined;
}

export default async function widgetSetDeployCommand({
  widgetSet,
  foundryUrl,
  directory,
  projectRoot,
  repository,
  token,
  tokenFile,
}: WidgetSetDeployInternalArgs): Promise<void> {
  const loadedToken = await loadToken(token, tokenFile);
  const tokenProvider = () => loadedToken;
  const clientCtx = createInternalClientContext(foundryUrl, tokenProvider);

  const deployDirectory = await resolveDeployDirectory(directory, projectRoot);
  consola.info(
    `Using directory for widget set files: "${deployDirectory.realPath}"`,
  );

  const widgetSetVersion = await findWidgetSetVersion(deployDirectory);
  consola.info(`Found version from manifest: ${widgetSetVersion}`);

  consola.start("Zipping widget set files");
  const archive = archiver("zip");

  let deployRid: WidgetSetRid | StemmaRepositoryRid = widgetSet;
  if (repository != null) {
    deployRid = repository;
    consola.debug(`Deploying to repository ${repository} for ${widgetSet}`);
  }

  consola.start("Publishing widget set files");
  await Promise.all([
    widgetRegistry.publishRelease(
      clientCtx,
      deployRid,
      widgetSetVersion,
      Readable.toWeb(archive) as ReadableStream<any>, // This cast is because the dom fetch doesn't align type wise with streams
    ),
    writeDeployArchive(archive, deployDirectory),
  ]);
  consola.success("Publish complete");
}

async function findWidgetSetVersion(
  directory: DeployDirectory,
): Promise<string> {
  try {
    const manifestContent = await readDeployDirectoryFile(
      directory,
      MANIFEST_FILE_LOCATION,
    );
    const manifest: WidgetSetManifest = JSON.parse(manifestContent);
    if (manifest.widgetSet == null || manifest.widgetSet.version == null) {
      throw new Error(`Unable to find widget set version in manifest`);
    }
    return manifest.widgetSet.version;
  } catch (e) {
    throw new ExitProcessError(
      2,
      `Unable to process manifest at ${MANIFEST_FILE_LOCATION}${
        e instanceof Error ? `: ${e.message}` : ""
      }`,
    );
  }
}
