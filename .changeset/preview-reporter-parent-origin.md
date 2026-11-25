---
"@osdk/vite-plugin-code-workspace-preview": minor
---

Post preview error reports only to the configured `parentOrigin` (or the preview's own origin) instead of `*`, and send a `frame-ancestors` Content-Security-Policy that restricts which origin may embed the preview.
