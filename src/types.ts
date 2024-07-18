export type DeviceType = "phone" | "tablet" | "watch";

export type Device = {
  model: string;
  name: string;
  releaseDate: string;
  type: DeviceType;
};
