// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// Solution #2
function palindrome(str) {
  return str.split('').every((char, i) => {
    //return a comparison of the element and the mirrored element on the other side of the array
    return char === str[str.length - i - 1]
  })
};


// Solution #1
// function palindrome(str) {
//   const reversed = str.split('').reverse().join('');
//   return str === reversed;
// }

//My Answer:
// function palindrome(str) {
//   const reversed = str.split('').reverse().join('');
//   if (str === reversed) {
//     return true;
//   } 
//   return false;
// }

module.exports = palindrome;
