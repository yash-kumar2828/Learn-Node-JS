const fs=require('fs');
const os=require('os');
const {log}=require('console');


fs.writeFileSync("dummy.txt","trying with modues");
console.log(os.platform());
console.log(os.hostname());
console.log(os.cpus());

console.log(process.cwd());
console.log(process.pid);


log("Yash Kumar");