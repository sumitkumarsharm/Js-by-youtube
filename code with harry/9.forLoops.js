/*
for Loop

let n  =  100;
for(let i = 2; i<=n; i=i+2){
    console.log(i);
}

let n =1099 ;
for(let i=0; i<=n; i++){
    console.log("I Love my india");
}

for In loop
      If we want key from array and object than we should use for_in loop

Ex-:
let marks = {
    rohan: 67,
    amit: 97,
    manish: 78,
    sumit: 53,
    ritika: 87
}
for(let a in marks){
    // console.log(a);
    console.log(`marks of ${a} is ${marks[a]}%`);
    if(marks[a]>90){
        console.log(`A+ Greate job you are inteligent`);
    }else if (marks[a]>70) {
        console.log(`A Very good`)        
    } else if (marks[a]>60) {
        console.log(`B+ Good`)        
    } else {
        console.log("fail")        
    }
};



// For_of loop in javaScripts
let name = 'sumit kumar sharma'
for(let b of name){
    console.log(b);
};

*/

import { add } from "./11.Function";
console.log(add)