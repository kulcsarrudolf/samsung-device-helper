---
'samsung-device-helper': minor
---

Add subpath entry points so consumers can bundle only the data they need:

- `samsung-device-helper/model-names`: just `getNameByModel` backed by a compact model-to-name mapping (roughly half the main entry)
- `samsung-device-helper/phones`, `/tablets`, `/watches`: per-category device lists (`/watches` is ~5% of the main entry)

The main entry is unchanged. Per-category data modules are generated from the hand-maintained source files by `yarn generate-data`, and CI fails when they are stale.
