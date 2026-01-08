const {userName} =require('./2.data');
console.log(userName);

var a=10;
let b=11;
const c=200; //not change the value of const

a=200;
b=103;
console.log(a+b+c);

if(a==200){
    console.log("this is if condition");
}
else{
    console.log("this is else condition");
}

function fruit(item){
    console.log("this is "+item);
}
fruit("Banana");
fruit("mango");

console.log("For Loop");
for(var a=0; a<=5;a++){
    console.log(a)
}

console.log("While Loop");
var i=0;
while(i<=5){
    console.log(i);
    i++;
}

var users=["Yash","Kumar","Yash Kumar"];
for(var j=0; j<users.length;j++){
    console.log(users[j]);
}

var user={
    name:'yash',
    city:'Vaishali',
    age:20
};

console.log(user.name); //only print the name
console.log(user) // all info print