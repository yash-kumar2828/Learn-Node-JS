const http=require('http');


const age=21;
const server=http.createServer((req,res)=>{
    res.setHeader('Content-Type','text/html')
    res.write(`
        <html>
        <head>
            <title>server create</title>
        </head>
        <body>
            <h1>Yash Kumar</h1>
            <h2>`+age+`</h2>
            <h2>`+new Date()+`</h2>
        </body>
        </html>
        `)
    res.end();
    process.exit();   //clean exit - waiting for changes before restart
});

server.listen(4800);