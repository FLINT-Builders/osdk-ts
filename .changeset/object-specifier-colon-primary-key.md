---
"@osdk/client": patch
"@osdk/faux": patch
---

Split object specifiers and locators on the first colon only, so primary keys containing colons are no longer truncated when serializing object-keyed map parameters for functions.
