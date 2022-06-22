#!/bin/bash
set -e

if ! [[ -d ./logs/nginx ]]; then
    mkdir -p ./logs/nginx
fi
if ! [[ -d ./logs/mariadb ]]; then
    mkdir -p ./logs/mariadb
fi
if ! [[ -d ./data/database/mariadb ]]; then
    mkdir -p ./data/database/mariadb
fi
if ! [[ -d ./data/redis-data ]]; then
    mkdir -p ./data/redis-data
fi

docker network create p2pcommunity

docker-compose build --no-cache
docker-compose -f ./docker-compose.yml --env-file .env up -d