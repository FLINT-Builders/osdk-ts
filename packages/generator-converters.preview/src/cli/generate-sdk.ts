#!/usr/bin/env node
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

import { spawnSync } from "node:child_process";
import * as fsSync from "node:fs";
import * as fs from "node:fs/promises";
import * as os from "node:os";
import * as path from "node:path";

import {
  generateClientSdkVersionTwoPointZero,
  getTsCompilerOptions,
  ONTOLOGY_METADATA_DCTS_PATH,
  ONTOLOGY_METADATA_DMTS_PATH,
  ONTOLOGY_METADATA_JSON_PATH,
} from "@osdk/generator";
import { OntologyIrToFullMetadataConverter } from "@osdk/generator-converters.ontologyir";
import { consola } from "consola";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";

import { PreviewOntologyIrConverter } from "../PreviewOntologyIrConverter.js";
import { loadSdkInput } from "./loadSdkInput.js";

const PYTHON_SDK_PACKAGE_NAME = "ontology_sdk";

// Isolated mode (-I) keeps the working directory, PYTHON* environment variables
// and the user site-packages off sys.path, so files in the project cannot
// shadow startup hooks or the modules run with -m. On Python 3.11+ it implies
// -P; -P is not passed separately because older interpreters reject it.
const PYTHON_ISOLATED_FLAGS = ["-I"] as const;

const SITE_PACKAGES_SCRIPT =
  "import json, site, sys; print(json.dumps([site.getsitepackages()[0], sys.prefix]))";

/**
 * Resolves the site-packages directory reported by the interpreter, accepting
 * it only if it is an existing directory inside the interpreter's prefix.
 * Returns the real path so that later file operations act on the same
 * directory that was validated.
 */
function resolveSitePackages(stdout: string): string | undefined {
  const lastLine = stdout.trim().split(/\r?\n/).pop() ?? "";
  let parsed: unknown;
  try {
    parsed = JSON.parse(lastLine);
  } catch {
    return undefined;
  }
  if (
    !Array.isArray(parsed) || parsed.length !== 2
    || typeof parsed[0] !== "string" || typeof parsed[1] !== "string"
    || !path.isAbsolute(parsed[0]) || !path.isAbsolute(parsed[1])
  ) {
    return undefined;
  }
  let realSitePackages: string;
  let realPrefix: string;
  try {
    realSitePackages = fsSync.realpathSync(parsed[0]);
    realPrefix = fsSync.realpathSync(parsed[1]);
    if (!fsSync.statSync(realSitePackages).isDirectory()) {
      return undefined;
    }
  } catch {
    return undefined;
  }
  const relative = path.relative(realPrefix, realSitePackages);
  if (
    relative === "" || relative === ".."
    || relative.startsWith(`..${path.sep}`) || path.isAbsolute(relative)
  ) {
    return undefined;
  }
  return realSitePackages;
}

/**
 * Generates the Python SDK package into the conda environment's site-packages
 * so that Python function discovery can resolve ontology type imports.
 */
function generatePythonSdk(
  previewMetadata: ReturnType<
    typeof PreviewOntologyIrConverter.getPreviewFullMetadataFromBlockData
  >,
  pythonBinary: string,
): void {
  // Build the Python-compatible metadata: unwrap actionTypes and add globalFunctions
  const pythonMetadata = {
    ...previewMetadata,
    actionTypes: Object.fromEntries(
      Object.entries(previewMetadata.actionTypes).map(([key, fullMeta]) => [
        key,
        fullMeta.actionType,
      ]),
    ),
    globalFunctions: { queryTypes: {}, valueTypes: {} },
  };

  const objectTypes = Object.keys(previewMetadata.objectTypes ?? {});
  if (objectTypes.length === 0) {
    consola.info("No object types found, skipping Python SDK generation.");
    return;
  }

  const ontologyApiName = previewMetadata.ontology?.apiName ?? "ontology";

  // Python runs from an empty directory so nothing in the directory the CLI
  // was launched from can influence it.
  const tmpDir = fsSync.mkdtempSync(path.join(os.tmpdir(), "python-sdk-"));
  try {
    const pythonCwd = path.join(tmpDir, "cwd");
    const generatorOutputDir = path.join(tmpDir, "out");
    fsSync.mkdirSync(pythonCwd);
    fsSync.mkdirSync(generatorOutputDir);

    // Discover site-packages from the conda environment
    const siteResult = spawnSync(
      pythonBinary,
      [...PYTHON_ISOLATED_FLAGS, "-c", SITE_PACKAGES_SCRIPT],
      { cwd: pythonCwd, encoding: "utf-8" },
    );
    if (siteResult.status !== 0 || !siteResult.stdout?.trim()) {
      consola.warn(
        `Could not discover Python site-packages: ${
          siteResult.stderr || siteResult.error
        }`,
      );
      return;
    }
    const sitePackages = resolveSitePackages(siteResult.stdout);
    if (sitePackages == null) {
      consola.warn(
        `Python reported an invalid site-packages location: ${siteResult.stdout.trim()}`,
      );
      return;
    }
    consola.info(`Python site-packages: ${sitePackages}`);

    // Write metadata to a temp file for the generator
    const tmpMetadata = path.join(tmpDir, "metadata.json");
    fsSync.writeFileSync(
      tmpMetadata,
      JSON.stringify(pythonMetadata, null, 2),
      "utf-8",
    );

    // Run the Python SDK generator into the temp directory.
    // The generator creates <output-dir>/ontology_sdk/ which is a project
    // directory containing ontology_sdk/ (the actual Python package), setup.py, etc.
    consola.info("Generating Python SDK...");
    const packageName = PYTHON_SDK_PACKAGE_NAME;
    const genResult = spawnSync(
      pythonBinary,
      [
        ...PYTHON_ISOLATED_FLAGS,
        "-m",
        "foundry_sdk_generator",
        "generate_package",
        "--output-dir",
        generatorOutputDir,
        "--package-name",
        packageName,
        "--package-version",
        "0.0.0",
        "--ontology",
        ontologyApiName,
        "--object-types",
        ...objectTypes,
        "--cache-path",
        tmpMetadata,
        "--force",
      ],
      { cwd: pythonCwd, encoding: "utf-8", stdio: "pipe" },
    );

    if (genResult.status !== 0) {
      consola.warn(
        `Python SDK generation failed (non-fatal): ${
          genResult.stderr || genResult.stdout
        }`,
      );
      return;
    }

    // The generator creates <output-dir>/ontology_sdk/ontology_sdk/ (the
    // importable package). Copy just the inner package into site-packages so
    // Python can resolve `import ontology_sdk`.
    const generatedPackage = path.join(
      generatorOutputDir,
      packageName,
      packageName,
    );
    if (!isRealDirectory(generatedPackage)) {
      consola.warn(
        `Python SDK generation did not produce ${generatedPackage} (non-fatal).`,
      );
      return;
    }
    const destPackage = path.join(sitePackages, packageName);

    // Remove any previous version
    fsSync.rmSync(destPackage, { recursive: true, force: true });
    fsSync.cpSync(generatedPackage, destPackage, { recursive: true });

    consola.info(`Python SDK installed to ${destPackage}`);
  } finally {
    fsSync.rmSync(tmpDir, { recursive: true, force: true });
  }
}

function isRealDirectory(dirPath: string): boolean {
  try {
    return fsSync.lstatSync(dirPath).isDirectory();
  } catch {
    return false;
  }
}

async function main(): Promise<void> {
  const argv = await yargs(hideBin(process.argv))
    .strict()
    .help()
    .version(false) // so that we can use --version argument for the package version
    .usage(
      "$0 (--input <path> | --block-results-input <path>) --package-name <name> --version <ver> --output-dir <dir>",
    )
    .options({
      input: {
        describe: "Path to the OntologyIR JSON file",
        type: "string",
        coerce: path.resolve,
      },
      "block-results-input": {
        describe: "Path to the block result JSON collection",
        type: "string",
        coerce: (input: string) => path.resolve(input),
      },
      "package-name": {
        describe: "Name for the generated SDK package",
        type: "string",
        demandOption: true,
      },
      version: {
        describe: "Version string for the generated SDK",
        type: "string",
        demandOption: true,
      },
      "output-dir": {
        describe: "Directory where the SDK will be generated",
        type: "string",
        demandOption: true,
        coerce: path.resolve,
      },
      "functions-dir": {
        describe:
          "Path to TypeScript functions source directory (enables TS function discovery)",
        type: "string",
        coerce: path.resolve,
      },
      "functions-ir-output-file": {
        describe: "Output file for discovered function IR",
        type: "string",
        coerce: path.resolve,
      },
      "node-modules-path": {
        describe:
          "Path to node_modules containing @foundry packages (for TS function discovery)",
        type: "string",
        coerce: path.resolve,
      },
      "python-functions-dir": {
        describe:
          "Path to Python functions source directory (enables Python function discovery)",
        type: "string",
        coerce: path.resolve,
      },
      "python-root-project-dir": {
        describe:
          "Root project directory for Python functions (defaults to parent of python-functions-dir)",
        type: "string",
        coerce: path.resolve,
      },
      "python-binary": {
        describe:
          "Path to Python binary (required when using --python-functions-dir)",
        type: "string",
        coerce: path.resolve,
      },
      "import-json": {
        describe:
          "Path to the import JSON file (ontology-full-metadata.json) produced by 'foundry import ontology'. Imported entities are merged into the generated SDK.",
        type: "string",
        coerce: path.resolve,
      },
    })
    .parse();

  const packageName = argv.packageName;
  const packageVersion = argv.version;
  const outputDir = argv.outputDir;

  const { ontology, valueTypes } = await loadSdkInput({
    input: argv.input,
    blockResultsInput: argv.blockResultsInput,
  });
  consola.info(`Converting ${argv.input ?? argv.blockResultsInput}...`);

  const importJson = argv.importJson
    ? JSON.parse(await fs.readFile(argv.importJson, "utf-8"))
    : undefined;

  const previewMetadata = PreviewOntologyIrConverter
    .getPreviewFullMetadataFromBlockData(
      ontology,
      importJson,
      valueTypes,
    );

  // Generate the Python SDK before function discovery so that Python functions
  // that import ontology types (e.g. `from ontology_sdk.ontology.objects import X`)
  // can be successfully parsed during discovery.
  if (argv.pythonBinary && argv.pythonFunctionsDir) {
    generatePythonSdk(previewMetadata, argv.pythonBinary);
  }

  // Function discovery is optional - only run if at least one functions flag is provided
  if (argv.functionsDir || argv.pythonFunctionsDir) {
    if (argv.pythonFunctionsDir && !argv.pythonBinary) {
      consola.error(
        "--python-binary is required when using --python-functions-dir",
      );
      process.exit(1);
    }

    const effectivePythonRootDir = argv.pythonRootProjectDir
      ?? (argv.pythonFunctionsDir
        ? path.dirname(argv.pythonFunctionsDir)
        : undefined);

    const queryTypes = await OntologyIrToFullMetadataConverter
      .getOsdkQueryTypes(
        argv.pythonBinary,
        argv.functionsDir,
        argv.nodeModulesPath,
        argv.pythonFunctionsDir,
        effectivePythonRootDir,
        argv.functionsIrOutputFile,
        previewMetadata,
      );

    const functionNames = Object.keys(queryTypes);
    if (functionNames.length > 0) {
      previewMetadata.queryTypes = queryTypes;
      consola.info(
        `Discovered ${functionNames.length} function(s): ${
          functionNames.join(
            ", ",
          )
        }`,
      );
    } else {
      consola.info("No functions discovered.");
    }
  }

  // Convert ActionTypeFullMetadata to ActionTypeV2 for generator compatibility
  const metadata = {
    ...previewMetadata,
    actionTypes: Object.fromEntries(
      Object.entries(previewMetadata.actionTypes).map(([key, fullMeta]) => [
        key,
        fullMeta.actionType,
      ]),
    ),
  };

  const fullOutputDir = path.join(outputDir, packageName);
  await fs.mkdir(fullOutputDir, { recursive: true });

  // Clean the output directory before generation. The generator's verifyOutDir
  // requires an empty directory, but a previous SDK build may exist from
  // function discovery (so TypeScript functions can resolve @ontology/sdk imports).
  const existingEntries = await fs.readdir(fullOutputDir);
  for (const entry of existingEntries) {
    await fs.rm(path.join(fullOutputDir, entry), {
      recursive: true,
      force: true,
    });
  }

  const hostFs = {
    async writeFile(filePath: string, contents: string): Promise<void> {
      // Normalize backslashes to forward slashes so path.join/isAbsolute
      // work consistently on Windows where generators may emit mixed separators.
      const normalized = filePath.replaceAll("\\", "/");
      const fullPath = path.isAbsolute(normalized)
        ? normalized
        : path.join(fullOutputDir, normalized);
      await fs.mkdir(path.dirname(fullPath), { recursive: true });
      await fs.writeFile(fullPath, contents, "utf-8");
    },
    async mkdir(dirPath: string): Promise<void> {
      const normalized = dirPath.replaceAll("\\", "/");
      const fullPath = path.isAbsolute(normalized)
        ? normalized
        : path.join(fullOutputDir, normalized);
      await fs.mkdir(fullPath, { recursive: true });
    },
    async readdir(dirPath: string): Promise<string[]> {
      return fs.readdir(dirPath);
    },
  };

  consola.info(`Generating SDK to ${fullOutputDir}...`);

  await generateClientSdkVersionTwoPointZero(
    metadata,
    `osdk-generator/${packageVersion} (from-ir)`,
    hostFs,
    fullOutputDir,
    "module",
    new Map(),
    new Map(),
    new Map(),
    false,
    [],
    true,
  );

  // Write package.json for module resolution. Points to compiled output in
  // dist/ so that TypeScript function discovery can resolve types from
  // @ontology/sdk during the bootstrap → function discovery → regeneration cycle.
  // No npm install is needed — @osdk/client and typescript are resolved from
  // the parent ontology project's node_modules.
  const previewPackageJson = {
    name: packageName,
    version: packageVersion,
    type: "module",
    main: "./dist/index.js",
    types: "./dist/index.d.ts",
    exports: {
      ".": {
        types: "./dist/index.d.ts",
        import: "./dist/index.js",
      },
      "./experimental/ontology-metadata": {
        import: {
          types: `./${ONTOLOGY_METADATA_DMTS_PATH}`,
          default: `./${ONTOLOGY_METADATA_JSON_PATH}`,
        },
        require: {
          types: `./${ONTOLOGY_METADATA_DCTS_PATH}`,
          default: `./${ONTOLOGY_METADATA_JSON_PATH}`,
        },
      },
    },
    scripts: {
      build: "tsc",
    },
    dependencies: {
      "@osdk/client": "^2.0.0",
    },
    devDependencies: {
      typescript: "^5.0.0",
    },
  };

  await fs.writeFile(
    path.join(fullOutputDir, "package.json"),
    `${JSON.stringify(previewPackageJson, null, 2)}\n`,
    "utf-8",
  );
  consola.info(`Wrote ${path.join(fullOutputDir, "package.json")}`);

  // Write tsconfig.json for the tsc build step. Uses shared compiler options
  // from @osdk/generator with preview-specific additions.
  const previewTsconfig = {
    compilerOptions: {
      ...getTsCompilerOptions("module"),
      importHelpers: false,
      outDir: "./dist",
      rootDir: "./",
      declarationMap: true,
      sourceMap: true,
      moduleResolution: "node",
      module: "ES2020",
      resolveJsonModule: true,
      allowSyntheticDefaultImports: true,
    },
    include: ["**/*.ts", "**/*.tsx"],
    exclude: ["node_modules", "dist"],
  };

  await fs.writeFile(
    path.join(fullOutputDir, "tsconfig.json"),
    `${JSON.stringify(previewTsconfig, null, 2)}\n`,
    "utf-8",
  );
  consola.info(`Wrote ${path.join(fullOutputDir, "tsconfig.json")}`);

  const metadataPath = path.join(fullOutputDir, "ontology-metadata.json");
  await fs.writeFile(
    metadataPath,
    JSON.stringify(previewMetadata, null, 2),
    "utf-8",
  );

  consola.info(`Wrote ${metadataPath}`);

  // Write Python-compatible metadata that the foundry-sdk-generator expects.
  // This uses the unwrapped actionTypes (ActionTypeV2 instead of
  // ActionTypeFullMetadata) and adds the globalFunctions key.
  if (argv.pythonFunctionsDir) {
    const pythonMetadataPath = path.join(
      fullOutputDir,
      "python-ontology-metadata.json",
    );
    await fs.writeFile(
      pythonMetadataPath,
      JSON.stringify(
        { ...metadata, globalFunctions: { queryTypes: {}, valueTypes: {} } },
        null,
        2,
      ),
      "utf-8",
    );
    consola.info(`Wrote ${pythonMetadataPath}`);
  }

  // Write runtime metadata.json for the TypeScript functions runtime.
  // The runtime needs entity metadata to resolve ontology types during
  // function discovery. Without this, functions using Client/Osdk.Instance
  // produce diagnostics that block ALL function discovery.
  if (argv.functionsDir) {
    const functionsProjectRoot = path.resolve(argv.functionsDir, "..", "..");
    const runtimeMetadataDir = path.join(
      functionsProjectRoot,
      ".dev-server",
      "var",
      "conf",
    );
    const runtimeMetadataPath = path.join(runtimeMetadataDir, "metadata.json");

    const ontologyRid = previewMetadata.ontology.rid;

    const objectTypeMetadata: Record<string, unknown> = {};
    if (previewMetadata.objectTypes) {
      for (
        const [apiName, objData] of Object.entries(
          previewMetadata.objectTypes,
        )
      ) {
        const objType = objData.objectType;
        const propertyTypeMetadata: Record<
          string,
          { propertyTypeApiName: string; type?: unknown }
        > = {};
        if (objType.properties) {
          for (
            const [propApiName, propDef] of Object.entries(
              objType.properties,
            )
          ) {
            propertyTypeMetadata[propApiName] = {
              propertyTypeApiName: propApiName,
              type: propDef.dataType,
            };
          }
        }
        // linkTypeMetadata uses the nested format expected by the TS runtime:
        // { [linkTypeId]: { [linkApiName]: {} } }
        const linkTypeMetadata: Record<string, Record<string, object>> = {};
        if (objData.linkTypes) {
          for (const lt of objData.linkTypes) {
            const linkTypeId = lt.linkTypeRid;
            if (!linkTypeMetadata[linkTypeId]) {
              linkTypeMetadata[linkTypeId] = {};
            }
            linkTypeMetadata[linkTypeId][lt.apiName] = {};
          }
        }
        objectTypeMetadata[apiName] = {
          objectTypeApiName: apiName,
          primaryKeyPropertyTypeId: objType.primaryKey,
          propertyTypeMetadata,
          linkTypeMetadata,
        };
      }
    }

    const runtimeMetadata = {
      ontologyRid,
      objectTypeMetadata,
      interfaceTypeMetadata: {},
      magritteSourceMetadata: {},
    };

    try {
      await fs.mkdir(runtimeMetadataDir, { recursive: true });
      await fs.writeFile(
        runtimeMetadataPath,
        JSON.stringify(runtimeMetadata),
        "utf-8",
      );
      consola.info(`Wrote runtime metadata to ${runtimeMetadataPath}`);
    } catch (e) {
      consola.warn(`Could not write runtime metadata: ${e}`);
    }
  }

  consola.success("Done!");
}

main().catch((err: unknown) => {
  consola.error(err instanceof Error ? err.message : err);
  process.exit(1);
});
