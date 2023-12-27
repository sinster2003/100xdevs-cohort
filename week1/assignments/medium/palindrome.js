/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {

  // removing whitespaces and punctuations
  str = str.toLowerCase().replace(/[\W_]/g, "");
    
  // string reverse
  const reversedString = str.split("").reverse().join("");

  return str === reversedString;
}

module.exports = isPalindrome;
