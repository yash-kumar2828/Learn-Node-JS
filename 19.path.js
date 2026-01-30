const path=require('path');
const file='/text/yash.txt';
console.log(path.dirname(file)); // directory name
console.log(path.extname(file)); // extension name
console.log(path.basename(file)); // base name
console.log(path.resolve("text","yash.txt"));

console.log(path.isAbsolute(file)); // to check if the path is absolute or not
console.log(__dirname); // current directory path
console.log(__filename); // current file path