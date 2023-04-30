require("dotenv").config();

const Sequelize = require("sequelize");

const { DB_HOST, DB_USERNAME, DB_PASSWORD, DB_NAME } = process.env;

const connection = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
  host: DB_HOST,
  dialect: "postgres",
});

module.exports = connection;
