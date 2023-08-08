let http = require("http");

let server = http.createServer(handleRequest);

function handleRequest(req, res) {
  console.log(req.headers);
  console.log(req.method);
  console.log(req.url);
  res.end("response executed");
}

server.listen(3000, () => {
  console.log("server made succesfully");
});
