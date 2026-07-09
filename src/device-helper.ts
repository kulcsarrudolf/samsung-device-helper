import { samsungDevices } from './data/samsung-devices';
import { Device, DeviceType } from './types';

const normalizeModel = (model: string): string => model.trim().toUpperCase();

let modelToDeviceMap: Map<string, Device> | undefined;

const getModelToDeviceMap = (): Map<string, Device> => {
  if (!modelToDeviceMap) {
    modelToDeviceMap = new Map();
    for (const device of samsungDevices) {
      for (const model of device.models) {
        modelToDeviceMap.set(normalizeModel(model), device);
      }
    }
  }
  return modelToDeviceMap;
};

const getDevicesByType = (type: DeviceType): Device[] =>
  samsungDevices.filter((device) => device.type === type);

/**
 * Returns the marketing name for a model code, or the model itself when unknown.
 * Lookup is case-insensitive and ignores surrounding whitespace.
 */
export const getNameByModel = (model: string): string => {
  return getModelToDeviceMap().get(normalizeModel(model))?.name || model;
};

/**
 * Returns the device for a model code, or undefined when unknown.
 * Lookup is case-insensitive and ignores surrounding whitespace.
 */
export const getDeviceByModel = (model: string): Device | undefined => {
  return getModelToDeviceMap().get(normalizeModel(model));
};

/** @deprecated Use {@link getDeviceByModel}; this returns tablets and watches too. */
export const getPhoneByModel = getDeviceByModel;

export const getAllSamsungPhones = (): Device[] => {
  return getDevicesByType('phone');
};

export const getAllSamsungTablets = (): Device[] => {
  return getDevicesByType('tablet');
};

export const getAllSamsungWatches = (): Device[] => {
  return getDevicesByType('watch');
};

export const getAllSamsungDevices = (): Device[] => {
  return [...samsungDevices];
};
