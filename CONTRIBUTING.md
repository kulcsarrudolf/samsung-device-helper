# Contributing

Thanks for your interest in improving `samsung-device-helper`!

## Getting started

1. Fork and clone the repository.
2. Install dependencies:
   ```bash
   yarn install
   ```

## Development workflow

- **Build** (dual ESM + CJS via tsup): `yarn build`
- **Test** (Vitest): `yarn test` (watch mode: `yarn test:watch`)
- **Coverage**: `yarn coverage`
- **Typecheck**: `yarn typecheck`
- **Validate device data**: `yarn validate-data`
- **Lint** (ESLint): `yarn lint` (autofix: `yarn lint:fix`)
- **Format** (Prettier): `yarn format` (check: `yarn format:check`)

A Husky pre-commit hook runs lint-staged, typecheck, data validation, and the test suite.
Commit messages are validated against
[Conventional Commits](https://www.conventionalcommits.org/) via commitlint.

## Device data

The catalog lives in hand-maintained per-year files under `src/data/`.
After editing them, run `yarn generate-data` to refresh the derived modules in
`src/generated/` (CI fails if they are stale), and `yarn validate-data` to check integrity.

## Submitting changes

1. Create a feature branch.
2. Make your change with tests where appropriate.
3. Push and open a pull request against `main`. CI runs lint, format check, typecheck,
   data validation, coverage, and build on Node 20 and 22.

## Releases

Releases are cut from the `release` branch. A maintainer runs:

```bash
yarn release          # patch bump (0.1.0 -> 0.1.1)
yarn release:minor    # minor bump (0.1.0 -> 0.2.0)
yarn release:major    # major bump (0.1.0 -> 1.0.0)
```

The script rebases `main`, bumps the version, commits and tags it, pushes `main`,
and fast-forwards the `release` branch. The push to `release` triggers the
"Publish to NPM" GitHub Actions workflow, which tests, builds, and publishes to npm
with provenance.
