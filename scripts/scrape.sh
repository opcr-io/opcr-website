#!/bin/sh

docker run --platform linux/amd64 -it --env-file=./.env -e "CONFIG=$(cat ./scripts/algolia-config.json)" algolia/docsearch-scraper
