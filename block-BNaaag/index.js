let fs = require("fs");

fs.readFile("./content.md", (err, content) => {
  // handle error or content of the file
  console.log(err, content);
});

// synchronous code

console.log("first");

function sum(a, b) {
  console.log(a + b);
}
sum(10, 10);
console.log("last test");

// async code

console.log("first");

function sum(a, b) {
  console.log(a + b);
}
sum(10, 10);

fs.readFile("./content.md", (err, content) => {
  // handle error or content of the file
  console.log(err, content.toString());
}); // async

console.log("last test");

//buffer

let buffer1 = Buffer.alloc(10);
buffer1.write("Welcome to Buffer");

console.log(buffer1.toString());
