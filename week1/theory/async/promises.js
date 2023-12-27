const fs = require("fs");

// own async func using promises
const customRead = () => {
    return new Promise((resolve, reject) => {
        fs.readFile("read.txt", "utf-8", (err, data) => {
            resolve(data);
        })
    })
}

const onDone = (data) => {
    console.log(data);
}

customRead()
.then(data => onDone(data))