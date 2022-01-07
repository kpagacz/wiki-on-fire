# giddy-banana
## Description
The backend service of Wiki On Fire. Written in Javascript using Express.js and Sequelize.

### Endpoint
The backend endpoint is exposed at: https://ec2-18-159-108-123.eu-central-1.compute.amazonaws.com/api.

### Design pattern
We follow the Model-Controller-View-Service (MCVS) pattern, where our view is covered by the Vue.js frontend. The backend is responsible for writing routes, controllers, services and data models. Have a look at the example of a CRUD API in here and treat it as a small guide: https://www.callicoder.com/node-js-express-mongodb-restful-crud-api-tutorial/

## Documentation
We maintain two types of documentation for the backend application. The first is the API documentation - Stoplight - mostly user facing documentation. The second is the JSDocs documentation aimed mainly at the backend developers. Any changes to the API exposed by the backend applciation find their reflection in the Stoplight API documentation. The Stoplight documentation is maintained manually and every change to the API required manual changes to the documentation. Contrary, the JSDocs documentation is written as comments to the code acccording to the [JSDocs format](https://jsdoc.app), is built automatically and published to an Amazon S3 Bucket by one of the [GitHub Workflows](https://github.com/kpagacz/wiki-on-fire/blob/main/.github/workflows/build-deploy-docs.yaml) in this repository.
Spotlight OpenAPI documentation: https://wikionfire.stoplight.io/docs/wikionfire-backend
The JSDocs3 documentation of files, classes and functions: http://jsdocs-backend-wof.s3-website.eu-central-1.amazonaws.com/index.html

## Installation
### Requirements
* Javascript
* Node version: v16.13.1
* Node Package Manager version: 8.1.2

We highly recommend using the excellent Node Version Manager to install Node and Node Package Manager. `nvm` has a reliable documentation and is available at: https://github.com/nvm-sh/nvm.

### Installing dependencies
Navigate to the `giddy-banana` directory and run in the terminal:
```
npm install
```

### Run
#### Just the backend application
Run in the terminal:
```
npm run start
```

## Contribution
The Wiki On Fire runs on an AWS architecture and this guide outlines how to simulate the production environment locally effectively creating a virtually identical development environment.

Take a look at the comprehensive [Contribution guide](https://github.com/kpagacz/wiki-on-fire/wiki/Contribution-guide) on our wiki. The guide explains in detail how to set up a full development environment (including the database, nginx, frontend and the backend application). If you are interested in running the backend application only, it requires a working MySQL instance at the minimum.

### Setup a backend only development environment
Includes migrating the `sequelize` migration files and seeding the database for development purposes as well. Requires a running mySQL service under the URI: `localhost:3306`. You can change the default `sequelize` SQL configuration in `./config/config.json`.

It's possible to run the backend application emulating the production environment. To achieve this, navigate to the `/giddy-banana` directory and run in the shell.
```
npm run install
npm run dev
```

### API responses
giddy-banana accepts and responds in JSON.

### Adding tables to the database
WikiOnFire uses `sequelize` to interact with a MySQL database. In order to add or modify a table, you need to create or modify a model file and add a respective migration file. For the quickstart guide follow [this](https://sequelize.org/master/manual/migrations.html).

### Creating a new endpoint
We were developing the API following the philosophy of "design first, implementation second". The first step to implementing a new endpoint is to create a documentation for it in the Stoplight service. The documentation should include: the path of the endpoint, the path parameters, the type of the serviced HTTP request (e.g. GET, POST, etc), body parameters (if any), specification of the body parameters (type, example) and the specifications of at least two response (an OK response - code 200, and a Bad Request response - code 400). 

Once reviewed, the documentation serves as the endpoint specification for the implementation. We usually started implementation by creating a Sequelize Model (if necessary), migration and a demo seed for the model. Then we implemented the service, the controller and the route last.

The division of responsibilities between a service and controller is:
* service is HTTP agnostic - all the information needed for the correct execution should be passed as parameters to the service function, but it shouldn't have any knowledge about anything HTTP related. The service is the only resource allowed to interact with the Sequelize models (essentially the database).
* controller services the HTTP request. It unpacks the path parameters and body parameters of the request, it also formats HTTP responses from the endpoint.

