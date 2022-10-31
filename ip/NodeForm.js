var http = require("http");
var fs = require("fs");
http
  .createServer((req, res) => {
    fs.readFile("formhandle.html", (err, data) => {
      if (err) {
        console.log(err);
      }
      res.writeHead(200, { "content-type": "text/html" });
      res.write(data);
      res.end();
    });
  })
  .listen(8081);