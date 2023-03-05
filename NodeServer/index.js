// In this module will Create pure Node server without express
const http = require('http') //we need this package

// -----------------------------------------------------------
// normal testing server 
 
// const server = http.createServer((req,res) => {
//     console.log('Pure Node server started');
//     res.setHeader('Dummy','Dummy-Value')
//     // res.end('hello js')
// })
// ------------------------------------------------------
// calling html to server

// const server = http.createServer((req,res) => {
//     console.log('html server');
//     res.end('<h1>This is Html File</h1>')
// })

// -------------------------------------------------------
// passing json data to server

// const Jdata = {
//     age: 5,
//     fname:'naitik'
// }
// const server = http.createServer((req,res) => {
//     console.log('Callling JSON data');
//      res.setHeader("json", "Json-Value");
//     res.setHeader('Content-Type','application/json')
//     res.end(JSON.stringify(Jdata))
// })

// --------------------------------------------------------------
const server = http.createServer((req, res) => {
    console.log(req.url);
})

// binding this server to port
server.listen(8080)




 