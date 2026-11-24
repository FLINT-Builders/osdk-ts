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

import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";

import {
  authorizeEnvironmentFoundryUrl,
  authorizeProjectFoundryUrl,
  FOUNDRY_ORIGINS_ENV_VAR,
  resolveAuthorizedFoundryUrl,
} from "../authorizeFoundryUrl.js";

describe("authorizeFoundryUrl", () => {
  beforeEach(() => {
    vi.stubEnv(
      FOUNDRY_ORIGINS_ENV_VAR,
      " https://example.palantirfoundry.com/ , https://other.palantirfoundry.com:8443",
    );
  });

  afterEach(() => {
    vi.unstubAllEnvs();
  });

  describe("authorizeProjectFoundryUrl", () => {
    test.each([
      [
        "https://example.palantirfoundry.com",
        "https://example.palantirfoundry.com/",
      ],
      [
        "https://example.palantirfoundry.com:443/",
        "https://example.palantirfoundry.com/",
      ],
      [
        "https://EXAMPLE.palantirfoundry.com/prefix",
        "https://example.palantirfoundry.com/prefix/",
      ],
      [
        "https://example.palantirfoundry.com/?q=1#frag",
        "https://example.palantirfoundry.com/",
      ],
      [
        "https://other.palantirfoundry.com:8443",
        "https://other.palantirfoundry.com:8443/",
      ],
    ])("authorizes %s", (rawUrl, baseUrl) => {
      expect(authorizeProjectFoundryUrl(rawUrl).baseUrl).toBe(baseUrl);
    });

    test.each([
      "https://attacker.example.com",
      "https://attacker.example.com#https://example.palantirfoundry.com",
      "https://example.palantirfoundry.com@attacker.example.com",
      "https://example.palantirfoundry.com.attacker.example.com",
      "https://other.palantirfoundry.com",
      "http://example.palantirfoundry.com",
      "https://user:pass@example.palantirfoundry.com",
      "not a url",
    ])("refuses %s", (rawUrl) => {
      expect(() => authorizeProjectFoundryUrl(rawUrl)).toThrow();
    });

    test("refuses everything when no origins are configured", () => {
      vi.stubEnv(FOUNDRY_ORIGINS_ENV_VAR, "");
      expect(() =>
        authorizeProjectFoundryUrl("https://example.palantirfoundry.com"),
      ).toThrow(FOUNDRY_ORIGINS_ENV_VAR);
    });

    test("ignores http entries in the allowlist", () => {
      vi.stubEnv(FOUNDRY_ORIGINS_ENV_VAR, "http://example.palantirfoundry.com");
      expect(() =>
        authorizeProjectFoundryUrl("https://example.palantirfoundry.com"),
      ).toThrow();
    });
  });

  describe("authorizeEnvironmentFoundryUrl", () => {
    test("requires https", () => {
      expect(() =>
        authorizeEnvironmentFoundryUrl("http://proxy.example.com"),
      ).toThrow();
      expect(
        authorizeEnvironmentFoundryUrl("https://proxy.example.com").origin,
      ).toBe("https://proxy.example.com");
    });
  });

  describe("resolveAuthorizedFoundryUrl", () => {
    test("resolves paths on the authorized origin", () => {
      const authorized = authorizeProjectFoundryUrl(
        "https://example.palantirfoundry.com/prefix",
      );
      expect(
        resolveAuthorizedFoundryUrl(authorized, "api/v2/x").toString(),
      ).toBe("https://example.palantirfoundry.com/prefix/api/v2/x");
    });

    test("refuses paths that leave the authorized origin", () => {
      const authorized = authorizeProjectFoundryUrl(
        "https://example.palantirfoundry.com",
      );
      expect(() =>
        resolveAuthorizedFoundryUrl(authorized, "//attacker.example.com/x"),
      ).toThrow();
    });

    test("refuses objects that were not authorized", () => {
      expect(() =>
        resolveAuthorizedFoundryUrl(
          {
            origin: "https://attacker.example.com",
            baseUrl: "https://attacker.example.com/",
          },
          "api/v2/x",
        ),
      ).toThrow("Foundry URL has not been authorized.");
    });

    test("is not affected by mutating the authorized object", () => {
      const authorized = authorizeProjectFoundryUrl(
        "https://example.palantirfoundry.com",
      );
      expect(() => {
        (authorized as { baseUrl: string }).baseUrl =
          "https://attacker.example.com/";
      }).toThrow();
      expect(resolveAuthorizedFoundryUrl(authorized, "api").origin).toBe(
        "https://example.palantirfoundry.com",
      );
    });
  });
});
