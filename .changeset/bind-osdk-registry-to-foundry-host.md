---
"@osdk/create-app": patch
"@osdk/create-widget": patch
---

Refuse OSDK registry URLs whose parsed host differs from the Foundry URL host, and write only the validated URL to .npmrc
