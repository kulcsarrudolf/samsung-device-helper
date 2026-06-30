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
- **Test** (Mocha): `yarn test`
- **Coverage** (c8): `yarn coverage`
- **Lint** (ESLint): `yarn lint` (autofix: `yarn lint:fix`)
- **Format** (Prettier): `yarn format` (check: `yarn format:check`)

A Husky pre-commit hook runs lint-staged and the test suite, and commit messages are
validated against [Conventional Commits](https://www.conventionalcommits.org/) via commitlint.

## Submitting changes

1. Create a feature branch.
2. Make your change with tests where appropriate.
3. Add a changeset describing your change (this drives versioning and the changelog):
   ```bash
   yarn changeset
   ```
4. Push and open a pull request against `main`. CI runs lint, format check, coverage, and
   build on Node 20 and 22.

## Releases

Releases are automated with [Changesets](https://github.com/changesets/changesets). When
PRs with changesets land on `main`, a "Version Packages" PR is opened; merging it publishes
to npm (with provenance) and updates `CHANGELOG.md`.
