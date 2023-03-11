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


var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  fs.readFile('demofile1.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(3000);