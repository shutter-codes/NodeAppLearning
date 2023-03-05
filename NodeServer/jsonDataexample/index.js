const http = require("http");
const fs = require("fs");

const index = fs.readFileSync("data.json", "utf-8");

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(index));
  res.end(index);
});

server.listen(8080);
