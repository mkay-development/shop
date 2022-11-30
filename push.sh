#!/bin/bash

docker build -t jomartz/vite-shop:v0.1 . --no-cache
docker image push jomartz/vite-shop:v0.1