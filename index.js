const http = require("http");
const fs = require("fs");
const path = require("path");

console.log(__dirname)

let server = http.createServer((res, req) => {
    let url = res.url;
    req.writeHead(200, { 'Content-Type': 'text/plain;charset=utf-8' });
    
    if (res.url == "/" || res.url == "/index.html") {
        console.log(1)
        fs.readFile(path.join(__dirname, "/static/html/index.html"), (err, data) => {
            console.log(2, path.join(__dirname, "/static/html/index.html"))
            req.writeHead(200, { "Content-Type": "text/html;charset=UTF-8" });
            req.end(data)
        })
    } else {
        req.writeHead(200, { "Content-Type": "text/html;charset=UTF-8" });
        req.end("<h1>404</h1>")
    }
  //  req.end('visit link:' + url)
}).listen(9000)

server.on('connection',(req,socket,head)=>{
    console.log('有连接');
});