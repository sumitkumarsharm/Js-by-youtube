/**
 * String
 * there is usally two type to create a string
 * (1)Single Quote( '     ' )
 * (2)Double Quote(   "   "   )
 * */

// finding the length we have to use length keyword

//Single Quotes
let nakshatra = 'sumit';
console.log(nakshatra.length)


// Double quotes
let Name = "sumit";
console.log(Name.length);
// if want to single digit of the variable we should use indexing
console.log(Name[0])
console.log(Name[1])
console.log(Name[2])
console.log(Name[3])
console.log(Name[4])
// console.log(Name[])


// Template literals
//String interplation:- we can insert the variable directly template literal this is colled String interplation
let boy1 = 'Rohan';
let boy2 = 'sumit';
let Friends = `${boy1} is the friend of ${boy2}`;
console.log(Friends);

//Escape Sequence Characters
// we have to write banana's in single quotes/double quots than we use it(\'character)
            //Ex - banana's, mango's ....etc

let fruits = 'banana\'s'
console.log(fruits)
console.log(fruits.length)

let fal =  "Mango\'sumit";
console.log(fal)


// String properties And Method

// length properties :- is use to find the length of variable.
let denim = 'sumit';
// console.log(denim.length);
// console.log(denim);


//toLowerCase(): use to convert all string to lowertext than we use tolowerCase
console.log(denim.toLowerCase())


// toUpperCase() function: id use to change all charactor into upper case than we use it.

console.log(denim.toUpperCase())



//=> The Slice Method
//The slice() method returns selected elements in an array, as a new array. The slice() method selects from a given start, up to a (not inclusive) given end.

console.log(denim.slice(1,4));

console.log(denim.slice(5));



//Replace Method:- is use to replace the word to another word

console.log(denim.replace("summit","sakshi"));
console.log(denim.replace("summit","Naman"));
console.log(denim.replace("summit","Amit"));


// Concate() method :- it is use to add the two string usign this method
let friendes = "sakshi"
console.log(denim.concat( " is Love of " ,friendes, " Okey"));

//trim() method :- it is use to remove extra spaces
let names = "               sumit                  ";
console.log(names); // here it is showing spaces 
console.log(names.trim());// here is remove the spaces







