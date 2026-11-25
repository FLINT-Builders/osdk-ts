---
"@osdk/generator-converters.preview": patch
"@osdk/generator-converters.ontologyir": patch
---

Run Python SDK generation and Python function discovery in isolated mode so files in the project directory cannot shadow Python startup hooks or the generator and discovery modules, and validate the reported site-packages directory before replacing ontology_sdk in it.
