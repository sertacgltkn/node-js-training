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


var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World!');
}).listen(3000);