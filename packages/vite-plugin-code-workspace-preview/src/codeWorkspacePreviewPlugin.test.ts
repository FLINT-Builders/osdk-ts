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

import { runInNewContext } from "node:vm";

import type {
  IndexHtmlTransformContext,
  IndexHtmlTransformResult,
  Plugin,
} from "vite";
import { describe, expect, it } from "vitest";

import { codeWorkspacePreviewPlugin } from "./codeWorkspacePreviewPlugin.js";
import { installReporter, reporterScript } from "./reporterScript.js";

function runTransform(
  plugin: Plugin,
  mode: string | undefined,
): IndexHtmlTransformResult | undefined {
  const hook = plugin.transformIndexHtml;
  if (typeof hook !== "function") {
    throw new TypeError("expected transformIndexHtml to be a function hook");
  }
  const ctx = {
    path: "/index.html",
    filename: "index.html",
    server: mode === undefined ? undefined : { config: { mode } },
  } as unknown as IndexHtmlTransformContext;
  return hook("", ctx) as IndexHtmlTransformResult | undefined;
}

describe("codeWorkspacePreviewPlugin", () => {
  it("injects nothing outside the active mode", () => {
    const plugin = codeWorkspacePreviewPlugin();
    expect(runTransform(plugin, "development")).toBeUndefined();
    expect(runTransform(plugin, "production")).toBeUndefined();
    expect(runTransform(plugin, undefined)).toBeUndefined();
  });

  it("injects the reporter as a head-prepend script in code-workspaces mode", () => {
    const plugin = codeWorkspacePreviewPlugin();
    expect(runTransform(plugin, "code-workspaces")).toEqual([
      { tag: "script", children: reporterScript(), injectTo: "head-prepend" },
    ]);
  });

  it("binds the reporter to a configured parent origin", () => {
    const plugin = codeWorkspacePreviewPlugin({
      parentOrigin: "https://parent.example/",
    });
    expect(runTransform(plugin, "code-workspaces")).toEqual([
      {
        tag: "script",
        children: reporterScript("https://parent.example"),
        injectTo: "head-prepend",
      },
    ]);
  });

  it("rejects a parent origin that is not a single http(s) origin", () => {
    for (const parentOrigin of [
      "*",
      "null",
      "parent.example",
      "https://parent.example/path",
      "https://user:pass@parent.example",
      "file:///tmp/preview",
    ]) {
      expect(() => codeWorkspacePreviewPlugin({ parentOrigin })).toThrow();
    }
  });

  it("honors a custom activation mode", () => {
    const plugin = codeWorkspacePreviewPlugin({ mode: "preview" });
    expect(runTransform(plugin, "code-workspaces")).toBeUndefined();
    expect(runTransform(plugin, "preview")).toHaveLength(1);
  });

  it("is dev-only", () => {
    expect(codeWorkspacePreviewPlugin().apply).toBe("serve");
  });
});

interface PostedMessage {
  source?: string;
  kind?: string;
  message?: string;
  stack?: string;
  [key: string]: unknown;
}
type Listener = (event: unknown) => void;
interface Poster {
  postMessage(data: PostedMessage, targetOrigin: string): void;
}
interface FakeWindow extends Poster {
  parent: Poster;
  location: { origin: string; ancestorOrigins?: string[] };
  addEventListener(type: string, listener: Listener, capture?: boolean): void;
  setTimeout(handler: () => void): void;
}
interface FakeDocument {
  querySelector(selector: string): { childElementCount: number } | null;
}

/**
 * Drives installReporter directly with fake browser globals so we can assert
 * what it posts to the parent frame without a full DOM. The fake window's
 * setTimeout runs synchronously so the deferred blank-check resolves at once.
 */
const PREVIEW_ORIGIN = "https://preview.example";

function runReporter(options: {
  framed: boolean;
  hasContent?: boolean;
  parentOrigin?: string;
  ancestorOrigins?: string[];
}): {
  posted: PostedMessage[];
  targetOrigins: string[];
  listeners: Map<string, Listener>;
  win: FakeWindow;
} {
  const posted: PostedMessage[] = [];
  const targetOrigins: string[] = [];
  const listeners = new Map<string, Listener>();
  const parentFrame: Poster = {
    postMessage: (data, targetOrigin) => {
      posted.push(data);
      targetOrigins.push(targetOrigin);
    },
  };
  const win: FakeWindow = {
    postMessage: (data, targetOrigin) => {
      posted.push(data);
      targetOrigins.push(targetOrigin);
    },
    parent: parentFrame,
    location: {
      origin: PREVIEW_ORIGIN,
      ancestorOrigins: options.ancestorOrigins,
    },
    addEventListener: (type, listener) => {
      listeners.set(type, listener);
    },
    setTimeout: (handler) => {
      handler();
    },
  };
  // Not framed => window.parent === window, which the reporter uses to bail out.
  win.parent = options.framed ? parentFrame : win;
  const document: FakeDocument = {
    querySelector: (selector) =>
      selector === "#root"
        ? { childElementCount: options.hasContent === true ? 1 : 0 }
        : null,
  };
  installReporter(
    win as unknown as Window,
    document as unknown as Document,
    options.parentOrigin,
  );
  return { posted, targetOrigins, listeners, win };
}

describe("installReporter", () => {
  it("posts a ready message on load when framed", () => {
    const { posted } = runReporter({ framed: true });
    expect(posted[0]).toMatchObject({ source: "osdk-preview", kind: "ready" });
  });

  it("posts only to the preview's own origin when no parent origin is given", () => {
    const { targetOrigins, listeners, win } = runReporter({
      framed: true,
      hasContent: false,
    });
    listeners.get("error")?.({ target: win, message: "boom" });
    expect(targetOrigins).toEqual([PREVIEW_ORIGIN, PREVIEW_ORIGIN]);
  });

  it("posts only to the configured parent origin", () => {
    const { targetOrigins, listeners, win } = runReporter({
      framed: true,
      hasContent: false,
      parentOrigin: "https://parent.example",
    });
    listeners.get("error")?.({ target: win, message: "boom" });
    listeners.get("unhandledrejection")?.({ reason: "nope" });
    expect(targetOrigins).toEqual([
      "https://parent.example",
      "https://parent.example",
      "https://parent.example",
    ]);
  });

  it("does nothing when the reported embedder is a different origin", () => {
    const { posted, listeners } = runReporter({
      framed: true,
      parentOrigin: "https://parent.example",
      ancestorOrigins: ["https://attacker.example"],
    });
    expect(posted).toHaveLength(0);
    expect(listeners.size).toBe(0);
  });

  it("refuses a wildcard parent origin", () => {
    const { posted, listeners } = runReporter({
      framed: true,
      parentOrigin: "*",
    });
    expect(posted).toHaveLength(0);
    expect(listeners.size).toBe(0);
  });

  it("does nothing when not running inside an iframe", () => {
    const { posted, listeners } = runReporter({ framed: false });
    expect(posted).toHaveLength(0);
    expect(listeners.size).toBe(0);
  });

  it("reports an uncaught error when the app rendered nothing", () => {
    const { posted, listeners, win } = runReporter({
      framed: true,
      hasContent: false,
    });
    const onError = listeners.get("error");
    expect(onError).toBeDefined();
    onError?.({ target: win, message: "boom", error: { stack: "trace" } });
    expect(posted).toContainEqual(
      expect.objectContaining({
        source: "osdk-preview",
        kind: "error",
        message: "boom",
        stack: "trace",
      }),
    );
  });

  it("reports a resource load failure with the failing element's url", () => {
    const { posted, listeners } = runReporter({
      framed: true,
      hasContent: false,
    });
    listeners.get("error")?.({
      target: { tagName: "SCRIPT", src: "/assets/chunk.js" },
    });
    expect(posted).toContainEqual(
      expect.objectContaining({
        source: "osdk-preview",
        kind: "error",
        message: "Failed to load script: /assets/chunk.js",
      }),
    );
  });

  it("stays quiet when the app rendered content despite an error event", () => {
    const { posted, listeners, win } = runReporter({
      framed: true,
      hasContent: true,
    });
    listeners.get("error")?.({ target: win, message: "boom" });
    // Only the initial ready message; the blank-check suppressed the error.
    expect(posted).toEqual([
      expect.objectContaining({ source: "osdk-preview", kind: "ready" }),
    ]);
  });

  it("reports an unhandled rejection", () => {
    const { posted, listeners } = runReporter({
      framed: true,
      hasContent: false,
    });
    listeners.get("unhandledrejection")?.({
      reason: { message: "nope", stack: "trace" },
    });
    expect(posted).toContainEqual(
      expect.objectContaining({
        source: "osdk-preview",
        kind: "unhandledrejection",
        message: "nope",
        stack: "trace",
      }),
    );
  });
});

describe("reporterScript", () => {
  // Guards the installReporter.toString() serialization: the emitted IIFE must
  // be self-contained and runnable verbatim in the browser (no references to
  // module-level names, transpiler helpers, etc.).
  it("runs verbatim as a self-contained IIFE and posts ready to the bound origin when framed", () => {
    const posted: PostedMessage[] = [];
    const targetOrigins: string[] = [];
    const parentFrame: Poster = {
      postMessage: (data, targetOrigin) => {
        posted.push(data);
        targetOrigins.push(targetOrigin);
      },
    };
    const win = {
      postMessage: (data: PostedMessage) => {
        posted.push(data);
      },
      parent: parentFrame,
      location: { origin: PREVIEW_ORIGIN },
      addEventListener: () => {},
      setTimeout: (fn: () => void) => {
        fn();
      },
    };
    runInNewContext(reporterScript("https://parent.example"), {
      window: win,
      document: { querySelector: () => null },
    });
    expect(posted[0]).toMatchObject({ source: "osdk-preview", kind: "ready" });
    expect(targetOrigins).toEqual(["https://parent.example"]);
  });

  it("cannot break out of the inline script element", () => {
    expect(reporterScript("https://parent.example")).not.toContain("</");
  });
});
