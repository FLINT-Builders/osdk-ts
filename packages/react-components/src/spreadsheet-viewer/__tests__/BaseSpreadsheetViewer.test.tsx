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

import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";

import { BaseSpreadsheetViewer } from "../BaseSpreadsheetViewer.js";
import type { ParsedSpreadsheet, SheetData } from "../SpreadsheetViewerApi.js";

afterEach(() => {
  cleanup();
});

const SINGLE_SHEET: ParsedSpreadsheet = {
  sheets: [
    {
      name: "Revenue",
      rows: [
        ["Region", "Total"],
        ["Europe", "42"],
      ],
    },
  ],
};

const TWO_SHEETS: ParsedSpreadsheet = {
  sheets: [
    { name: "Revenue", rows: [["Team"], ["Platform"]] },
    { name: "Costs", rows: [["Line item"], ["Hosting"]] },
  ],
};

describe("BaseSpreadsheetViewer", () => {
  it("should render cells from content", () => {
    render(<BaseSpreadsheetViewer content={SINGLE_SHEET} />);
    expect(screen.getByText("Region")).toBeTruthy();
    expect(screen.getByText("Europe")).toBeTruthy();
    expect(screen.getByText("42")).toBeTruthy();
  });

  it("should render a tab per sheet when there is more than one", () => {
    render(<BaseSpreadsheetViewer content={TWO_SHEETS} />);
    expect(screen.getByRole("button", { name: "Revenue" })).toBeTruthy();
    expect(screen.getByRole("button", { name: "Costs" })).toBeTruthy();
  });

  it("should render from the deprecated spreadsheet prop", () => {
    // eslint-disable-next-line @typescript-eslint/no-deprecated -- covers the pre-rename fallback
    render(<BaseSpreadsheetViewer spreadsheet={SINGLE_SHEET} />);
    expect(screen.getByText("Europe")).toBeTruthy();
  });

  it("should prefer content over the deprecated spreadsheet prop", () => {
    render(
      <BaseSpreadsheetViewer
        content={SINGLE_SHEET}
        // eslint-disable-next-line @typescript-eslint/no-deprecated -- covers the pre-rename fallback
        spreadsheet={TWO_SHEETS}
      />,
    );
    expect(screen.getByText("Total")).toBeTruthy();
    expect(screen.queryByRole("button", { name: "Costs" })).toBeNull();
  });

  it("should render the empty state when neither prop is set", () => {
    render(<BaseSpreadsheetViewer />);
    expect(screen.getByText("No sheets")).toBeTruthy();
  });

  it("should not render a DOM cell for every position in a large sheet", () => {
    // Give a virtualizer a viewport. The unfixed table does not consult it;
    // it still emits one row element per data row and one cell per column.
    const rect = vi
      .spyOn(HTMLElement.prototype, "getBoundingClientRect")
      .mockImplementation(
        () =>
          ({
            x: 0,
            y: 0,
            top: 0,
            left: 0,
            bottom: 400,
            right: 800,
            width: 800,
            height: 400,
            toJSON() {
              return {};
            },
          }) as DOMRect,
      );

    try {
      const columnCount = 200;
      const rowCount = 80;
      const rows: string[][] = Array.from(
        { length: rowCount },
        (_unusedRow, rowIndex) =>
          Array.from(
            { length: columnCount },
            (_unusedColumn, columnIndex) => `r${rowIndex}c${columnIndex}`,
          ),
      );
      const sheet: SheetData = { name: "Large", rows };

      render(<BaseSpreadsheetViewer content={{ sheets: [sheet] }} />);

      const bodyRows = document.querySelectorAll("tbody tr");
      const bodyCells = document.querySelectorAll("tbody td");
      expect(bodyRows.length).toBeGreaterThan(0);
      expect(bodyRows.length).toBeLessThan(rowCount);
      // Far below one cell per column of every row (80 * 201 today).
      expect(bodyCells.length).toBeLessThanOrEqual(1_500);
      expect(screen.getByText("r0c0")).toBeTruthy();
    } finally {
      rect.mockRestore();
    }
  });
});
