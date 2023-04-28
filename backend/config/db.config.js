require("dotenv").config();

const { DB_HOST, DB_USERNAME, DB_PASSWORD, PORT, DB_NAME } = process.env;

const Pool = require("pg").Pool;

const connection = new Pool({
  user: DB_USERNAME,
  host: DB_HOST,
  database: DB_NAME,
  password: DB_PASSWORD,
  port: PORT,
});

connection.connect(() => {
  try {
    console.log("Connected!");
  } catch (err) {
    console.log("Error: " + err);
  }
});

module.exports = connection;
