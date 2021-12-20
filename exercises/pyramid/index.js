// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

const steps = require("../steps");

//Pseudo-Code
// From 0 to n (iterate through rows)
//   Create an empty string, 'level'
//   From 0 to 2n + 1 (columns)
//     IF the column === n or column === + n and -n
//       Add # to level
//     else
//       add a space to 'level'
//   Consolelog 'stair'


// function pyramid(n) {
//   const middle = Math.floor((2 * n - 1) / 2);

//   for (let i = 0; i < n; i++) {
//     let level = "";

//     for (let j = 0; j < 2 * n - 1; j++) {
//       if (middle - i <= j && middle + i >= j) {
//         level += "#";
//       } else {
//         level += " ";
//       }
//     }
//     console.log(level)
//   }
// }


//alternative solution:
//recursive
// 1 base case, if row === n
// if level string has length 2n-1 we're done with our level
//   //return function increment to row
// if midpoint - row <= level.length && midpoint +row >= level.length
//  add a # to level
//  else add a space.
//  outiside of above if statement
  // call fxn again with n and defaulut variables



function pyramid(n, row = 0, level = "") {
  const middle = Math.floor((2 * n - 1) / 2);

  if (row === n) {
    return;
  }

  if (level.length === 2 * n - 1) {
    console.log(level);
    return pyramid(n, row + 1);
  }

  if (middle - row <= level.length && middle +row >= level.length) {
    level += "#";
  } else {
    level += " ";
  }
  pyramid(n, row, level);
}

module.exports = pyramid;
