import { modelNameGroups } from './generated/model-names';

let modelToName: Map<string, string> | undefined;

const getModelToNameMap = (): Map<string, string> => {
  if (!modelToName) {
    modelToName = new Map();
    for (const [name, models] of modelNameGroups) {
      for (const model of models) {
        modelToName.set(model, name);
      }
    }
  }
  return modelToName;
};

/**
 * Returns the marketing name for a model code, or the model itself when unknown.
 * Lookup is case-insensitive and ignores surrounding whitespace.
 *
 * Importing from 'samsung-device-helper/model-names' bundles only a compact
 * model-to-name mapping, a fraction of the full device catalog.
 */
export const getNameByModel = (model: string): string => {
  return getModelToNameMap().get(model.trim().toUpperCase()) || model;
};
