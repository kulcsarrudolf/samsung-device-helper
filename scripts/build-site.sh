#!/bin/bash
set -e

# Assembles the GitHub Pages demo into _site/.
# Requires a fresh library build (yarn build) so dist/index.mjs exists.
cd "$(dirname "$0")/.."

if [ ! -f dist/index.mjs ]; then
  echo "Error: dist/index.mjs not found. Run the build first."
  exit 1
fi

rm -rf _site
mkdir -p _site/lib
cp site/index.html _site/index.html
# dist/index.mjs is self-contained (tsup runs without code splitting)
cp dist/index.mjs _site/lib/index.mjs

echo "Site assembled in _site/"
