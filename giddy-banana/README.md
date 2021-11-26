# giddy-banana
## Description
The backend service of wiki-on-fire. Written in Javascript using Express.js.

### Documentation
Spotlight OpenAPI documentation: https://wikionfire.stoplight.io/docs/wikionfire-backend
## Installation
### Requirements
* Javascript
* Express.js

### Install
Navigate to the giddy-banana directory and run in the terminal:
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
Includes migrating the `sequelize` migrations and seeding the database as well. Requires a running mySQL service on port 3306.
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
