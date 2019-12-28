
console.log('http server created');

var http = require('http');
//sudo npm install mysql
var mysql = require('mysql');

var con = mysql.createConnection({
    host: "127.0.0.1",
    user: "amk",
    password: "",
    database: "users_db",
    port: 3306
});


http.createServer(function (req, res) {
    console.log('http server got request');
    res.writeHead(200, {'Content-Type': 'application/json',});


    con.connect(function(err) {
        if (err) res.end(err); 
        console.log("Connected to mysql!");

        let sql = 'SELECT * FROM users_db.users;'

        con.query(sql, function (err, result) {
            if (err) res.end(err); 
            let json = JSON.stringify(result)
            console.log("Result: " + json);
            res.end(json);
        });
    });

}).listen(8080);