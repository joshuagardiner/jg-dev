#!/usr/bin/env bash

set -e
set -o pipefail

if [[ -z "${VERSION}" ]]; then
    echo "Enter a VERSION to release in the format vMAJ0R.MINOR.PATCH."
    exit 1
fi

if [[ -z "${DATE}" ]]; then
    echo "Enter the DATE of the release in the format DD-MM-YYYY."
    exit 1
fi

ORIGIN_BRANCH=origin/develop
PRODUCTION_BRANCH=main
RELEASE_BRANCH="rc-${VERSION}"

git fetch origin
git checkout -b "${RELEASE_BRANCH}" "${ORIGIN_BRANCH}"

# Update the CHANGELOG.
sed -i.orig $'s|## Release|## Release\
\
## Release-ready|g' CHANGELOG.md
rm CHANGELOG.md.orig
sed -i.orig "s|## Release-ready|## ${VERSION} \\[${DATE}\\]|g" CHANGELOG.md
rm CHANGELOG.md.orig


# Bump the NPM version.
sed -i.orig "s|\"version\": \".*\"|\"version\": \"${VERSION}\"|" package.json
sed -i.orig "3s|\"version\": \".*\"|\"version\": \"${VERSION}\"|" yarn.lock
rm package.json.orig yarn.lock.orig


git add .
if git commit -m "docs: updated the CHANGELOG for ${VERSION}" && git push origin "${RELEASE_BRANCH}"; then
  gh pr create --draft --title "chore: merge branch develop into branch main for release: ${VERSION}" --base "${PRODUCTION_BRANCH}"
else
  echo "Failed to commit the changes and raise a PR"
  exit 1
fi