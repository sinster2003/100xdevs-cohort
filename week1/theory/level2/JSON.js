// JSON.stringify and JSON.parse

// stringify = converts JS Objects ---> JSON Text

const userForTor = {
    name: "Sindhur",
    age: 20,
}

// backend = server ---> frontend data is passed and it must be in string

const stringifiedObject = JSON.stringify(userForTor); // object into json

console.log(stringifiedObject); 

const convertedObj = JSON.parse(stringifiedObject); // json into js object

console.log(convertedObj);