// const Atrhimatic = require('./2.demo');

// const add = Atrhimatic.add(12,23)
// const result = Atrhimatic.sum(12,43);
// const num = Atrhimatic(12,43);
// console.log(num)

// console.log(add);
// console.log(result);

// ES6
import * as Arthimetic from './2.demo.js'
//here we write * that mean it will import all the function from the file
// we can also import specific thing which have need
          //Ex:-  import {fun} from './name ofn the file'
          //      console.log(sum(10,20))

//Advantages:-
            // the main advantage of ECMA SCRIPTS is readability
            // it sentance just like English 
            //optimision and perfomance 
            // 
//import is use to import the file from the export keyword


console.log(Arthimetic.fun(100,123));
console.log(Arthimetic.nam);