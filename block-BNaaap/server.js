let http = require("http");

let server = http.createServer(handleRequest);

function handleRequest(req, res) {
  res.writeHead(205, { "content-type": "text" });
  res.end("welcome");
}

server.listen(3000, "localhost", () => {
  console.log("successfull");
});

//   res.statusCode = 201;
//   res.setHeader("content-type", "text/html");
