// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

//my solution
// function reverse(str) {
//   const stringLength = str.length;
//   const splitString = str.split("");
//   let reversedString = [];
//   for (let i = stringLength - 1 ; i >= 0 ; i--) {
//     reversedString.push(splitString[i]);
//   }
//   reversedString = reversedString.join('');
//   return reversedString;
// }

//solution #1
  //turn 'str' into an array
  //call 'reverse' method on the array
  //join the array back into a string
  //return the result

// function reverse(str) {
//   const splitString = str.split("");
//   const reversedString = splitString.reverse().join('');
//   return reversedString;

//or str.split('').reverse().join('');
// }

//solution#2
  function reverse(str) {
    // Create an empty array called 'reversed'
    //for each character in the provided string
      //Take the character and add it to the start of 'reversed'
    //Return the variable 'reversed'\
    let reversed = '';
    for (let character of str) {
      reversed = character + reversed;
    }
    return reversed;
  }

  // function reverse(str) {
  //   // good to let know interviewer know that you know how to use an advanced array helper
  //   //turn str into an array
  //   // use reduce helper
  //   return str.split('').reduce((reversed, character) => {
  //     return character + reversed;
  //   }, "");
  // }

module.exports = reverse;
