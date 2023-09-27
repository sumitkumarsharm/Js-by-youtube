//Email Varification
//input an email
//length of the gmail > 10
//after . only 2 to 3 charactor allows
//minimum 3 charactor between the @ and .

// let str = "sumitkumarsharma@gmail.com"
// //checking length
// console.log(str.length);
// //checking word present or not 
// let substring = '.com';
// console.log(str.includes(substring));
//

const email = prompt('enter the email address')
const emailLen = email.length;
const dotIndex = email.lastIndexOf('.');
const atIndex = email.lastIndexOf('@');
const lastIndex = emailLen-1;

if(
emailLen<11 || 
lastIndex - dotIndex < 2 ||
 lastIndex- dotIndex>3||
 dotIndex-atIndex<3
){
    console.log("Invelid email")
}else{
    console.log("Valid email")
}
