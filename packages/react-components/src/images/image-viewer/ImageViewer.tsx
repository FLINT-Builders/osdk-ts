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

import { Error as ErrorIcon, Spin } from "@blueprintjs/icons";
import classnames from "classnames";
import React from "react";

import { useMediaContents } from "../../shared/hooks/useMediaContents.js";
import {
  createSameOriginObjectUrl,
  getMediaTypeEssence,
  OPAQUE_BINARY_TYPE,
  readBlobAsDataUrl,
  revokeIfObjectUrl,
} from "../../shared/mediaObjectUrl.js";
import { BaseImageViewer } from "./BaseImageViewer.js";
import type { ImageViewerProps } from "./ImageViewerApi.js";

import styles from "./BaseImageViewer.module.css";

const RASTER_IMAGE_TYPES = new Set([
  "image/png",
  "image/jpeg",
  "image/gif",
  "image/webp",
  "image/bmp",
]);

const SVG_TYPE = "image/svg+xml";

function toRasterImageType(essence: string | undefined): string {
  return essence != null && RASTER_IMAGE_TYPES.has(essence)
    ? essence
    : OPAQUE_BINARY_TYPE;
}

const transformToImageSrc = async (response: Response): Promise<string> => {
  if (getMediaTypeEssence(response.headers.get("content-type")) === SVG_TYPE) {
    // An SVG blob URL would be a same-origin document when opened in a tab.
    // A data URL renders the same in <img> but gets an opaque origin if
    // navigated to, so its scripts cannot reach the app's storage.
    const bytes = await response.arrayBuffer();
    return readBlobAsDataUrl(new Blob([bytes], { type: SVG_TYPE }));
  }
  return createSameOriginObjectUrl(response, toRasterImageType);
};

export function ImageViewer({
  media,
  className,
  ...imageViewerProps
}: ImageViewerProps): React.ReactElement {
  const {
    data: src,
    loading,
    error,
  } = useMediaContents(media, transformToImageSrc, revokeIfObjectUrl);

  const rootClassName = classnames(styles.container, className);

  return (
    <div className={rootClassName}>
      {loading && (
        <div className={styles.loadingContainer}>
          <Spin className={styles.spinnerIcon} />
          Loading…
        </div>
      )}
      {error != null && (
        <div className={styles.errorContainer}>
          <ErrorIcon className={styles.errorIcon} />
          Failed to load image: {error.message}
        </div>
      )}
      {src != null && <BaseImageViewer src={src} {...imageViewerProps} />}
    </div>
  );
}
