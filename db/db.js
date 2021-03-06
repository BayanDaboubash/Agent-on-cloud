const mysql = require("mysql2");

const connection = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "0000",
  database: "db_agent",
});

connection.connect((err) => {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;

