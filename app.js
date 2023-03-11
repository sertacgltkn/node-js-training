// const http = require('http')
// const url = require('url')
// const fs = require('fs')
// const { dirname } = require('path')

// const htmldosyam = fs.readFileSync(`${__dirname}/index.html`,'utf-8')

// const server=http.createServer((req,res)=>{
//     const pathName=req.url
//     if(pathName==='/'){
//         res.end('HomePage')
//     }
//     else if(pathName==='/questions'){
//         res.writeHead(200,{'Content-Type':'text/html'});
//         res.end(htmldosyam)
//     }
// })

// server.listen(3000,()=>{
//     console.log('Server is running on 3000 port')
// })

// var http = require('http');
// var dt = require('./myfirstmodule');

// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.write("The date and time are currently: " + dt.myDateTime());
//   res.end();
// }).listen(8080);


// var http = require('http');
// var fs = require('fs');

// http.createServer(function (req, res) {
//     fs.rename('mynewfile1.txt', 'myrenamedfile.txt', function (err) {
//         if (err) throw err;
//         console.log('File Renamed!');
//       });
// }).listen(3000);


// var url = require('url');
// var adr = 'http://localhost:3000/default.htm?year=2017&month=february';
// var q = url.parse(adr, true);

// console.log(q.host); //returns 'localhost:8080'
// console.log(q.pathname); //returns '/default.htm'
// console.log(q.search); //returns '?year=2017&month=february'

// var qdata = q.query; //returns an object: { year: 2017, month: 'february' }
// console.log(qdata.month); //returns 'february'


var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {
  var q = url.parse(req.url, true);
  var filename = "." + q.pathname;
  fs.readFile(filename, function(err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found");
    } 
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(3000);