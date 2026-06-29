import tseslint from 'typescript-eslint';
import eslintConfigPrettier from 'eslint-config-prettier';

export default tseslint.config(
  {
    ignores: ['dist/**', 'build/**', 'node_modules/**'],
  },
  ...tseslint.configs.recommended,
  eslintConfigPrettier,
  {
    // Chai assertions (e.g. `expect(x).to.be.an('array')`) are expression statements.
    files: ['tests/**/*.ts'],
    rules: {
      '@typescript-eslint/no-unused-expressions': 'off',
    },
  },
);
