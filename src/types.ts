export type DeviceType = 'phone' | 'tablet' | 'watch';

export type Device = {
  name: string;
  /** Release date in MM-DD-YYYY format, or null when unknown. */
  releaseDate: string | null;
  models: string[];
  type?: DeviceType;
  /** Alternate marketing names for the same hardware (e.g. regional variants). */
  aliases?: string[];
};
