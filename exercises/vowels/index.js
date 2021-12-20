// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

//My solution
// pseudocode
//have a counter start at 0
//iterate through String
//if character is a e i or u , increment counter
// return counter

function vowels(str) {
  let counter = 0;
  const lowercase = str.toLowerCase();
  for (let char of lowercase) {
    if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
      counter++;
    }
  }

  return counter;
}


// alternate solution 1
// function vowels(str) {
//   let counter = 0;
//   const checker = 'aeiou' // or checker = ['a', 'e', 'i', 'o', 'u']
//   for (let char of str.toLowerCase()) {
//     if (checker.includes(char)) {
//       counter++;
//     }
//   }

//   return counter;
// }

// alternative solution 2: regex solution
// function vowels(str) {
//   const matches = str.match(/[aeiou]/gi);
//   return matches ? matches.length : 0;
// }

module.exports = vowels;
