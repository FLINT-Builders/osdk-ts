---
"@osdk/create-app": patch
"@osdk/create-widget": patch
---

Reject Foundry URLs, application URLs, registry URLs, ontology RIDs, and client IDs containing line breaks or other characters that could inject extra entries into generated .env and .npmrc files
