let http = require("http");

let server = http.createServer(handleServer);

function handleServer(req, res) {
  res.end("welcome");
}

server.listen(4000, "localhost", () => {
  console.log("server hosted successfully");
});
