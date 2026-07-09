import { describe, it, expect } from 'vitest';
import { getNameByModel } from '../src/device-helper';

describe('getNameByModel', () => {
  it('returns correct name for known model', () => {
    expect(getNameByModel('SM-G991B')).toBe('Galaxy S21 5G');
  });

  it('returns the model itself for an unknown model', () => {
    expect(getNameByModel('UNKNOWN_MODEL')).toBe('UNKNOWN_MODEL');
  });
});
