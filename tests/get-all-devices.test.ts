import { expect } from 'chai';
import {
  getAllSamsungPhones,
  getAllSamsungTablets,
  getAllSamsungWatches,
  getAllSamsungDevices,
} from '../src/device-helper';

describe('getAllSamsungPhones', () => {
  it('returns a non-empty array where every entry is a phone', () => {
    const phones = getAllSamsungPhones();
    expect(phones).to.not.be.empty;
    phones.forEach((phone) => {
      expect(phone.type).to.equal('phone');
    });
  });
});

describe('getAllSamsungTablets', () => {
  it('returns a non-empty array where every entry is a tablet', () => {
    const tablets = getAllSamsungTablets();
    expect(tablets).to.not.be.empty;
    tablets.forEach((tablet) => {
      expect(tablet.type).to.equal('tablet');
    });
  });
});

describe('getAllSamsungWatches', () => {
  it('returns a non-empty array where every entry is a watch', () => {
    const watches = getAllSamsungWatches();
    expect(watches).to.not.be.empty;
    watches.forEach((watch) => {
      expect(watch.type).to.equal('watch');
    });
  });
});

describe('getAllSamsungDevices', () => {
  it('returns a non-empty array of all devices', () => {
    const devices = getAllSamsungDevices();
    expect(devices).to.not.be.empty;
  });
});
