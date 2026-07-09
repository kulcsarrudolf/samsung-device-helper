import { phones } from './generated/phones';
import { Device } from './types';

export type { Device, DeviceType } from './types';

/** Returns all Samsung phones. Importing from 'samsung-device-helper/phones' bundles only phone data. */
export const getAllSamsungPhones = (): Device[] => {
  return [...phones];
};
