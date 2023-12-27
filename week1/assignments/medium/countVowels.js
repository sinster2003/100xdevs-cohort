/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    
  const vowelSet = new Set();

  vowelSet.add('a');
  vowelSet.add('e');
  vowelSet.add('i');
  vowelSet.add('o');
  vowelSet.add('u');

  str = str.toLowerCase();

  let count = 0;

  for(let i = 0; i < str.length; i++) {
    if(vowelSet.has(str[i])) {
      count++;
    }
  }

  return count;
}

module.exports = countVowels;