// console.log('apple1');
// let a=20;
// let b=0;
// setTimeout(()=>{
//     b=100;
//     console.log(a+b);
//     console.log('apple2');
// },2000);

// console.log(a+b);
// console.log('apple3');


// second example 



const fs=require('fs');
// fs.readFile('text/yash.txt','utf-8',(error,data)=>{
//     if(error){
//         return false;
//     }
//     console.log(data);
// });

const data=fs.readFileSync('text/yash.txt','utf-8');
console.log(data);
console.log("end script");