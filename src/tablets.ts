import { tablets } from './generated/tablets';
import { Device } from './types';

export type { Device, DeviceType } from './types';

/** Returns all Samsung tablets. Importing from 'samsung-device-helper/tablets' bundles only tablet data. */
export const getAllSamsungTablets = (): Device[] => {
  return [...tablets];
};
