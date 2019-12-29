
var mysql = require('mysql');
let fs = require('fs');
let http = require('http');

var con = mysql.createConnection({
  host: "localhost",
  user: "student",
  password: "1q2w3e4r",
  // database: "mydb"
  database: "Users_DB"
});


con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    // con.query("CREATE DATABASE  IF NOT EXISTS mydb", function (err, result) {
    //   if (err) throw err;
    //   console.log("Database created");
    // });

    // var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
    // con.query(sql, function (err, result) {
    //   if (err) throw err;
    //   console.log("Table created");
    // });

    // var sql = "ALTER TABLE customers ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY";
    // con.query(sql, function (err, result) {
    // if (err) throw err;
    // console.log("Table created");
    // });

    // var sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";
    // con.query(sql, function (err, result) {
    //   if (err) throw err;
    //   console.log("1 record inserted");
    // });

    // var sql = "INSERT INTO customers (name, address) VALUES ?";
    // var values = [
    //   ['John', 'Highway 71'],
    //   ['Peter', 'Lowstreet 4'],
    //   ['Amy', 'Apple st 652'],
    //   ['Hannah', 'Mountain 21'],
    //   ['Michael', 'Valley 345'],
    //   ['Sandy', 'Ocean blvd 2'],
    //   ['Betty', 'Green Grass 1'],
    //   ['Richard', 'Sky st 331'],
    //   ['Susan', 'One way 98'],
    //   ['Vicky', 'Yellow Garden 2'],
    //   ['Ben', 'Park Lane 38'],
    //   ['William', 'Central st 954'],
    //   ['Chuck', 'Main Road 989'],
    //   ['Viola', 'Sideway 1633']
    // ];
    // con.query(sql, [values], function (err, result) {
    //   if (err) throw err;
    //   console.log("Number of records inserted: " + result.affectedRows);
    // });

    // var sql = "INSERT INTO customers (name, address) VALUES ('Michelle', 'Blue Village 1')";
    // con.query(sql, function (err, result) {
    //   if (err) throw err;
    //   console.log("1 record inserted, ID: " + result.insertId);
    // });

    // 
    
    con.query("SELECT * FROM users ;", function (err, result) {
      if (err) throw err;

      let table = '<table style="border:solid 3px blue;"> <tr> <th> USERID </th> <th> FIRST_NAME </th> <th> LAST_NAME </th> <th> AGE </th> </tr>';
      result.forEach(user => {
        table += '<tr> <td>' +user.USERID + '</td> <td>' +user.FIRST_NAME + '</td> <td>' +user.LAST_NAME + '</td> <td>' +user.AGE + '</td> </tr>';
      });
      table += ' </table>';
      fs.writeFile('fromMysql.html',table, function (err){
        if (err) throw err;
        console.log('file created!');
        
      });
      
    });

    // let sql = "ALTER TABLE customers ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY";
    // con.query(sql, function (err, result) {
    //   if (err) throw err;
    //   console.log("Table altered");
    // });
});
