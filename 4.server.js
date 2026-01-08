const http=require('http');

http.createServer((req,res)=>{
    res.write("<h1>My name is Yash Kumar</h1>");
    res.end("Hello");
}).listen(4800);