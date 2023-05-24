const mysql = require('mysql');
const credentails = require("./sqlCredentails");

const connection = mysql.createConnection({
  host: credentails.HOST,
  user: credentails.USER,
  password: credentails.PASSWORD,
  database: credentails.DB,
});

connection.connect(error => {
  if (error) throw error;
  console.log("Connected!");
});

