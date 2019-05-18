#!/usr/bin/env sh

set -e
npm run build

cd build

git init
git add -A
git commit -m 'deploy'


git push -f git@github.com:berlinen/react-app-antdee.git master:gh-pages

cd -