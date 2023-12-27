const fs = require("fs");

// asynchronous task
fs.readFile("3-read-from-file.txt", "utf-8", (err, data) => {
    console.log(data);
})

// expensive operation 
// ---> the thread completes it when the it becomes idle the async callback is executed
let a = 0;

for(let i = 0; i <= 100000000000000; i++) {
    a++;
}