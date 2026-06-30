import { expect } from 'chai';
import { getNameByModel } from '../src/device-helper';

describe('getNameByModel', () => {
  it('returns correct name for known model', () => {
    expect(getNameByModel('SM-G991B')).to.equal('Galaxy S21 5G');
  });

  it('returns the model itself for an unknown model', () => {
    expect(getNameByModel('UNKNOWN_MODEL')).to.equal('UNKNOWN_MODEL');
  });
});
