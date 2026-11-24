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

import { describe, expect, it } from "vitest";

import { parseSpreadsheetFromResponse } from "../parseSpreadsheet.js";
import {
  declaredRangeAttackWorkbook,
  maxRowLength,
  ordinaryWorkbook,
} from "./declaredRangeWorkbook.js";

/**
 * The worksheet dimension is chosen by whoever authored the file. Parsing
 * must return the cells that exist and must not allocate the rectangle named
 * by that dimension. A byte cap alone does not satisfy this: the attack
 * workbook is a few kilobytes. Capping only the row count also does not,
 * because the wide sheet is three rows tall and 16,384 columns wide, and the
 * real cell on its last row has to survive.
 */

function responseWith(bytes: Uint8Array): Response {
  return new Response(bytes);
}

describe("parseSpreadsheetFromResponse declared sheet range", () => {
  it("should keep a sheet whose dimension matches its cells", async () => {
    const parsed = await parseSpreadsheetFromResponse(
      responseWith(ordinaryWorkbook()),
    );

    expect(parsed.sheets).toEqual([
      {
        name: "Revenue",
        rows: [
          ["Region", "Total"],
          ["Europe", "42"],
        ],
      },
    ]);
  });

  it("should not materialize cells that exist only in the declared dimension", async () => {
    const bytes = declaredRangeAttackWorkbook();
    expect(bytes.byteLength).toBeLessThan(20_000);

    const parsed = await parseSpreadsheetFromResponse(responseWith(bytes));

    const wide = parsed.sheets.find((sheet) => sheet.name === "Wide");
    const tall = parsed.sheets.find((sheet) => sheet.name === "Tall");
    expect(wide).toBeDefined();
    expect(tall).toBeDefined();

    // Bounding box of the cells that are actually stored: A1 and C3.
    expect(wide!.rows.length).toBeLessThanOrEqual(3);
    expect(maxRowLength(wide!.rows)).toBeLessThanOrEqual(3);
    expect(wide!.rows[0]?.[0]).toBe("wide-cell");
    expect(wide!.rows[2]?.[2]).toBe("wide-also");

    // The only stored cell is A1. Empty rows implied by the dimension are not cells.
    expect(tall!.rows.length).toBeLessThanOrEqual(1);
    expect(maxRowLength(tall!.rows)).toBeLessThanOrEqual(1);
    expect(tall!.rows[0]?.[0]).toBe("tall-cell");
  });
});
