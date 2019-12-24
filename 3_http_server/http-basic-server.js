
console.log('create http server');

var http = require('http');

http.createServer(function (req, res) {
    console.log('http server got request');
    res.writeHead(200, {
        'Content-Type': 'text/html',
        'amk-type': 'thats_me'
    });
    res.end('<h1>what is this and how does it work?!</h1>');
}).listen(8080);