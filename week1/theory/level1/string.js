// length
const fname = "sindhur";
console.log(fname.length);

// indexOf ---> gives the starting index of target inside that of string

const checkIndex = (string, target) => {
    console.log(string.indexOf(target));
}

checkIndex("Hello world", "world"); // output ---> 6

// lastIndexOf ---> gives the starting index of last occuring target inside that of string

const lastCheckIndex = (string, target) => {
    console.log(string.lastIndexOf(target));
}

lastCheckIndex("Hello world world world", "world"); // output ---> 18

// slice
const sliceStr = (string, start, end) => {
    console.log(string.slice(start,end)); 
}

sliceStr("Sindhur", 0, 6); // Sindhu
console.log("Sindhur".slice(0,6)); // Sindhu

// substring ---> similar to slice 
const sliceStrSub = (string, start, end) => {
    console.log(string.substring(start,end)); 
}

sliceStrSub("Sindhur", 2, 4); // nd

// substr ---> deprecated
const slicesubstr = (string, start, end) => {
    // end represents length of characters
    console.log(string.substr(start,end)); 
}

slicesubstr("Sindhur", 2, 4); // ndhu

// replace ---> replace choose characters (first argument) with the second argument
const lname = "Sindhur";
console.log(lname.replace("i", "a")); // Sandhur

// splitString
const sentence = " Hi I am Sindhur ";
console.log(sentence.split(" ")); // array of words

// trim 
console.log(sentence.trim());

// toLowerCase
console.log("SINDHUR".toLowerCase()); // sindhur

// toUpperCase
console.log("sindhur".toUpperCase()); // SINDHUR
