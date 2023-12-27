const object = {
    name: "Sindhur",
    age: 20,
}

// extracting keys
console.log(Object.keys(object));

// extracting values
console.log(Object.values(object));

// extracting entries
console.log(Object.entries(object));

// extracting hasOwnProperty
console.log(object.hasOwnProperty("name"));

// assigning an entry to an existing object
const modifiedObject = Object.assign({}, object, { isGraduated: false });
console.log(modifiedObject);
