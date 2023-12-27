// without callbacks

// square and cube

const square = (n) => {
    return n * n;
}

const cube = (n) => {
    return n * n * n;
}

// repeatition of logic
const sumOfSquares = (a, b) => {
    const val1 = square(a); 
    const val2 = square(b);
    return val1 + val2;
}

const sumOfCubes = (a, b) => {
    const val1 = cube(a);
    const val2 = cube(b);
    return val1 + val2;
}

console.log(sumOfSquares(2,2));
console.log(sumOfCubes(2,2));

const sumOfSomething = (a, b, callback) => {
    console.log(callback);
    const val1 = callback(a);
    const val2 = callback(b);
    return val1 + val2;
}

console.log(sumOfSomething(2,2,square));
console.log(sumOfSomething(2,2,cube));
console.log(sumOfSomething(3,3,(n) => { // anonymous function
    return n + n;
}));

