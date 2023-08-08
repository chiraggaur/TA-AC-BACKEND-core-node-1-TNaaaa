let http = require("http");
let fs = require("fs");

let server = http.createServer(handleRequest);

// function handleRequest(req, res) {
//   fs.readFile("./index.html", (err, content) => {
//     if (err) console.log(err);
//     res.end(content);
//   });
// }
// file is big

function handleRequest(req, res) {
  res.setHeader("content-Type", "text/html");
  fs.createReadStream("./index.html").pipe(res);
}

server.listen(4000, "localhost", () => {
  console.log("server is live");
});
