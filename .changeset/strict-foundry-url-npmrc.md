---
"@osdk/create-app": patch
"@osdk/create-widget": patch
---

Reject Foundry URLs, OSDK registry URLs, and package scopes containing line breaks or other unsafe characters before writing .npmrc, and write only the parsed hostname into the auth token line.
