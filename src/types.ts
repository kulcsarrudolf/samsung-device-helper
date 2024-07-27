export type DeviceType = "phone" | "tablet" | "watch";

export type Device = {
  name: string;
  releaseDate: string | null;
  models: string[];
  type?: DeviceType;
};
