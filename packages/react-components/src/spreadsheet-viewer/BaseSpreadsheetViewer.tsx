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

import type { Rect, Virtualizer } from "@tanstack/react-virtual";
import { observeElementRect, useVirtualizer } from "@tanstack/react-virtual";
import classnames from "classnames";
import React, { useCallback, useMemo, useRef, useState } from "react";

import type {
  BaseSpreadsheetViewerProps,
  SheetData,
} from "./SpreadsheetViewerApi.js";

import styles from "./BaseSpreadsheetViewer.module.css";

const EMPTY_SHEETS: readonly SheetData[] = [];
const EMPTY_ROW: readonly string[] = [];

/**
 * Converts a 0-based column index to a spreadsheet column letter (0=A, 1=B, ..., 25=Z, 26=AA).
 */
function columnIndexToLetter(index: number): string {
  let letter = "";
  let num = index;
  do {
    const remainder = num % 26;
    letter = String.fromCharCode(65 + remainder) + letter;
    num = Math.floor(num / 26) - 1;
  } while (num >= 0);
  return letter;
}

const ESTIMATED_ROW_HEIGHT = 24;
const ESTIMATED_COLUMN_WIDTH = 100;
const ROW_OVERSCAN = 10;
const COLUMN_OVERSCAN = 4;

// Viewport assumed until the scroll container has a measurable size, so the
// first rows and columns render before layout (and where layout is
// unavailable) rather than nothing.
const FALLBACK_VIEWPORT: Rect = { width: 1_000, height: 600 };

const estimateRowHeight = () => ESTIMATED_ROW_HEIGHT;
const estimateColumnWidth = () => ESTIMATED_COLUMN_WIDTH;

function observeViewportRect<TItemElement extends Element>(
  instance: Virtualizer<HTMLDivElement, TItemElement>,
  callback: (rect: Rect) => void,
): void | (() => void) {
  return observeElementRect(instance, ({ width, height }) =>
    callback({
      width: width > 0 ? width : FALLBACK_VIEWPORT.width,
      height: height > 0 ? height : FALLBACK_VIEWPORT.height,
    }),
  );
}

// An element that has not been laid out (for example inside a hidden
// container) measures 0. Keeping the estimate instead stops zero-size items
// from pulling every row or column into the rendered range.
function measureRowHeight(element: Element): number {
  const { height } = element.getBoundingClientRect();
  return height > 0 ? height : ESTIMATED_ROW_HEIGHT;
}

function measureColumnWidth(element: Element): number {
  const { width } = element.getBoundingClientRect();
  return width > 0 ? width : ESTIMATED_COLUMN_WIDTH;
}

const SheetTable: React.FunctionComponent<{ sheet: SheetData }> = React.memo(
  ({ sheet }) => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const getScrollElement = useCallback(() => scrollContainerRef.current, []);

    const maxCols = useMemo(
      () => sheet.rows.reduce((max, row) => Math.max(max, row.length), 0),
      [sheet.rows],
    );

    const rowVirtualizer = useVirtualizer<HTMLDivElement, HTMLTableRowElement>({
      count: sheet.rows.length,
      getScrollElement,
      initialRect: FALLBACK_VIEWPORT,
      observeElementRect: observeViewportRect,
      estimateSize: estimateRowHeight,
      measureElement: measureRowHeight,
      overscan: ROW_OVERSCAN,
    });

    const columnVirtualizer = useVirtualizer<
      HTMLDivElement,
      HTMLTableCellElement
    >({
      horizontal: true,
      count: maxCols,
      getScrollElement,
      initialRect: FALLBACK_VIEWPORT,
      observeElementRect: observeViewportRect,
      estimateSize: estimateColumnWidth,
      measureElement: measureColumnWidth,
      overscan: COLUMN_OVERSCAN,
    });

    if (sheet.rows.length === 0) {
      return (
        <div className={styles.emptySheet}>
          {sheet.truncated === true
            ? "This sheet is too large to display"
            : "Empty sheet"}
        </div>
      );
    }

    const virtualRows = rowVirtualizer.getVirtualItems();
    const virtualColumns = columnVirtualizer.getVirtualItems();
    const lastVirtualRow = virtualRows[virtualRows.length - 1];
    const lastVirtualColumn = virtualColumns[virtualColumns.length - 1];
    const paddingTop = virtualRows[0]?.start ?? 0;
    const paddingBottom =
      rowVirtualizer.getTotalSize() - (lastVirtualRow?.end ?? 0);
    const paddingLeft = virtualColumns[0]?.start ?? 0;
    const paddingRight =
      columnVirtualizer.getTotalSize() - (lastVirtualColumn?.end ?? 0);
    const renderedColumnCount =
      1 +
      virtualColumns.length +
      (paddingLeft > 0 ? 1 : 0) +
      (paddingRight > 0 ? 1 : 0);

    return (
      <>
        <div ref={scrollContainerRef} className={styles.tableContainer}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th className={styles.cornerCell} />
                {paddingLeft > 0 && (
                  <th
                    className={styles.spacer}
                    style={{ width: paddingLeft, minWidth: paddingLeft }}
                  />
                )}
                {virtualColumns.map((virtualColumn) => (
                  <th
                    key={virtualColumn.key}
                    ref={columnVirtualizer.measureElement}
                    data-index={virtualColumn.index}
                    className={styles.columnHeader}
                  >
                    {columnIndexToLetter(virtualColumn.index)}
                  </th>
                ))}
                {paddingRight > 0 && (
                  <th
                    className={styles.spacer}
                    style={{ width: paddingRight, minWidth: paddingRight }}
                  />
                )}
              </tr>
            </thead>
            <tbody>
              {paddingTop > 0 && (
                <tr aria-hidden={true}>
                  <td
                    className={styles.spacer}
                    colSpan={renderedColumnCount}
                    style={{ height: paddingTop }}
                  />
                </tr>
              )}
              {virtualRows.map((virtualRow) => {
                const row = sheet.rows[virtualRow.index] ?? EMPTY_ROW;
                return (
                  <tr
                    key={virtualRow.key}
                    ref={rowVirtualizer.measureElement}
                    data-index={virtualRow.index}
                  >
                    <td className={styles.rowHeader}>{virtualRow.index + 1}</td>
                    {paddingLeft > 0 && <td className={styles.spacer} />}
                    {virtualColumns.map((virtualColumn) => (
                      <td key={virtualColumn.key} className={styles.cell}>
                        {row[virtualColumn.index] ?? ""}
                      </td>
                    ))}
                    {paddingRight > 0 && <td className={styles.spacer} />}
                  </tr>
                );
              })}
              {paddingBottom > 0 && (
                <tr aria-hidden={true}>
                  <td
                    className={styles.spacer}
                    colSpan={renderedColumnCount}
                    style={{ height: paddingBottom }}
                  />
                </tr>
              )}
            </tbody>
          </table>
        </div>
        {sheet.truncated === true && (
          <div className={styles.truncatedNotice}>
            This sheet is too large to display in full. Showing the first{" "}
            {sheet.rows.length} rows and {maxCols} columns.
          </div>
        )}
      </>
    );
  },
);
SheetTable.displayName = "SheetTable";

export function BaseSpreadsheetViewer({
  content,
  spreadsheet,
  className,
}: BaseSpreadsheetViewerProps): React.ReactElement {
  const [activeSheetIndex, setActiveSheetIndex] = useState(0);
  const rootClassName = classnames(styles.container, className);

  // eslint-disable-next-line @typescript-eslint/no-deprecated -- pre-rename fallback
  const sheets = (content ?? spreadsheet)?.sheets ?? EMPTY_SHEETS;

  const safeIndex = Math.min(activeSheetIndex, Math.max(0, sheets.length - 1));
  const activeSheet = useMemo(() => sheets[safeIndex], [sheets, safeIndex]);

  const handleTabClick = useCallback((index: number) => {
    setActiveSheetIndex(index);
  }, []);

  return (
    <div className={rootClassName}>
      {activeSheet != null ? (
        <SheetTable sheet={activeSheet} />
      ) : (
        <div className={styles.emptySheet}>No sheets</div>
      )}
      {sheets.length > 1 && (
        <div className={styles.tabBar}>
          {sheets.map((sheet, index) => (
            <button
              key={sheet.name}
              className={classnames(styles.tab, {
                [styles.tabActive]: index === safeIndex,
              })}
              onClick={() => handleTabClick(index)}
              type="button"
            >
              {sheet.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
