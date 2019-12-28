  

console.log('create http server');

var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  fs.readFile('http 3.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<h2>this is serving a different html page</h2> <hr>')
    res.write(data);
    res.end();
  });
}).listen(8080);