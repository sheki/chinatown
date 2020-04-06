#!/bin/bash -e
mkdir -p build
rm -rf build
mkdir build
NODE_ENV=production parcel build index.html admin.html -d build --public-url sheki.in/chinatown
pushd ~/parse-blog
rm -rf static/chinatown
popd
mv build ~/parse-blog/static/chinatown
pushd ~/parse-blog
git add static/chinatown
git commit -am "Deploy chinatown"
git push 
