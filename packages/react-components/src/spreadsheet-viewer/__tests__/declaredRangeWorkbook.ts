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

/* cspell:words openxmlformats officedocument spreadsheetml rels */

/* oxlint-disable no-bitwise, unicorn/prefer-math-trunc, typescript/prefer-for-of -- CRC-32 and ZIP local headers are defined with unsigned 32-bit arithmetic. */

/**
 * Builds a minimal .xlsx (stored ZIP, no compression) whose worksheet XML is
 * under the test's control. SheetJS reads this container the same way it
 * reads a workbook Excel would save.
 */

export interface WorkbookCell {
  /** A1-style reference, for example "C3". */
  ref: string;
  value: string;
}

export interface WorkbookSheetSpec {
  name: string;
  /** Value of the worksheet `dimension` element, for example "A1:XFD3". */
  dimension: string;
  cells: readonly WorkbookCell[];
}

const CRC_TABLE = new Uint32Array(256);
for (let n = 0; n < 256; n++) {
  let crc = n;
  for (let k = 0; k < 8; k++) {
    crc = (crc & 1) !== 0 ? 0xedb88320 ^ (crc >>> 1) : crc >>> 1;
  }
  CRC_TABLE[n] = crc >>> 0;
}

function crc32(data: Uint8Array): number {
  let crc = 0xffffffff;
  for (let i = 0; i < data.length; i++) {
    crc = CRC_TABLE[(crc ^ data[i]!) & 0xff]! ^ (crc >>> 8);
  }
  return (crc ^ 0xffffffff) >>> 0;
}

function writeUint16(view: DataView, offset: number, value: number): void {
  view.setUint16(offset, value, true);
}

function writeUint32(view: DataView, offset: number, value: number): void {
  view.setUint32(offset, value, true);
}

function zipStore(files: ReadonlyArray<readonly [string, string]>): Uint8Array {
  const encoder = new TextEncoder();
  const parts: Uint8Array[] = [];
  const central: Uint8Array[] = [];
  let offset = 0;

  for (const [name, text] of files) {
    const nameBytes = encoder.encode(name);
    const data = encoder.encode(text);
    const checksum = crc32(data);

    const local = new Uint8Array(30);
    const localView = new DataView(local.buffer);
    writeUint32(localView, 0, 0x04034b50);
    writeUint16(localView, 4, 20);
    writeUint32(localView, 14, checksum);
    writeUint32(localView, 18, data.length);
    writeUint32(localView, 22, data.length);
    writeUint16(localView, 26, nameBytes.length);
    parts.push(local, nameBytes, data);

    const cen = new Uint8Array(46);
    const cenView = new DataView(cen.buffer);
    writeUint32(cenView, 0, 0x02014b50);
    writeUint16(cenView, 4, 20);
    writeUint16(cenView, 6, 20);
    writeUint32(cenView, 16, checksum);
    writeUint32(cenView, 20, data.length);
    writeUint32(cenView, 24, data.length);
    writeUint16(cenView, 28, nameBytes.length);
    writeUint32(cenView, 42, offset);
    central.push(cen, nameBytes);

    offset += local.length + nameBytes.length + data.length;
  }

  const centralBytes = concatBytes(central);
  const end = new Uint8Array(22);
  const endView = new DataView(end.buffer);
  writeUint32(endView, 0, 0x06054b50);
  writeUint16(endView, 8, files.length);
  writeUint16(endView, 10, files.length);
  writeUint32(endView, 12, centralBytes.length);
  writeUint32(endView, 16, offset);
  return concatBytes([...parts, centralBytes, end]);
}

function concatBytes(chunks: readonly Uint8Array[]): Uint8Array {
  const total = chunks.reduce((sum, chunk) => sum + chunk.length, 0);
  const out = new Uint8Array(total);
  let offset = 0;
  for (const chunk of chunks) {
    out.set(chunk, offset);
    offset += chunk.length;
  }
  return out;
}

function escapeXml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function sheetXml(sheet: WorkbookSheetSpec): string {
  const rows = new Map<string, string[]>();
  for (const cell of sheet.cells) {
    const rowNumber = /^[A-Z]+(\d+)$/u.exec(cell.ref)?.[1];
    if (rowNumber == null) {
      throw new Error(`Cell ref must look like A1, got ${cell.ref}`);
    }
    const cells = rows.get(rowNumber) ?? [];
    cells.push(
      `<c r="${cell.ref}" t="inlineStr"><is><t>${escapeXml(cell.value)}</t></is></c>`,
    );
    rows.set(rowNumber, cells);
  }
  const rowXml = [...rows.entries()]
    .map(
      ([rowNumber, cells]) => `<row r="${rowNumber}">${cells.join("")}</row>`,
    )
    .join("");
  return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
  <dimension ref="${sheet.dimension}"/>
  <sheetData>${rowXml}</sheetData>
</worksheet>`;
}

export function buildXlsx(sheets: readonly WorkbookSheetSpec[]): Uint8Array {
  if (sheets.length === 0) {
    throw new Error("buildXlsx requires at least one sheet");
  }
  const sheetOverrides = sheets
    .map(
      (_sheet, index) =>
        `  <Override PartName="/xl/worksheets/sheet${index + 1}.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>`,
    )
    .join("\n");
  const sheetEntries = sheets
    .map(
      (sheet, index) =>
        `    <sheet name="${escapeXml(sheet.name)}" sheetId="${index + 1}" r:id="rId${index + 1}"/>`,
    )
    .join("\n");
  const sheetRelationships = sheets
    .map(
      (_sheet, index) =>
        `  <Relationship Id="rId${index + 1}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet${index + 1}.xml"/>`,
    )
    .join("\n");

  const files: Array<readonly [string, string]> = [
    [
      "[Content_Types].xml",
      `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml" ContentType="application/xml"/>
  <Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>
${sheetOverrides}
</Types>`,
    ],
    [
      "_rels/.rels",
      `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/>
</Relationships>`,
    ],
    [
      "xl/workbook.xml",
      `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheets>
${sheetEntries}
  </sheets>
</workbook>`,
    ],
    [
      "xl/_rels/workbook.xml.rels",
      `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
${sheetRelationships}
</Relationships>`,
    ],
  ];
  sheets.forEach((sheet, index) => {
    files.push([`xl/worksheets/sheet${index + 1}.xml`, sheetXml(sheet)]);
  });
  return zipStore(files);
}

/**
 * Workbook from the reported attack, kept small enough that the unfixed
 * parser returns instead of exhausting the test runner.
 *
 * Wide declares every Excel column (XFD is column 16,384) across 3 rows and
 * stores two cells. Tall declares 4,000 rows across columns A–C and stores
 * one cell. Both files are a few kilobytes.
 */
export function declaredRangeAttackWorkbook(): Uint8Array {
  return buildXlsx([
    {
      name: "Wide",
      dimension: "A1:XFD3",
      cells: [
        { ref: "A1", value: "wide-cell" },
        { ref: "C3", value: "wide-also" },
      ],
    },
    {
      name: "Tall",
      dimension: "A1:C4000",
      cells: [{ ref: "A1", value: "tall-cell" }],
    },
  ]);
}

/** A normal sheet whose dimension matches the cells that are present. */
export function ordinaryWorkbook(): Uint8Array {
  return buildXlsx([
    {
      name: "Revenue",
      dimension: "A1:B2",
      cells: [
        { ref: "A1", value: "Region" },
        { ref: "B1", value: "Total" },
        { ref: "A2", value: "Europe" },
        { ref: "B2", value: "42" },
      ],
    },
  ]);
}

export function maxRowLength(rows: readonly (readonly string[])[]): number {
  return rows.reduce((max, row) => Math.max(max, row.length), 0);
}
