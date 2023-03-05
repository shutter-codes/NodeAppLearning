// importing the module
const fs = require('fs')


//this is synchronous function without callback functionalities
const file = fs.readFileSync('demo.txt','utf-8')
console.log(file);
  
// this is asynchronous method with the call back functionalities
fs.readFile('demo.txt', 'utf-8', (err,text) => {
    console.log(text);

})

console.log("hello world");

// in synchronous function , it will block the output for further instructions while asynchronous will not block the other process.
// synchronous will take more time than asynchronous.
// in synchronous it will execute the instructions one by one
// in asynchronous it will execute the other process till the particular process ready to executes
