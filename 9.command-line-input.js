const http=require('http');

const argument=process.argv;
const port=(argument[2]);

http.createServer((req,res)=>{
    res.write('testing input from cmd');
    res.end();
}).listen(port);