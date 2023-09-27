// String to other type
/**  to converting string to another datatype we use String() */

/**  number to stirng */
console.log('******** for Number*********');
let num = 23;
let str = String(23);
console.log(str);
console.log(typeof(str));

// boolean to string
console.log('******** for Boolean*********');

let bool = true;
let str2 = String(bool);
console.log(str2);
console.log(typeof(str2));

// null to string
console.log('******** for Null*********');

let num2 = null;
let str3 = String(num2);
console.log(str3);
console.log(typeof(str3));

// undefined to String 
console.log('******** for Undefined*********');

let num3 = undefined;
let str4 = String(num3);
console.log(str4);
console.log(typeof(str4));

console.log('******** TOSTRING *********');

// tostring is a method that is use to convert to stirng of any type 

let sum = 123;
let num5 = sum.toString();
console.log(num5);
console.log(typeof(num5));


// same as we can convert one data type to another datatype accept null ;



// NUMBER TO ANOTHER DATA TYPE

// for converting number to another data type we have to use "Number()" Data type 

console.log('>>>>>>>>      CONVERTING STRING TO NUMBER   <<<<<<<<<');

console.log('******** for STRING ********');
 let str5 = '2344';
 let num6 = Number(str5);
 console.log(num6);
 console.log(typeof(num6));

 console.log('******** for BOOLEAN *********');
 let str6 = true;
 let num7 = Number(str6);
 console.log(num7);
 console.log(typeof(num7));

 console.log('******** for NULL  *********');

 let str7 = null;
 let num8 = Number(str7);
 console.log(num8);
 console.log(typeof(num8));


 console.log('******** for UNDEFINED *********');

 let str8 = undefined;
 let num9 = Number(str8);
 console.log(num9);
 console.log(typeof(num9));


 console.log('******** ANOTHER APROCH TO CONVERT THE DATA TYPE TO NUMBER *********');
// TO USING UNARY OPERATOR WE USE DATA TO CONVERT TO NUMBER
// EXAMPLE:= 

let a = '12345678';
let conv = + a;
console.log(conv);
console.log(typeof(conv))
 




console.log('******** USING parseFloat *********');

// we can aslo convert using 'PARSEFLOAT()' METHOD


// PARSEFLOAT

let n = '1234.567'
let sum2 = parseFloat(n);
console.log(sum2)

// some unique

let n2 = '123.4567sumit'
let n3 = parseFloat(n2)
console.log(n3)


console.log('******** USING parseInt *********');

// we can aslo convert using 'PARSEINT()' METHOD

//PARSEINT

let n4 = '1234.567'
let sum3 = parseInt(n);
console.log(sum3)
console.log(typeof(sum3))

//some unique

let n5 = '123.4567sumit'
let n6 = parseInt(n5)
console.log(n6)
console.log(typeof(n6));

// CONVERT TO BOOLEAN

console.log('******** BOOLEAN *********');


let nu = 'false'
let ni = Boolean(n5)
console.log(ni)
console.log(typeof(ni));

// let x = 'sumit';
// let y = "smit"+Number(x);
// console.log(parseFloat("3.14.15"))