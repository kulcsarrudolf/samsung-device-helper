import { Device } from "./types";

export const getNameByModel = (model: string): string => {
  if (model === "SM-G991B") {
    return "Galaxy S21 5G";
  }

  return model;
};

export const getAllSamsungPhones = (): Device[] => {
  return [
    {
      model: "SM-G991B",
      name: "Galaxy S21 5G",
      releaseDate: "2021-01-29",
      type: "phone",
    },
    // complete full list
  ];
};

export const getAllSamsungTablets = (): Device[] => {
  return [
    {
      model: "SM-T970",
      name: "Galaxy Tab S7",
      releaseDate: "2020-08-05",
      type: "tablet",
    },
    // complete full list
  ];
};

export const getAllSamsungWatches = (): Device[] => {
  return [
    {
      model: "SM-R800",
      name: "Galaxy Watch",
      releaseDate: "2018-08-24",
      type: "watch",
    },
    // complete full list
  ];
};

export const getAllSamsungDevices = (): Device[] => {
  return [
    ...getAllSamsungPhones(),
    ...getAllSamsungTablets(),
    ...getAllSamsungWatches(),
  ];
};
