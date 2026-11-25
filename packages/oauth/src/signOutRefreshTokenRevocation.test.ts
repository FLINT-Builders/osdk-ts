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

import type { Client } from "oauth4webapi";
import {
  customFetch,
  isOAuth2Error,
  processAuthorizationCodeOAuth2Response,
  refreshTokenGrantRequest,
} from "oauth4webapi";
import { afterEach, describe, expect, it, vi } from "vitest";

import { createAuthorizationServer } from "./common.js";
import { createConfidentialOauthClient } from "./createConfidentialOauthClient.js";
import { createPublicOauthClient } from "./createPublicOauthClient.js";
import type { PublicOauthClient } from "./PublicOauthClient.js";

/**
 * Authorization-server double for the revocation and token endpoints this
 * client calls.
 *
 * oauth4webapi 2.17.0 posts the string passed to revocationRequest as the
 * form parameter `token` and does not add any other token
 * (build/index.js revocationRequest). RFC 7009 section 2.1 invalidates that
 * presented token. Revoking a refresh token should also invalidate access
 * tokens from the same grant. Revoking an access token MAY revoke the
 * refresh token, and this double does not: that is the policy the client
 * has to tolerate, because the specification does not require it.
 */

const FOUNDRY_URL = "https://foundry.example/";
const REDIRECT_URL = "https://app.example/auth/callback";
const CLIENT_ID = "placeholder-client-id";
const CLIENT_SECRET = "placeholder-client-secret";
const AUTHORIZATION_CODE = "placeholder-authorization-code";

const DEFAULT_SCOPE =
  "offline_access api:read-data api:use-ontologies-read api:use-ontologies-write api:write-data";
const DEFAULT_SCOPE_WITHOUT_REFRESH =
  "api:read-data api:use-ontologies-read api:use-ontologies-write api:write-data";

const publicClientMetadata: Client = {
  client_id: CLIENT_ID,
  token_endpoint_auth_method: "none",
};

const confidentialClientMetadata: Client = {
  client_id: CLIENT_ID,
  client_secret: CLIENT_SECRET,
};

function storageKey(clientId: string): string {
  return `@osdk/oauth : refresh : ${clientId}`;
}

class MemoryStorage implements Storage {
  #items = new Map<string, string>();

  get length(): number {
    return this.#items.size;
  }

  clear(): void {
    this.#items.clear();
  }

  getItem(key: string): string | null {
    return this.#items.get(key) ?? null;
  }

  key(index: number): string | null {
    return [...this.#items.keys()][index] ?? null;
  }

  removeItem(key: string): void {
    this.#items.delete(key);
  }

  setItem(key: string, value: string): void {
    this.#items.set(key, value);
  }
}

function readStoredRefreshToken(
  storage: Storage,
  clientId: string,
): string | undefined {
  const raw = storage.getItem(storageKey(clientId));
  if (raw == null) {
    return undefined;
  }
  const parsed: unknown = JSON.parse(raw);
  if (
    typeof parsed !== "object" ||
    parsed == null ||
    !("refresh_token" in parsed)
  ) {
    return undefined;
  }
  const refreshToken = parsed.refresh_token;
  return typeof refreshToken === "string" ? refreshToken : undefined;
}

function readFormBody(body: BodyInit | null | undefined): URLSearchParams {
  if (body == null) {
    return new URLSearchParams();
  }
  if (typeof body === "string") {
    return new URLSearchParams(body);
  }
  if (body instanceof URLSearchParams) {
    return new URLSearchParams(body);
  }
  if (body instanceof Uint8Array) {
    return new URLSearchParams(new TextDecoder().decode(body));
  }
  throw new Error(`unsupported request body type`);
}

function oauthError(error: string): Response {
  return Response.json({ error }, { status: 400 });
}

function tokenResponse(tokens: {
  access_token: string;
  refresh_token?: string;
}): Response {
  const payload: {
    access_token: string;
    token_type: "bearer";
    expires_in: number;
    refresh_token?: string;
  } = {
    access_token: tokens.access_token,
    token_type: "bearer",
    expires_in: 3600,
  };
  if (tokens.refresh_token !== undefined) {
    payload.refresh_token = tokens.refresh_token;
  }
  return Response.json(payload);
}

interface Grant {
  refreshToken: string | undefined;
  accessTokens: Set<string>;
  revoked: boolean;
}

function createAuthorizationServerDouble(options: {
  issueRefreshToken: boolean;
  rotateRefreshTokens: boolean;
  revocation: "ok" | "http-error" | "network-error";
}): {
  fetchFn: typeof fetch;
  revokedTokens: string[];
  liveRefreshToken: () => string | undefined;
} {
  let sequence = 0;
  let grant: Grant | undefined;
  const revokedTokens: string[] = [];

  function issue(existing: Grant | undefined): {
    access_token: string;
    refresh_token?: string;
  } {
    sequence += 1;
    const access_token = `placeholder-access-${sequence}`;
    let refresh_token: string | undefined;
    if (options.issueRefreshToken) {
      refresh_token =
        existing && !options.rotateRefreshTokens
          ? existing.refreshToken
          : `placeholder-refresh-${sequence}`;
    }
    if (existing) {
      existing.accessTokens.add(access_token);
      existing.refreshToken = refresh_token;
    } else {
      grant = {
        refreshToken: refresh_token,
        accessTokens: new Set([access_token]),
        revoked: false,
      };
    }
    return { access_token, refresh_token };
  }

  const fetchFn: typeof fetch = (input, init) => {
    try {
      return Promise.resolve(handleOauthRequest(input, init));
    } catch (error) {
      return Promise.reject(error);
    }
  };

  function handleOauthRequest(
    input: Parameters<typeof fetch>[0],
    init: Parameters<typeof fetch>[1],
  ): Response {
    const url = requestUrl(input);
    const body = readFormBody(init?.body);

    if (url.endsWith("/multipass/api/oauth2/token")) {
      const grantType = body.get("grant_type");
      if (grantType === "authorization_code") {
        if (
          body.get("code") !== AUTHORIZATION_CODE ||
          !body.get("code_verifier")
        ) {
          return oauthError("invalid_grant");
        }
        return tokenResponse(issue(undefined));
      }
      if (grantType === "refresh_token") {
        const presented = body.get("refresh_token");
        if (
          grant == null ||
          grant.revoked ||
          presented == null ||
          presented !== grant.refreshToken
        ) {
          return oauthError("invalid_grant");
        }
        return tokenResponse(issue(grant));
      }
      if (grantType === "client_credentials") {
        return tokenResponse(issue(undefined));
      }
      return oauthError("unsupported_grant_type");
    }

    if (url.endsWith("/multipass/api/oauth2/revoke_token")) {
      if (options.revocation === "network-error") {
        throw new TypeError("revocation endpoint unreachable");
      }
      if (options.revocation === "http-error") {
        return oauthError("invalid_request");
      }
      const token = body.get("token");
      if (token == null) {
        return oauthError("invalid_request");
      }
      revokedTokens.push(token);
      if (grant != null && token === grant.refreshToken) {
        grant.revoked = true;
      } else if (grant != null && grant.accessTokens.has(token)) {
        grant.accessTokens.delete(token);
      }
      return new Response(null, { status: 200 });
    }

    return new Response(null, { status: 404 });
  }

  return {
    fetchFn,
    revokedTokens,
    liveRefreshToken: () => grant?.refreshToken,
  };
}

function requestUrl(input: Parameters<typeof fetch>[0]): string {
  if (typeof input === "string") {
    return input;
  }
  if (input instanceof URL) {
    return input.href;
  }
  return input.url;
}

async function refreshGrantAccepted(
  fetchFn: typeof fetch,
  client: Client,
  refreshToken: string,
): Promise<boolean> {
  const authorizationServer = createAuthorizationServer(
    "multipass",
    FOUNDRY_URL,
  );
  const response = await refreshTokenGrantRequest(
    authorizationServer,
    client,
    refreshToken,
    { [customFetch]: fetchFn },
  );
  const result = await processAuthorizationCodeOAuth2Response(
    authorizationServer,
    client,
    response,
  );
  return !isOAuth2Error(result) && typeof result.access_token === "string";
}

interface BrowserHarness {
  localStorage: MemoryStorage;
  sessionStorage: MemoryStorage;
  location: { href: string; pathname: string };
  assignedUrls: string[];
}

function installBrowser(): BrowserHarness {
  const localStorage = new MemoryStorage();
  const sessionStorage = new MemoryStorage();
  const location = {
    href: "https://app.example/home",
    pathname: "/home",
    assign(url: string) {
      assignedUrls.push(url);
    },
    toString() {
      return this.href;
    },
  };
  const assignedUrls: string[] = [];
  vi.stubGlobal("localStorage", localStorage);
  vi.stubGlobal("sessionStorage", sessionStorage);
  vi.stubGlobal("window", {
    location,
    history: { replaceState: () => undefined },
  });
  return { localStorage, sessionStorage, location, assignedUrls };
}

function readSessionState(sessionStorage: Storage, clientId: string): string {
  const raw = sessionStorage.getItem(storageKey(clientId));
  if (raw == null) {
    throw new Error("authorization redirect did not store a session");
  }
  const parsed: unknown = JSON.parse(raw);
  if (
    typeof parsed !== "object" ||
    parsed == null ||
    !("state" in parsed) ||
    typeof parsed.state !== "string"
  ) {
    throw new Error("authorization redirect session has no state");
  }
  return parsed.state;
}

async function completePublicSignIn(
  client: PublicOauthClient,
  browser: BrowserHarness,
  expectedScope: string,
): Promise<string> {
  await expect(client()).rejects.toThrow("Unable to redirect");
  const authorizeUrl = browser.assignedUrls.at(-1);
  expect(authorizeUrl).toBeDefined();
  expect(new URL(authorizeUrl!).searchParams.get("scope")).toBe(expectedScope);
  const state = readSessionState(browser.sessionStorage, CLIENT_ID);
  const callback = new URL(REDIRECT_URL);
  callback.searchParams.set("code", AUTHORIZATION_CODE);
  callback.searchParams.set("state", state);
  browser.location.href = callback.href;
  browser.location.pathname = callback.pathname;
  return client();
}

function clearRefreshTimer(client: object): void {
  if ("rmTimeout" in client && typeof client.rmTimeout === "function") {
    client.rmTimeout();
  }
}

describe("sign-out revocation", () => {
  const originalTarget = process.env.TARGET;
  let activeClient: object | undefined;

  afterEach(() => {
    if (activeClient != null) {
      clearRefreshTimer(activeClient);
      activeClient = undefined;
    }
    if (originalTarget === undefined) {
      delete process.env.TARGET;
    } else {
      process.env.TARGET = originalTarget;
    }
    vi.unstubAllGlobals();
  });

  async function signedInPublicClient(options: {
    tokenStorage?: "localStorage" | "sessionStorage" | "none";
    issueRefreshToken?: boolean;
    rotateRefreshTokens?: boolean;
    revocation?: "ok" | "http-error" | "network-error";
  }): Promise<{
    client: PublicOauthClient;
    browser: BrowserHarness;
    accessToken: string;
    server: ReturnType<typeof createAuthorizationServerDouble>;
    refreshStorage: Storage;
  }> {
    process.env.TARGET = "browser";
    const browser = installBrowser();
    const tokenStorage = options.tokenStorage ?? "localStorage";
    const server = createAuthorizationServerDouble({
      issueRefreshToken: options.issueRefreshToken ?? true,
      rotateRefreshTokens: options.rotateRefreshTokens ?? false,
      revocation: options.revocation ?? "ok",
    });
    const client = createPublicOauthClient(
      CLIENT_ID,
      FOUNDRY_URL,
      REDIRECT_URL,
      {
        tokenStorage,
        fetchFn: server.fetchFn,
      },
    );
    activeClient = client;
    const accessToken = await completePublicSignIn(
      client,
      browser,
      tokenStorage === "none" ? DEFAULT_SCOPE_WITHOUT_REFRESH : DEFAULT_SCOPE,
    );
    const refreshStorage =
      tokenStorage === "sessionStorage"
        ? browser.sessionStorage
        : browser.localStorage;
    return { client, browser, accessToken, server, refreshStorage };
  }

  it("revokes the localStorage refresh token on sign-out so a copy cannot be exchanged", async () => {
    const { client, server, refreshStorage } = await signedInPublicClient({});
    const copiedRefreshToken = readStoredRefreshToken(
      refreshStorage,
      CLIENT_ID,
    );
    expect(copiedRefreshToken).toBe(server.liveRefreshToken());

    await client.signOut();

    expect({
      appearsSignedOut: client.getTokenOrUndefined() === undefined,
      storedRefreshToken: readStoredRefreshToken(refreshStorage, CLIENT_ID),
      revocationSubmittedCopiedRefreshToken: server.revokedTokens.includes(
        copiedRefreshToken!,
      ),
      copiedRefreshTokenAccepted: await refreshGrantAccepted(
        server.fetchFn,
        publicClientMetadata,
        copiedRefreshToken!,
      ),
    }).toEqual({
      appearsSignedOut: true,
      storedRefreshToken: undefined,
      revocationSubmittedCopiedRefreshToken: true,
      copiedRefreshTokenAccepted: false,
    });
  });

  it("revokes the refresh token stored after a later refresh, not only the latest access token", async () => {
    const { client, server, refreshStorage } = await signedInPublicClient({
      rotateRefreshTokens: true,
    });
    const refreshTokenBeforeRefresh = readStoredRefreshToken(
      refreshStorage,
      CLIENT_ID,
    );
    await client.refresh();
    const copiedRefreshToken = readStoredRefreshToken(
      refreshStorage,
      CLIENT_ID,
    );
    expect(copiedRefreshToken).toBe(server.liveRefreshToken());
    expect(copiedRefreshToken).not.toBe(refreshTokenBeforeRefresh);

    await client.signOut();

    expect({
      revocationSubmittedRotatedRefreshToken: server.revokedTokens.includes(
        copiedRefreshToken!,
      ),
      copiedRefreshTokenAccepted: await refreshGrantAccepted(
        server.fetchFn,
        publicClientMetadata,
        copiedRefreshToken!,
      ),
    }).toEqual({
      revocationSubmittedRotatedRefreshToken: true,
      copiedRefreshTokenAccepted: false,
    });
  });

  it("revokes the sessionStorage refresh token on sign-out", async () => {
    const { client, browser, server, refreshStorage } =
      await signedInPublicClient({
        tokenStorage: "sessionStorage",
      });
    const copiedRefreshToken = readStoredRefreshToken(
      refreshStorage,
      CLIENT_ID,
    );
    expect(copiedRefreshToken).toBe(server.liveRefreshToken());
    expect(
      readStoredRefreshToken(browser.localStorage, CLIENT_ID),
    ).toBeUndefined();

    await client.signOut();

    expect(server.revokedTokens).toContain(copiedRefreshToken);
    expect(
      await refreshGrantAccepted(
        server.fetchFn,
        publicClientMetadata,
        copiedRefreshToken!,
      ),
    ).toBe(false);
  });

  it("revokes the access token when the authorization server issued no refresh token", async () => {
    const { client, server, accessToken, refreshStorage } =
      await signedInPublicClient({
        tokenStorage: "none",
        issueRefreshToken: false,
      });
    expect(readStoredRefreshToken(refreshStorage, CLIENT_ID)).toBeUndefined();

    await client.signOut();

    expect(server.revokedTokens).toEqual([accessToken]);
    expect(client.getTokenOrUndefined()).toBeUndefined();
  });

  it("revokes a refresh token kept only in memory when storage is disabled", async () => {
    const { client, server } = await signedInPublicClient({
      tokenStorage: "none",
      issueRefreshToken: true,
    });
    const copiedRefreshToken = server.liveRefreshToken();
    expect(copiedRefreshToken).toBeDefined();

    await client.signOut();

    expect(server.revokedTokens).toContain(copiedRefreshToken);
    expect(
      await refreshGrantAccepted(
        server.fetchFn,
        publicClientMetadata,
        copiedRefreshToken!,
      ),
    ).toBe(false);
  });

  it("deletes the stored refresh token when the revocation request throws", async () => {
    const { client, refreshStorage } = await signedInPublicClient({
      revocation: "network-error",
    });
    expect(readStoredRefreshToken(refreshStorage, CLIENT_ID)).toBeDefined();

    await expect(client.signOut()).rejects.toThrow(/unreachable/u);

    expect(readStoredRefreshToken(refreshStorage, CLIENT_ID)).toBeUndefined();
  });

  it("deletes the stored refresh token when the revocation endpoint returns an error", async () => {
    const { client, refreshStorage } = await signedInPublicClient({
      revocation: "http-error",
    });

    await expect(client.signOut()).rejects.toThrow(/invalid_request/u);

    expect(readStoredRefreshToken(refreshStorage, CLIENT_ID)).toBeUndefined();
  });

  it("revokes a refresh token returned to a confidential client", async () => {
    const server = createAuthorizationServerDouble({
      issueRefreshToken: true,
      rotateRefreshTokens: false,
      revocation: "ok",
    });
    const client = createConfidentialOauthClient(
      CLIENT_ID,
      CLIENT_SECRET,
      FOUNDRY_URL,
      undefined,
      server.fetchFn,
    );
    activeClient = client;
    await client();
    const copiedRefreshToken = server.liveRefreshToken();
    expect(copiedRefreshToken).toBeDefined();

    await client.signOut();

    expect(server.revokedTokens).toContain(copiedRefreshToken);
    expect(
      await refreshGrantAccepted(
        server.fetchFn,
        confidentialClientMetadata,
        copiedRefreshToken!,
      ),
    ).toBe(false);
  });

  it("revokes the confidential-client access token when no refresh token was issued", async () => {
    const server = createAuthorizationServerDouble({
      issueRefreshToken: false,
      rotateRefreshTokens: false,
      revocation: "ok",
    });
    const client = createConfidentialOauthClient(
      CLIENT_ID,
      CLIENT_SECRET,
      FOUNDRY_URL,
      undefined,
      server.fetchFn,
    );
    activeClient = client;
    const accessToken = await client();

    await client.signOut();

    expect(server.revokedTokens).toEqual([accessToken]);
  });
});
