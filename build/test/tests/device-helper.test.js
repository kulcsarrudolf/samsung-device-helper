"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const device_helper_1 = require("../src/device-helper");
describe("Device Helper Functions", () => {
    it("getNameByModel returns correct name for known model", () => {
        (0, chai_1.expect)((0, device_helper_1.getNameByModel)("SM-G991B")).to.equal("Galaxy S21 5G");
    });
    it("getNameByModel returns model for unknown model", () => {
        (0, chai_1.expect)((0, device_helper_1.getNameByModel)("UNKNOWN_MODEL")).to.equal("UNKNOWN_MODEL");
    });
    it("getPhoneByModel returns correct phone for known model", () => {
        const phone = (0, device_helper_1.getPhoneByModel)("SM-G991B");
        (0, chai_1.expect)(phone).to.deep.equal({
            model: "SM-G991B",
            name: "Galaxy S21 5G",
            releaseDate: "2021-01-29",
            type: "phone",
        });
    });
    it("getPhoneByModel returns undefined for unknown model", () => {
        (0, chai_1.expect)((0, device_helper_1.getPhoneByModel)("UNKNOWN_MODEL")).to.be.undefined;
    });
    it("getDeviceByModel returns correct device for known phone model", () => {
        const device = (0, device_helper_1.getDeviceByModel)("SM-G991B");
        (0, chai_1.expect)(device).to.deep.equal({
            model: "SM-G991B",
            name: "Galaxy S21 5G",
            releaseDate: "2021-01-29",
            type: "phone",
        });
    });
    it("getDeviceByModel returns correct device for known tablet model", () => {
        const device = (0, device_helper_1.getDeviceByModel)("SM-T970");
        (0, chai_1.expect)(device).to.deep.equal({
            model: "SM-T970",
            name: "Galaxy Tab S7",
            releaseDate: "2020-08-05",
            type: "tablet",
        });
    });
    it("getDeviceByModel returns correct device for known watch model", () => {
        const device = (0, device_helper_1.getDeviceByModel)("SM-R800");
        (0, chai_1.expect)(device).to.deep.equal({
            model: "SM-R800",
            name: "Galaxy Watch",
            releaseDate: "2018-08-24",
            type: "watch",
        });
    });
    it("getDeviceByModel returns undefined for unknown model", () => {
        (0, chai_1.expect)((0, device_helper_1.getDeviceByModel)("UNKNOWN_MODEL")).to.be.undefined;
    });
    it("getAllSamsungPhones returns an array of phones", () => {
        const phones = (0, device_helper_1.getAllSamsungPhones)();
        (0, chai_1.expect)(phones).to.not.be.empty;
        phones.forEach((phone) => {
            (0, chai_1.expect)(phone.type).to.equal("phone");
        });
    });
    it("getAllSamsungTablets returns an array of tablets", () => {
        const tablets = (0, device_helper_1.getAllSamsungTablets)();
        (0, chai_1.expect)(tablets).to.not.be.empty;
        tablets.forEach((tablet) => {
            (0, chai_1.expect)(tablet.type).to.equal("tablet");
        });
    });
    it("getAllSamsungWatches returns an array of watches", () => {
        const watches = (0, device_helper_1.getAllSamsungWatches)();
        (0, chai_1.expect)(watches).to.not.be.empty;
        watches.forEach((watch) => {
            (0, chai_1.expect)(watch.type).to.equal("watch");
        });
    });
    it("getAllSamsungDevices returns an array of all devices", () => {
        const devices = (0, device_helper_1.getAllSamsungDevices)();
        (0, chai_1.expect)(devices).to.not.be.empty;
    });
});
//# sourceMappingURL=device-helper.test.js.map