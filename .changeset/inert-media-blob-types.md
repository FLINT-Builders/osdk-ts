---
"@osdk/client": patch
"@osdk/react-components": patch
---

Stop creating same-origin blob URLs with scriptable content types (SVG, HTML, XML) for media in ImageViewer, VideoViewer, and the observable client's media cache; SVG images now render from a data URL.
