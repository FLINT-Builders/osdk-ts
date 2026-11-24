---
"@osdk/widget.vite-plugin": patch
---

Add failing tests for cross-origin reads of the widget dev server. These tests fail until the wildcard CORS setting and the unauthenticated dev-mode finish endpoint are fixed.
