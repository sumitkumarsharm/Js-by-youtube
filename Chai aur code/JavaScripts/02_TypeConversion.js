// string to number
// to converting the number trinng to number we should use : Number()
let score = "300";
let result = Number(score);
console.log(result);
console.log(typeof(result));

let N = null;
let ans = Number(N);
console.log("this is a null value "+ans, typeof ans);


let value2 = '32abc';
let score2 = Number(value2);
console.log(score2);
/*
33 => number
"232abc" => NaN 
true => 1, false => 0
*/
 

//number to  boolean
// to converting the number to boolean we should use : boolean()
let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log("this is boolean "+ booleanIsLoggedIn+","+typeof booleanIsLoggedIn);

let str = "sumit"
let str2 = Boolean(str)
console.log("this is boolean value "+ str2+","+typeof(str2));

let value = "";
let result2 = Boolean(value);
console.log();
console.log("this is an Empty string",result2+ "," +typeof result2);
/*NOTE:
1 => true
0 => false
"" => false
"abcd" => true 
*/


//Number to string
// to converting the Number to string  we should use : String()
let Name = 2321;
let Name2 = String(Name);
console.log("thsi is a srtig value :" + Name2+ "," +typeof Name2);


let Sum = 0;
let dum = String(Sum);
console.log("this is string value :"+ Sum+", "+typeof(dum));

/*NOTE
this is convert all the value in to string */

