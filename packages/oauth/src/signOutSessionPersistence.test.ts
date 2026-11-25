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

import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import type { TokenStorageType } from "./common.js";
import { createConfidentialOauthClient } from "./createConfidentialOauthClient.js";
import { createPublicOauthClient } from "./createPublicOauthClient.js";
import type { PublicOauthClient } from "./PublicOauthClient.js";

const CLIENT_ID = "public-client";
const CONFIDENTIAL_CLIENT_ID = "confidential-client";
const CLIENT_SECRET = "placeholder-client-secret";
const FOUNDRY_URL = "https://foundry.example";
const REDIRECT_URL = "https://app.example/oauth/callback";
const INITIAL_REFRESH = "placeholder-refresh-token";
const ROTATED_REFRESH = "placeholder-rotated-refresh-token";
const REQUESTED_SCOPES = [
  "api:read-data",
  "api:write-data",
  "api:use-ontologies-read",
  "api:use-ontologies-write",
]
  .sort()
  .join(" ");

type RevocationMode = "ok" | "network" | "rejected-response";

function storageKey(clientId: string): string {
  return `@osdk/oauth : refresh : ${clientId}`;
}

function createMemoryStorage(): Storage {
  const items = new Map<string, string>();
  return {
    get length() {
      return items.size;
    },
    clear() {
      items.clear();
    },
    getItem(key: string) {
      return items.get(key) ?? null;
    },
    key(index: number) {
      return [...items.keys()][index] ?? null;
    },
    removeItem(key: string) {
      items.delete(key);
    },
    setItem(key: string, value: string) {
      items.set(key, value);
    },
  };
}

function requestUrl(input: RequestInfo | URL): string {
  if (typeof input === "string") return input;
  if (input instanceof URL) return input.href;
  return input.url;
}

function requestBody(body: BodyInit | null | undefined): string {
  if (body == null) return "";
  if (typeof body === "string") return body;
  if (body instanceof URLSearchParams) return body.toString();
  return String(body);
}

/**
 * The browser bundle replaces TARGET with "browser". These tests run the
 * TypeScript source, so the same check has to see that value at runtime.
 */
function useBrowserTarget(): void {
  vi.stubEnv("TARGET", "browser");
}

describe("sign-out leaves no usable session", () => {
  const localStorage = createMemoryStorage();
  const sessionStorage = createMemoryStorage();
  let revocationMode: RevocationMode;
  let tokenResponses: number;
  let refreshGrants: string[];

  const fetchFn: typeof fetch = (input, init) => {
    const url = requestUrl(input);
    const body = requestBody(init?.body);
    if (url.endsWith("/api/oauth2/token")) {
      const params = new URLSearchParams(body);
      const grantType = params.get("grant_type");
      if (grantType === "refresh_token") {
        const refreshToken = params.get("refresh_token");
        if (refreshToken != null) refreshGrants.push(refreshToken);
      }
      tokenResponses += 1;
      const payload: Record<string, string | number> = {
        access_token: `placeholder-access-token-${tokenResponses}`,
        token_type: "Bearer",
        expires_in: 3600,
      };
      if (grantType === "refresh_token") {
        payload.refresh_token = ROTATED_REFRESH;
      }
      return Promise.resolve(Response.json(payload));
    }

    if (url.endsWith("/api/oauth2/revoke_token")) {
      if (revocationMode === "network") {
        return Promise.reject(new TypeError("placeholder network failure"));
      }
      if (revocationMode === "rejected-response") {
        return Promise.resolve(
          new Response("placeholder upstream failure", {
            status: 500,
            headers: { "content-type": "text/plain" },
          }),
        );
      }
      return Promise.resolve(new Response(null, { status: 200 }));
    }

    return Promise.reject(new Error(`unexpected oauth request: ${url}`));
  };

  function installBrowserGlobals(): void {
    useBrowserTarget();
    vi.stubGlobal("localStorage", localStorage);
    vi.stubGlobal("sessionStorage", sessionStorage);
    vi.stubGlobal("window", {
      location: {
        href: "https://app.example/home",
        pathname: "/home",
        toString() {
          return "https://app.example/home";
        },
        assign: vi.fn(),
      },
      history: {
        replaceState: vi.fn(),
      },
    });
  }

  function seedRefreshToken(storage: Storage): void {
    storage.setItem(
      storageKey(CLIENT_ID),
      JSON.stringify({
        refresh_token: INITIAL_REFRESH,
        requestedScopes: REQUESTED_SCOPES,
      }),
    );
  }

  function createPublicClient(
    tokenStorage: TokenStorageType,
  ): PublicOauthClient {
    return createPublicOauthClient(CLIENT_ID, FOUNDRY_URL, REDIRECT_URL, {
      tokenStorage,
      fetchFn,
    });
  }

  async function accessTokenOrSignedOut(
    client: PublicOauthClient,
  ): Promise<string | undefined> {
    try {
      return await client();
    } catch (error) {
      if (error instanceof Error && error.message === "Unable to redirect") {
        return undefined;
      }
      throw error;
    }
  }

  beforeEach(() => {
    revocationMode = "ok";
    tokenResponses = 0;
    refreshGrants = [];
    localStorage.clear();
    sessionStorage.clear();
    installBrowserGlobals();
  });

  afterEach(() => {
    vi.unstubAllGlobals();
    vi.unstubAllEnvs();
  });

  function browserStorage(tokenStorage: TokenStorageType): Storage {
    return tokenStorage === "sessionStorage" ? sessionStorage : localStorage;
  }

  function storedRefreshToken(
    tokenStorage: TokenStorageType,
  ): string | undefined {
    const raw = browserStorage(tokenStorage).getItem(storageKey(CLIENT_ID));
    if (raw == null) return undefined;
    const parsed: { refresh_token?: string } = JSON.parse(raw);
    return parsed.refresh_token;
  }

  async function signInThroughRefresh(
    tokenStorage: TokenStorageType,
  ): Promise<void> {
    const storage = browserStorage(tokenStorage);
    seedRefreshToken(storage);
    const client = createPublicClient(tokenStorage);
    await expect(client()).resolves.toBe("placeholder-access-token-1");
    expect(storedRefreshToken(tokenStorage)).toBe(ROTATED_REFRESH);
  }

  describe.each(["localStorage", "sessionStorage"] as const)(
    "%s",
    (tokenStorage) => {
      it("does not mint an access token when signOut runs before the reloaded client loads one", async () => {
        await signInThroughRefresh(tokenStorage);

        const reloaded = createPublicClient(tokenStorage);
        await reloaded.signOut().catch((error: unknown) => {
          if (!(error instanceof Error)) throw error;
        });

        refreshGrants = [];
        const minted = await accessTokenOrSignedOut(reloaded);
        expect({
          minted,
          refreshGrants,
          storedRefreshToken: storedRefreshToken(tokenStorage),
        }).toEqual({
          minted: undefined,
          refreshGrants: [],
          storedRefreshToken: undefined,
        });
      }, 15_000);

      it("does not keep the session when the revocation request rejects", async () => {
        await signInThroughRefresh(tokenStorage);
        const client = createPublicClient(tokenStorage);
        await expect(client()).resolves.toBe("placeholder-access-token-2");

        revocationMode = "network";
        refreshGrants = [];
        await expect(client.signOut()).rejects.toThrow();

        const minted = await accessTokenOrSignedOut(client);
        expect({
          minted,
          refreshGrants,
          storedRefreshToken: storedRefreshToken(tokenStorage),
        }).toEqual({
          minted: undefined,
          refreshGrants: [],
          storedRefreshToken: undefined,
        });
      }, 15_000);

      it("does not keep the session when the revocation response is not successful", async () => {
        await signInThroughRefresh(tokenStorage);
        const client = createPublicClient(tokenStorage);
        await expect(client()).resolves.toBe("placeholder-access-token-2");

        revocationMode = "rejected-response";
        refreshGrants = [];
        await expect(client.signOut()).rejects.toThrow();

        const minted = await accessTokenOrSignedOut(client);
        expect({
          minted,
          refreshGrants,
          storedRefreshToken: storedRefreshToken(tokenStorage),
        }).toEqual({
          minted: undefined,
          refreshGrants: [],
          storedRefreshToken: undefined,
        });
      }, 15_000);
    },
  );

  it("does not keep the confidential client session when revocation rejects", async () => {
    const client = createConfidentialOauthClient(
      CONFIDENTIAL_CLIENT_ID,
      CLIENT_SECRET,
      FOUNDRY_URL,
      ["api:read-data"],
      fetchFn,
    );

    await expect(client()).resolves.toBe("placeholder-access-token-1");
    const grantsBeforeSignOut = tokenResponses;

    revocationMode = "network";
    await expect(client.signOut()).rejects.toThrow();

    const minted = await client();
    expect({
      minted,
      performedNewGrant: tokenResponses === grantsBeforeSignOut + 1,
    }).toEqual({
      minted: "placeholder-access-token-2",
      performedNewGrant: true,
    });
  });
});
