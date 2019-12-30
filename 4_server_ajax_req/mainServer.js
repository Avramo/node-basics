
console.log('create http server');

var http = require('http');
//sudo npm install mysql
var mysql = require('mysql');
var url = require('url');

//my stuff
var sf = require('./serveFile');



var con = mysql.createConnection({
    host: "localhost",
    user: "student",
    password: "1q2w3e4r",
    database: "Users_DB",
});

con.connect(function(err) {
    if (err) res.end(err); 
    console.log("Connected to mysql!");
});


http.createServer(function (req, res) {
    console.log('http server got request');
    //res.writeHead(200, {'Content-Type': 'application/json',});


    //if url is defauls (/) - send html file
    if (req.url == '/') {
        sf.getFile('index.html', function(data){
            res.end(data)
        })
    } 
    else if (req.url == '/get/users') {
        //if its 'api/users' return api res
        
            let sql = 'SELECT * FROM users;'

            con.query(sql, function (err, result) {
                if (err) res.end(err); 
                let json = JSON.stringify(result)
                console.log("Result: " + json);
                res.end(json);
            });
    }
    else if (req.url.startsWith('/get/users/') ){
        //if its 'get/users/' return api res
        let sql = 'SELECT * FROM users '
        let id = req.url.split('/get/users/')[1]
        sql += ' where USERID = ' + id + ';'
        
        con.query(sql, function (err, result) {
            if (err) res.end(err); 
            let json = JSON.stringify(result)
            console.log("Result: " + json);
            res.end(json);
        });
    }
    else {
        res.end(req.url)
    }

}).listen(8080);