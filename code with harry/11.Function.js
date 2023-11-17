/*
Function in JavaScripts
:- A function in javaScripts is a block of code that design to perform perticular task
sepration of logic doing this using 

*/
//normal function
// function add(A,b){
//     return A+b;
// }
// const sum = add(12,23);
// console.log(sum)


//Arrow function with para meter
const subh = (A,b)=>{
    return A+b;
}

console.log(subh(20,24));


//Arrow function without para meter
const Asubh = ()=>{
    console.log("this is an empty arrow function")
    return "hello sumit"
}

console.log(Asubh());
