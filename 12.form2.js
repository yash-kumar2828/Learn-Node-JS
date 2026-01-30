const http=require('http');
const fs=require('fs');
const querystring=require('querystring');

// const { error } = require('console');

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
            let dataBody=[];
            req.on('data',(chunks)=>{
                dataBody.push(chunks);
            })
            req.on('end',()=>{
                let rawData=Buffer.concat(dataBody).toString();
                let redableData=querystring.parse(rawData);
                let dataString="my name is "+redableData.name+" and my email is "+redableData.email;
                console.log(dataString);
                // fs.writeFileSync("text/"+redableData.name+".txt",dataString);

                fs.writeFile("text/"+redableData.name+".txt",dataString,"utf-8",(err)=>{;
                if(err){
                    res.end('internal server error')
                    return false;
                }
                else{
                    console.log ("file created");
                }
                
            });
        })
            res.write('<h1>Data Submit</h1>');
        }
        res.end();
    })
}).listen(2100);