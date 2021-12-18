// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'
// word[0].toUpperCase();

//pseudo code
// split string by " "
//iterate through each element
// for each element int he strong

  //const firstLetter = grab first letter by its index location
  // upperCase it
  //slice ther rest of the string,
  // concaet them toghether,

  //join the entire Array, separate each characte by a space


// function capitalize(str) {
//   const capitalizedString = [];
//   const splitString = str.split(" ");

//   for (let word of splitString) {
//     const firstLetter = word[0].toUpperCase();
//     const restOfLetter = word.slice(1);
//     capitalizedString.push(firstLetter + restOfLetter);
//   }

//   return capitalizedString.join(" ");
// }

// Alternate possible solution
// Create 'result' which is the first character of the input string capitlized
//for each character in the string
// check if it has an empty space next to it
  //if so, then capitized the letter and add it to the result string
  //else just add it to the string.  

function capitalize(str) {
  let result = str[0].toUpperCase();

  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] == ' ') {
      result = result + str[i].toUpperCase();
    } else {
      result = result + str[i];
    }
  }
  return result;
}

module.exports = capitalize;
