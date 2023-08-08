const http = require("http");
const url = require("url");

let server = http.createServer(handlerequest);

function handlerequest(req, res) {
  console.log(req.method, req.url);
  //   let parsedurl = url.parse(req.url);
  //   let pathname = parsedurl.pathname; // if  query  passed
  if (req.method === "GET" && req.url === "/") {
    res.write("Welcome to homepage");
    res.end();
  } else if (req.method === "GET" && req.url === "/about") {
    res.writeHead(202, { "content-Type": "Text/html" });
    res.end("<h2>this is all about NodeJS</h2>");
  } else if (req.method === "POST" && req.url === "/about") {
    res.writeHead(202, { "content-Type": "application/json" });
    res.end("{message: this is a post request}");
  } else {
    res.writeHead(404, { "content-Type": "Text/html" });
    res.end("{Page not found }");
  }
}

server.listen(5000, "localhost", () => {
  console.log("server is live");
});
