// Set up MySQL connection.
var mysql = require("mysql");

if (proces.enc.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);
    } else {
        connection = mysql.createConnection({
            host: 'o3iyl77734b9n3tg.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
            user: 'gjr9ed417qckks3k',
            password:'red87brb73p2cnlb',
            database: 'zgaknl340nh29v3m'
        });
    };

var connection = mysql.createConnection({
  port: 3306,
  host: "localhost",
  user: "root",
  password: "password",
  database: "burger_db"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection
module.exports = connection;
