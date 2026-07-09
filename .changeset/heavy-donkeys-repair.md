---
'samsung-device-helper': patch
---

Fix device data errors and add a validation script that enforces data integrity in CI and pre-commit.

Data corrections:

- Galaxy Tab S10 Ultra and Tab S10+ are now typed `tablet` (were `phone`)
- Galaxy F70e, S26, S26+, and M05 now have their missing `type: 'phone'`
- Galaxy M17, Watch6, Watch6 Classic, and Gear S3 classic/frontier/frontier LTE had empty model strings; real model codes filled in
- Duplicate model codes now map to exactly one canonical device; rebranded variants (Galaxy A12 (India), M21s, M31 Prime, S20 Ultra, Grand Prime Plus) merged into their canonical entries and preserved in a new optional `aliases` field
- Removed models listed twice within a device and fixed model codes missing their `SM-` prefix
