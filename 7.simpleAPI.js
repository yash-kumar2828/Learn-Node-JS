const http=require('http');

const userData=[
    {
        name:'Yash',
        age:'21',
        email:'yk5708428@gmail.com'
    },
    {
        name:'Kumar',
        age:'21',
        email:'yk5708428@gmail.com'
    },
    {
        name:'Yash Kumar',
        age:'21',
        email:'yk5708428@gmail.com'
    }
]
http.createServer((req,res)=>{
    res.setHeader('Content-Type','application/json')
    res.write(JSON.stringify(userData));
    res.end();
}).listen(6100);