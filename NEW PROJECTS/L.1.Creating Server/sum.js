
// there are two type to import the module 
//(1) common js module
// function add(x,y){
//     return x+y;
// }
// module.exports = {
//     sum:add
// } 
//we can also import it using arrow function
// module.exports.add = (x,y)=>{
    // return x+y;
// }


//(2). ES6 

exports.div=(x,y)=>{
    return x/y;
};