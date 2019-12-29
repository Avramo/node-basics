
console.log('http server created');

var http = require('http');
//sudo npm install mysql
var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "student",
    password: "1q2w3e4r",
    database: "Users_DB",
});


http.createServer(function (req, res) {
    console.log('http server got request');
    res.writeHead(200, {'Content-Type': 'text/html' });


    con.connect(function(err) {
        if (err) throw err; 
        console.log("Connected to mysql!");

        con.query("SELECT * FROM users ;", function (err, result) {
            if (err) throw err;
      
            let table = '<table style="border:solid 3px blue;"> <tr> <th> USERID </th> <th> FIRST_NAME </th> <th> LAST_NAME </th> <th> AGE </th> </tr>';
            result.forEach(user => {
              table += '<tr> <td>' +user.USERID + '</td> <td>' +user.FIRST_NAME + '</td> <td>' +user.LAST_NAME + '</td> <td>' +user.AGE + '</td> </tr>';
            });
            table += ' </table>';

            // fs.writeFile('fromMysql.html',table, function (err){
            //   if (err) throw err;
            //   console.log('file created!');
            // });

            res.write(table);
            res.end('<br> BYE BYE!!!')

        });

    });

}).listen(8080);
