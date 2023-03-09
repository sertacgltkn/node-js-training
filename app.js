const http = require("http");
const url = require("url");
const fs = require("fs");
const data =  fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf-8");
const server = http.createServer((req, res) => {
  const pathName = req.url;
  if (pathName === "/" || pathName === "MainPage") {
    res.end("HomePage");
  } 
  else if(pathName === "/questions"){
    res.writeHead()
  }
});
server.listen(3000, () => {
  console.log("Server is running on 3000 port");
});
