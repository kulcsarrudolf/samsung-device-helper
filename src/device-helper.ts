import { samsungDevices } from "./data/samsung-devices";
import { Device } from "./types";

export const getNameByModel = (model: string): string => {
  return (
    samsungDevices.find((device) => device?.models?.includes(model))?.name ||
    model
  );
};

export const getPhoneByModel = (model: string): Device | undefined => {
  return samsungDevices.find((device) => device?.models?.includes(model));
};

export const getDeviceByModel = (model: string): Device | undefined => {
  return samsungDevices.find((device) => device?.models?.includes(model));
};

export const getAllSamsungPhones = (): Device[] => {
  return samsungDevices.filter((device) => device.type === "phone");
};

export const getAllSamsungTablets = (): Device[] => {
  return samsungDevices.filter((device) => device.type === "tablet");
};

export const getAllSamsungWatches = (): Device[] => {
  return samsungDevices.filter((device) => device.type === "watch");
};

export const getAllSamsungDevices = (): Device[] => {
  return [
    ...getAllSamsungPhones(),
    ...getAllSamsungTablets(),
    ...getAllSamsungWatches(),
  ];
};
