/*
 * Copyright 2025 Palantir Technologies, Inc. All rights reserved.
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
import { fileURLToPath } from "node:url";

import color from "picocolors";
import sirv from "sirv";
import type { HtmlTagDescriptor, Plugin, ViteDevServer } from "vite";

import {
  CONFIG_FILE_SUFFIX,
  DEV_PLUGIN_ID,
  ENTRYPOINTS_PATH,
  FINISH_PATH,
  FINISH_SECRET_META_NAME,
  MODULE_EVALUATION_MODE,
  SETUP_PATH,
  VITE_INJECTIONS_PATH,
} from "../common/constants.js";
import { getInputHtmlEntrypoints } from "../common/getInputHtmlEntrypoints.js";
import { standardizePathAndFileExtension } from "../common/standardizePathAndFileExtension.js";
import { buildDevModeManifest } from "./buildDevModeManifest.js";
import { isCodeWorkspacesMode } from "./codeWorkspacesMode.js";
import { extractInjectedScripts } from "./extractInjectedScripts.js";
import {
  generateFinishSecret,
  getFinishRequestRejection,
  injectFinishSecretMeta,
  isTrustedHost,
  preventCorsHeaders,
} from "./finishAuth.js";
import { getBaseHref } from "./getBaseHref.js";
import { getFoundryToken } from "./getFoundryToken.js";
import { publishDevModeSettings } from "./publishDevModeSettings.js";
import { warnIfWrongDevCommand } from "./validateDevEnvironment.js";

// Location of the setup page assets
const DIR_DIST: string =
  typeof __dirname !== "undefined"
    ? __dirname
    : path.dirname(fileURLToPath(import.meta.url));

import type { FoundryWidgetPluginOptions } from "../index.js";

export function FoundryWidgetDevPlugin(
  pluginOptions?: FoundryWidgetPluginOptions,
): Plugin {
  // The root HTML entrypoints of the build process
  let htmlEntrypoints: string[];
  // Fully resolved paths to the entrypoint files, mapped to relative paths
  const codeEntrypoints: Record<string, string> = {};
  // Store the map of fully resolved config file paths to entrypoint file paths
  const configFileToEntrypoint: Record<string, string> = {};
  // Generated when the dev server starts and embedded in the setup page, which must present it
  // to the finish endpoint before dev mode settings are published with the developer's token
  let finishSecret: string | undefined;

  return {
    name: DEV_PLUGIN_ID,
    enforce: "pre",
    // Only apply this plugin during development, skip during tests and build-mode module evaluation
    apply(config, { command }) {
      if (
        config.mode === MODULE_EVALUATION_MODE ||
        process.env.VITEST != null
      ) {
        return false;
      }
      return command === "serve";
    },

    /**
     * Capture the entrypoints from the Vite config so that we can manually load them on our
     * setup page and trigger module parsing.
     */
    buildStart(options) {
      htmlEntrypoints = getInputHtmlEntrypoints(options);
    },

    /**
     * Check for the required token environment variable in dev mode.
     */
    configResolved(resolvedConfig) {
      warnIfWrongDevCommand(resolvedConfig.mode, resolvedConfig.logger);
      getFoundryToken(resolvedConfig.mode);
    },

    /**
     * Configure the Vite server to serve the setup page and handle the finish endpoint. This
     * endpoint will set the widget overrides in Foundry and enable dev mode.
     */
    configureServer(server) {
      const secret = generateFinishSecret();
      finishSecret = secret;

      // Override the printUrls function to print the setup page URL
      server.printUrls = () => printSetupPageUrl(server);

      /**
       * Redirect `./.palantir/setup` to `./.palantir/setup/` to ensure that relative paths work
       * correctly. Relative paths must be used so that the dev server UI can be accessed on
       * non-root paths.
       */
      server.middlewares.use(
        serverPath(server, SETUP_PATH),
        (req, res, next) => {
          if (req.originalUrl?.endsWith(serverPath(server, SETUP_PATH))) {
            res.statusCode = 301;
            res.setHeader("Location", `${serverPath(server, SETUP_PATH)}/`);
            res.end();
          } else {
            next();
          }
        },
      );

      /**
       * Serve the setup page document with the finish secret embedded. Other origins must not be
       * able to read it, so CORS headers are stripped from everything under the setup path.
       */
      server.middlewares.use(
        serverPath(server, SETUP_PATH),
        (req, res, next) => {
          preventCorsHeaders(res);
          if (!isTrustedHost(server, req.headers.host)) {
            res.statusCode = 403;
            res.end("Blocked request. This host is not allowed.");
            return;
          }
          if (!isSetupDocumentRequest(req.method, req.url)) {
            next();
            return;
          }
          const setupHtml = readSetupIndexHtml();
          if (setupHtml == null) {
            next();
            return;
          }
          res.setHeader("Content-Type", "text/html; charset=utf-8");
          res.setHeader("Cache-Control", "no-store");
          res.end(injectFinishSecretMeta(setupHtml, secret));
        },
      );

      /**
       * Serve the setup page that will load the entrypoints in iframes and trigger the finish
       * endpoint once widgets have been loaded.
       */
      server.middlewares.use(
        serverPath(server, SETUP_PATH),
        sirv(path.resolve(DIR_DIST, "../../site"), {
          single: true,
          dev: true,
        }),
      );

      /**
       * Make the entrypoints available to the setup page so that it can load them in iframes in
       * order to trigger module parsing.
       */
      server.middlewares.use(serverPath(server, ENTRYPOINTS_PATH), (_, res) => {
        res.setHeader("Content-Type", "application/json");
        res.end(
          JSON.stringify(
            htmlEntrypoints.map((entrypoint) => serverPath(server, entrypoint)),
          ),
        );
      });

      /**
       * Finish the setup process by setting the widget overrides in Foundry and enabling dev mode.
       */
      server.middlewares.use(
        serverPath(server, FINISH_PATH),
        async (req, res) => {
          const rejection = getFinishRequestRejection(server, req, secret);
          if (rejection != null) {
            server.config.logger.warn(
              `Rejected request to ${FINISH_PATH}: ${rejection}`,
            );
            res.setHeader("Content-Type", "application/json");
            res.setHeader("Cache-Control", "no-store");
            res.statusCode = 403;
            res.end(JSON.stringify({ status: "error", error: rejection }));
            return;
          }

          // Check for too many attempts
          if (req.url == null) {
            throw new Error("Request URL is undefined");
          }
          const url = new URL(req.url, `http://${req.headers.host}`);
          const numAttempts = parseInt(url.searchParams.get("attempt") ?? "0");
          if (numAttempts >= 10) {
            const errorMessage =
              "Timed out waiting for widget config files to be parsed. Are you sure a widget config is imported?";
            server.config.logger.error(errorMessage);
            res.setHeader("Content-Type", "application/json");
            res.statusCode = 500;
            res.end(
              JSON.stringify({
                status: "error",
                error: errorMessage,
              }),
            );
            return;
          }

          // Wait for the setup page to trigger the parsing of the config files
          const numEntrypoints = htmlEntrypoints.length;
          const numConfigFiles = Object.keys(configFileToEntrypoint).length;
          if (numConfigFiles < numEntrypoints) {
            server.config.logger.info(
              `Waiting for widget config files to be parsed, found ${numConfigFiles} config files out of` +
                ` ${numEntrypoints} HTML entrypoints.`,
            );
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify({ status: "pending" }));
            return;
          }

          // Build the dev mode manifest and finish the setup process
          const manifest = await buildDevModeManifest(
            server,
            codeEntrypoints,
            configFileToEntrypoint,
            getBaseHref(server),
            pluginOptions,
          );
          await publishDevModeSettings(server, manifest, res);
        },
      );

      /**
       * Serve scripts that would usually be injected into the HTML if Vite had control over the
       * serving of index HTML pages. This is necessary to ensure that plugins like React refresh
       * work correctly.
       */
      server.middlewares.use(
        serverPath(server, VITE_INJECTIONS_PATH),
        async (_, res) => {
          res.setHeader("Access-Control-Allow-Origin", "*");
          res.setHeader("Content-Type", "application/javascript");
          const injectedScripts = await extractInjectedScripts(server);
          res.end(injectedScripts.inlineScripts.join("\n"));
        },
      );
    },

    /**
     * When the prebuilt setup page is not available, Vite serves its own HTML fallback for the
     * setup path, so the finish secret is injected there instead.
     */
    transformIndexHtml(_html, ctx): HtmlTagDescriptor[] | undefined {
      if (
        finishSecret == null ||
        ctx.server == null ||
        ctx.originalUrl == null ||
        !ctx.originalUrl.startsWith(serverPath(ctx.server, SETUP_PATH))
      ) {
        return undefined;
      }
      return [
        {
          tag: "meta",
          attrs: { name: FINISH_SECRET_META_NAME, content: finishSecret },
          injectTo: "head-prepend",
        },
      ];
    },

    /**
     * As module imports are resolved, we need to capture the entrypoint file paths and the config
     * file paths that are imported from them.
     */
    resolveId(source, importer) {
      if (importer == null) {
        return;
      }

      // Standardize the source file extension and get the full path
      const standardizedSource = standardizePathAndFileExtension(
        getFullSourcePath(
          // If the source path is absolute, resolve it against the current working directory
          source.startsWith("/") ? path.join(process.cwd(), source) : source,
          importer,
        ),
      );
      // Importers are already full paths, so just standardize the extension
      const standardizedImporter = standardizePathAndFileExtension(importer);

      // In dev mode all entrypoints have a generic HTML importer value
      if (
        importer.endsWith("index.html") &&
        !standardizedSource.includes("@fs") &&
        // In a cold start, Vite may try to resolve files (e.g. a widget.html) before the user even accesses the dev mode server.
        // These files are not valid code entrypoints, so we ignore them here.
        path.extname(standardizedSource) !== ".html"
      ) {
        // Store the fully resolved path and the relative path, as we need the former for mapping
        // config files to entrypoints and the latter as a dev mode override script
        codeEntrypoints[standardizedSource] = source;
      }

      // Look for config files that are imported from an entrypoint file
      // Also check the config file being imported is in src to avoid picking up imports for other
      // project files like foundry.config.json / eslint.config.mjs when tailwind is used.
      if (
        standardizedSource
          .replace(/\.[^/.]+$/u, "")
          .endsWith(CONFIG_FILE_SUFFIX) &&
        standardizedSource.includes("/src/") &&
        codeEntrypoints[standardizedImporter] != null
      ) {
        const fullSourcePath = standardizePathAndFileExtension(
          getFullSourcePath(source, standardizedImporter),
        );
        configFileToEntrypoint[fullSourcePath] = standardizedImporter;
      }
    },

    handleHotUpdate({ file, server }) {
      const standardizedFile = standardizePathAndFileExtension(file);
      if (configFileToEntrypoint[standardizedFile] != null) {
        const reapplyInstruction = isCodeWorkspacesMode(server.config.mode)
          ? "   Refresh the preview panel to see your changes.\n"
          : `   Re-enter the developer mode setup URL to apply your changes:\n` +
            `   ${color.green(`${getBaseHref(server)}${SETUP_PATH}/`)}\n`;
        server.config.logger.warn(
          color.yellow(
            `\n⚠️  Detected a change to widget config file:\n` +
              `   ${file}\n\n` +
              reapplyInstruction,
          ),
        );
        return [];
      }
    },
  };
}

/**
 * During the resolution phase source are given as relative paths to the importer
 */
function getFullSourcePath(source: string, importer: string): string {
  return path.resolve(path.dirname(importer), source);
}

function readSetupIndexHtml(): string | undefined {
  try {
    return fs.readFileSync(
      path.resolve(DIR_DIST, "../../site/index.html"),
      "utf8",
    );
  } catch {
    return undefined;
  }
}

/**
 * The setup site is a single page app, so any non-asset path under the setup path is served the
 * index document.
 */
function isSetupDocumentRequest(
  method: string | undefined,
  url: string | undefined,
): boolean {
  if (method !== "GET" && method !== "HEAD") {
    return false;
  }
  const pathname = (url ?? "/").split(/[?#]/u)[0] ?? "/";
  return (
    pathname.endsWith("/index.html") || path.posix.extname(pathname) === ""
  );
}

function serverPath(server: ViteDevServer, subPath: string): string {
  // Don't use Windows-style paths when constructing URL paths for the HTTP server
  return path.posix.resolve(server.config.base, subPath);
}

function printSetupPageUrl(server: ViteDevServer) {
  if (isCodeWorkspacesMode(server.config.mode)) {
    server.config.logger.info(
      `  ${color.green("➜")}  ${color.bold(
        "Open the preview panel to enter developer mode",
      )}`,
    );
  } else {
    const setupRoute = `${getBaseHref(server)}${SETUP_PATH}/`;
    server.config.logger.info(
      `  ${color.green("➜")}  ${color.bold(
        "Click to enter developer mode for your widget set",
      )}: ${color.green(setupRoute)}`,
    );
  }
}
