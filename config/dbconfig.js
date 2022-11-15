const mysql = require('mysql');

const{DATABASE_HOST,DATABASE_USER,DATABASE_PASSWORD,DATABASE_NAME,DATABASE_PORT}=require('./dbenvconfig');

const con = mysql.createConnection({
    host: DATABASE_HOST,
    port:DATABASE_PORT,
    user: DATABASE_USER,
    password: DATABASE_PASSWORD,
    database:DATABASE_NAME
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Database Connected");
  });

  module.exports={
    'db':con
  }