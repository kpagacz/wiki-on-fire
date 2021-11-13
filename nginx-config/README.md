# nginx

## Installation
Follow instructions on https://nginx.org/en/linux_packages.html#Ubuntu
## Starting server
Go to project catalog with file named "nginx.conf" and execute this (in our case make sure you have user named "ubuntu" on your system):
```
sudo nginx -c `pwd`/nginx.conf
```
## Stopping server
Stop nginx processes with waiting for the worker processes to finish serving current requests:
```
sudo nginx -s quit
```
## Reloading the configuration file
```
nginx -s reload
```
