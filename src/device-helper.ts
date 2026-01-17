import { samsungDevices } from "./data/samsung-devices";
import { Device } from "./types";

const modelToDeviceMap = new Map<string, Device>();

samsungDevices.forEach((device) => {
  if (device.models) {
    device.models.forEach((model) => {
      modelToDeviceMap.set(model, device);
    });
  }
});

const phoneDevices = samsungDevices.filter((device) => device.type === "phone");
const tabletDevices = samsungDevices.filter(
  (device) => device.type === "tablet",
);
const watchDevices = samsungDevices.filter((device) => device.type === "watch");

export const getNameByModel = (model: string): string => {
  return modelToDeviceMap.get(model)?.name || model;
};

export const getDeviceByModel = (model: string): Device | undefined => {
  return modelToDeviceMap.get(model);
};

export const getPhoneByModel = getDeviceByModel;

export const getAllSamsungPhones = (): Device[] => {
  return phoneDevices;
};

export const getAllSamsungTablets = (): Device[] => {
  return tabletDevices;
};

export const getAllSamsungWatches = (): Device[] => {
  return watchDevices;
};

export const getAllSamsungDevices = (): Device[] => {
  return samsungDevices;
};
