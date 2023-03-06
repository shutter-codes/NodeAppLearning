const fs = require("fs");
const index = fs.readFileSync("index.html", "utf-8");
const indexapi = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const products = indexapi.products;


const express = require('express')
const server = express()




// API -endpoint  -route
server.get('/', (req, res) => {
    res.json({ type:'GET'})
})

server.post("/", (req, res) => {
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