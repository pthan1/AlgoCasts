// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"
function maxChar(str) {
   const reduced = str.split('').reduce((acc, char) => {
    if (!acc[char]) {
      acc[char] = 1;
    }
    acc[char] += 1;
    return acc;
  }, {})
  let max = 0;
  let char = '';
  
  for (let char in reduced) {
      if (reduced[char] > max) {
          max = reduced[char];
          char = char;
        console.log(max, char)
      }
  return char;
  }
}

module.exports = maxChar;
