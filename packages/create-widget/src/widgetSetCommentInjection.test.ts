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
import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";

import { cli } from "./cli.js";
import { consola } from "./consola.js";
import { TEMPLATES } from "./generatedNoCheck/templates.js";
import { run } from "./run.js";
import type { Template } from "./templates.js";

const SAFE_FOUNDRY_URL = "https://example.palantirfoundry.com";
const SAFE_WIDGET_SET =
  "ri.widgetregistry..widget-set.00000000-0000-4000-8000-000000000000";
const OSDK_PACKAGE = "@custom-widget/sdk";
const OSDK_REGISTRY_URL =
  "https://example.palantirfoundry.com/artifacts/api/repositories/ri.artifacts.main.repository.fake/contents/release/npm";

/**
 * JavaScript line terminators. Any of these ends a // comment, so a value
 * placed in one can continue as source on the next line.
 */
const LINE_TERMINATORS: readonly { name: string; value: string }[] = [
  { name: "line feed", value: "\n" },
  { name: "carriage return", value: "\r" },
  { name: "line separator", value: "\u2028" },
  { name: "paragraph separator", value: "\u2029" },
];

/**
 * Statement that calls fetch(1) and then comments out the rest of the
 * template line. It uses no dot, quote, or equals sign, so it still matches
 * the widget-set check and is left unchanged by Handlebars HTML escaping.
 */
function widgetSetPayload(terminator: string): string {
  return `${SAFE_WIDGET_SET}${terminator}void fetch(1)//`;
}

/**
 * Same comment sink, with dots allowed, so the value can build the same
 * fetch(1) call through eval and String.fromCharCode.
 */
function foundryUrlPayload(terminator: string): string {
  return `${SAFE_FOUNDRY_URL}${terminator}eval(String.fromCharCode(102,101,116,99,104,40,49,41))//`;
}

let projectRoot: string;

beforeEach(() => {
  const tmpDir = dirSync({ unsafeCleanup: true });
  projectRoot = tmpDir.name;
  vi.spyOn(process, "cwd").mockReturnValue(projectRoot);
  vi.spyOn(process, "exit").mockImplementation(((code?: number) => {
    throw new Error(`process.exit ${String(code)}`);
  }) as typeof process.exit);
  vi.spyOn(consola, "prompt").mockImplementation((message) =>
    safePrompt(message),
  );
  return () => {
    vi.restoreAllMocks();
    tmpDir.removeCallback();
  };
});

afterEach(() => {
  vi.restoreAllMocks();
});

describe("widget set identifier interpolated into Widget.tsx", () => {
  test.each(LINE_TERMINATORS)(
    "cli --widgetSet does not execute source smuggled with a $name",
    async ({ value }) => {
      const project = "widget-set-cli";
      await expectNoInjectedFetch(project, () =>
        cli(cliArgs(project, { widgetSet: widgetSetPayload(value) })),
      );
    },
  );

  test("interactive widget-set prompt does not execute a smuggled statement", async () => {
    const project = "widget-set-prompt";
    let answers = 0;
    vi.mocked(consola.prompt).mockImplementation((message: unknown) => {
      const text = String(message);
      if (!text.includes("widget set")) {
        return safePrompt(message);
      }
      answers += 1;
      return answers === 1 ? widgetSetPayload("\n") : SAFE_WIDGET_SET;
    });

    await expectNoInjectedFetch(project, () =>
      cli(cliArgs(project, { widgetSet: undefined })),
    );
  });

  test("run does not execute a smuggled statement when the prompt is skipped", async () => {
    const project = "widget-set-run";
    const template = reactTemplate();
    await expectNoInjectedFetch(project, () =>
      run({
        project,
        overwrite: true,
        template,
        sdkVersion: "2.x",
        foundryUrl: SAFE_FOUNDRY_URL,
        widgetSet: widgetSetPayload("\n"),
        repository: undefined,
        osdkPackage: OSDK_PACKAGE,
        osdkRegistryUrl: OSDK_REGISTRY_URL,
      }),
    );
  });
});

describe("foundry URL interpolated into the same Widget.tsx comment", () => {
  test.each(LINE_TERMINATORS)(
    "cli --foundryUrl does not execute source smuggled with a $name",
    async ({ value }) => {
      const project = "foundry-url-cli";
      await expectNoInjectedFetch(project, () =>
        cli(
          cliArgs(project, {
            foundryUrl: foundryUrlPayload(value),
            widgetSet: SAFE_WIDGET_SET,
          }),
        ),
      );
    },
  );
});

function reactTemplate(): Template {
  const template = TEMPLATES.find(
    (item) => item.id === "template-widget-react",
  );
  if (template == null) {
    throw new Error("template-widget-react is missing");
  }
  return template;
}

function cliArgs(
  project: string,
  options: { widgetSet?: string; foundryUrl?: string },
): string[] {
  const args = [
    "npx",
    "@osdk/create-widget",
    project,
    "--overwrite",
    "--template",
    "template-widget-react",
    "--sdkVersion",
    "2.x",
    "--foundryUrl",
    options.foundryUrl ?? SAFE_FOUNDRY_URL,
    "--osdkPackage",
    OSDK_PACKAGE,
    "--osdkRegistryUrl",
    OSDK_REGISTRY_URL,
  ];
  if (options.widgetSet != null) {
    args.push("--widgetSet", options.widgetSet);
  }
  return args;
}

function safePrompt(message: unknown): string {
  const text = String(message);
  if (text.includes("widget set")) {
    return SAFE_WIDGET_SET;
  }
  if (text.includes("Foundry stack")) {
    return SAFE_FOUNDRY_URL;
  }
  throw new Error(`Unexpected prompt: ${text}`);
}

/**
 * A refusal must not leave the generated project behind. A completed scaffold
 * must not run the statement carried in from the identifier.
 */
async function expectNoInjectedFetch(
  project: string,
  scaffold: () => Promise<void>,
): Promise<void> {
  const projectDir = path.join(projectRoot, project);
  let failure: unknown;
  try {
    await scaffold();
  } catch (error) {
    failure = error;
  }

  if (failure !== undefined) {
    expect(fs.existsSync(projectDir)).toBe(false);
    return;
  }

  for (const file of typescriptFiles(projectDir)) {
    const source = fs.readFileSync(file, "utf-8");
    expect(fetchArguments(source), file).toEqual([]);
  }
}

function typescriptFiles(dir: string): string[] {
  if (!fs.existsSync(dir)) {
    return [];
  }
  const files: string[] = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...typescriptFiles(fullPath));
    } else if (entry.name.endsWith(".ts") || entry.name.endsWith(".tsx")) {
      files.push(fullPath);
    }
  }
  return files;
}

/**
 * Transpile with the TypeScript compiler the scaffold's build script runs,
 * then call the widget function. Imports are stubbed so the injected
 * statement is the part under test.
 */
function stubModule(): object {
  const callable = Object.assign(() => ({}), {
    withTypes: () => ({}),
  });
  return new Proxy(
    { __esModule: true, default: callable },
    {
      get(target, prop, receiver) {
        if (Reflect.has(target, prop)) {
          return Reflect.get(target, prop, receiver);
        }
        return callable;
      },
    },
  );
}

function fetchArguments(source: string): unknown[][] {
  const transpiled = ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2022,
      jsx: ts.JsxEmit.React,
      esModuleInterop: true,
    },
    fileName: "Widget.tsx",
  }).outputText;

  const calls: unknown[][] = [];
  const exportsObject: { Widget?: () => unknown } = {};
  const sandbox = vm.createContext({
    exports: exportsObject,
    module: { exports: exportsObject },
    require: stubModule,
    console,
    window: { location: { origin: "https://example.test" } },
    document: { getElementById: () => ({}) },
    fetch: (...args: unknown[]) => {
      calls.push(args);
      return Promise.resolve(undefined);
    },
    String,
  });
  vm.runInContext(transpiled, sandbox, { filename: "Widget.js" });

  const widget = exportsObject.Widget;
  if (widget == null) {
    return calls;
  }
  try {
    widget();
  } catch {
    // The component body continues into hook calls after the injected line.
  }
  return calls;
}
