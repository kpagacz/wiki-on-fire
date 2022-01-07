# giddy-banana
## Description
The backend service of Wiki On Fire. Written in Javascript using Express.js and Sequelize.

## Documentation
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

Take a look at the comprehensive [Contribution guide](https://github.com/kpagacz/wiki-on-fire/wiki/Contribution-guide) on our wiki. The guide explain in detail how to set up a full development environment (including the database, nginx, frontend and the backend application). If you are interested in running the backend application only, it requires a working MySQL instance at the minimum.

### Design pattern
We follow the MCVS pattern, where our view is covered by the Vue.js frontend. The backend is responsible for writing routes, controllers, services and data models. Have a look at the example of a CRUD API in here and treat it as a small guide: https://www.callicoder.com/node-js-express-mongodb-restful-crud-api-tutorial/

### Setup a backend only development environment
Includes migrating the `sequelize` migration files and seeding the database for development purposes as well. Requires a running mySQL service under the URI: localhost:3306. You can change the default `sequelize` SQL configuration in `./config/config.json`.
```
npm run dev
```

### API responses
giddy-banana accepts and responds in JSON.

### Adding tables to the database
wiki-on-fire uses `sequelize` to interact with a MySQL database. In order to add or modify a table, you need to create or modify a model file and add a respective migration file. For the quickstart guide follow [this](https://sequelize.org/master/manual/migrations.html).
