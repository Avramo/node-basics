 


console.log("client socket created ");

// client
var s = require('net').Socket();
s.connect(8080);
s.write('Hello from client');
s.end();

