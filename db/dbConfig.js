const pgp = require('pg-promise')()
require("dotenv").config();
// access to environment variables

const cn = {
  host: process.env.PG_HOST,
  port: process.env.PG_PORT,
  database: process.env.PG_DATABASE,
  user: process.env.PG_USER,
  password:
  process.env.PG_PASSWORD,
};

//connect to colors_dev_db
const db = pgp(cn);


module.exports = db;