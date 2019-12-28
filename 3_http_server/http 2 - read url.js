
console.log('create http server');

var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
    console.log('http server got request');
    res.writeHead(200, {'Content-Type': 'text/html',});
    res.write('full url: ' +req.url + '<br>');

    var q = url.parse(req.url, true).query;
    var txt = 'year = ' + q.year + "<br>month = " + q.month;
    res.write(txt+ '<br>');

    res.end('<h1>Hello CLASS fullstackers!</h1>');
}).listen(8080);
//localhost:8080/shuki?year=moti&month=karlin
