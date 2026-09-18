# Samsung Device Helper

[![npm version](https://img.shields.io/npm/v/samsung-device-helper)](https://www.npmjs.com/package/samsung-device-helper)
[![license](https://img.shields.io/npm/l/samsung-device-helper)](https://github.com/kulcsarrudolf/samsung-device-helper/blob/main/LICENSE)
[![downloads](https://img.shields.io/npm/dt/samsung-device-helper)](https://www.npmjs.com/package/samsung-device-helper)
[![GitHub Stars](https://img.shields.io/github/stars/kulcsarrudolf/samsung-device-helper?style=social)](https://github.com/kulcsarrudolf/samsung-device-helper)
[![CI](https://img.shields.io/github/actions/workflow/status/kulcsarrudolf/samsung-device-helper/ci.yml?label=CI)](https://github.com/kulcsarrudolf/samsung-device-helper/actions/workflows/ci.yml)
[![Socket](https://badge.socket.dev/npm/package/samsung-device-helper)](https://socket.dev/npm/package/samsung-device-helper)

Samsung devices report a model code such as `SM-G991B` in user agents, analytics, and crash reports.
`samsung-device-helper` turns that code into the name people know: "Galaxy S21 5G".

```javascript
import { getNameByModel } from "samsung-device-helper";

getNameByModel("SM-G991B"); // "Galaxy S21 5G"
getNameByModel("sm-s928b "); // "Galaxy S24 Ultra" (case and whitespace are ignored)
getNameByModel("SM-UNKNOWN"); // "SM-UNKNOWN" (unknown codes are returned as is)
```

Try it in the browser: [model code lookup](https://kulcsarrudolf.github.io/samsung-device-helper/).

The catalog covers phones released after 2017, plus tablets and watches, and is updated for 2026 devices.
The package has zero dependencies and no install scripts.
It ships TypeScript types, ESM and CommonJS builds, and is published from GitHub Actions with [npm provenance](https://docs.npmjs.com/generating-provenance-statements).

## Installation

```bash
npm install samsung-device-helper
```

## Usage

ESM and TypeScript:

```javascript
import { getNameByModel, getDeviceByModel, getAllSamsungPhones } from "samsung-device-helper";
```

CommonJS:

```javascript
const { getNameByModel, getDeviceByModel, getAllSamsungPhones } = require("samsung-device-helper");
```

### `getNameByModel(model: string): string`

Returns the marketing name for a model code.
If the code is not in the catalog, it returns the code itself, so the result is always safe to display.

```javascript
getNameByModel("SM-G991B"); // "Galaxy S21 5G"
```

### `getDeviceByModel(model: string): Device | undefined`

Returns the full catalog entry for a model code, or `undefined` when the code is unknown.
It works for phones, tablets, and watches.

```javascript
getDeviceByModel("SM-G991B");
// {
//   name: "Galaxy S21 5G",
//   type: "phone",
//   releaseDate: "01-29-2021",
//   models: ["SM-G991B", "SM-G991B/DS", "SM-G991U", ...]
// }
```

`getPhoneByModel` is a deprecated alias of `getDeviceByModel`.

### Listing devices

`getAllSamsungPhones()`, `getAllSamsungTablets()`, and `getAllSamsungWatches()` each return a `Device[]` with every device of that type.
`getAllSamsungDevices()` returns the whole catalog.

```javascript
const watches = getAllSamsungWatches();
watches.map((watch) => watch.name); // ["Galaxy Watch Ultra2", "Galaxy Watch9", ...]
```

### The `Device` type

```typescript
type DeviceType = "phone" | "tablet" | "watch";

type Device = {
  name: string;
  /** Release date in MM-DD-YYYY format, or null when unknown. */
  releaseDate: string | null;
  models: string[];
  type?: DeviceType;
  /** Alternate marketing names for the same hardware (e.g. regional variants). */
  aliases?: string[];
};
```

## Smaller bundles with subpath imports

The main entry ships the full device catalog.
If you only need part of it, import from a subpath so your bundle carries only that data:

```javascript
// Only the model-to-name mapping (smallest, ideal for display purposes)
import { getNameByModel } from "samsung-device-helper/model-names";

// Only one device category
import { getAllSamsungPhones } from "samsung-device-helper/phones";
import { getAllSamsungTablets } from "samsung-device-helper/tablets";
import { getAllSamsungWatches } from "samsung-device-helper/watches";
```

All subpath functions behave identically to their main-entry counterparts.

## Contributing

Missing a device or found a wrong model code?
Open an issue or a pull request.
[CONTRIBUTING.md](https://github.com/kulcsarrudolf/samsung-device-helper/blob/main/CONTRIBUTING.md) explains where the device data lives and how to validate it.

To report a security problem, see [SECURITY.md](https://github.com/kulcsarrudolf/samsung-device-helper/blob/main/SECURITY.md).

## License

MIT. This project is not affiliated with Samsung.
