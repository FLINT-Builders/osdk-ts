---
"@osdk/client.unstable": patch
"@osdk/client.unstable.tpsa": patch
---

Percent-encode every conjure path parameter and reject empty, `.` and `..` values so an identifier cannot change the request path.
