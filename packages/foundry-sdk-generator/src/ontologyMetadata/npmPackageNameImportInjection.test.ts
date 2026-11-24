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

import { LegacyFauxFoundry, startNodeApiServer } from "@osdk/shared.test";
import { http, HttpResponse } from "msw";
import type { SetupServerApi } from "msw/node";
import ts from "typescript";
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { createMockMinimalFiles } from "../../../generator/src/util/test/createMockMinimalFiles.js";
import { generateClientSdkVersionTwoPointZero } from "../../../generator/src/v2.0/generateClientSdkVersionTwoPointZero.js";
import { compileInMemory } from "../generate/betaClient/compileInMemory.js";
import type { OntologyInfo } from "./ontologyMetadataResolver.js";
import { OntologyMetadataResolver } from "./ontologyMetadataResolver.js";

const ONTOLOGY_RID =
  "ri.ontology.main.ontology.698267cc-6b48-4d98-beff-29beb24e9361";
const PACKAGE_RID = "ri.sdk.main.package.external";
const REPOSITORY_RID = "ri.artifacts.main.repository.1";
const FOUNDRY_PACKAGE_NAME = "external-widgets";
const PACKAGE_VERSION = "1.0.0";
const OFFICE_RID =
  "ri.ontology.main.object-type.404ac022-89eb-4591-8b7e-1a912b9efb45";
const BAR_INTERFACE_RID = "ri.interface.main.interface.2";
const MARKER = "InjectedMarker7f3a";

/**
 * npm package names that are safe to place in a module specifier.
 * https://docs.npmjs.com/cli/v10/configuring-npm/package-json#name
 */
const STRICT_NPM_PACKAGE_NAME =
  /^(?:@[a-z0-9-~][a-z0-9-._~]*\/)?[a-z0-9-~][a-z0-9-._~]*$/;

const ALLOWED_GENERATED_SPECIFIERS = new Set([
  "@osdk/client",
  "@osdk/api",
]);

describe("external npm package names in generated imports", () => {
  let apiServer: SetupServerApi;
  let resolver: OntologyMetadataResolver;

  beforeAll(async () => {
    const testSetup = startNodeApiServer(
      new LegacyFauxFoundry("https://stack.palantir.com/"),
    );
    apiServer = testSetup.apiServer;
    resolver = new OntologyMetadataResolver(
      await testSetup.auth(),
      "stack.palantir.com",
    );
  });

  afterAll(() => {
    apiServer.close();
  });

  it("emits a strict package name as the module specifier for external types", async () => {
    const packageName = "@example/widgets";
    const { files, compiled } = await generateAgainstExternalPackage(
      apiServer,
      resolver,
      packageName,
    );

    expect(moduleSpecifiersIn(files)).toContain(packageName);
    expect(injectionViolations(files)).toEqual([]);
    expect(injectionViolations(compiled)).toEqual([]);
  });

  it("does not execute a package name that closes the import quote", async () => {
    await expectPackageNameIsNotCode(
      apiServer,
      resolver,
      `safe";\nexport const ${MARKER} = 1;\nimport type { Unused } from "safe`,
    );
  });

  it("does not execute a package name that uses backslashes before the closing quote", async () => {
    await expectPackageNameIsNotCode(
      apiServer,
      resolver,
      `safe\\\\";\nexport const ${MARKER} = 1;\nimport type { Unused } from "safe`,
    );
  });
});

async function expectPackageNameIsNotCode(
  apiServer: SetupServerApi,
  resolver: OntologyMetadataResolver,
  npmPackageName: string,
): Promise<void> {
  const { files, compiled } = await generateAgainstExternalPackage(
    apiServer,
    resolver,
    npmPackageName,
  );

  expect([
    ...injectionViolations(files),
    ...injectionViolations(compiled).map((violation) =>
      `compiled ${violation}`
    ),
  ]).toEqual([]);
  expect(npmPackageName).not.toMatch(STRICT_NPM_PACKAGE_NAME);
}

async function generateAgainstExternalPackage(
  apiServer: SetupServerApi,
  resolver: OntologyMetadataResolver,
  npmPackageName: string,
): Promise<{
  files: Record<string, string>;
  compiled: Record<string, string>;
}> {
  apiServer.use(
    http.get(
      "https://stack.palantir.com/third-party-application-service/api/sdks/packages/:packageRid",
      () =>
        HttpResponse.json({
          rid: PACKAGE_RID,
          repositoryRid: REPOSITORY_RID,
          packageName: FOUNDRY_PACKAGE_NAME,
        }),
    ),
    http.get(
      "https://stack.palantir.com/third-party-application-service/api/sdks/:repositoryRid/:packageName/:version",
      () =>
        HttpResponse.json({
          sdkPackageRid: PACKAGE_RID,
          repositoryRid: REPOSITORY_RID,
          packageName: FOUNDRY_PACKAGE_NAME,
          version: PACKAGE_VERSION,
          inputs: {
            dataScope: {
              type: "ontologyV2",
              ontologyV2: {
                ontologyRid: ONTOLOGY_RID,
                objectTypes: [OFFICE_RID],
                linkTypes: [],
                actionTypes: [],
                functions: [],
                sdkPackages: {},
                interfaceTypes: [BAR_INTERFACE_RID],
              },
            },
          },
          npm: {
            npmPackageName,
            npmGeneratorVersion: "0.0.0",
            status: { type: "success" },
            enableBetaFeatures: false,
          },
        }),
    ),
  );

  const packageInfo = await resolver.getInfoForPackages(
    new Map([[PACKAGE_RID, PACKAGE_VERSION]]),
  );
  const ontologyInfo = await resolver.getWireOntologyDefinition(
    ONTOLOGY_RID,
    {
      objectTypesApiNamesToLoad: ["Employee"],
      linkTypesApiNamesToLoad: ["Employee.officeLink"],
      interfaceTypesApiNamesToLoad: ["FooInterface"],
      actionTypesApiNamesToLoad: [],
      queryTypesApiNamesToLoad: [],
    },
    packageInfo,
  );
  if (ontologyInfo.isErr()) {
    throw new Error(ontologyInfo.error.join("\n"));
  }

  addReferencesToExternalTypes(ontologyInfo.value);

  const helper = createMockMinimalFiles();
  let generationError: unknown;
  try {
    await generateClientSdkVersionTwoPointZero(
      ontologyInfo.value.requestedMetadata,
      "typescript-sdk/test",
      helper.minimalFiles,
      "/out",
      "module",
      ontologyInfo.value.externalObjects,
      ontologyInfo.value.externalInterfaces,
      new Map(),
      false,
      ontologyInfo.value.fixedVersionQueryTypes,
      false,
    );
  } catch (error) {
    generationError = error;
  }

  const files = helper.getFiles();
  const violations = injectionViolations(files);
  if (generationError != null && violations.length > 0) {
    throw new Error(
      `Generation refused only after writing injected source: ${
        violations.join("; ")
      }`,
      { cause: generationError },
    );
  }

  const typescriptSources = Object.fromEntries(
    Object.entries(files).filter(([file]) => file.endsWith(".ts")),
  );
  const compiled = Object.keys(typescriptSources).length === 0
    ? {}
    : compileInMemory(typescriptSources, "esm").files;

  return { files, compiled };
}

/**
 * The faux ontology has no action or query whose type is the external Office
 * or BarInterface. These two definitions are the wire shapes
 * `generatePerActionDataFiles` and `generatePerQueryDataFiles` already accept,
 * and they reference api names the resolver mapped from the SDK response.
 */
function addReferencesToExternalTypes(info: OntologyInfo): void {
  info.requestedMetadata.actionTypes.referenceOffice = {
    apiName: "referenceOffice",
    description: "References an external object and interface",
    status: "ACTIVE",
    parameters: {
      office: {
        displayName: "Office",
        dataType: {
          type: "object",
          objectApiName: "Office",
          objectTypeApiName: "Office",
        },
        required: true,
        typeClasses: [],
      },
      bar: {
        displayName: "Bar",
        dataType: {
          type: "interfaceObject",
          interfaceTypeApiName: "BarInterface",
        },
        required: true,
        typeClasses: [],
      },
    },
    rid: "ri.ontology.main.action-type.reference-office",
    operations: [],
  };
  info.requestedMetadata.queryTypes.referenceOffice = {
    apiName: "referenceOffice",
    parameters: {
      office: {
        dataType: {
          type: "object",
          objectApiName: "Office",
          objectTypeApiName: "Office",
        },
        required: true,
      },
      bar: {
        dataType: {
          type: "interfaceObject",
          interfaceTypeApiName: "BarInterface",
        },
        required: true,
      },
    },
    output: {
      type: "object",
      objectApiName: "Office",
      objectTypeApiName: "Office",
    },
    rid: "ri.ontology.main.query-type.reference-office",
    version: "1.0.0",
    typeReferences: {},
  };
}

function injectionViolations(files: Record<string, string>): string[] {
  const violations: string[] = [];
  for (const [file, source] of Object.entries(files)) {
    if (source.includes(MARKER)) {
      violations.push(`${file} contains ${MARKER}`);
    }
    if (identifiersNamed(source, file, MARKER).length > 0) {
      violations.push(`${file} parses ${MARKER} as an identifier`);
    }
    for (const specifier of moduleSpecifiers(source, file)) {
      if (isAllowedModuleSpecifier(specifier)) continue;
      violations.push(
        `${file} has module specifier ${JSON.stringify(specifier)}`,
      );
    }
  }
  return violations;
}

function isAllowedModuleSpecifier(specifier: string): boolean {
  return specifier.startsWith(".")
    || ALLOWED_GENERATED_SPECIFIERS.has(specifier)
    || STRICT_NPM_PACKAGE_NAME.test(specifier);
}

function moduleSpecifiersIn(files: Record<string, string>): string[] {
  return Object.entries(files).flatMap(([file, source]) =>
    moduleSpecifiers(source, file)
  );
}

function moduleSpecifiers(source: string, fileName: string): string[] {
  const specifiers: string[] = [];
  visit(source, fileName, (node) => {
    if (
      (ts.isImportDeclaration(node) || ts.isExportDeclaration(node))
      && node.moduleSpecifier != null
      && ts.isStringLiteral(node.moduleSpecifier)
    ) {
      specifiers.push(node.moduleSpecifier.text);
    }
  });
  return specifiers;
}

function identifiersNamed(
  source: string,
  fileName: string,
  name: string,
): string[] {
  const found: string[] = [];
  visit(source, fileName, (node) => {
    if (ts.isIdentifier(node) && node.text === name) {
      found.push(node.text);
    }
  });
  return found;
}

function visit(
  source: string,
  fileName: string,
  onNode: (node: ts.Node) => void,
): void {
  const scriptKind = fileName.endsWith(".ts")
    ? ts.ScriptKind.TS
    : ts.ScriptKind.JS;
  const sourceFile = ts.createSourceFile(
    fileName,
    source,
    ts.ScriptTarget.Latest,
    true,
    scriptKind,
  );
  const walk = (node: ts.Node): void => {
    onNode(node);
    ts.forEachChild(node, walk);
  };
  walk(sourceFile);
}
