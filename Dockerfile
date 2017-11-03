FROM php:7-apache

# Copy current sources into container in case no volume is defined
COPY . /var/www/html

# Enable mysqli extension
RUN docker-php-ext-install mysqli \
	&& docker-php-ext-enable mysqli

# Enable rewrite extension
RUN a2enmod rewrite
