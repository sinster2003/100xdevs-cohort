const fs = require("fs");

// async function ----> takes time
fs.readFile("read.txt", "utf-8", (err, data) => {
    console.log(data);
})

console.log("Hello"); 

let a = 0;
for(let i = 0; i <= 100000000; i++) {
    a++;
}

console.log("Hi");

// execution is still: hello loop hi fs.readFile

