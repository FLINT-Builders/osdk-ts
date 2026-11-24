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

import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";

import { dirSync } from "tmp";
import ts from "typescript";
import { beforeEach, describe, expect, test, vi } from "vitest";

import { cli } from "./cli.js";
import { TEMPLATES } from "./generatedNoCheck/templates.js";
import { run } from "./run.js";
import type { Template } from "./templates.js";

// These tests are the spec for the Foundry URL injection fix. They fail while a
// value that only has to start with "https://" is copied into a generated
// comment. They pass when that value is rejected before any project file is created.

const PROBE_STATEMENT =
  "Reflect.set(globalThis,String.fromCharCode(105,110,106,101,99,116,105,111,110,80,114,111,98,101),1)";

// `*/` closes the platform-client block comment. The following call is real
// source, and `/*` comments out the rest of the documentation comment.
const SAME_LINE_URL = `https://attacker.example*/${PROBE_STATEMENT}/*`;
const NEWLINE_URL = `https://attacker.example\n*/\n${PROBE_STATEMENT}\n/*`;
const CARRIAGE_RETURN_URL = `https://attacker.example\r*/\r${PROBE_STATEMENT}\r/*`;
const LINE_SEPARATOR_URL = `https://attacker.example\u2028*/\u2028${PROBE_STATEMENT}\u2028/*`;

const APPLICATION = "ri.third-party-applications.main.application.fake";

beforeEach(() => {
  const tmpDir = dirSync({ unsafeCleanup: true });
  vi.spyOn(process, "cwd").mockReturnValue(tmpDir.name);
  return () => {
    vi.restoreAllMocks();
    tmpDir.removeCallback();
  };
});

describe.each([
  ["react same line", "template-react", "src/client.ts", SAME_LINE_URL],
  ["vue line feed", "template-vue", "src/client.ts", NEWLINE_URL],
  [
    "expo carriage return",
    "template-expo",
    "foundry/client.ts",
    CARRIAGE_RETURN_URL,
  ],
  [
    "react line separator",
    "template-react",
    "src/client.ts",
    LINE_SEPARATOR_URL,
  ],
] as const)("%s", (_label, templateId, relativePath, foundryUrl) => {
  test("cli rejects the URL before creating a project", async () => {
    await expectNoInjection({
      relativePath,
      foundryUrl,
      scaffold: () => cli(appArgs("injection-probe", templateId, foundryUrl)),
    });
  });

  test("run rejects the URL before creating a project", async () => {
    const template = templateById(templateId);
    await expectNoInjection({
      relativePath,
      foundryUrl,
      scaffold: () =>
        run({
          project: "injection-probe",
          overwrite: true,
          template,
          sdkVersion: "2.x",
          foundryUrl,
          applicationUrl: "https://app.example.com",
          application: APPLICATION,
          ontology: undefined,
          clientId: "abc123",
          osdkPackage: undefined,
          osdkRegistryUrl: undefined,
          corsProxy: false,
          scopes: ["api:read-data"],
        }),
    });
  });
});

async function expectNoInjection({
  relativePath,
  foundryUrl,
  scaffold,
}: {
  relativePath: string;
  foundryUrl: string;
  scaffold: () => Promise<void>;
}): Promise<void> {
  const projectDir = path.join(process.cwd(), "injection-probe");
  expect(fs.existsSync(projectDir)).toBe(false);

  let rejected = false;
  try {
    await scaffold();
  } catch {
    rejected = true;
  }

  const generatedPath = path.join(projectDir, relativePath);
  if (fs.existsSync(generatedPath)) {
    const source = fs.readFileSync(generatedPath, "utf-8");
    const ran = generatedModuleRanProbe(source, generatedPath);
    expect(
      ran,
      `attacker statement from ${JSON.stringify(foundryUrl)} ran in ${relativePath}:\n${excerpt(source)}`,
    ).toBe(false);
  }

  expect(rejected, "malicious Foundry URL must be rejected").toBe(true);
  expect(
    fs.existsSync(projectDir),
    "rejection must not create a project directory",
  ).toBe(false);
}

function appArgs(
  project: string,
  templateId: string,
  foundryUrl: string,
): string[] {
  return [
    "npx",
    "@osdk/create-app",
    project,
    "--overwrite",
    "--template",
    templateId,
    "--sdkVersion",
    "2.x",
    "--foundryUrl",
    foundryUrl,
    "--applicationUrl",
    "https://app.example.com",
    "--application",
    APPLICATION,
    "--clientId",
    "abc123",
    "--corsProxy",
    "false",
    "--scopes",
    "api:read-data",
    "--skipOsdk",
    "true",
  ];
}

function templateById(id: string): Template {
  const template = TEMPLATES.find((item) => item.id === id);
  if (template == null) {
    throw new Error(`Template ${id} was not generated`);
  }
  return template;
}

function generatedModuleRanProbe(source: string, fileName: string): boolean {
  const javascript = ts.transpileModule(source, {
    fileName,
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2022,
      esModuleInterop: true,
    },
  }).outputText;
  const sandbox = {
    exports: {},
    require: (): unknown => importStub(),
    document: {
      querySelectorAll: () => ({
        length: 1,
        item: () => ({
          getAttribute: () => "configured",
        }),
      }),
    },
    injectionProbe: undefined as unknown,
  };
  try {
    vm.runInNewContext(javascript, sandbox);
  } catch {
    // A later call may throw after the injected statement has already run.
  }
  return sandbox.injectionProbe === 1;
}

function importStub(): unknown {
  const fn = (): unknown => proxy;
  const proxy: unknown = new Proxy(fn, {
    get() {
      return proxy;
    },
    apply() {
      return proxy;
    },
  });
  return proxy;
}

function excerpt(source: string): string {
  const at = source.indexOf("Reflect.set");
  if (at === -1) {
    return source.slice(0, 500);
  }
  return source.slice(Math.max(0, at - 160), at + 220);
}
