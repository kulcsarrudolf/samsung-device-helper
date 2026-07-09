# samsung-device-helper

## 0.1.0

### Minor Changes

- 2b03c1d: More robust and safer lookups, with no breaking changes:
  - Model lookups are now case-insensitive and ignore surrounding whitespace, so codes taken from user agents or device APIs match reliably
  - The model index is built lazily on first lookup instead of at import time
  - `getAllSamsung*` getters return fresh arrays, so callers can no longer mutate the library's internal state
  - `getPhoneByModel` is deprecated in favor of `getDeviceByModel` (it has always returned tablets and watches too); behavior is unchanged

- 141941e: Add subpath entry points so consumers can bundle only the data they need:
  - `samsung-device-helper/model-names`: just `getNameByModel` backed by a compact model-to-name mapping (roughly half the main entry)
  - `samsung-device-helper/phones`, `/tablets`, `/watches`: per-category device lists (`/watches` is ~5% of the main entry)

  The main entry is unchanged. Per-category data modules are generated from the hand-maintained source files by `yarn generate-data`, and CI fails when they are stale.

### Patch Changes

- bc6163b: Fix device data errors and add a validation script that enforces data integrity in CI and pre-commit.

  Data corrections:
  - Galaxy Tab S10 Ultra and Tab S10+ are now typed `tablet` (were `phone`)
  - Galaxy F70e, S26, S26+, and M05 now have their missing `type: 'phone'`
  - Galaxy M17, Watch6, Watch6 Classic, and Gear S3 classic/frontier/frontier LTE had empty model strings; real model codes filled in
  - Duplicate model codes now map to exactly one canonical device; rebranded variants (Galaxy A12 (India), M21s, M31 Prime, S20 Ultra, Grand Prime Plus) merged into their canonical entries and preserved in a new optional `aliases` field
  - Removed models listed twice within a device and fixed model codes missing their `SM-` prefix

## 0.0.23

Versions up to and including 0.0.23 predate Changesets; see the
[git history](https://github.com/kulcsarrudolf/samsung-device-helper/commits/main)
for earlier changes. Future releases are managed with
[Changesets](https://github.com/changesets/changesets) and documented below.
