const http=require('http');
const fs=require('fs');
const { error } = require('console');

http.createServer((req,res)=>{
    fs.readFile('html/form.html','utf-8',(error,data)=>{
        
        if(error){
            res.writeHead(500,{'Content-Type':'text/plain'})
            res.end('internal server error');
            return;
        }
        res.writeHead(200,{'Content-Type':'text/html'})
        if(req.url=='/'){
            res.write(data);
        }
        else if(req.url=='/submit'){
            res.write('<h1>Data Submit</h1>');
        }
        res.end();
    })
}).listen(2100);