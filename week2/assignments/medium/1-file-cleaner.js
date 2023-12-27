const fs = require("fs");

// custom read async function
const readData = () => {
    // fs.readFile async 

    return new Promise((resolve) => {
        fs.readFile("1-file-cleaner.txt", "utf-8", (err, data) => {
            const trimData = data.trim();
            const splitData = trimData.split(" ");
            const newSplitArray = splitData.filter(element => element !== '');
            const resultString = newSplitArray.join(" ");
        
            resolve(resultString);
        });
    })
}

// custom write async function
const writeData = (data) => {
    // fs.readFile async 

    return new Promise((resolve) => {
        fs.writeFile("1-file-cleaner.txt", data, "utf-8", (err, data) => {
            if(!err) {
                console.log("Rewritten successfully");
            }
        });
    })
}

readData()
.then(data => {
    writeData(data);
})