import { describe, it, expect } from 'vitest';
import {
  getAllSamsungDevices,
  getAllSamsungPhones as getAllPhonesFull,
  getNameByModel as getNameByModelFull,
} from '../src/device-helper';
import { getAllSamsungPhones } from '../src/phones';
import { getAllSamsungTablets } from '../src/tablets';
import { getAllSamsungWatches } from '../src/watches';
import { getNameByModel } from '../src/model-names';

describe('generated per-type entries', () => {
  it('phones entry matches the main entry', () => {
    expect(getAllSamsungPhones()).toEqual(getAllPhonesFull());
  });

  it('per-type entries cover every typed device', () => {
    const total =
      getAllSamsungPhones().length + getAllSamsungTablets().length + getAllSamsungWatches().length;
    expect(total).toBe(getAllSamsungDevices().length);
  });
});

describe('generated model-names entry', () => {
  it('resolves every model of every device to its name', () => {
    for (const device of getAllSamsungDevices()) {
      for (const model of device.models) {
        expect(getNameByModel(model)).toBe(device.name);
      }
    }
  });

  it('behaves like the main entry, including normalization and unknown fallback', () => {
    expect(getNameByModel(' sm-g991b ')).toBe(getNameByModelFull(' sm-g991b '));
    expect(getNameByModel('SM-UNKNOWN')).toBe('SM-UNKNOWN');
  });
});
