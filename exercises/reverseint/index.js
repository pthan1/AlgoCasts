// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9


//my solution
// function reverseInt(n) {
//   let stringified;
//   if (Math.sign(n) === 1) {
//     stringified = n.toString().split('').reverse().join('');
//     return parseInt(stringified);
//   } else if (Math.sign(n) === 0) {
//     return n;
//   } else if (Math.sign(n) === -1) {
//     let reversedArray = n.toString().split('').reverse();
//     reversedArray.pop();
//     reversedArray = parseInt(reversedArray.join(''));
//     stringified = -reversedArray;
//     return stringified;
//   }
// }


//solution #1
function reverseInt(n) {
  //reverse the number
    //take number, treat as string, split into array, reverse, and join
  const reversed = n.toString().split('').reverse().join('');

  // if (n < 0) {
  //   return parseInt(reversed) * -1;
  // }
  // return parseInt(reversed)
//OR ...

  return parseInt(reversed) * Math.sign(n);
}


module.exports = reverseInt;
