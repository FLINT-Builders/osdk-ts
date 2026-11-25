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

import type { Plugin } from "vite";

import { reporterScript } from "./reporterScript.js";

export interface CodeWorkspacePreviewOptions {
  /**
   * The Vite mode that activates injection. Defaults to "code-workspaces", the
   * dev server mode in Foundry Code Workspaces.
   */
  mode?: string;

  /**
   * Origin of the Code Workspaces page that embeds the preview, e.g.
   * "https://example.palantirfoundry.com". Error reports are posted only to
   * this origin, and only this origin may frame the preview.
   *
   * When omitted, reports are posted only to the preview's own origin and
   * framing is limited to `'self'`.
   */
  parentOrigin?: string;
}

function normalizeParentOrigin(value: string): string {
  let url: URL;
  try {
    url = new URL(value);
  } catch {
    throw new Error(
      `codeWorkspacePreviewPlugin: parentOrigin must be an absolute http(s) origin, got ${JSON.stringify(
        value,
      )}`,
    );
  }
  if (
    (url.protocol !== "https:" && url.protocol !== "http:") ||
    url.origin === "null" ||
    (value !== url.origin && value !== `${url.origin}/`)
  ) {
    throw new Error(
      `codeWorkspacePreviewPlugin: parentOrigin must be an http(s) origin with no path, query, or credentials, got ${JSON.stringify(
        value,
      )}`,
    );
  }
  return url.origin;
}

/**
 * Vite plugin that surfaces runtime errors from the Foundry Code Workspaces
 * preview. When running in the configured mode it injects a small inline script
 * (see {@link reporterScript}) that posts uncaught errors and unhandled
 * rejections to the parent frame, so a blank preview shows a reason
 * instead of a silent white screen.
 *
 * Dev-only (`apply: "serve"`) and gated on the Vite mode, so it never ships in
 * production builds and adds nothing to a normal local `npm run dev`.
 */
export function codeWorkspacePreviewPlugin(
  options: CodeWorkspacePreviewOptions = {},
): Plugin {
  const activeMode = options.mode ?? "code-workspaces";
  const parentOrigin =
    options.parentOrigin == null
      ? undefined
      : normalizeParentOrigin(options.parentOrigin);
  const script = reporterScript(parentOrigin);
  const frameAncestors = `frame-ancestors ${parentOrigin ?? "'self'"}`;
  return {
    name: "osdk-code-workspace-preview",
    apply: "serve",
    configureServer(server) {
      if (server.config.mode !== activeMode) {
        return;
      }
      server.middlewares.use((_req, res, next) => {
        res.setHeader("Content-Security-Policy", frameAncestors);
        next();
      });
    },
    transformIndexHtml(_html, ctx) {
      // ctx.server is present during serve; guard defensively regardless.
      if (ctx.server?.config.mode !== activeMode) {
        return;
      }
      return [
        {
          tag: "script",
          children: script,
          injectTo: "head-prepend",
        },
      ];
    },
  };
}
