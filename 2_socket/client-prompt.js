

console.log("create client socket");

// client
var s = require('net').Socket();
s.connect(8080);

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.prompt();
rl.on('line', function(line) {
    console.log('client says ' + line);
    s.write(line);
    s.end();
    rl.close();
})
