---
"@osdk/oauth": patch
---

signOut now clears the stored refresh token and in-memory token before revoking, even when no access token is loaded or revocation fails, and token requests in flight during signOut no longer restore the session.
