/*
 * Copyright 2023 Palantir Technologies, Inc. All rights reserved.
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

const START_TOKEN = new Uint8Array([123, 34, 100, 97, 116, 97, 34, 58, 91]); // `{"data":[`
const OBJECT_OPEN_CHAR_CODE = 123; // '{'
const OBJECT_CLOSE_CHAR_CODE = 125; // '}'
const QUOTE_CHAR_CODE = 34; // '"'
const BACKSLASH_CHAR_CODE = 92; // '\'

export async function* parseStreamedResponse(
  asyncIterable: AsyncIterable<Uint8Array>,
): AsyncGenerator<any, void, unknown> {
  const utf8decoder = new TextDecoder("utf-8");

  let parsedStart = false;
  let prevChunks: Uint8Array[] = [];
  let openBracesCount = 0;
  // String and escape state must persist across chunks: braces inside JSON
  // strings are data, not structure. Multi-byte UTF-8 sequences never contain
  // ASCII bytes, so scanning bytes is safe.
  let inString = false;
  let escaped = false;

  for await (const chunk of asyncIterable) {
    // on the first chunk, skip the expected START_TOKEN if we see it
    let i = 0;
    if (!parsedStart) {
      parsedStart = true;
      if (startsWith(chunk, START_TOKEN)) {
        i = START_TOKEN.length;
      }
    }

    // index in this chunk where the current top level object begins; an object
    // carried over from a previous chunk continues from the start of this one
    let objectStart = openBracesCount > 0 ? 0 : -1;

    for (; i < chunk.length; i++) {
      const c = chunk[i];

      if (inString) {
        if (escaped) {
          escaped = false;
        } else if (c === BACKSLASH_CHAR_CODE) {
          escaped = true;
        } else if (c === QUOTE_CHAR_CODE) {
          inString = false;
        }
        continue;
      }

      if (c === QUOTE_CHAR_CODE) {
        inString = true;
      } else if (c === OBJECT_OPEN_CHAR_CODE) {
        if (openBracesCount === 0) {
          objectStart = i;
        }
        openBracesCount++;
      } else if (c === OBJECT_CLOSE_CHAR_CODE && openBracesCount > 0) {
        openBracesCount--;

        // found a complete top level object, emit it
        if (openBracesCount === 0) {
          yield combineAndParse(
            utf8decoder,
            prevChunks,
            chunk.subarray(objectStart, i + 1),
          );

          // if there was a prevChunk, we've consumed it now
          prevChunks = [];
          objectStart = -1;
        }
      }
    }

    // if we reached the end of our chunk before finding the end of the object
    // store off the relevant remainder of our current chunk and go grab the next one
    if (openBracesCount > 0) {
      prevChunks.push(chunk.subarray(objectStart));
    }
  }
}

function startsWith(a: Uint8Array, b: Uint8Array) {
  if (a.length < b.length) {
    return false;
  }

  for (let i = 0; i < b.length; i++) {
    if (a[i] !== b[i]) {
      return false;
    }
  }

  return true;
}

function combineAndParse(
  utf8decoder: TextDecoder,
  prev: Uint8Array[],
  curr: Uint8Array,
) {
  let str = "";
  for (const chunk of prev) {
    str += utf8decoder.decode(chunk, { stream: true });
  }
  str += utf8decoder.decode(curr);

  return JSON.parse(str);
}

export async function* iterateReadableStream(
  readableStream: ReadableStreamDefaultReader<Uint8Array>,
): AsyncGenerator<Uint8Array, void, unknown> {
  let res = await readableStream.read();
  while (!res.done) {
    yield res.value;
    res = await readableStream.read();
  }
}
