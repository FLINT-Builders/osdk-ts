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

import { resolve } from "node:path";
import { pathToFileURL } from "node:url";

import { fakeObservableClient, TestOsdkProvider } from "@osdk/react/testing";
import {
  act,
  cleanup,
  fireEvent,
  render,
  screen,
} from "@testing-library/react";
import React from "react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { CbacPickerDialog as LegacyCbacPickerDialog } from "../../../../cbac-components/src/cbac-picker/CbacPickerDialog.js";
import { createSharedClientContext } from "../../../../shared.client.impl/src/createSharedClientContext.js";
import { CbacPickerDialog } from "../CbacPickerDialog.js";

const { symbolClientContext } = (await import(
  /* @vite-ignore */
  pathToFileURL(
    resolve(
      process.cwd(),
      "../../node_modules/.pnpm/@osdk+foundry.admin@2.77.0/node_modules/@osdk/shared.client2/index.js",
    ),
  ).href
)) as { symbolClientContext: "__osdkClientContext" };

const LOW = "m-low";
const SECRET = "m-secret";

type RestrictionMode = "hang" | "http-error" | "valid" | "invalid";

type DialogUnderTest = (props: {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  onConfirm: (markingIds: string[]) => void;
  initialMarkingIds?: string[];
}) => React.ReactElement;

const DIALOGS: ReadonlyArray<readonly [string, DialogUnderTest]> = [
  ["@osdk/react-components CbacPickerDialog", CbacPickerDialog],
  ["@osdk/cbac-components CbacPickerDialog", LegacyCbacPickerDialog],
];

let modes = new Map<string, RestrictionMode>();
let restrictionQueries: string[][] = [];

function idsKey(ids: readonly string[]): string {
  return [...ids].sort().join("\0");
}

function jsonResponse(body: unknown, status = 200): Response {
  return Response.json(body, {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

function fetchImpl(
  input: RequestInfo | URL,
  _init?: RequestInit,
): Promise<Response> {
  const href =
    typeof input === "string"
      ? input
      : input instanceof URL
        ? input.href
        : input.url;
  const url = new URL(href);
  if (url.pathname.endsWith("/v2/admin/cbacMarkingRestrictions")) {
    const markingIds = url.searchParams.getAll("markingIds");
    restrictionQueries.push(markingIds);
    const mode = modes.get(idsKey(markingIds)) ?? "hang";
    if (mode === "hang") {
      return new Promise(() => {});
    }
    if (mode === "http-error") {
      return Promise.resolve(
        jsonResponse(
          {
            errorCode: "INTERNAL",
            errorName: "Internal",
            errorInstanceId: "placeholder-error",
            parameters: {},
          },
          500,
        ),
      );
    }
    if (mode === "invalid") {
      return Promise.resolve(
        jsonResponse({
          disallowedMarkings: markingIds,
          impliedMarkings: [],
          requiredMarkings: [],
          userSatisfiesMarkings: false,
          isValid: false,
        }),
      );
    }
    return Promise.resolve(
      jsonResponse({
        disallowedMarkings: [],
        impliedMarkings: [],
        requiredMarkings: [],
        userSatisfiesMarkings: true,
        isValid: true,
      }),
    );
  }
  if (url.pathname.endsWith("/v2/admin/cbacBanner")) {
    return Promise.resolve(
      jsonResponse({
        classificationString: "SECRET",
        markings: url.searchParams.getAll("markingIds"),
        textColor: "#000000",
        backgroundColors: ["#123456"],
      }),
    );
  }
  if (url.pathname.endsWith("/v2/admin/markingCategories")) {
    return Promise.resolve(
      jsonResponse({
        data: [
          {
            id: "c1",
            name: "Clearance",
            description: "",
            categoryType: "CONJUNCTIVE",
            markingType: "CBAC",
            markings: [LOW, SECRET],
            createdTime: "2020-01-01T00:00:00.000Z",
          },
        ],
      }),
    );
  }
  if (url.pathname.endsWith("/v2/admin/markings")) {
    return Promise.resolve(
      jsonResponse({
        data: [
          {
            id: LOW,
            categoryId: "c1",
            name: "Low",
            createdTime: "2020-01-01T00:00:00.000Z",
          },
          {
            id: SECRET,
            categoryId: "c1",
            name: "Secret",
            createdTime: "2020-01-01T00:00:00.000Z",
          },
        ],
      }),
    );
  }
  return Promise.reject(
    new Error(`unexpected platform request ${url.pathname}`),
  );
}

function Provider({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  const client = React.useMemo(() => {
    const platform = createSharedClientContext(
      "https://example.invalid",
      () => Promise.resolve("placeholder-token"),
      "cbac-picker-test",
      fetchImpl,
    );
    return { [symbolClientContext]: platform };
  }, []);
  return (
    <TestOsdkProvider
      client={client as never}
      observableClient={fakeObservableClient}
    >
      {children}
    </TestOsdkProvider>
  );
}

async function flushPlatform(): Promise<void> {
  for (let i = 0; i < 10; i += 1) {
    await act(async () => {
      await new Promise((done) => {
        setTimeout(done, 0);
      });
    });
  }
}

function submitButton(): HTMLButtonElement {
  return screen.getByRole("button", {
    name: "Set classification",
  }) as HTMLButtonElement;
}

function renderDialog(
  Dialog: DialogUnderTest,
  onConfirm: (markingIds: string[]) => void,
  initialMarkingIds: string[] = [LOW],
): void {
  render(
    <Provider>
      <Dialog
        isOpen
        onOpenChange={() => {}}
        onConfirm={onConfirm}
        initialMarkingIds={initialMarkingIds}
      />
    </Provider>,
  );
}

beforeEach(() => {
  vi.useRealTimers();
  modes = new Map();
  restrictionQueries = [];
});

afterEach(() => {
  cleanup();
  vi.useRealTimers();
});

describe.each(DIALOGS)("%s", (_name, Dialog) => {
  it("does not confirm while the restrictions request for the selection is in flight", async () => {
    modes.set(idsKey([LOW]), "hang");
    const onConfirm = vi.fn();
    renderDialog(Dialog, onConfirm);
    await flushPlatform();

    expect(restrictionQueries).toContainEqual([LOW]);
    fireEvent.click(submitButton());
    expect(onConfirm).not.toHaveBeenCalled();
    expect(submitButton().disabled).toBe(true);
  });

  it("does not confirm when the restrictions request fails", async () => {
    modes.set(idsKey([LOW]), "http-error");
    const onConfirm = vi.fn();
    renderDialog(Dialog, onConfirm);
    await flushPlatform();

    expect(screen.getByRole("alert").textContent).toContain("Server error");
    fireEvent.click(submitButton());
    expect(onConfirm).not.toHaveBeenCalled();
    expect(submitButton().disabled).toBe(true);
  });

  it("does not confirm a selection the restrictions response marks invalid", async () => {
    modes.set(idsKey([LOW]), "invalid");
    const onConfirm = vi.fn();
    renderDialog(Dialog, onConfirm);
    await flushPlatform();

    expect(submitButton().disabled).toBe(true);
    fireEvent.click(submitButton());
    expect(onConfirm).not.toHaveBeenCalled();
  });

  it("does not confirm a changed selection while that selection's restrictions request is in flight", async () => {
    modes.set(idsKey([LOW]), "valid");
    modes.set(idsKey([LOW, SECRET]), "hang");
    const onConfirm = vi.fn();
    renderDialog(Dialog, onConfirm);
    await flushPlatform();

    fireEvent.click(screen.getByRole("button", { name: "Secret" }));
    await flushPlatform();

    expect(restrictionQueries).toContainEqual([LOW, SECRET]);
    fireEvent.click(submitButton());
    expect(onConfirm).not.toHaveBeenCalled();
    expect(submitButton().disabled).toBe(true);
  });

  it("does not confirm a changed selection when the new restrictions response is invalid", async () => {
    modes.set(idsKey([LOW]), "valid");
    modes.set(idsKey([LOW, SECRET]), "invalid");
    const onConfirm = vi.fn();
    renderDialog(Dialog, onConfirm);
    await flushPlatform();

    fireEvent.click(screen.getByRole("button", { name: "Secret" }));
    await flushPlatform();

    expect(restrictionQueries).toContainEqual([LOW, SECRET]);
    expect(submitButton().disabled).toBe(true);
    fireEvent.click(submitButton());
    expect(onConfirm).not.toHaveBeenCalled();
  });

  it("confirms the marking ids a successful restrictions response marked valid", async () => {
    modes.set(idsKey([LOW]), "valid");
    const onConfirm = vi.fn();
    renderDialog(Dialog, onConfirm);
    await flushPlatform();

    expect(restrictionQueries).toContainEqual([LOW]);
    expect(submitButton().disabled).toBe(false);
    fireEvent.click(submitButton());
    expect(onConfirm).toHaveBeenCalledExactlyOnceWith([LOW]);
  });

  it("confirms the new ids only after the restrictions response for those ids is valid", async () => {
    modes.set(idsKey([LOW]), "valid");
    modes.set(idsKey([LOW, SECRET]), "valid");
    const onConfirm = vi.fn();
    renderDialog(Dialog, onConfirm);
    await flushPlatform();

    fireEvent.click(screen.getByRole("button", { name: "Secret" }));
    await flushPlatform();

    expect(restrictionQueries).toContainEqual([LOW, SECRET]);
    fireEvent.click(submitButton());
    expect(onConfirm).toHaveBeenCalledExactlyOnceWith([LOW, SECRET]);
  });
});
