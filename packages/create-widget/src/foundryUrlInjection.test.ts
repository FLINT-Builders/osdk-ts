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
// line comment. They pass when that value is rejected before any project file is created.

const PROBE_STATEMENT =
  "Reflect.set(globalThis,String.fromCharCode(105,110,106,101,99,116,105,111,110,80,114,111,98,101),1)";

const LINE_FEED_URL = `https://attacker.example\n${PROBE_STATEMENT}\n//`;
const CARRIAGE_RETURN_URL = `https://attacker.example\r${PROBE_STATEMENT}\r//`;
const LINE_SEPARATOR_URL = `https://attacker.example\u2028${PROBE_STATEMENT}\u2028//`;
const PARAGRAPH_SEPARATOR_URL = `https://attacker.example\u2029${PROBE_STATEMENT}\u2029//`;

const WIDGET_SET = "ri.widgetregistry..widget-set.fake";
const OSDK_PACKAGE = "@custom-widget/sdk";
const OSDK_REGISTRY_URL =
  "https://example.palantirfoundry.com/artifacts/api/repositories/ri.artifacts.main.repository.fake/contents/release/npm";

beforeEach(() => {
  const tmpDir = dirSync({ unsafeCleanup: true });
  vi.spyOn(process, "cwd").mockReturnValue(tmpDir.name);
  return () => {
    vi.restoreAllMocks();
    tmpDir.removeCallback();
  };
});

describe.each([
  LINE_FEED_URL,
  CARRIAGE_RETURN_URL,
  LINE_SEPARATOR_URL,
  PARAGRAPH_SEPARATOR_URL,
])("widget line comment %j", (foundryUrl) => {
  test("cli rejects the URL before creating a project", async () => {
    await expectNoInjection({
      foundryUrl,
      scaffold: () => cli(widgetArgs("injection-probe", foundryUrl)),
    });
  });

  test("run rejects the URL before creating a project", async () => {
    await expectNoInjection({
      foundryUrl,
      scaffold: () =>
        run({
          project: "injection-probe",
          overwrite: true,
          template: templateById("template-widget-react"),
          sdkVersion: "2.x",
          foundryUrl,
          widgetSet: WIDGET_SET,
          repository: undefined,
          osdkPackage: OSDK_PACKAGE,
          osdkRegistryUrl: OSDK_REGISTRY_URL,
        }),
    });
  });
});

async function expectNoInjection({
  foundryUrl,
  scaffold,
}: {
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

  const generatedPath = path.join(projectDir, "src", "Widget.tsx");
  if (fs.existsSync(generatedPath)) {
    const source = fs.readFileSync(generatedPath, "utf-8");
    const ran = widgetModuleRanProbe(source);
    expect(
      ran,
      `attacker statement from ${JSON.stringify(foundryUrl)} ran in src/Widget.tsx:\n${excerpt(source)}`,
    ).toBe(false);
  }

  expect(rejected, "malicious Foundry URL must be rejected").toBe(true);
  expect(
    fs.existsSync(projectDir),
    "rejection must not create a project directory",
  ).toBe(false);
}

function widgetArgs(project: string, foundryUrl: string): string[] {
  return [
    "npx",
    "@osdk/create-widget",
    project,
    "--overwrite",
    "--template",
    "template-widget-react",
    "--sdkVersion",
    "2.x",
    "--foundryUrl",
    foundryUrl,
    "--widgetSet",
    WIDGET_SET,
    "--osdkPackage",
    OSDK_PACKAGE,
    "--osdkRegistryUrl",
    OSDK_REGISTRY_URL,
  ];
}

function templateById(id: string): Template {
  const template = TEMPLATES.find((item) => item.id === id);
  if (template == null) {
    throw new Error(`Template ${id} was not generated`);
  }
  return template;
}

function widgetModuleRanProbe(source: string): boolean {
  const javascript = ts.transpileModule(source, {
    fileName: "Widget.tsx",
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2022,
      jsx: ts.JsxEmit.React,
      esModuleInterop: true,
    },
  }).outputText;
  const sandbox = {
    exports: {} as { Widget?: (props: Record<string, never>) => unknown },
    require: (): unknown => importStub(),
    injectionProbe: undefined as unknown,
  };
  try {
    vm.runInNewContext(javascript, sandbox);
  } catch {
    // Module init can throw after the component function has been defined.
  }
  const widget = sandbox.exports.Widget;
  if (typeof widget === "function") {
    try {
      widget({});
    } catch {
      // The injected statement is the first statement in the component.
    }
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
