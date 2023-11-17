let marks = {
    amit:30,
    sumit:23,
    aman:50,
    namn:90
}

for(let i = 0; i<Object.keys(marks).length; i++){
    console.log(Object.keys(marks)[i] + 'marks is' + marks[Object.keys(marks)[i]]);
}

for(let key in marks){
    console.log(key);
}