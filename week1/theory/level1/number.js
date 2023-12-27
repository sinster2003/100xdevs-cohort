// parseInt and parseFloat

// converts string ---> number

let number = "788";
console.log(typeof(number));
number = parseInt(number);
console.log(typeof(number));

let number2 = "788.899";
console.log(typeof(number2));
// number2 = parseInt(number2); // 788
number2 = parseFloat(number2); // 788.889
console.log(number2); 