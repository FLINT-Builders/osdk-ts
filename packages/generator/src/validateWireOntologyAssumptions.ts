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

import type { ObjectPropertyType } from "@osdk/foundry.ontologies";
import invariant from "tiny-invariant";
import type { WireOntologyDefinition } from "./WireOntologyDefinition.js";

/*
 * Ontology metadata is copied into generated TypeScript as identifiers, file
 * names, and string literals. Anything that does not match these allowlists
 * must be rejected before generation touches the filesystem.
 */
const IDENTIFIER = /^[A-Za-z_][A-Za-z0-9_]*$/u;
const NAMESPACE_SEGMENT = /^[A-Za-z0-9_][A-Za-z0-9_-]*$/u;
// Action api names and parameter ids may be kebab-case on the wire.
const KEBAB_IDENTIFIER = /^[A-Za-z_][A-Za-z0-9_]*(?:-[A-Za-z0-9_]+)*$/u;
const RID = /^[A-Za-z0-9._-]+$/u;
const TYPE_REFERENCE_ID = /^[A-Za-z0-9_-]+$/u;

export function validateWireOntologyAssumptions(
  ontology: WireOntologyDefinition,
): void {
  invariantNotStartWithDollarSign(ontology.ontology.apiName);
  invariantRid(ontology.ontology.rid, "ontology rid");
  if (ontology.branch != null) {
    invariantRid(ontology.branch.rid, "branch rid");
  }

  for (const [objectKey, objectType] of Object.entries(ontology.objectTypes)) {
    invariantMapKeyMatchesApiName(objectKey, objectType.objectType);
    invariantNotStartWithDollarSign(objectType.objectType.apiName);
    invariantApiName(objectType.objectType.apiName, "object type api name");
    invariantRid(objectType.objectType.rid, "object type rid");
    invariantIdentifier(objectType.objectType.primaryKey, "primary key");

    for (
      const [propertyKey, propertyType] of Object.entries(
        objectType.objectType.properties,
      )
    ) {
      invariantNotStartWithDollarSign(propertyKey);
      invariantIdentifier(propertyKey, "property api name");
      validatePropertyDataType(propertyType.dataType);
    }

    for (const linkType of objectType.linkTypes ?? []) {
      invariantIdentifier(linkType.apiName, "link type api name");
      invariantApiName(linkType.objectTypeApiName, "link target api name");
    }

    for (const interfaceApiName of objectType.implementsInterfaces ?? []) {
      invariantApiName(interfaceApiName, "implemented interface api name");
    }
    for (
      const interfaceApiName of Object.keys(
        objectType.implementsInterfaces2 ?? {},
      )
    ) {
      invariantApiName(interfaceApiName, "implemented interface api name");
    }
  }

  for (const interfaceType of Object.values(ontology.interfaceTypes ?? {})) {
    invariantApiName(interfaceType.apiName, "interface type api name");
    invariantRid(interfaceType.rid, "interface type rid");

    for (
      const properties of [
        interfaceType.properties,
        interfaceType.allProperties,
        interfaceType.propertiesV2,
        interfaceType.allPropertiesV2,
      ]
    ) {
      for (const [propertyKey, property] of Object.entries(properties ?? {})) {
        invariantApiName(propertyKey, "interface property api name");
        if ("dataType" in property) {
          validatePropertyDataType(property.dataType);
        }
      }
    }

    for (const links of [interfaceType.links, interfaceType.allLinks]) {
      for (const [linkKey, link] of Object.entries(links ?? {})) {
        invariantApiName(linkKey, "interface link api name");
        invariantApiName(
          link.linkedEntityApiName.apiName,
          "interface link target api name",
        );
      }
    }

    for (
      const parent of [
        ...(interfaceType.extendsInterfaces ?? []),
        ...(interfaceType.allExtendsInterfaces ?? []),
      ]
    ) {
      invariantApiName(parent, "extended interface api name");
    }
  }

  for (const actionType of Object.values(ontology.actionTypes ?? {})) {
    invariantApiName(
      actionType.apiName,
      "action type api name",
      KEBAB_IDENTIFIER,
    );
    for (const parameterId of Object.keys(actionType.parameters ?? {})) {
      invariant(
        KEBAB_IDENTIFIER.test(parameterId),
        `Invalid action parameter id: ${JSON.stringify(parameterId)}`,
      );
    }
  }

  for (const queryType of Object.values(ontology.queryTypes ?? {})) {
    invariantApiName(queryType.apiName, "query type api name");
    for (const typeId of Object.keys(queryType.typeReferences ?? {})) {
      invariant(
        TYPE_REFERENCE_ID.test(typeId),
        `Invalid query type reference id: ${JSON.stringify(typeId)}`,
      );
    }
  }

  for (const spt of Object.values(ontology.sharedPropertyTypes ?? {})) {
    invariantApiName(spt.apiName, "shared property type api name");
    validatePropertyDataType(spt.dataType);
  }
}

export function validateExternalApiNames(
  externals: Map<string, string>,
): void {
  for (const apiName of externals.keys()) {
    invariantApiName(apiName, "external type api name");
  }
}

function validatePropertyDataType(
  dataType: ObjectPropertyType | undefined,
): void {
  if (dataType == null) return;
  if (dataType.type === "array") {
    validatePropertyDataType(dataType.subType);
  } else if (dataType.type === "struct") {
    for (const field of dataType.structFieldTypes ?? []) {
      invariantIdentifier(field.apiName, "struct field api name");
      validatePropertyDataType(field.dataType);
    }
  }
}

function invariantIdentifier(value: string, what: string): void {
  invariant(
    typeof value === "string" && IDENTIFIER.test(value),
    `Invalid ${what}: ${JSON.stringify(value)}`,
  );
}

function invariantApiName(
  value: string,
  what: string,
  shortNamePattern: RegExp = IDENTIFIER,
): void {
  invariant(typeof value === "string", `Invalid ${what}`);
  const segments = value.split(".");
  const shortName = segments.pop()!;
  invariant(
    shortNamePattern.test(shortName)
      && segments.every(segment => NAMESPACE_SEGMENT.test(segment)),
    `Invalid ${what}: ${JSON.stringify(value)}`,
  );
}

function invariantRid(value: string, what: string): void {
  invariant(
    typeof value === "string" && RID.test(value),
    `Invalid ${what}: ${JSON.stringify(value)}`,
  );
}

function invariantMapKeyMatchesApiName(
  key: string,
  value: { apiName: string },
) {
  invariant(
    key === value.apiName,
    "Key in the map should be the same as the apiName.",
  );
}
function invariantNotStartWithDollarSign(value: string) {
  invariant(
    !value.startsWith("$"),
    "apiName should not start with $",
  );
}
