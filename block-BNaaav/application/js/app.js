let http = require("http");
let fs = require("fs");

let server = http.createServer(handleRequest);

function handleRequest(req, res) {
  // check for css requests using url
  if (req.url.split(".").pop() === "css") {
    // set header for css file
    res.setHeader("Content-Type", "text/css");
    // read css file and send it in response
    fs.readFile(
      "../application/assets/stylesheets/style.css" + req.url,
      (err, content) => {
        if (err) return console.log(err);
        res.end(content);
      }
    );
  }

  //   if (req.method === "GET" && req.url === "/") {
  //     fs.createReadStream("../index.html").pipe(res);
  //   } else if (req.method === "GET" && req.url === "/about") {
  //     fs.createReadStream("../about.html").pipe(res);
  //   } else {
  //     res.end("page not found");
  //   }
}

server.listen(4100, "localhost", () => {
  console.log("server is live");
});
