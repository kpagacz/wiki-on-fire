# Collection of docker-compose environments for development of WikiOnFire
## Contents
* `develpoment-env.yml`:
  * MySQL database container running on port 3306 with a preconfigured user and password. Database instance is required for the backend application to store and send data to the frontend.
  * Nginx running on port 80 with a preconfigured reverse proxy to the backend service. Nginx configuration provides automatic routing of requests from the frontend to the backend application. If nginx is not running, you will have to manually specify the port on which the backend operates in the [`wofApi` file](https://github.com/kpagacz/wiki-on-fire/blob/main/frontend/src/httpLayers/wofApi.js).
## How to setup the environment
### Requirements
The docker-compose files needs those applications installed on the host machine (your PC):
* [docker engine](https://www.docker.com/get-started)
* docker-compose:
  * comes preinstalled with Docker Desktop on Windows and MacOS
  * needs to be installed separately on Linux distributions
* needs connection to internet to downlaod the images
* login into Github Container Registry.

### Signing into Github Container Registry
Please follow this [Github tutorial](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-container-registry#authenticating-to-the-container-registry) to authenticate to Github Container Registry. Some of the packages used in the environment are hosted on there. Unless you authenticate, you won't be able to launch the full environment. Github Container Registry requires an active GitHub account to authenticate.

### Running docker-compose
Follow the steps:
0. Make sure your Docker daemon is running, run in the shell: `docker ps -a`. If the command did not return an error - you are good to go!
1. Navigate to the `docker-compose-environments` directory
2. Run in the terminal:
```
docker-compose --file development-env.yml up -d
```
3. If the service gets succesfully set up, you should be able to confirm new running containers via:
```
docker ps -a
```
or
```
docker-compose -f development-env.yml ps
```

## The configuration
### MySQL database
The MySQL database has the following configuration:
* schema: `db`
* user: `wof`
* password: `wof`
* root password: `wof`
* listens on the port: `3306`
* runs the latest mysql image

### Nginx
The configuration is copied from ./docker-compose-environments/dev-nginx.conf
