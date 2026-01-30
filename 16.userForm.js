function userForm(req,res){
    res.write(`
        <form action='/submit' method="post" required>
        <input type='text' placeholder='Enter Name' name='name' />
        <input type='email' placeholder='Enter Email' name='email' required/>
        <button>Submit</button>
    </form>`);
    res.end();
}

module.exports=userForm;