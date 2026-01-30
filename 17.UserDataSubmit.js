const querystring=require('querystring')

function userDataSubmit(req,res){
    let dataBody=[];
    req.on('data',(chunk)=>{
        dataBody.push(chunk);
    });

    req.on('end',()=>{
        let rawData=Buffer.concat(dataBody).toString();
        let readableData=querystring.parse(rawData);
        let dataString="my name is "+readableData.name+" My gmail is "+readableData.email;
        console.log(dataString);
    })
    res.write(`
        <h1>You can get data from user form here</h1>
        `);
    res.end();
}

module.exports=userDataSubmit;