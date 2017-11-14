# Steem World Map

The Steem World Map (SWM) projet allows any Steem user to add Geolocalisation details into his posts.
That location will then be used to display the post on the world map.

## Architecture

SWM is a container base project composed of 3 components: 

* Database
* Web server
* Blockchain scanner

### Database

SWM only requires a database to run, developpement have been made using MySQL which is currently the only suported database. 

The database initialization scripts are available in the SQL/ directory.

### Web Server

The SWM web server allows users to discover posts made all around the world.
It also provide a simple way for user to generate the SWM tag to insert in their new posts.

SWM container is based on [php (with apache)](https://hub.docker.com/_/php/) official image. 

### Blockchain scanner

The scanner searchs for new TOP level post having the SWM tag. It also search for updates on existing post. In both cases, an update is sent to the web server with the updated informations.

This component will be available in it own repository.

## Running the project

### (Optional) Start a MySQL database instance

```
> docker run --name swm-mysql -v /my/own/datadir:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=my-secret-pw -d mysql
```

### Build the web server image 

The container can be build as follow :

```
> docker build -t steemworldmap/steemworldmap.com .
```

This enables the `rewrite` and `mysqli` apache2 extensions.

### Run the web server

Database details such as host, username, password and database name need to be provided as Environement Variables. 

The `init.sh` script is provided to help you do just that. 
Edit the script and fill those 4 values and run the script to start the web server.

```
export MYSQL_USERNAME=''
export MYSQL_PASSWORD=''
export MYSQL_HOST=''
export MYSQL_DATABASE=''
```

Then run the script :

> ./init.sh

Once done, the application will be available [locally on port 80](http://localhost/).