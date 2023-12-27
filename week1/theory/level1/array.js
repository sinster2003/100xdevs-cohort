// push ---> appends at last 
const initArray = [1, 2, 3];
initArray.push(4);
console.log(initArray); // [1, 2, 3, 4] append 4 to the original array

// pop ---> remove at last
const newArray = [1, 2, 3];
newArray.pop();
console.log(newArray); // [1, 2] pops 3

// unshift ---> appends at first
const unShiftArray = [1, 2, 3];
unShiftArray.unshift(0);
console.log(unShiftArray); // [0, 1, 2, 3] append 0 to the original array at first

// shift ---> remove at first
const shiftArray = [1, 2, 3];
shiftArray.shift();
console.log(shiftArray); // [2, 3] pops from first

// concat ---> does not change og array makes a copy of it used in useState();
const concatArray = [1, 2, 3];
const finalArray = concatArray.concat([5, 6, 7, 8]);
console.log(concatArray); // [1, 2, 3]
console.log(finalArray); // [1, 2, 3, 5, 6, 7, 8]

// forEach 
const forEachArray = [1, 3, 5, 7];
forEachArray.forEach((ele) => {
    console.log(ele); 
});

// map ---> returns a modified array by making a copy
const evenArray = forEachArray.map((ele) => {
    return ele + 1;
});
console.log(evenArray); // array of even

// filter ---> returns a new array of elements satidfying the condition
const numbersArray = forEachArray.concat(evenArray);
const oddArray = numbersArray.filter((ele) => {
    return ele % 2 !== 0;
});
console.log(oddArray); // array of odd

// find ---> returns the value the value
const divisibleBy5 = oddArray.find((ele) => {
    return ele % 5 === 0;
});
console.log(divisibleBy5); // divisible by 5

// sort
const unsortedArray = [3, 1, 2, 0];
unsortedArray.sort((a, b) => {
    return a - b; // ascending
    // return b - a; descending
});
console.log(unsortedArray);
