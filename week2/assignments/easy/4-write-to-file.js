const fs = require("fs");

const data = "Thid is writeFile feature";

fs.writeFile("3-read-from-file.txt", data, "utf-8", (err) => {
    if(err) {
        console.log(err);
    }
    else {
        console.log("Written to a file successfully");
    }
})

// if yes then this code executes first
console.log("Checking if asynchronous");