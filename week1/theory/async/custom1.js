const fs = require("fs");

// my own async function
const customRead = (cb) => {
    // pre defined async 
    fs.readFile("read.txt", "utf-8", (err, data) => {
        cb(data); // this will lead to a callback hell
    })
}

const onDone = (data) => {
    console.log(data);
    afterDone();
}

const afterDone = () => {
    console.log("Got the data");
    console.log("Hi");
}

customRead(onDone);