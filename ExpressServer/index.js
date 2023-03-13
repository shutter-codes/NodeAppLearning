const fs = require("fs");
const index = fs.readFileSync("index.html", "utf-8");
const indexapi = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const products = indexapi.products;


const express = require('express')
const server = express()

// body parser 
server.use(express.json())


// middlewares
server.use((req, res, next) => {
    console.log(req.method, req.ip, req.hostname);
    console.log(req.get('User-Agent'),new Date);
    next()
})

// auth middleWare
 

const auth = (req, res, next) => {
    console.log(req.query);
    if (req.query.password == 123) {


        next()
        
    } else {
        res.status(401).send('page is not maintained')
    }
}
// instead use this at a enter point
server.use(auth) 


// API -endpoint  -route
server.get('/',auth, (req, res) => {
    res.json({ type:'GET'})
})

server.post("/",auth , (req, res) => {
  res.json({ type: "POST" });
});
server.delete("/", (req, res) => {
  res.json({ type: "DELETE" });
});
server.put("/", (req, res) => {
  res.json({ type: "PUT" });
});
server.patch("/", (req, res) => {
  res.json({ type: "PATCH" });
});


server.get('/', (req, res) => {
    // res.send('<h1>This is Express Server</h1>')
    // res.sendFile("/home/shutter/Desktop/NodeApp/ExpressServer/index.html");
    // res.json(products)
    // res.sendStatus(404)  
    res.status(404).send('<h1>page is under maintenance</h1>')
})


server.listen(8080, () => {
    console.log('Express Server Started');
})

// day commited