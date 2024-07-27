import { phones } from "./data/phones";
import { Device } from "./types";

export const getNameByModel = (model: string): string => {
  return phones.find((phone) => phone?.models?.includes(model))?.name || model;
};

export const getPhoneByModel = (model: string): Device | undefined => {
  return phones.find((phone) => phone?.models?.includes(model));
};

export const getDeviceByModel = (model: string): Device | undefined => {
  return phones.find((phone) => phone?.models?.includes(model));
};

export const getAllSamsungPhones = (): Device[] => {
  return phones.filter(
    (phone) => !phone.name.includes("Tab") && !phone.name.includes("Watch")
  );
};

export const getAllSamsungTablets = (): Device[] => {
  return phones.filter((phone) => phone.name.includes("Tab"));
};

export const getAllSamsungWatches = (): Device[] => {
  return phones.filter((phone) => phone.name.includes("Watch"));
};

export const getAllSamsungDevices = (): Device[] => {
  return [
    ...getAllSamsungPhones(),
    ...getAllSamsungTablets(),
    ...getAllSamsungWatches(),
  ];
};
