# Security policy

## Supported versions

Security fixes are released for the latest published version on npm.
Older versions do not receive patches, so upgrade to the latest release before reporting.

## Reporting a vulnerability

Report security problems privately through GitHub:
open the [Security tab](https://github.com/kulcsarrudolf/samsung-device-helper/security/advisories/new) of this repository and choose "Report a vulnerability".

Do not open a public issue or pull request for a security problem.

You can expect a first response within 7 days.
If the report is confirmed, a fix is published to npm and the advisory is made public afterwards, with credit to the reporter unless they ask otherwise.

## Scope

The published package is a static device catalog with lookup functions.
It has no runtime dependencies, runs no install scripts, and makes no network or filesystem calls.
Releases are built and published by GitHub Actions with [npm provenance](https://docs.npmjs.com/generating-provenance-statements), so each version on npm can be traced to the commit and workflow run that produced it.

Reports about the release pipeline (GitHub Actions workflows, publish configuration) are in scope.
Wrong or missing device data is a regular bug: use the [issue tracker](https://github.com/kulcsarrudolf/samsung-device-helper/issues) for that.
