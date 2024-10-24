import { expect } from "chai";
import {
  getNameByModel,
  getPhoneByModel,
  getDeviceByModel,
  getAllSamsungPhones,
  getAllSamsungTablets,
  getAllSamsungWatches,
  getAllSamsungDevices,
} from "../src/device-helper";

describe("Device Helper Functions", () => {
  it("getNameByModel returns correct name for known model", () => {
    expect(getNameByModel("SM-G991B")).to.equal("Galaxy S21 5G");
  });

  it("getNameByModel returns model for unknown model", () => {
    expect(getNameByModel("UNKNOWN_MODEL")).to.equal("UNKNOWN_MODEL");
  });

  it("getPhoneByModel returns correct phone for known model", () => {
    const phone = getPhoneByModel("SM-G991B");
    expect(phone).to.deep.equal({
      name: "Galaxy S21 5G",
      releaseDate: "01-29-2021",
      type: "phone",
      models: [
        "SM-G991B",
        "SM-G991B/DS",
        "SM-G991U",
        "SM-G991U1",
        "SM-G991W",
        "SM-G991N",
        "SM-G9910",
        "SM-G991Q",
        "SCG09",
      ],
    });
  });

  it("getPhoneByModel returns undefined for unknown model", () => {
    expect(getPhoneByModel("UNKNOWN_MODEL")).to.be.undefined;
  });

  it("getDeviceByModel returns correct device for known phone model", () => {
    const device = getDeviceByModel("SM-G991B");
    expect(device).to.deep.equal({
      name: "Galaxy S21 5G",
      releaseDate: "01-29-2021",
      type: "phone",
      models: [
        "SM-G991B",
        "SM-G991B/DS",
        "SM-G991U",
        "SM-G991U1",
        "SM-G991W",
        "SM-G991N",
        "SM-G9910",
        "SM-G991Q",
        "SCG09",
      ],
    });
  });

  it("getDeviceByModel returns correct device for known tablet model", () => {
    const device = getDeviceByModel("SM-T970");
    expect(device).to.deep.equal({
      name: "Galaxy Tab S7+",
      type: "tablet",
      releaseDate: "08-21-2020",
      models: ["SM-T970", "SM-T976B", "SM-T975"],
    });
  });

  it("getDeviceByModel returns correct device for known watch model", () => {
    const device = getDeviceByModel("SM-R800");
    expect(device).to.deep.equal({
      name: "Galaxy Watch",
      releaseDate: null,
      type: "watch",
      models: [
        "SM-805U",
        "SM-805W",
        "SM-815U",
        "SM-815W",
        "SM-R805F",
        "SM-R805N",
        "SM-R815F",
        "SM-R815N",
        "SM-R8050",
        "SM-R800",
      ],
    });
  });

  it("getDeviceByModel returns undefined for unknown model", () => {
    expect(getDeviceByModel("UNKNOWN_MODEL")).to.be.undefined;
  });

  it("getAllSamsungPhones returns an array of phones", () => {
    const phones = getAllSamsungPhones();

    expect(phones).to.not.be.empty;

    phones.forEach((phone) => {
      expect(phone.type).to.equal("phone");
    });
  });

  it("getAllSamsungTablets returns an array of tablets", () => {
    const tablets = getAllSamsungTablets();

    expect(tablets).to.not.be.empty;

    tablets.forEach((tablet) => {
      expect(tablet.type).to.equal("tablet");
    });
  });

  it("getAllSamsungWatches returns an array of watches", () => {
    const watches = getAllSamsungWatches();

    expect(watches).to.not.be.empty;

    watches.forEach((watch) => {
      expect(watch.type).to.equal("watch");
    });
  });

  it("getAllSamsungDevices returns an array of all devices", () => {
    const devices = getAllSamsungDevices();
    expect(devices).to.not.be.empty;
  });
});
