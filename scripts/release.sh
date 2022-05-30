#!/usr/bin/env bash

set -e
set -o pipefail

if [[ -z "${RELEASE_VERSION}" ]]; then
    echo "Enter a RELEASE_VERSION in the format vMAJ0R.MINOR.PATCH."
    exit 1
fi

if [[ -z "${RELEASE_DATE}" ]]; then
    echo "Enter a RELEASE_DATE in the format DD-MM-YYYY."
    exit 1
fi

HEAD_BRANCH=origin/develop
PRODUCTION_BRANCH=main
RELEASE_BRANCH="rc-${RELEASE_VERSION}"

git fetch origin
git checkout -b "${RELEASE_BRANCH}" "${HEAD_BRANCH}"

# Update the CHANGELOG.
sed -i.orig $'s|## Release|## Release\
\
## Release|g' CHANGELOG.md
rm CHANGELOG.md.orig
sed -i.orig "s|## Release|## ${RELEASE_VERSION} \\(${RELEASE_DATE}\\)|g" CHANGELOG.md
rm CHANGELOG.md.orig


# Bump the NPM version.
sed -i.orig "s|\"version\": \".*\"|\"version\": \"${RELEASE_VERSION}\"|" package.json
sed -i.orig "3s|\"version\": \".*\"|\"version\": \"${RELEASE_VERSION}\"|" yarn.lock
rm package.json.orig yarn.lock.orig


git add .
if git commit -m "Updated the CHANGELOG for ${RELEASE_VERSION}" && git push origin "${RELEASE_BRANCH}"; then
  gh pr create --draft --title "Merge branch `develop` into branch `main` for release: ${RELEASE_VERSION}" --base "${PRODUCTION_BRANCH}"
else
  echo "Failed to commit the changes and raise a PR"
  exit 1
fi
