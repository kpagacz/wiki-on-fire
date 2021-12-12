# Collection of docker-compose environments for development
## Contents
<<<<<<< HEAD
* `develpoment-env.yml` - mySQL database container running on port 3306 with a preconfigured user and password
=======
* `develpoment-env.yml`:
  * mySQL database container running on port 3306 with a preconfigured user and password
  * nginx running on port 80 with a preconfigured reverse proxy to the backend service
>>>>>>> main
## How to setup the environment
### Requirements
The docker-compose files needs those applications installed on the host machine (your PC):
* [docker engine](https://www.docker.com/get-started)
* docker-compose:
  * comes preinstalled with Docker Desktop
  * needs to be installed separately on Linux distributions
<<<<<<< HEAD
* needs connection to internet to downlaod the database image.
=======
* needs connection to internet to downlaod the images
* login into Github Container Registry.

### Signing into Github Container Registry
Please follow this Github tutorial to authenticate to Github Container Registry. Some of the packages used in the environment are hosted on there. Unless you authenticate, you won't be able to run the launch the full environment.
>>>>>>> main

### Running docker-compose
Follow the steps:
1. Navigate to the `docker-compose-environments` directory
2. Run in the terminal:
```
docker-compose --file development-env.yml up -d
```
3. If the service gets succesfully set up, you should be able to confirm new running containers via:
```
docker ps -a
```
<<<<<<< HEAD

## The configuration
=======
or
```
docker-compose -f development-env.yml ps
```

## The configuration
### MySQL database
>>>>>>> main
The MySQL database has the following configuration:
* schema: `db`
* user: `wof`
* password: `wof`
* root password: `wof`
* listens on the port: `3306`
* runs the latest mysql image
<<<<<<< HEAD
=======

### nginx
The configuration is copied from ./docker-compose-environments/dev-nginx.conf
>>>>>>> main
