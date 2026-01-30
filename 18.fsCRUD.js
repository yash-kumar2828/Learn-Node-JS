const fs=require('fs');

console.log(process.argv[2]); // get the command line argument


//for the commands: write, read, update, delete
const operation=process.argv[2];
if(operation==='write'){
    const name=process.argv[3];
    const content=process.argv[4];
    console.log(operation, name, content);
    fs.writeFileSync(`files/${name}.txt`, content);
}
else if(operation==='read'){
    const name=process.argv[3];
    const content=fs.readFileSync(`files/${name}.txt`, 'utf-8');
    console.log(content);
}

else if(operation==='update'){
    const name=process.argv[3];
    const content=process.argv[4];
    fs.appendFileSync(`files/${name}.txt`, content);

}
else if(operation==='delete'){
    const name=process.argv[3];
    fs.unlinkSync(`files/${name}.txt`);
}
else{
    console.log('Invalid operation. Use write, read, update, or delete.');  
}

//for the use of fs methods
// fs.writeFileSync('files/banana.txt', 'This is a fruit.'); // creates a file with content

// fs.unlinkSync('files/banana.txt');  // deletes the file

// const data=fs.readFileSync('files/apple.txt', 'utf-8'); // reads the file content
// console.log(data);

// fs.appendFileSync('files/apple.txt', '\nApple is red in color.'); // appends content to the file

// const newData=fs.readFileSync('files/apple.txt', 'utf-8');
// console.log(newData);