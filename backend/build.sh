#!/bin/bash -e
pushd search
~/go/bin/statik -src=../public
popd
go build ./cmd/server
