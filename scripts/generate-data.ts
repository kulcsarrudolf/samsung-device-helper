/**
 * Generates the optimized data modules in src/generated from the
 * hand-maintained per-year files in src/data.
 * Run with: yarn generate-data
 */
import { mkdirSync, writeFileSync } from 'fs';
import { join } from 'path';
import { samsungDevices } from '../src/data/samsung-devices';
import { Device, DeviceType } from '../src/types';

const outDir = join(__dirname, '..', 'src', 'generated');

const header = `// GENERATED FILE - DO NOT EDIT.
// Edit the per-year files in src/data and run \`yarn generate-data\`.
`;

const serializeDevices = (devices: Device[]): string =>
  JSON.stringify(devices, null, 2).replace(/"([a-zA-Z_][a-zA-Z0-9_]*)":/g, '$1:');

const writeDevicesModule = (fileName: string, exportName: string, devices: Device[]): void => {
  const content = `${header}import { Device } from '../types';

export const ${exportName}: Device[] = ${serializeDevices(devices)};
`;
  writeFileSync(join(outDir, fileName), content);
};

const byType = (type: DeviceType): Device[] =>
  samsungDevices.filter((device) => device.type === type);

const modelNameGroups: [string, string[]][] = samsungDevices.map((device) => [
  device.name,
  device.models.map((model) => model.trim().toUpperCase()),
]);

mkdirSync(outDir, { recursive: true });

writeDevicesModule('phones.ts', 'phones', byType('phone'));
writeDevicesModule('tablets.ts', 'tablets', byType('tablet'));
writeDevicesModule('watches.ts', 'watches', byType('watch'));

writeFileSync(
  join(outDir, 'model-names.ts'),
  `${header}
/** Device names with their normalized model codes, [name, models] per device. */
export const modelNameGroups: [string, string[]][] = ${JSON.stringify(modelNameGroups)};
`,
);

console.log(
  `Generated ${byType('phone').length} phones, ${byType('tablet').length} tablets, ` +
    `${byType('watch').length} watches, ${modelNameGroups.length} model-name groups.`,
);
