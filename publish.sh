#!/bin/bash

set -o errexit -o nounset

if [ "$TRAVIS_BRANCH" != "design-system" ]
then
  echo "This commit was made against the $TRAVIS_BRANCH and not the design-system branch! No deploy!"
  exit 0
fi

rev=$(git rev-parse --short HEAD)

# Copy Directory of Generated Files from CBP Theme
cp -rf cbp-theme/dist cbp-theme/kitchensink/

# Copy DS CSS and Style Guide
mkdir cbp-theme/kitchensink/design-system
mkdir -p cbp-theme/kitchensink/ds-css/dist
npm run copy-ds-to-cbp-theme

cd cbp-theme/kitchensink

git init

git remote add upstream "https://$GH_TOKEN@github.com/US-CBP/cbp-theme.git"
git fetch upstream
git reset upstream/gh-pages

touch .

git add -A .
git commit -m "rebuild pages at ${rev}"
git push -q upstream HEAD:gh-pages
