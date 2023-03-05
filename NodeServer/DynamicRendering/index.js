const http = require("http");
const fs = require("fs");

const index = fs.readFileSync("index.html", "utf-8");
const indexapi = JSON.parse(fs.readFileSync("data.json", "utf-8"));

const products = indexapi.products;

const server = http.createServer((req, res) => {


// for dynamic product render
    if (req.url.startsWith("/product")) {
        const id = req.url.split("/")[2];
        const prd = products.find((p) => p.id === +id);
        console.log(prd);

        res.setHeader("Content-Type", "text/html");
        const reindex = index
            .replace("**title**", prd.title)
            .replace("**url**", prd.thumbnail)
            .replace("**price**", prd.price)
            .replace("**rating**", prd.rating);
        res.end(reindex);
        return;
    }
  
// for routing to different path
  switch (req.url) {
    case "/":
      res.setHeader("Content-Type", "text/html");
      res.end(index);
      break;

    case "/apiData":
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify(indexapi));
      break;

    default:
      res.writeHead(404, "Not FOund");
      res.end();
      break;
  }
});

server.listen(8080);
