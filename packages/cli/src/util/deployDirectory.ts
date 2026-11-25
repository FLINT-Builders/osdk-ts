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

import * as fs from "node:fs";
import type { FileHandle } from "node:fs/promises";
import path from "node:path";

import { ExitProcessError } from "@osdk/cli.common";
import type archiver from "archiver";
import { consola } from "consola";
import prettyBytes from "pretty-bytes";

// O_NOFOLLOW is not defined on Windows; the identity check below still applies there.
const OPEN_NO_FOLLOW: number =
  fs.constants.O_RDONLY | (fs.constants.O_NOFOLLOW ?? 0);

/**
 * A deploy directory whose real path was resolved once and, when it came from
 * a config file, confirmed to be inside that config file's project root.
 * Every file read from it is verified to still live under `realPath`.
 */
export interface DeployDirectory {
  realPath: string;
}

/**
 * Resolves `directory` to its real path exactly once. When `projectRoot` is
 * provided, the resolved directory must be the project root or inside it.
 */
export async function resolveDeployDirectory(
  directory: string,
  projectRoot: string | undefined,
): Promise<DeployDirectory> {
  const realPath = await fs.promises.realpath(path.resolve(directory));

  if (projectRoot != null) {
    const realRoot = await fs.promises.realpath(projectRoot);
    if (!isWithin(realRoot, realPath)) {
      throw new ExitProcessError(
        2,
        `Directory "${directory}" from the config file resolves to "${realPath}", which is outside the project root "${realRoot}"`,
        "Set the directory in foundry.config.json to a path inside the project, or pass --directory explicitly",
      );
    }
  }

  const deployDirectory: DeployDirectory = { realPath };
  const handle = await openVerified(deployDirectory, realPath);
  try {
    const stats = await handle.stat({ bigint: true });
    if (!stats.isDirectory()) {
      throw new ExitProcessError(
        2,
        "Specified path exists but is not a directory",
      );
    }
  } finally {
    await handle.close();
  }

  return deployDirectory;
}

export async function readDeployDirectoryFile(
  directory: DeployDirectory,
  relativePath: string,
): Promise<string> {
  const handle = await openVerified(
    directory,
    path.join(directory.realPath, relativePath),
  );
  try {
    return await handle.readFile("utf8");
  } finally {
    await handle.close();
  }
}

/**
 * Adds every entry under `directory` to `archive` and finalizes it. Files are
 * opened once, verified to be inside the directory, and streamed from that
 * open handle so a path swapped after verification cannot change the content.
 */
export async function writeDeployArchive(
  archive: archiver.Archiver,
  directory: DeployDirectory,
): Promise<void> {
  const totals = { fileCount: 0, bytes: 0 };
  try {
    await addDirectoryEntries(archive, directory, "", totals);
    await archive.finalize();
  } catch (e) {
    archive.destroy(e instanceof Error ? e : new Error(String(e)));
    throw e;
  }
  consola.info(
    `Zipped ${prettyBytes(totals.bytes, {
      binary: true,
    })} total over ${totals.fileCount} files`,
  );
}

async function addDirectoryEntries(
  archive: archiver.Archiver,
  directory: DeployDirectory,
  relativeDir: string,
  totals: { fileCount: number; bytes: number },
): Promise<void> {
  const absoluteDir = path.join(directory.realPath, relativeDir);
  const entries = await fs.promises.readdir(absoluteDir, {
    withFileTypes: true,
  });

  for (const entry of entries) {
    const relativePath = path.join(relativeDir, entry.name);
    const absolutePath = path.join(directory.realPath, relativePath);
    const entryName = relativePath.split(path.sep).join("/");

    if (entry.isSymbolicLink()) {
      const linkTarget = await fs.promises.readlink(absolutePath);
      const linkName = path.relative(
        absoluteDir,
        path.resolve(absoluteDir, linkTarget),
      );
      await queueEntry(archive, () => archive.symlink(entryName, linkName));
      continue;
    }

    if (!entry.isFile() && !entry.isDirectory()) {
      continue;
    }

    const handle = await openVerified(directory, absolutePath);
    try {
      const stats = await handle.stat({ bigint: true });
      const entryData = {
        mode: Number(stats.mode),
        date: stats.mtime,
      };

      if (stats.isDirectory()) {
        await queueEntry(archive, () =>
          archive.append(Buffer.alloc(0), {
            ...entryData,
            name: `${entryName}/`,
          }),
        );
        await addDirectoryEntries(archive, directory, relativePath, totals);
      } else if (stats.isFile()) {
        await queueEntry(archive, () =>
          archive.append(handle.createReadStream({ autoClose: false }), {
            ...entryData,
            name: entryName,
          }),
        );
        totals.fileCount++;
        totals.bytes += Number(stats.size);
      }
    } finally {
      await handle.close();
    }
  }
}

/**
 * Opens `absolutePath` without following a final symlink, then confirms the
 * opened object is the one that lives at a real path inside the directory.
 * The returned handle is the object all later reads must use.
 */
async function openVerified(
  directory: DeployDirectory,
  absolutePath: string,
): Promise<FileHandle> {
  const handle = await fs.promises.open(absolutePath, OPEN_NO_FOLLOW);
  try {
    const opened = await handle.stat({ bigint: true });
    const resolved = await fs.promises.realpath(absolutePath);
    const current = await fs.promises.stat(resolved, { bigint: true });
    if (
      !isWithin(directory.realPath, resolved) ||
      current.dev !== opened.dev ||
      current.ino !== opened.ino
    ) {
      throw new ExitProcessError(
        2,
        `Refusing to upload "${absolutePath}" because it no longer resolves inside "${directory.realPath}"`,
      );
    }
    return handle;
  } catch (e) {
    await handle.close();
    throw e;
  }
}

function queueEntry(
  archive: archiver.Archiver,
  enqueue: () => void,
): Promise<void> {
  return new Promise((resolve, reject) => {
    const onEntry = () => {
      cleanup();
      resolve();
    };
    const onError = (error: Error) => {
      cleanup();
      reject(error);
    };
    const cleanup = () => {
      archive.off("entry", onEntry);
      archive.off("error", onError);
    };
    archive.on("entry", onEntry);
    archive.on("error", onError);
    enqueue();
  });
}

function isWithin(root: string, candidate: string): boolean {
  const relative = path.relative(root, candidate);
  return (
    relative === "" ||
    (relative !== ".." &&
      !relative.startsWith(`..${path.sep}`) &&
      !path.isAbsolute(relative))
  );
}
