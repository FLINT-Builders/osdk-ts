---
"@osdk/generator": patch
"@osdk/maker-import": patch
---

Reject ontology api names and rids that are not safe to emit before writing generated files, emit metadata strings with JSON.stringify, and fail generation when formatting fails instead of writing unformatted output.
