#!/bin/bash -e
mkdir -p build
rm -rf build
mkdir build
parcel build index.html -d build --public-url ./chinatown
pushd ~/parse-blog
rm -rf static/chinatown
popd
mv build ~/parse-blog/static/chinatown
pushd ~/parse-blog
git add static/chinatown
git commit -am "Deploy chinatown"
git push 
