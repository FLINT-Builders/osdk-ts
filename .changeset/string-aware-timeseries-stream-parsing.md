---
"@osdk/client": patch
---

Ignore braces inside JSON strings when splitting streamed timeseries and geotime series responses, so points whose strings contain `{` or `}` no longer break or truncate the stream
