console.log('hello to my READER node app');

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.setPrompt('say something -> ');
rl.prompt();
rl.on('line', function(usrInput) {
    if (usrInput === "yes") rl.close();
    console.log('you said ' + usrInput + '?');
    rl.prompt();
}).on('close',function(){
    process.exit(0);
});

  