//there are two way to create module

//common js module.
// module.exports :- it is use to what ever you want to exports and 

// way to call the module
// module.exports = {
//     add : call,
//     divide :div,
// };
//********************************************** */
// function call(a,b){
//     console.log("this is colling form demo 2 that is present in another file")
//     return a+b;
//     return a/b;
//     return b/3;
// };
//********************************************* *
// function div(x,y){
//     return x/y;
// }
//************************************** */
// module.exports.sum = (x,y)=>{
//     return x+y;
// }

//short method 
// exports.sum = (a,b)=>{
    // return a+b;
// }

// module.exports = function(a,b){
    // return a+b;
// }
//****************************************** *
//Another Method to import modules from js file

//ES6 module.

export function fun(x , y){
    return x+y;
}


export const nam = 'Rahul';

function hamsika(x,y){
    return x/y;
}

