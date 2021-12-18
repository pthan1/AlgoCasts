// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// to remove spaces and punctuation marks
// use: string.replace(/[^\w]/g, "").toLowerCase();



function anagrams(stringA, stringB) {
  const parsedA = stringA.replace(/[^\w]/g, "").toLowerCase();
  const parsedB = stringB.replace(/[^\w]/g, "").toLowerCase();
  if (parsedA.length !== parsedB.length) {
    return false;
  }

  const mapA = {};
  const mapB = {};

  for (let letter of parsedA) {
    if (!mapA[letter]) {
      mapA[letter] = 1;
    } else {
      mapA[letter] = mapA[letter] + 1;
    }
  }
  console.log('mapA', mapA)
  for (let letterB of parsedB) {
    if (!mapB[letterB]) {
      mapB[letterB] = 1;
    } else {
      mapB[letterB] = mapB[letterB] + 1
    }
  }
console.log('mapB', mapB)
//not sure how to compare character maps...
  for (let i in mapA) {
    if (mapA[i] !== mapB[i]) {
      console.log('fizz')
      console.log(mapA[i], mapB[i])
      return false;
    } 
  }
  return true;
}


//Solution
//write helper function to write character maps for us
  //interviewers like you to make helper functions. also lets you modularize code

  // function anagrams(stringA, stringB) {
  //   const mapA = buildCharMap(stringA);
  //   const mapB = buildCharMap(stringB);

  // }

  // function buildCharMap(str) {
  //   const charMap = {};

  //   for (let char of str.replace(/[^\w]/g, "").toLowerCase()) {
  //     charMap[char] = charMap[char] + 1 || 1;
  //   }

  //   return charMap;
  // }


  //solution #2; easier to make a char map on the fly

  // function anagrams(stringA, stringB) {
  //   return cleanString(stringA) === cleanString(stringB);
  // }

  // function cleanString(str) {
  //   return str.replace(/[^\w]/g, "").toLowerCase().split('').sort().join();
  // }
module.exports = anagrams;
