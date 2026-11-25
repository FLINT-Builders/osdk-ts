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

// cspell:ignore sitecustomize pathlib venv Venv PYTHONPATH PYTHONSAFEPATH PYTHONHOME PYTHONSTARTUP PYTHONNOUSERSITE PYTHONINSPECT

import { spawnSync } from "node:child_process";
import * as fs from "node:fs/promises";
import { createRequire } from "node:module";
import * as os from "node:os";
import * as path from "node:path";
import { fileURLToPath } from "node:url";

import { afterEach, describe, expect, it } from "vitest";

const require = createRequire(import.meta.url);
const packageRoot = fileURLToPath(new URL("../..", import.meta.url));
const cliPath = fileURLToPath(new URL("./generate-sdk.ts", import.meta.url));
const viteNodePath = createRequire(require.resolve("vitest/package.json"))
  .resolve("vite-node/vite-node.mjs");

const emptyOntology = {
  objectTypes: {},
  actionTypes: {},
  interfaceTypes: {},
  sharedPropertyTypes: {},
  linkTypes: {},
  knownIdentifiers: { valueTypes: {} },
  blockOutputCompassLocations: {},
  ruleSets: {},
};

const importedMetadata = {
  ontology: {
    apiName: "ontology",
    rid: "ri.ontology.main.ontology.0",
    displayName: "ontology",
    description: "",
  },
  objectTypes: {
    Item: {
      objectType: {
        apiName: "Item",
        rid: "item-rid",
        displayName: "Item",
        pluralDisplayName: "Items",
        primaryKey: "id",
        titleProperty: "id",
        status: "ACTIVE",
        aliases: [],
        datasources: [],
        icon: { type: "blueprint", name: "cube", color: "blue" },
        properties: {
          id: {
            rid: "id-rid",
            displayName: "Id",
            dataType: { type: "string" },
            typeClasses: [],
          },
        },
      },
      linkTypes: [],
      implementsInterfaces: [],
      implementsInterfaces2: {},
      sharedPropertyTypeMapping: {},
    },
  },
  actionTypes: {},
  actionTypesFullMetadata: {},
  interfaceTypes: {},
  sharedPropertyTypes: {},
  queryTypes: {},
  valueTypes: {},
};

const tempDirs: string[] = [];

afterEach(async () => {
  await Promise.all(
    tempDirs.splice(0).map(dir => fs.rm(dir, { recursive: true, force: true })),
  );
});

describe("preview SDK python startup", () => {
  it(
    "does not execute a project foundry_sdk_generator or delete the site-packages directory it prints",
    async () => {
      const projectDir = await makeTemp("project");
      const outputDir = await makeTemp("output");
      const python = await createVenv(await makeTemp("venv"));
      const sitePackages = pythonSitePackages(python);
      const packageDir = path.join(sitePackages, "ontology_sdk");
      const sentinel = path.join(packageDir, "sentinel.txt");
      await fs.mkdir(packageDir, { recursive: true });
      await fs.writeFile(sentinel, "keep\n", "utf-8");
      const keptSibling = path.join(sitePackages, "kept.txt");
      await fs.writeFile(keptSibling, "keep\n", "utf-8");

      const moduleMarker = path.join(projectDir, "module-marker.txt");
      const startupMarker = path.join(projectDir, "startup-marker.txt");
      await fs.mkdir(path.join(projectDir, "foundry_sdk_generator"), {
        recursive: true,
      });
      await fs.writeFile(
        path.join(projectDir, "foundry_sdk_generator", "__init__.py"),
        "",
        "utf-8",
      );
      await fs.writeFile(
        path.join(projectDir, "foundry_sdk_generator", "__main__.py"),
        markerScript(moduleMarker),
        "utf-8",
      );
      await fs.writeFile(
        path.join(projectDir, "sitecustomize.py"),
        markerScript(startupMarker),
        "utf-8",
      );
      await fs.mkdir(path.join(projectDir, "python_sources"), {
        recursive: true,
      });

      const input = path.join(projectDir, "ontology.json");
      const imported = path.join(projectDir, "imported.json");
      await fs.writeFile(input, JSON.stringify(emptyOntology), "utf-8");
      await fs.writeFile(imported, JSON.stringify(importedMetadata), "utf-8");

      const result = runCli({
        cwd: projectDir,
        pythonBinary: python,
        pythonFunctionsDir: path.join(projectDir, "python_sources"),
        input,
        importJson: imported,
        outputDir,
      });
      const output = `${result.stdout}\n${result.stderr}`;

      expect(output, output).toContain(`Python site-packages: ${sitePackages}`);
      expect(output, output).toContain("Generating Python SDK");
      expect.soft(await readIfExists(moduleMarker), output).toBe("");
      expect.soft(await readIfExists(startupMarker), output).toBe("");
      expect.soft(await readIfExists(sentinel), output).toBe("keep\n");
      expect.soft(await readIfExists(keptSibling), output).toBe("keep\n");
    },
    180_000,
  );

  it(
    "does not execute functions.bin from the python project directory",
    async () => {
      const launchDir = await makeTemp("launch");
      const projectDir = await makeTemp("python-project");
      const outputDir = await makeTemp("output");
      const python = systemPython();
      const moduleMarker = path.join(projectDir, "functions-marker.txt");
      const sources = path.join(projectDir, "sources");
      await fs.mkdir(path.join(projectDir, "functions"), { recursive: true });
      await fs.mkdir(sources, { recursive: true });
      await fs.writeFile(
        path.join(projectDir, "functions", "__init__.py"),
        "",
        "utf-8",
      );
      await fs.writeFile(
        path.join(projectDir, "functions", "bin.py"),
        markerScript(moduleMarker),
        "utf-8",
      );

      const input = path.join(launchDir, "ontology.json");
      await fs.writeFile(input, JSON.stringify(emptyOntology), "utf-8");

      const result = runCli({
        cwd: launchDir,
        pythonBinary: python,
        pythonFunctionsDir: sources,
        input,
        outputDir,
      });
      const output = `${result.stdout}\n${result.stderr}`;

      expect(output, output).toContain(
        "No object types found, skipping Python SDK generation.",
      );
      expect(output, output).toMatch(
        /Python function discovery failed|No valid JSON found|No functions discovered/,
      );
      expect.soft(await readIfExists(moduleMarker), output).toBe("");
    },
    180_000,
  );
});

function runCli(options: {
  cwd: string;
  pythonBinary: string;
  pythonFunctionsDir: string;
  input: string;
  outputDir: string;
  importJson?: string;
}): { status: number | null; stdout: string; stderr: string } {
  const args = [
    viteNodePath,
    "--root",
    packageRoot,
    cliPath,
    "--",
    "--input",
    options.input,
    "--package-name",
    "test_sdk",
    "--version",
    "0.0.0",
    "--output-dir",
    options.outputDir,
    "--python-binary",
    options.pythonBinary,
    "--python-functions-dir",
    options.pythonFunctionsDir,
  ];
  if (options.importJson !== undefined) {
    args.push("--import-json", options.importJson);
  }

  const env = { ...process.env, CONSOLA_LEVEL: "3" };
  delete env.PYTHONPATH;
  delete env.PYTHONSAFEPATH;
  delete env.PYTHONHOME;
  delete env.PYTHONSTARTUP;
  delete env.PYTHONNOUSERSITE;
  delete env.PYTHONINSPECT;

  const result = spawnSync(process.execPath, args, {
    cwd: options.cwd,
    env,
    encoding: "utf-8",
    maxBuffer: 20 * 1024 * 1024,
  });
  return {
    status: result.status,
    stdout: result.stdout ?? "",
    stderr: `${result.stderr ?? ""}${
      result.error ? `\n${result.error.message}` : ""
    }`,
  };
}

function markerScript(markerPath: string): string {
  return [
    "import pathlib",
    `pathlib.Path(${
      JSON.stringify(markerPath)
    }).write_text("executed\\n", encoding="utf-8")`,
    "raise SystemExit(0)",
    "",
  ].join("\n");
}

function systemPython(): string {
  const result = spawnSync("python3", [
    "-c",
    "import sys; print(sys.executable)",
  ], {
    encoding: "utf-8",
  });
  if (result.status !== 0 || !result.stdout.trim()) {
    throw new Error(result.stderr || "python3 is not available");
  }
  return result.stdout.trim();
}

async function createVenv(directory: string): Promise<string> {
  const result = spawnSync(systemPython(), [
    "-m",
    "venv",
    "--without-pip",
    directory,
  ], { encoding: "utf-8" });
  if (result.status !== 0) {
    throw new Error(result.stderr || "could not create a virtual environment");
  }
  return path.join(directory, "bin", "python");
}

function pythonSitePackages(python: string): string {
  const result = spawnSync(python, [
    "-c",
    "import site; print(site.getsitepackages()[0])",
  ], { encoding: "utf-8" });
  if (result.status !== 0 || !result.stdout.trim()) {
    throw new Error(result.stderr || "could not read site-packages");
  }
  return result.stdout.trim();
}

async function makeTemp(name: string): Promise<string> {
  const directory = await fs.mkdtemp(path.join(os.tmpdir(), `osdk-${name}-`));
  tempDirs.push(directory);
  return directory;
}

async function readIfExists(file: string): Promise<string> {
  try {
    return await fs.readFile(file, "utf-8");
  } catch (error) {
    if (
      error && typeof error === "object" && "code" in error
      && error.code === "ENOENT"
    ) {
      return "";
    }
    throw error;
  }
}
