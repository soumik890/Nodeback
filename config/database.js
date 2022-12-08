const mysql = require("mysql2");

const db = mysql.createPool({
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  password: process.env.DB_PASS,
  database: process.env.DB,
  connectionLimit: 10,
});

module.exports = db;
