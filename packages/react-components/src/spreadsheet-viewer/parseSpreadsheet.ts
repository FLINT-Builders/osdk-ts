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

/* cspell:words defval fullref */

import type { WorkSheet } from "xlsx-republish";
import { read, utils } from "xlsx-republish";

import type { ParsedSpreadsheet, SheetData } from "./SpreadsheetViewerApi.js";

const MAX_SPREADSHEET_SIZE = 25_000_000;
const MAX_SPREADSHEET_SIZE_MB_STRING = (
  MAX_SPREADSHEET_SIZE / 1_000_000
).toFixed(1);

// Every empty position inside the rendered rectangle becomes a string, so the
// rectangle is bounded per sheet and across the whole workbook.
const MAX_ROWS = 100_000;
const MAX_COLUMNS = 1_000;
const MAX_CELLS = 2_000_000;

interface CellBounds {
  lastRow: number;
  lastColumn: number;
}

function hasValue(cell: unknown): boolean {
  return (
    cell != null &&
    typeof cell === "object" &&
    "t" in cell &&
    cell.t != null &&
    cell.t !== "z"
  );
}

/**
 * The bounds of the cells the sheet actually stores. The sheet's `!ref` comes
 * from the dimension the file declares, which the file's author controls and
 * which need not match the stored cells.
 */
function getStoredCellBounds(sheet: WorkSheet): CellBounds | undefined {
  let lastRow = -1;
  let lastColumn = -1;

  const dense = sheet["!data"];
  if (dense != null) {
    dense.forEach((row, rowIndex) => {
      row?.forEach((cell, columnIndex) => {
        if (hasValue(cell)) {
          lastRow = Math.max(lastRow, rowIndex);
          lastColumn = Math.max(lastColumn, columnIndex);
        }
      });
    });
  } else {
    for (const key of Object.keys(sheet)) {
      if (key.startsWith("!") || !hasValue(sheet[key])) {
        continue;
      }
      const { r, c } = utils.decode_cell(key);
      if (r >= 0 && c >= 0) {
        lastRow = Math.max(lastRow, r);
        lastColumn = Math.max(lastColumn, c);
      }
    }
  }

  return lastRow < 0 || lastColumn < 0 ? undefined : { lastRow, lastColumn };
}

/**
 * Rows past the read limit are dropped while parsing, so they never show up in
 * the stored cells. `!fullref` keeps the sheet's extent from before the cut.
 */
function hasRowsBeyondReadLimit(sheet: WorkSheet): boolean {
  const fullRef: unknown = sheet["!fullref"];
  return (
    typeof fullRef === "string" && utils.decode_range(fullRef).e.r >= MAX_ROWS
  );
}

export async function parseSpreadsheetFromResponse(
  response: Response,
): Promise<ParsedSpreadsheet> {
  const buffer = await response.arrayBuffer();
  if (buffer.byteLength > MAX_SPREADSHEET_SIZE) {
    throw new Error(
      `Spreadsheet file exceeds maximum size of ${MAX_SPREADSHEET_SIZE_MB_STRING}MB`,
    );
  }

  // One row past the limit is read so that truncation can be detected.
  const workbook = read(buffer, {
    type: "array",
    dense: false,
    sheetRows: MAX_ROWS + 1,
  });

  let remainingCells = MAX_CELLS;

  const sheets: SheetData[] = workbook.SheetNames.map((name) => {
    const sheet = workbook.Sheets[name];
    const bounds = sheet != null ? getStoredCellBounds(sheet) : undefined;
    if (sheet == null || bounds == null) {
      return { name, rows: [] };
    }

    const columnCount = Math.min(bounds.lastColumn + 1, MAX_COLUMNS);
    const rowCount = Math.min(
      bounds.lastRow + 1,
      MAX_ROWS,
      Math.floor(remainingCells / columnCount),
    );
    const truncated =
      rowCount <= bounds.lastRow ||
      columnCount <= bounds.lastColumn ||
      hasRowsBeyondReadLimit(sheet);

    if (rowCount === 0) {
      return { name, rows: [], truncated: true };
    }
    remainingCells -= rowCount * columnCount;

    const rows = utils.sheet_to_json<string[]>(sheet, {
      header: 1,
      defval: "",
      raw: false,
      range: {
        s: { r: 0, c: 0 },
        e: { r: rowCount - 1, c: columnCount - 1 },
      },
    });
    return truncated ? { name, rows, truncated } : { name, rows };
  });

  return { sheets };
}
