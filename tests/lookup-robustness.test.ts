import { describe, it, expect } from 'vitest';
import {
  getAllSamsungDevices,
  getAllSamsungPhones,
  getDeviceByModel,
  getNameByModel,
  getPhoneByModel,
} from '../src/device-helper';

describe('model lookup normalization', () => {
  it('matches regardless of casing', () => {
    expect(getNameByModel('sm-g991b')).toBe('Galaxy S21 5G');
  });

  it('matches with surrounding whitespace', () => {
    expect(getNameByModel('  SM-G991B ')).toBe('Galaxy S21 5G');
    expect(getDeviceByModel(' sm-t970 ')?.name).toBe('Galaxy Tab S7+');
  });

  it('still returns the original input for unknown models', () => {
    expect(getNameByModel(' sm-unknown ')).toBe(' sm-unknown ');
  });
});

describe('aliases', () => {
  it('exposes alternate marketing names on merged devices', () => {
    const device = getDeviceByModel('SM-F415F');
    expect(device?.name).toBe('Galaxy F41');
    expect(device?.aliases).toContain('Galaxy M21s');
  });
});

describe('defensive copies', () => {
  it('mutating a returned array does not affect later calls', () => {
    const phones = getAllSamsungPhones();
    const count = phones.length;
    phones.length = 0;
    expect(getAllSamsungPhones().length).toBe(count);

    const devices = getAllSamsungDevices();
    const total = devices.length;
    devices.pop();
    expect(getAllSamsungDevices().length).toBe(total);
  });
});

describe('getPhoneByModel (deprecated)', () => {
  it('keeps its historical behavior of returning any device type', () => {
    expect(getPhoneByModel('SM-R800')?.type).toBe('watch');
  });
});
