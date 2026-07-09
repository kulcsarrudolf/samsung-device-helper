import { describe, it, expect } from 'vitest';
import {
  getAllSamsungPhones,
  getAllSamsungTablets,
  getAllSamsungWatches,
  getAllSamsungDevices,
} from '../src/device-helper';

describe('getAllSamsungPhones', () => {
  it('returns a non-empty array where every entry is a phone', () => {
    const phones = getAllSamsungPhones();
    expect(phones.length).toBeGreaterThan(0);
    phones.forEach((phone) => {
      expect(phone.type).toBe('phone');
    });
  });
});

describe('getAllSamsungTablets', () => {
  it('returns a non-empty array where every entry is a tablet', () => {
    const tablets = getAllSamsungTablets();
    expect(tablets.length).toBeGreaterThan(0);
    tablets.forEach((tablet) => {
      expect(tablet.type).toBe('tablet');
    });
  });
});

describe('getAllSamsungWatches', () => {
  it('returns a non-empty array where every entry is a watch', () => {
    const watches = getAllSamsungWatches();
    expect(watches.length).toBeGreaterThan(0);
    watches.forEach((watch) => {
      expect(watch.type).toBe('watch');
    });
  });
});

describe('getAllSamsungDevices', () => {
  it('returns a non-empty array of all devices', () => {
    const devices = getAllSamsungDevices();
    expect(devices.length).toBeGreaterThan(0);
  });
});
