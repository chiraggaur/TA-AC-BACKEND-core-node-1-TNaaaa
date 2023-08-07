// writeCode

// Q. Write code to run `index.js` with content console.log('Welcome to Nodejs') in node environment ?

// console.log("Welcome to Nodejs");

// Q. In above `index.js` file
// - require os module
// - write code to get `number of cpu's, free memory, uptime and version from os module`
// - write code to require only readFile and unlink method from fs module.

// var os = require("os");

// console.log(os.cpus());
// console.log(os.freemem());
// console.log(os.uptime());
// console.log(os.version());

// Q. Create 2 files
//   1. area.js
//   2. app.js
//   3. In area.js write functions to calculate area of square, rectangle and circle and export them using module.exports
//   4. In app.js, require functions from area.js and execute the areas of given figures and console.log the results.

//done

// Q. Write 2 different methods for creating buffer in nodejs using Buffer class.
// - create a fixed length buffer of 12.
// - write code to convert buffer back to string.

// const firstBuf = Buffer.alloc(12);
// firstBuf.write("hello my friend");
// console.log(firstBuf.toString());

// Q. Write code example to demonstrate blocking and non-blocking code.

// sync blocking

// console.log("first");
// console.log("second");
// console.log("third");

// async  non - blocking

console.log("first");

setTimeout(() => {
  console.log("second");
}, 2000);  // api used and call stack is not blocked 

console.log("third");
