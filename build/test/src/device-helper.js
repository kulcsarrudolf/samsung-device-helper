"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllSamsungDevices = exports.getAllSamsungWatches = exports.getAllSamsungTablets = exports.getAllSamsungPhones = exports.getDeviceByModel = exports.getPhoneByModel = exports.getNameByModel = void 0;
const getNameByModel = (model) => {
    if (model === "SM-G991B") {
        return "Galaxy S21 5G";
    }
    return model;
};
exports.getNameByModel = getNameByModel;
const getPhoneByModel = (model) => {
    return (0, exports.getAllSamsungPhones)().find((phone) => phone.model === model);
};
exports.getPhoneByModel = getPhoneByModel;
const getDeviceByModel = (model) => {
    return (0, exports.getAllSamsungDevices)().find((device) => device.model === model);
};
exports.getDeviceByModel = getDeviceByModel;
const getAllSamsungPhones = () => {
    return [
        {
            model: "SM-G991B",
            name: "Galaxy S21 5G",
            releaseDate: "2021-01-29",
            type: "phone",
        },
        // complete full list
    ];
};
exports.getAllSamsungPhones = getAllSamsungPhones;
const getAllSamsungTablets = () => {
    return [
        {
            model: "SM-T970",
            name: "Galaxy Tab S7",
            releaseDate: "2020-08-05",
            type: "tablet",
        },
        // complete full list
    ];
};
exports.getAllSamsungTablets = getAllSamsungTablets;
const getAllSamsungWatches = () => {
    return [
        {
            model: "SM-R800",
            name: "Galaxy Watch",
            releaseDate: "2018-08-24",
            type: "watch",
        },
        // complete full list
    ];
};
exports.getAllSamsungWatches = getAllSamsungWatches;
const getAllSamsungDevices = () => {
    return [
        ...(0, exports.getAllSamsungPhones)(),
        ...(0, exports.getAllSamsungTablets)(),
        ...(0, exports.getAllSamsungWatches)(),
    ];
};
exports.getAllSamsungDevices = getAllSamsungDevices;
//# sourceMappingURL=device-helper.js.map