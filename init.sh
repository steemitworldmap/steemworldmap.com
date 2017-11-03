#!/bin/bash

export MYSQL_USERNAME=''
export MYSQL_PASSWORD=''
export MYSQL_HOST=''
export MYSQL_DATABASE=''

docker run -d -p 80:80 --name steemworldmap -e MYSQL_USERNAME=$MYSQL_USERNAME -e MYSQL_PASSWORD=$MYSQL_PASSWORD -e MYSQL_HOST=$MYSQL_HOST -e MYSQL_DATABASE=$MYSQL_DATABASE -v "$PWD":/var/www/html steemworldmap