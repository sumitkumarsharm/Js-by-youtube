'use strict';

// //Que. check the user age lies between 10 and 20 if it is lies than print yes you are in another wise print not
// let age = 12;
// if(age<20 && age>10){
//     console.log("your age lies in between 10 and 20");
// }else{
//     console.log("your age doesn't lies between 10 and 20");
// };


// //Que. Give permission to driving license useing operator

// let BoyAge = 13;
// if(BoyAge<=18){
//     console.log("Go And Give the test");
// }else if(BoyAge>18){
//     console.log("You are Eligibal for driving");
// };

// //Que. Give 


// let a = prompt("Enter your age :");
// a = Number.parseInt(a);
// if(a>18 && a<20){
//     alert("you are Not ligily aligibal")
// }else if (a>20 && a<50) {
//     alert("tell me some another age like : 87,23..etc");    
// } else if(a>51){
//     alert("Your are ligaly eligble")
// };




//switch cae:----

// let age = prompt("Enter your age");
// switch(true){
//     case age<0:
//         alert("this is an invalid age");
//         break
//     case age>1 && age<9:
//         alert("This is an invilid age even you dont think to drive");
//         break
//     case age>9 &&  age<18:
//         alert("this is new age life line age");
//         break
//     default:
//         alert("this is an valid age");
//         break
    
// };

// buing the vegetable
// let vegi  = prompt("Enter vegi name");
// switch(vegi){
//     case 'patato':
//         alert("papato is 40 rupees per kg");
//         break
//     case 'tamato':
//         alert("tamato is 23.78 rupees per kg");
//         break
//     case 'onion':
//         alert("onion is 78 rupees per kg");
//         break
//     case 'Spinach':
//         alert("Spinach is 108 rupees per kg");
//         break
//     case 'carrot':
//         alert("carrot is 38 rupees per kg");
//         break
//     case 'mint':
//         alert("mint is 208 rupees per kg");
//         break
//     default:
//         alert("we dosen't have any other vegitable");
//         break
// }


//ternary Operator

let age = 18;
console.log(age>=18?"you can drive" : "not drive");

// let amna = prompt("Enter your age :");
// alert(amna>=18?"you can drive"
// :"not drive")(
// amna>60?"you are older you don't think you can drive"
// :"hire someone to drive");