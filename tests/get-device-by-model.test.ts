import { expect } from 'chai';
import { getDeviceByModel, getPhoneByModel } from '../src/device-helper';

describe('getDeviceByModel', () => {
  it('returns the correct device for a known phone model', () => {
    const device = getDeviceByModel('SM-G991B');
    expect(device).to.deep.equal({
      name: 'Galaxy S21 5G',
      releaseDate: '01-29-2021',
      type: 'phone',
      models: [
        'SM-G991B',
        'SM-G991B/DS',
        'SM-G991U',
        'SM-G991U1',
        'SM-G991W',
        'SM-G991N',
        'SM-G9910',
        'SM-G991Q',
        'SCG09',
      ],
    });
  });

  it('returns the correct device for a known tablet model', () => {
    const device = getDeviceByModel('SM-T970');
    expect(device).to.deep.equal({
      name: 'Galaxy Tab S7+',
      type: 'tablet',
      releaseDate: '08-21-2020',
      models: ['SM-T970', 'SM-T976B', 'SM-T975'],
    });
  });

  it('returns the correct device for a known watch model', () => {
    const device = getDeviceByModel('SM-R800');
    expect(device).to.deep.equal({
      name: 'Galaxy Watch',
      releaseDate: null,
      type: 'watch',
      models: [
        'SM-805U',
        'SM-805W',
        'SM-815U',
        'SM-815W',
        'SM-R805F',
        'SM-R805N',
        'SM-R815F',
        'SM-R815N',
        'SM-R8050',
        'SM-R800',
      ],
    });
  });

  it('returns undefined for an unknown model', () => {
    expect(getDeviceByModel('UNKNOWN_MODEL')).to.be.undefined;
  });
});

describe('getPhoneByModel', () => {
  it('returns the correct phone for a known model', () => {
    const phone = getPhoneByModel('SM-G991B');
    expect(phone).to.deep.equal({
      name: 'Galaxy S21 5G',
      releaseDate: '01-29-2021',
      type: 'phone',
      models: [
        'SM-G991B',
        'SM-G991B/DS',
        'SM-G991U',
        'SM-G991U1',
        'SM-G991W',
        'SM-G991N',
        'SM-G9910',
        'SM-G991Q',
        'SCG09',
      ],
    });
  });

  it('returns undefined for an unknown model', () => {
    expect(getPhoneByModel('UNKNOWN_MODEL')).to.be.undefined;
  });
});
