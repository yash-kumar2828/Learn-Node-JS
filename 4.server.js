const http=require('http');

http.createServer((req,res)=>{
    res.write("<h1>My name is Yash Kumar Singh</h1>");
    res.end("Hello");
}).listen(4800);


http.createServer((req,res)=>{
    res.write("<h1>Other Server</h1>");
    res.end("Hello");
}).listen(5800);