---
'samsung-device-helper': minor
---

More robust and safer lookups, with no breaking changes:

- Model lookups are now case-insensitive and ignore surrounding whitespace, so codes taken from user agents or device APIs match reliably
- The model index is built lazily on first lookup instead of at import time
- `getAllSamsung*` getters return fresh arrays, so callers can no longer mutate the library's internal state
- `getPhoneByModel` is deprecated in favor of `getDeviceByModel` (it has always returned tablets and watches too); behavior is unchanged
