---
"@osdk/create-app": patch
"@osdk/create-widget": patch
---

Reject scaffold inputs (Ontology RID, Foundry/application/registry URLs, RIDs) that contain line breaks or other characters that could add assignments to generated env and .npmrc files, and validate them before writing any files.
