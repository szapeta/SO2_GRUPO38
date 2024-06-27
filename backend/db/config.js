require('dotenv').config();
const mysql = require('mysql');

const pool = mysql.createPool({
    host     : process.env.MYSQL_HOST,
    database : process.env.MYSQL_DATABASE,
    user     : process.env.MYSQL_USER,
    password : process.env.MYSQL_PASSWORD,
    port     : process.env.MYSQL_PORT
});

module.exports = pool;