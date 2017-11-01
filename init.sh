#!/bin/bash

export MYSQL_USERNAME=''
export MYSQL_PASSWORD=''
export MYSQL_HOST=''
export MYSQL_DATABASE=''

docker run -d -p 80:80 --name steemworldmap -e MYSQL_USERNAME=$MYSQL_USERNAME -e MYSQL_PASSWORD=$MYSQL_PASSWORD -e MYSQL_HOST=$MYSQL_HOST -e MYSQL_DATABASE=$MYSQL_DATABASE -v "$PWD":/var/www/html php:7-apache

# ?? install apache2 extension : mysqli
# TODO enable apache2 extensions: rewrite & mysqli

# docker-php-ext-install mysqli (?? a2enmod mysqli ??)
# a2enmod rewrite
# service apache2 restart