/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  // hash map O(n) solution

  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  if(str1.length !== str2.length) {
    return false;
  }

  const hashMap = new Map();

  for(let i = 0; i < str1.length; i++) {

    const map = hashMap.get(str1[i]);
    
    if(map) {
      hashMap.set(str1[i], map + 1);
    }
    else {
      hashMap.set(str1[i], 1);
    } 

  }

  for(let j = 0; j < str2.length; j++) {

    const map = hashMap.get(str2[j]);
    
    if(map) {
      hashMap.set(str2[j], map - 1);
    }  
    else {
      return false;
    }

  }

  return true;

}

module.exports = isAnagram;
