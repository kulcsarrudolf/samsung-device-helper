#!/bin/bash
set -e

# Usage: yarn release            -> patch bump
#        yarn release minor      (or --minor)
#        yarn release major      (or --major)
BUMP=${1:-patch}
BUMP=${BUMP#--}

case "$BUMP" in
  patch | minor | major) ;;
  *)
    echo "Usage: yarn release [minor|major] (default: patch)"
    exit 1
    ;;
esac

# Ensure clean working tree
if [ -n "$(git status --porcelain)" ]; then
  echo "Error: Working tree is not clean. Commit or stash changes first."
  exit 1
fi

git checkout main
git fetch origin
git rebase origin/main

# Run tests (the version commit below also triggers the pre-commit quality gates)
yarn test

# Bump version
yarn version --"$BUMP" --no-git-tag-version

# Commit and tag
VERSION=$(node -p "require('./package.json').version")
git add package.json
git commit -m "chore: bump version $VERSION"
git tag "v$VERSION"

# Push main, then sync the release branch; the push to release triggers npm publish
git push origin main --tags

if git show-ref --verify --quiet refs/heads/release; then
  git checkout release
elif git ls-remote --exit-code --heads origin release >/dev/null 2>&1; then
  git checkout -b release origin/release
else
  git checkout -b release
fi

git rebase main
git push origin release --force-with-lease
git checkout main

echo "v$VERSION pushed to release. GitHub Actions will publish it to npm."
