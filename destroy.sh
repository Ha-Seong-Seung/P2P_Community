#!/bin/bash
set -e

docker-compose -f ./docker-compose.yml down --volumes
docker network rm p2pcommunity
docker rmi p2p_community_server p2p_community_redis p2p_community_mariadb