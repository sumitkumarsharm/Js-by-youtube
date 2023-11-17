

// to importing the file using require module
const result = require('./sum');


//call sum.js file from another file
const arithmetic = result.div(122,3);
console.log(arithmetic)
// const anotherArithmetic = result.add(100,1134);
// console.log("anotherArithmetic:"+anotherArithmetic)
// console.log("arithmetic:"+arithmetic);

//using ES6 import the function