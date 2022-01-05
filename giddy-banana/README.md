# giddy-banana
## Description
The backend service of wiki-on-fire. Written in Javascript using Express.js.

### Documentation
Spotlight OpenAPI documentation: https://wikionfire.stoplight.io/docs/wikionfire-backend

The JSDocs3 documentation of files, classes and functions: http://jsdocs-backend-wof.s3-website.eu-central-1.amazonaws.com/index.html
## Installation
### Requirements
* Javascript
* Node version: v16.13.1
* Node Package Manager version: 8.1.2

We highly recommend using the excellent Node Version Manager to install Node and Node Package Manager. `nvm` has an excellent documentation and is available at: https://github.com/nvm-sh/nvm.

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

#### Setup a full development environment
Includes migrating the `sequelize` migration files and seeding the database as well. Requires a running mySQL service under the URI: localhost:3306. You can change the default `sequelize` SQL configuration in `./config/config.json`.
```
npm run dev
```

## Contribution
### Design pattern
We follow the MCVS pattern, where our view is covered by the Vue.js frontend. The backend is responsible for writing routes, controllers, services and data models. Have a look at the example of a CRUD API in here and treat it as a small guide: https://www.callicoder.com/node-js-express-mongodb-restful-crud-api-tutorial/

### API responses
giddy-banana accepts and responds in JSON.

### Adding tables to the database
wiki-on-fire uses `sequelize` to interact with a MySQL database. In order to add or modify a table, you need to create or modify a model file and add a respective migration file. For the quickstart guide follow [this](https://sequelize.org/master/manual/migrations.html).

## Runtime environmental variables
This application uses a number of environmental variables to modify the runtime behaviour.
* `NODE_ENV` - to detail the running environment. Default: "development". Possible values: "development", "production".
* `DB_USER`, `DB_PASS`, `DB_SCHEMA`, `DB_HOST` to define the `mySQL` database configuration: the username, password, schema and the URL of the host recpectively.
