---
"@osdk/oauth": patch
---

Revoke the refresh token (falling back to the access token) on sign-out, and always clear stored tokens even if revocation fails.
