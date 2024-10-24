# Samsung Device Helper

`samsung-device-helper` is an npm package designed to provide a comprehensive list of Samsung devices, including phones, tablets, and watches. The package offers utility functions to retrieve device names by model and fetch lists of devices by category. **Note:** the list of phones includes models released after 2017, ensuring up-to-date information on the latest Samsung phones.

## Installation

To install the package, run:

```bash
npm install samsung-device-helper
```

## Usage

Here's a quick guide on how to use the `samsung-device-helper` package in your project.

### Importing the Package

First, import the necessary functions from the package:

```javascript
const {
  getNameByModel,
  getAllSamsungPhones,
  getAllSamsungTablets,
  getAllSamsungWatches,
  getAllSamsungDevices,
} = require("samsung-device-helper");
```

### Functions

#### `getNameByModel(model: string): string`

This function takes a device model as an argument and returns the corresponding device name. If the model is not recognized, it returns the model itself.

```javascript
const deviceName = getNameByModel("SM-G991B");
console.log(deviceName); // Outputs: "Galaxy S21 5G"
```

#### `getAllSamsungPhones(): Device[]`

Returns an array of all Samsung phones.

```javascript
const phones = getAllSamsungPhones();
console.log(phones);
```

#### `getAllSamsungTablets(): Device[]`

Returns an array of all Samsung tablets.

```javascript
const tablets = getAllSamsungTablets();
console.log(tablets);
```

#### `getAllSamsungWatches(): Device[]`

Returns an array of all Samsung watches.

```javascript
const watches = getAllSamsungWatches();
console.log(watches);
```

#### `getAllSamsungDevices(): Device[]`

Returns an array of all Samsung devices, including phones, tablets, and watches.

```javascript
const devices = getAllSamsungDevices();
console.log(devices);
```

## Contributing

If you'd like to contribute to this project, please submit a pull request or open an issue on GitHub.

## License

This project is licensed under the MIT License.

---

For more information, visit the [GitHub repository](https://github.com/kulcsarrudolf/samsung-device-helper).

## Acknowledgments

This package is inspired by the need to simplify the retrieval and management of Samsung device data for developers.

Happy coding!
