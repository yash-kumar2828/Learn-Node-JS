const http=require('http');


http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html'})
    console.log(req.url);

    if(req.urll=='/'){
    res.write(`
        <form action='/submit' method="post" required>
            <input type='text' placeholder='Enter Name' name='name' />
            <input type='email' placeholder='Enter Email' name='email' required/>
            <button>Submit</button>
        </form>
        `);
    }
    else if(req.url=='/submit'){
        res.write('<h1>Data Submit</h1>')
    }
    res.end();
}).listen(3200);