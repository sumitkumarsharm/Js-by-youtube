// The grades will be assigned in result variable based on the following criteria:

// If the value of marks variable is greater than or equal to 90, the value of result variable should be "A grade".

// If the marks are between 80 and 89,  the value of result variable should be "B grade". 

// If the marks are between 70 and 79,  the value of result variable should be "C grade". 

// If the marks are between 60 and 69,  the value of result variable should be "D grade". 

// If the marks are less than 60,  the value of result variable should be "F grade".

// Write a JS program to determine the grade of the students using conditional statements.

function main(marks) {
    let result;
    if(marks> 90){
        result="A Grade";
    }if(marks>80 && marks<=89){
        result="B Grade";
    }if(marks>70 && marks<79){
        result="C Grade";
    }if(marks>60 && marks<69){
        result="D Grade";
    }if(marks<=60){
        result="F Grade";
    }
  
    return result;
  }
  
  let mark = 100;
  let result = main(mark);
  console.log(result);
