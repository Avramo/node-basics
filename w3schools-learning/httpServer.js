var http = require('http');
let myDt = require('./dateTimeModule')

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('Hello World! <br>');
  res.write('The current date and time is: ' + myDt.currentDateTime() + ' <br> ');
  myDt.currentDateTime().setMonth(11);
  res.write('Month: ' + myDt.currentDateTime().getMonth() + ' (add 1 for month)<br>');
  res.write('Day: ' + myDt.currentDateTime().getDate() + '<br>');
  res.write('Year: ' + myDt.currentDateTime().getFullYear() + '<br>');
  res.end('<br> Have a great day!');
}).listen(8080);
