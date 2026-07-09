/**
 * Validates the device data in src/data.
 * Exits with code 1 when any error is found; warnings do not fail the run.
 */
import { samsungDevices } from '../src/data/samsung-devices';
import { Device, DeviceType } from '../src/types';

const VALID_TYPES: DeviceType[] = ['phone', 'tablet', 'watch'];
const RELEASE_DATE_PATTERN = /^(\d{2})-(\d{2})-(\d{4})$/;
const MODEL_PATTERN = /^(SM-|GT-|SC-|SCG|SCV|SCH-|SGH-|SPH-|SHV-|EK-|YP-)/;

const errors: string[] = [];
const warnings: string[] = [];

const label = (device: Device, index: number): string =>
  device.name ? `"${device.name}"` : `device at index ${index}`;

const normalizeModel = (model: string): string => model.trim().toUpperCase();

const validateReleaseDate = (device: Device, index: number): void => {
  if (device.releaseDate === null) {
    return;
  }
  const match = RELEASE_DATE_PATTERN.exec(device.releaseDate);
  if (!match) {
    errors.push(
      `${label(device, index)}: releaseDate "${device.releaseDate}" is not in MM-DD-YYYY format`,
    );
    return;
  }
  const [, month, day, year] = match;
  const date = new Date(Number(year), Number(month) - 1, Number(day));
  const isRealDate =
    date.getFullYear() === Number(year) &&
    date.getMonth() === Number(month) - 1 &&
    date.getDate() === Number(day);
  if (!isRealDate) {
    errors.push(`${label(device, index)}: releaseDate "${device.releaseDate}" is not a real date`);
  }
};

const validateNameTypeConsistency = (device: Device, index: number): void => {
  if (/\bTab\b/i.test(device.name) && device.type !== 'tablet') {
    errors.push(`${label(device, index)}: name contains "Tab" but type is "${device.type}"`);
  }
  if (/\bWatch/i.test(device.name) && device.type !== 'watch') {
    errors.push(`${label(device, index)}: name contains "Watch" but type is "${device.type}"`);
  }
};

const modelOwners = new Map<string, string>();

samsungDevices.forEach((device, index) => {
  if (!device.name || !device.name.trim()) {
    errors.push(`device at index ${index} has an empty name`);
  }

  if (!device.type) {
    errors.push(`${label(device, index)}: missing type`);
  } else if (!VALID_TYPES.includes(device.type)) {
    errors.push(`${label(device, index)}: invalid type "${device.type}"`);
  }

  if (!device.models || device.models.length === 0) {
    errors.push(`${label(device, index)}: has no models`);
  } else {
    device.models.forEach((model) => {
      if (!model || !model.trim()) {
        errors.push(`${label(device, index)}: contains an empty model string`);
        return;
      }
      const normalized = normalizeModel(model);
      const owner = modelOwners.get(normalized);
      if (owner === device.name) {
        errors.push(`${label(device, index)}: model "${model}" is listed twice`);
      } else if (owner) {
        errors.push(
          `model "${model}" is listed for both "${owner}" and "${device.name}" (a model code must map to exactly one device)`,
        );
      }
      modelOwners.set(normalized, device.name);
      if (!MODEL_PATTERN.test(normalized)) {
        warnings.push(`${label(device, index)}: model "${model}" has an unusual prefix`);
      }
    });
  }

  device.aliases?.forEach((alias) => {
    if (!alias || !alias.trim()) {
      errors.push(`${label(device, index)}: contains an empty alias`);
    } else if (alias === device.name) {
      errors.push(`${label(device, index)}: alias "${alias}" duplicates the device name`);
    }
  });

  validateReleaseDate(device, index);
  validateNameTypeConsistency(device, index);
});

if (warnings.length > 0) {
  console.warn(`${warnings.length} warning(s):`);
  warnings.forEach((warning) => console.warn(`  - ${warning}`));
}

if (errors.length > 0) {
  console.error(`${errors.length} error(s):`);
  errors.forEach((error) => console.error(`  - ${error}`));
  process.exit(1);
}

console.log(`Device data OK: ${samsungDevices.length} devices, ${modelOwners.size} model codes.`);
