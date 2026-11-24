---
"@osdk/maker-import": patch
"@osdk/maker": patch
---

Emit generated entity modules from a structured serializer so metadata values (including `__type`) are always written as literal data, and reject api names that do not produce a plain TypeScript identifier.
