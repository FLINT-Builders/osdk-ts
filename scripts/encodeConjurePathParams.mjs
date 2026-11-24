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

// conjure-lite interpolates path parameters into the request path verbatim and
// its runtime does not encode them. This rewrites every generated endpoint so
// each path parameter goes through `encodePathSegment`.
//
// Usage: encodeConjurePathParams.mjs <generatedDir> <encodePathSegment.ts>

import { existsSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join, relative, resolve, sep } from "node:path";

const [, , outDirArg, helperArg] = process.argv;
if (outDirArg == null || helperArg == null) {
  console.error(
    "Usage: encodeConjurePathParams.mjs <generatedDir> <encodePathSegment.ts>",
  );
  process.exit(1);
}

const outDir = resolve(outDirArg);
const helperFile = resolve(helperArg);
if (!existsSync(helperFile)) {
  console.error(`Missing ${helperFile}`);
  process.exit(1);
}

const CONJURE_FETCH = /conjureFetch\(\s*ctx,\s*/g;
const IDENTIFIER_SLOT = /\$\{\s*([A-Za-z_$][\w$]*)\s*\}/g;
const ENCODED_SLOT = /\$\{encodePathSegment\([A-Za-z_$][\w$]*\)\}/g;
const CONJURE_LITE_IMPORT = /^import .* from "conjure-lite";?$/m;

function* walk(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) {
      yield* walk(path);
    } else if (entry.name.endsWith(".ts")) {
      yield path;
    }
  }
}

function importSpecifier(fromFile) {
  let specifier = relative(dirname(fromFile), helperFile)
    .split(sep)
    .join("/")
    .replace(/\.ts$/, ".js");
  if (!specifier.startsWith(".")) {
    specifier = `./${specifier}`;
  }
  return specifier;
}

function rewrite(file, source) {
  let changed = false;
  let output = "";
  let cursor = 0;
  for (const match of source.matchAll(CONJURE_FETCH)) {
    const start = match.index + match[0].length;
    if (source[start] !== "`") {
      throw new Error(
        `${file}: conjureFetch path is not a template literal; cannot encode its path parameters`,
      );
    }
    const end = source.indexOf("`", start + 1);
    const template = source.slice(start, end + 1);
    const encoded = template.replace(IDENTIFIER_SLOT, (_, name) => {
      changed = true;
      return `\${encodePathSegment(${name})}`;
    });
    if (encoded.replace(ENCODED_SLOT, "").includes("${")) {
      throw new Error(
        `${file}: unexpected expression in conjureFetch path ${template}`,
      );
    }
    output += source.slice(cursor, start) + encoded;
    cursor = end + 1;
  }
  output += source.slice(cursor);

  if (
    output.includes("encodePathSegment(") && !output.includes(
      "import { encodePathSegment }",
    )
  ) {
    const conjureImport = output.match(CONJURE_LITE_IMPORT);
    if (conjureImport == null) {
      throw new Error(`${file}: missing conjure-lite import`);
    }
    const at = conjureImport.index + conjureImport[0].length;
    output = `${output.slice(0, at)}\nimport { encodePathSegment } from "${
      importSpecifier(file)
    }";${output.slice(at)}`;
    changed = true;
  }
  return changed ? output : undefined;
}

let count = 0;
for (const file of walk(outDir)) {
  const source = readFileSync(file, "utf8");
  if (!source.includes("conjureFetch(")) {
    continue;
  }
  const output = rewrite(file, source);
  if (output !== undefined) {
    writeFileSync(file, output);
    count++;
  }
}
console.log(`  - Encoded path parameters in ${count} files under ${outDirArg}`);
