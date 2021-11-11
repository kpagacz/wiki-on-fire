# Collection of docker-compose environments for development
## Contents
* `develpoment-env.yml` - mySQL database container running on port 3306 with a preconfigured user and password
## How to setup the environment
### Requirements
The docker-compose files needs those applications installed on the host machine (your PC):
* [docker engine](https://www.docker.com/get-started)
* docker-compose:
  * comes preinstalled with Docker Desktop
  * needs to be installed separately on Linux distributions
* needs connection to internet to downlaod the database image.

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

## The configuration
The MySQL database has the following configuration:
* schema: `db`
* user: `wof`
* password: `wof`
* root password: `wof`
* listens on the port: `3306`
* runs the latest mysql image
