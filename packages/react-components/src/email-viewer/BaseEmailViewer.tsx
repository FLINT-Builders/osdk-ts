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

import classnames from "classnames";
import React, { useMemo } from "react";

import type { BaseEmailViewerProps, EmailAddress } from "./EmailViewerApi.js";

import styles from "./BaseEmailViewer.module.css";

// `credentialless` is not in React's iframe typings. Browsers that support it
// load the email's images, stylesheets, and frames without any cookies,
// including SameSite=None ones.
const CREDENTIALLESS_IFRAME_ATTRIBUTES = { credentialless: "" };

function formatAddress(address: EmailAddress): string {
  if (address.name) {
    return `${address.name} <${address.address}>`;
  }
  return address.address;
}

function formatAddressList(addresses: readonly EmailAddress[]): string {
  return addresses.map(formatAddress).join(", ");
}

export function BaseEmailViewer({
  content,
  email,
  className,
}: BaseEmailViewerProps): React.ReactElement {
  const rootClassName = classnames(styles.container, className);

  // eslint-disable-next-line @typescript-eslint/no-deprecated -- pre-rename fallback
  const resolved = content ?? email;

  const bodyContent = useMemo(() => {
    if (resolved?.html != null) {
      return (
        <div className={styles.bodyContainer}>
          {/*
           * Security: the email HTML is untrusted. The empty sandbox applies
           * every restriction: no scripts, forms, popups, or top-level
           * navigation, and the document gets an opaque origin. Never add
           * allow-same-origin: it would let the email's resource loads
           * (images, stylesheets, meta refresh) run as the embedding app and
           * carry its cookies. Inline and <style> CSS does not depend on the
           * origin and renders the same.
           */}
          <iframe
            {...CREDENTIALLESS_IFRAME_ATTRIBUTES}
            className={styles.bodyIframe}
            sandbox=""
            referrerPolicy="no-referrer"
            srcDoc={resolved.html}
            title="Email body"
          />
        </div>
      );
    }
    if (resolved?.text != null) {
      return <div className={styles.textBody}>{resolved.text}</div>;
    }
    return <div className={styles.emptyBody}>No content</div>;
  }, [resolved?.html, resolved?.text]);

  return (
    <div className={rootClassName}>
      <div className={styles.header}>
        {resolved?.subject != null && (
          <div className={styles.subject}>{resolved.subject}</div>
        )}
        {resolved?.from != null && (
          <div className={styles.headerRow}>
            <span className={styles.headerLabel}>From:</span>
            <span className={styles.headerValue}>
              {formatAddress(resolved.from)}
            </span>
          </div>
        )}
        {resolved != null && resolved.to.length > 0 && (
          <div className={styles.headerRow}>
            <span className={styles.headerLabel}>To:</span>
            <span className={styles.headerValue}>
              {formatAddressList(resolved.to)}
            </span>
          </div>
        )}
        {resolved != null && resolved.cc.length > 0 && (
          <div className={styles.headerRow}>
            <span className={styles.headerLabel}>Cc:</span>
            <span className={styles.headerValue}>
              {formatAddressList(resolved.cc)}
            </span>
          </div>
        )}
        {resolved?.date != null && (
          <div className={styles.headerRow}>
            <span className={styles.headerLabel}>Date:</span>
            <span className={styles.headerValue}>{resolved.date}</span>
          </div>
        )}
      </div>
      {bodyContent}
    </div>
  );
}
