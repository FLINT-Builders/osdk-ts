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

// cspell:ignore PYTHONPATH PYTHONSAFEPATH PYTHONHOME PYTHONSTARTUP pathlib
import { spawnSync } from "node:child_process";
import * as fs from "node:fs";
import * as os from "node:os";
import * as path from "node:path";
import { afterEach, describe, expect, it } from "vitest";
import { OntologyIrToFullMetadataConverter } from "./OntologyIrToFullMetadataConverter.js";

/**
 * Discovery must parse the given source directory without executing modules
 * that resolve only because the project directory is the interpreter's
 * working directory or an entry on its module search path.
 */
describe("Python function discovery", () => {
  const tempDirs: string[] = [];
  const originalCwd = process.cwd();
  const originalEnv = {
    PYTHONPATH: process.env.PYTHONPATH,
    PYTHONSAFEPATH: process.env.PYTHONSAFEPATH,
    PYTHONHOME: process.env.PYTHONHOME,
    PYTHONSTARTUP: process.env.PYTHONSTARTUP,
  };

  afterEach(() => {
    process.chdir(originalCwd);
    for (const [key, value] of Object.entries(originalEnv)) {
      if (value === undefined) {
        delete process.env[key];
      } else {
        process.env[key] = value;
      }
    }
    for (const dir of tempDirs.splice(0)) {
      fs.rmSync(dir, { recursive: true, force: true });
    }
  });

  it("does not execute a functions package in the parent of the source directory", async () => {
    const layout = createFunctionsProject({ namespace: false });
    const safeDir = createTempDir();
    clearPythonPathEnv();
    process.chdir(safeDir);

    await expectNoExecution(
      layout,
      () =>
        OntologyIrToFullMetadataConverter.getOsdkQueryTypes(
          pythonExecutable(),
          undefined,
          undefined,
          layout.sourceDir,
          layout.rootDir,
        ),
    );
  });

  it("does not execute a functions package when the source directory is the discovery root", async () => {
    const layout = createFunctionsProject({ namespace: false });
    const safeDir = createTempDir();
    clearPythonPathEnv();
    process.chdir(safeDir);

    await expectNoExecution(
      layout,
      () =>
        OntologyIrToFullMetadataConverter.getOsdkQueryTypes(
          pythonExecutable(),
          undefined,
          undefined,
          layout.rootDir,
          layout.rootDir,
        ),
    );
  });

  it("does not execute a namespace functions.bin module at the discovery root", async () => {
    const layout = createFunctionsProject({ namespace: true });
    const safeDir = createTempDir();
    clearPythonPathEnv();
    process.chdir(safeDir);

    await expectNoExecution(
      layout,
      () =>
        OntologyIrToFullMetadataConverter.getOsdkQueryTypes(
          pythonExecutable(),
          undefined,
          undefined,
          layout.sourceDir,
          layout.rootDir,
        ),
    );
  });

  function createTempDir(): string {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "osdk-py-discovery-"));
    tempDirs.push(dir);
    return dir;
  }

  function createFunctionsProject(options: { namespace: boolean }): {
    rootDir: string;
    sourceDir: string;
    markers: string[];
    sources: string[];
  } {
    const rootDir = createTempDir();
    const sourceDir = path.join(rootDir, "sources");
    const packageDir = path.join(rootDir, "functions");
    fs.mkdirSync(sourceDir, { recursive: true });
    fs.mkdirSync(packageDir, { recursive: true });

    const markers: string[] = [];
    const sources: string[] = [];
    const binMarker = path.join(rootDir, "bin-executed");
    markers.push(binMarker);
    const binPath = path.join(packageDir, "bin.py");
    fs.writeFileSync(
      binPath,
      pythonSideEffect(binMarker) + "print('{\"functions\":[]}')\n",
    );
    sources.push(binPath);

    if (!options.namespace) {
      const initMarker = path.join(rootDir, "init-executed");
      markers.push(initMarker);
      const initPath = path.join(packageDir, "__init__.py");
      fs.writeFileSync(initPath, pythonSideEffect(initMarker));
      sources.push(initPath);
    }

    return { rootDir, sourceDir, markers, sources };
  }

  async function expectNoExecution(
    layout: { markers: string[]; sources: string[] },
    discover: () => Promise<unknown>,
  ): Promise<void> {
    const before = new Map(
      layout.sources.map(file => [file, fs.readFileSync(file)]),
    );

    await expect(discover()).resolves.toEqual({});

    for (const [file, bytes] of before) {
      expect(
        fs.existsSync(file),
        `${file} was removed before discovery finished`,
      )
        .toBe(true);
      expect(
        fs.readFileSync(file).equals(bytes),
        `${file} was modified before discovery finished`,
      ).toBe(true);
    }
    for (const marker of layout.markers) {
      expect(
        fs.existsSync(marker),
        `discovery executed project Python and wrote ${marker}`,
      ).toBe(false);
    }
  }
});

function pythonExecutable(): string {
  const result = spawnSync(
    "python3",
    ["-c", "import sys; print(sys.executable)"],
    { encoding: "utf-8" },
  );
  if (
    result.status !== 0 || result.stdout?.trim() === "" || result.stdout == null
  ) {
    throw new Error(
      `python3 is required to run function discovery: ${result.stderr}`,
    );
  }
  return result.stdout.trim();
}

function pythonSideEffect(marker: string): string {
  return [
    "from pathlib import Path",
    `Path(${
      JSON.stringify(marker)
    }).write_text("executed\\n", encoding="utf-8")`,
    "",
  ].join("\n");
}

function clearPythonPathEnv(): void {
  delete process.env.PYTHONPATH;
  delete process.env.PYTHONSAFEPATH;
  delete process.env.PYTHONHOME;
  delete process.env.PYTHONSTARTUP;
}
