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
import { fileURLToPath, pathToFileURL } from "node:url";
import { afterEach, describe, expect, it } from "vitest";

const generateSdkPath = fileURLToPath(
  new URL("./generate-sdk.ts", import.meta.url),
);
const ontologyIrIndex = fileURLToPath(
  new URL(
    "../../../generator-converters.ontologyir/src/index.ts",
    import.meta.url,
  ),
);

/**
 * The TypeScript SDK emitter runs only after Python SDK generation and
 * function discovery. This stub replaces that emitter so the test can load
 * the generator source without a package build. It is not on the path that
 * launches Python.
 */
const generatorStub = [
  "export async function generateClientSdkVersionTwoPointZero() {}",
  "export function getTsCompilerOptions() { return {}; }",
  "export const ONTOLOGY_METADATA_DCTS_PATH = \"ontology-metadata.d.cts\";",
  "export const ONTOLOGY_METADATA_DMTS_PATH = \"ontology-metadata.d.mts\";",
  "export const ONTOLOGY_METADATA_JSON_PATH = \"ontology-metadata.json\";",
  "",
].join("\n");

describe("preview SDK generator Python startup", () => {
  const tempDirs: string[] = [];

  afterEach(() => {
    for (const dir of tempDirs.splice(0)) {
      fs.rmSync(dir, { recursive: true, force: true });
    }
  });

  it("does not execute a functions package in the parent of --python-functions-dir", () => {
    const project = createProject();
    const outputDir = createTempDir();
    const safeDir = createTempDir();

    const result = runGenerator({
      cwd: safeDir,
      outputDir,
      project,
      rootDir: undefined,
    });

    expectReachedDiscovery(result);
    expectProjectUntouched(project);
  });

  it("does not execute a functions package supplied as --python-root-project-dir", () => {
    const project = createProject();
    const outputDir = createTempDir();
    const safeDir = createTempDir();

    const result = runGenerator({
      cwd: safeDir,
      outputDir,
      project,
      rootDir: project.rootDir,
    });

    expectReachedDiscovery(result);
    expectProjectUntouched(project);
  });

  it("does not execute a foundry_sdk_generator package in the process working directory", () => {
    const project = createProject();
    const outputDir = createTempDir();
    const generatorMarker = path.join(project.rootDir, "generator-executed");
    const generatorDir = path.join(project.rootDir, "foundry_sdk_generator");
    const generatorInit = path.join(generatorDir, "__init__.py");
    fs.mkdirSync(generatorDir);
    fs.writeFileSync(generatorInit, pythonSideEffect(generatorMarker));

    const result = runGenerator({
      cwd: project.rootDir,
      outputDir,
      project,
      rootDir: undefined,
    });

    expectReachedPythonSdkGeneration(result);
    expectReachedDiscovery(result);
    expect(
      fs.existsSync(generatorMarker),
      `Python SDK generation executed ${generatorInit}`,
    ).toBe(false);
    expect(fs.readFileSync(generatorInit, "utf-8")).toBe(
      pythonSideEffect(generatorMarker),
    );
    expectProjectUntouched(project);
  });

  function createTempDir(): string {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "osdk-py-cli-"));
    tempDirs.push(dir);
    return dir;
  }

  function createProject(): ProjectLayout {
    const rootDir = createTempDir();
    const sourceDir = path.join(rootDir, "sources");
    const packageDir = path.join(rootDir, "functions");
    fs.mkdirSync(sourceDir, { recursive: true });
    fs.mkdirSync(packageDir, { recursive: true });

    const initMarker = path.join(rootDir, "init-executed");
    const binMarker = path.join(rootDir, "bin-executed");
    const initPath = path.join(packageDir, "__init__.py");
    const binPath = path.join(packageDir, "bin.py");
    fs.writeFileSync(initPath, pythonSideEffect(initMarker));
    fs.writeFileSync(
      binPath,
      pythonSideEffect(binMarker) + "print('{\"functions\":[]}')\n",
    );
    const ontologyPath = path.join(rootDir, "ontology.json");
    fs.writeFileSync(ontologyPath, JSON.stringify(minimalOntology));

    return {
      rootDir,
      sourceDir,
      ontologyPath,
      markers: [initMarker, binMarker],
      sources: new Map([
        [initPath, fs.readFileSync(initPath)],
        [binPath, fs.readFileSync(binPath)],
      ]),
    };
  }

  function runGenerator(options: {
    cwd: string;
    outputDir: string;
    project: ProjectLayout;
    rootDir: string | undefined;
  }): ReturnType<typeof spawnSync> {
    const harness = writeLoader(createTempDir());
    const args = [
      "--experimental-strip-types",
      "--disable-warning=ExperimentalWarning",
      "--import",
      harness.registerPath,
      generateSdkPath,
      "--input",
      options.project.ontologyPath,
      "--package-name",
      "demo",
      "--version",
      "0.0.0",
      "--output-dir",
      options.outputDir,
      "--python-functions-dir",
      options.project.sourceDir,
      "--python-binary",
      pythonExecutable(),
    ];
    if (options.rootDir !== undefined) {
      args.push("--python-root-project-dir", options.rootDir);
    }

    return spawnSync(process.execPath, args, {
      cwd: options.cwd,
      encoding: "utf-8",
      env: discoveryEnv(),
      maxBuffer: 10 * 1024 * 1024,
    });
  }

  function writeLoader(dir: string): { registerPath: string } {
    const stubPath = path.join(dir, "generator-stub.mjs");
    const hooksPath = path.join(dir, "hooks.mjs");
    const registerPath = path.join(dir, "register.mjs");
    fs.writeFileSync(stubPath, generatorStub);
    fs.writeFileSync(
      hooksPath,
      hooksSource(
        pathToFileURL(ontologyIrIndex).href,
        pathToFileURL(stubPath).href,
      ),
    );
    fs.writeFileSync(
      registerPath,
      [
        "import { register } from \"node:module\";",
        "register(new URL(\"./hooks.mjs\", import.meta.url).href, {",
        "  parentURL: import.meta.url,",
        "});",
        "",
      ].join("\n"),
    );
    return { registerPath };
  }
});

interface ProjectLayout {
  rootDir: string;
  sourceDir: string;
  ontologyPath: string;
  markers: string[];
  sources: Map<string, Buffer>;
}

const minimalOntology = {
  objectTypes: {
    "ri.object.1": {
      objectType: {
        rid: "ri.object.1",
        apiName: "Item",
        displayMetadata: {
          displayName: "Item",
          visibility: "NORMAL",
          icon: {
            type: "blueprint",
            blueprint: { locator: "cube", color: "#000000" },
          },
        },
        primaryKeys: ["ri.prop.id"],
        titlePropertyTypeRid: "ri.prop.id",
        propertyTypes: {
          "ri.prop.id": {
            apiName: "id",
            displayMetadata: { displayName: "Id", visibility: "NORMAL" },
            type: { type: "string", string: {} },
            status: { type: "active", active: {} },
          },
        },
        status: { type: "active", active: {} },
        implementsInterfaces2: [],
      },
    },
  },
  actionTypes: {},
  interfaceTypes: {},
  sharedPropertyTypes: {},
  linkTypes: {},
};

function expectReachedDiscovery(result: ReturnType<typeof spawnSync>): void {
  const output = combinedOutput(result);
  expect(result.status, output).toBe(0);
}

function expectReachedPythonSdkGeneration(
  result: ReturnType<typeof spawnSync>,
): void {
  const output = combinedOutput(result);
  expect(output, output).toContain("foundry_sdk_generator");
}

function expectProjectUntouched(project: ProjectLayout): void {
  for (const [source, bytes] of project.sources) {
    expect(fs.existsSync(source), `${source} was removed`).toBe(true);
    expect(
      fs.readFileSync(source).equals(bytes),
      `${source} was modified`,
    ).toBe(true);
  }
  for (const marker of project.markers) {
    expect(
      fs.existsSync(marker),
      `the generator executed project Python and wrote ${marker}`,
    ).toBe(false);
  }
}

function combinedOutput(result: ReturnType<typeof spawnSync>): string {
  return `${streamText(result.stdout)}\n${streamText(result.stderr)}`;
}

function streamText(value: string | Buffer | null | undefined): string {
  if (value == null) {
    return "";
  }
  return typeof value === "string" ? value : value.toString("utf-8");
}

function discoveryEnv(): NodeJS.ProcessEnv {
  const env = { ...process.env };
  delete env.PYTHONPATH;
  delete env.PYTHONSAFEPATH;
  delete env.PYTHONHOME;
  delete env.PYTHONSTARTUP;
  return env;
}

function pythonExecutable(): string {
  const result = spawnSync(
    "python3",
    ["-c", "import sys; print(sys.executable)"],
    { encoding: "utf-8" },
  );
  if (
    result.status !== 0 || result.stdout == null || result.stdout.trim() === ""
  ) {
    throw new Error(
      `python3 is required to run the preview generator: ${result.stderr}`,
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

function hooksSource(ontologyIndexUrl: string, stubUrl: string): string {
  return `
import { access } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const ontologyIndex = ${JSON.stringify(ontologyIndexUrl)};
const stub = ${JSON.stringify(stubUrl)};

export async function resolve(specifier, context, nextResolve) {
  if (specifier === "@osdk/generator") {
    return { url: stub, shortCircuit: true };
  }
  if (specifier === "@osdk/generator-converters.ontologyir") {
    return {
      url: ontologyIndex,
      shortCircuit: true,
      format: "module-typescript",
    };
  }
  if (
    (specifier.startsWith("./") || specifier.startsWith("../"))
    && specifier.endsWith(".js")
    && context.parentURL
  ) {
    const tsUrl = new URL(specifier.slice(0, -3) + ".ts", context.parentURL);
    try {
      await access(fileURLToPath(tsUrl));
      return {
        url: tsUrl.href,
        shortCircuit: true,
        format: "module-typescript",
      };
    } catch {
      // The specifier points at a real JavaScript file.
    }
  }
  return nextResolve(specifier, context);
}
`;
}
