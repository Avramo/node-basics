var http = require('http');
let myDt = require('./dateTimeModule')
let url = require('url');
let fs = require('fs');


http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('Hello World! <br>');
  res.write('this is the req.url '+req.url + '<br>');
  res.write('this is currentDateTime() from  dateTimeModule<br>');
  res.write('The current date and time is: ' + myDt.currentDateTime() + '<br> <br>');

  res.write('Month: ' + myDt.currentDateTime().getMonth() + ' (add 1 for month)<br>');
  res.write('Day: ' + myDt.currentDateTime().getDate() + '<br>');
  res.write('Year: ' + myDt.currentDateTime().getFullYear() + '<br>');
  res.write('<br><br><br>');
  res.write('this is stringDateTime() from  dateTimeModule<br>');
  res.write(myDt.stringDateTime() + '<br><br>');

  res.write('<h2>Split the Query String url.parse</h2>');

  res.write('enter  <a href="http://localhost:8080/?year=2017&month=July">http://localhost:8080/?year=2017&month=July</url></a> ');
  let qString = url.parse(req.url, true).query;
  res.write('parsed url: MONTH-' + qString.month + '; YEAR-'+ qString.year)

  fs.appendFile('demofile1.html', '<div>Hello appendFile content!</div>', function (err) {
    if (err) throw err;
    console.log('Saved!');
  }); 

  fs.open('mynewfile2.txt', 'w',function (err, file) {
    if (err) throw err;
    console.log('fs.open!');
  });

  fs.writeFile('mynewfile3.txt', 'Hello writeFile!', function (err) {
    if (err) throw err;
    console.log('fs.writeFile!');
  });

  fs.appendFile('demofile1.html', ' This is my update text.', function (err) {
    if (err) throw err;
    console.log('Updated!');
  });


fs.rename('mynewfile1.txt', 'myrenamedfile.txt', function (err) {
  if (err) throw err;
  console.log('File Renamed!');
});

  fs.unlink('mynewfile2.txt', function (err) {
    if (err) throw err;
    console.log('File deleted!');
  });

  res.write('<h2>File System Module - read files</h2>');

  fs.readFile('demofile1.html', function(err,data){
    // res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(" <b>i added css around the data after it arrives </b> <div style='color:red; padding:10px; margin:5px; border:solid 3px blue;'> " +data + '</div>');
    res.end('<br> Have a great day!');
  });

}).listen(8080);
