/*
 * Copyright 2024 Palantir Technologies, Inc. All rights reserved.
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

import Handlebars from "handlebars";

import { consola } from "./consola.js";
import { generateFoundryConfigJson } from "./generate/generateFoundryConfigJson.js";
import { generateNpmRc } from "./generate/generateNpmRc.js";
import { green } from "./highlight.js";
import type { SdkVersion, Template, TemplateContext } from "./templates.js";
import {
  NPM_PACKAGE_NAME_REGEX,
  parseFoundryUrl,
  parseHttpsUrl,
  PROJECT_NAME_REGEX,
  WIDGET_SET_RID_REGEX,
} from "./validation.js";

interface RunArgs {
  project: string;
  overwrite: boolean;
  template: Template;
  sdkVersion: SdkVersion;
  foundryUrl: string;
  widgetSet: string;
  repository: string | undefined;
  osdkPackage?: string;
  osdkRegistryUrl?: string;
}

export async function run({
  project,
  overwrite,
  template,
  sdkVersion,
  foundryUrl: rawFoundryUrl,
  widgetSet,
  repository,
  osdkPackage,
  osdkRegistryUrl,
}: RunArgs): Promise<void> {
  const foundryUrl = parseFoundryUrl(rawFoundryUrl);
  if (foundryUrl == null) {
    throw new Error(`Invalid Foundry URL: ${JSON.stringify(rawFoundryUrl)}`);
  }
  if (osdkRegistryUrl != null && parseHttpsUrl(osdkRegistryUrl) == null) {
    throw new Error(
      `Invalid OSDK registry URL: ${JSON.stringify(osdkRegistryUrl)}`,
    );
  }
  assertMatches("project name", project, PROJECT_NAME_REGEX);
  assertMatches("widget set rid", widgetSet, WIDGET_SET_RID_REGEX);
  assertMatches("OSDK package name", osdkPackage, NPM_PACKAGE_NAME_REGEX);

  consola.log("");
  consola.start(
    `Creating project ${green(project)} using template ${green(template.id)}`,
  );

  const cwd = process.cwd();
  const root = path.join(cwd, project);

  if (fs.existsSync(root)) {
    if (overwrite) {
      consola.info(`Overwriting existing project directory`);
      fs.rmSync(root, { recursive: true, force: true });
      fs.mkdirSync(root, { recursive: true });
    } else {
      consola.info(`Reusing existing project directory`);
    }
  } else {
    consola.info(`Creating project directory`);
    fs.mkdirSync(root, { recursive: true });
  }

  consola.info(`Copying files into project directory`);

  if (template.files[sdkVersion] == null) {
    throw new Error(
      `The ${template.label} template does not support a "${sdkVersion}" SDK version.`,
    );
  }

  const files: Map<
    string,
    { type: "base64"; body: string } | { type: "raw"; body: string }
  > = await template.files[sdkVersion]();

  for (const [filePath, contents] of files) {
    const finalPath = path.join(root, filePath);
    const dirPath = path.dirname(finalPath);
    await fs.promises.mkdir(dirPath, { recursive: true });
    await fs.promises.writeFile(
      finalPath,
      Buffer.from(contents.body, contents.type === "raw" ? "utf-8" : "base64"),
    );
  }

  const templateContext: TemplateContext = {
    project,
    foundryUrl,
    widgetSet,
    osdkPackage,
  };
  const processFiles = function (dir: string) {
    fs.readdirSync(dir).forEach((file) => {
      let fullPath = dir + "/" + file;
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory()) {
        processFiles(fullPath);
        return;
      }

      if (fullPath.endsWith("/_gitignore")) {
        fs.renameSync(
          fullPath,
          fullPath.replace(/\/_gitignore$/u, "/.gitignore"),
        );
        return;
      }

      // Files with the `.osdk` extension are only kept if the application uses an OSDK
      if (file.includes(".osdk")) {
        if (osdkPackage == null) {
          fs.rmSync(fullPath);
          return;
        } else {
          const renamed = dir + "/" + file.replace(".osdk", "");
          fs.renameSync(fullPath, renamed);
          fullPath = renamed;
        }
        // Files with the `.no-osdk` extension are only kept if the application does not use an OSDK
      } else if (file.includes(".no-osdk")) {
        if (osdkPackage == null) {
          const renamed = dir + "/" + file.replace(".no-osdk", "");
          fs.renameSync(fullPath, renamed);
          fullPath = renamed;
        } else {
          fs.rmSync(fullPath);
          return;
        }
      }

      if (!fullPath.endsWith(".hbs")) {
        return;
      }
      const templated = Handlebars.compile(fs.readFileSync(fullPath, "utf-8"))(
        templateContext,
      );
      fs.writeFileSync(fullPath.replace(/.hbs$/u, ""), templated);
      fs.rmSync(fullPath);
    });
  };
  processFiles(root);

  const useOsdk = osdkPackage != null || osdkRegistryUrl != null;
  if (useOsdk) {
    if (osdkPackage == null || osdkRegistryUrl == null) {
      throw new Error(
        `Template ${template.id} requires OSDK package and registry URL`,
      );
    }
    const npmRc = generateNpmRc({ osdkPackage, osdkRegistryUrl, foundryUrl });
    fs.writeFileSync(path.join(root, ".npmrc"), npmRc);
  }

  const foundryConfigJson = generateFoundryConfigJson({
    foundryUrl,
    widgetSet,
    repository,
    directory: template.buildDirectory,
  });
  fs.writeFileSync(path.join(root, "foundry.config.json"), foundryConfigJson);

  consola.success("Success");

  const cdRelative = path.relative(cwd, root);
  consola.box({
    message:
      `Done! Run the following commands to get started:\n` +
      `\n` +
      `  \`cd ${cdRelative}\`\n` +
      `  \`export FOUNDRY_TOKEN=<token>\`\n` +
      `  \`npm install\`\n` +
      `  \`npm run dev\``,
    style: {
      padding: 2,
      borderColor: "green",
      borderStyle: "rounded",
    },
  });
}

function assertMatches(
  name: string,
  value: string | undefined,
  regex: RegExp,
): void {
  if (value != null && !regex.test(value)) {
    throw new Error(`Invalid ${name}: ${JSON.stringify(value)}`);
  }
}
