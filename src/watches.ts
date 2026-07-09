import { watches } from './generated/watches';
import { Device } from './types';

export type { Device, DeviceType } from './types';

/** Returns all Samsung watches. Importing from 'samsung-device-helper/watches' bundles only watch data. */
export const getAllSamsungWatches = (): Device[] => {
  return [...watches];
};
