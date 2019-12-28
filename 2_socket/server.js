
console.log("server socket created");

// server
require('net').createServer(function (socket) {
    console.log("connected");

    socket.on('data', function (clientData) {
        console.log('client says (server input)', clientData.toString());
    });
}).listen(8080);