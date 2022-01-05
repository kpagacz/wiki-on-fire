module.exports = {
  "development": {
    "username": "wof",
    "password": "wof",
    "database": "db",
    "host": "localhost",
    "dialect": "mysql",
    "port": "3306",
    "seederStorage": "sequelize"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASS,
    "database": process.env.DB_SCHEMA,
    "host": process.env.DB_HOST,
    "dialect": "mysql",
    "port": "3306",
    "seederStorage": "sequelize"
  }
}
