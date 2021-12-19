// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

//psuedo code
// given an integer n
// i need to return 1 to n number of console logs.
//  each console log has n number of characters
  //each console.log has x number of #'s depending 
  // have a for loop from 1 to n
  //My Solution
//   function steps(n) {

//   for (let i = 1; i <= n; i++) {
//     const numberOfHashes = "#".repeat(i);
//     const numberOfSpaces = " ".repeat(n - i);
//     console.log(numberOfHashes + numberOfSpaces);
//     }

// }


//Solution 1: iterative solution
//From 0 to n (iterate through rows)
// create an empty string 'stair'
// from 0 to n
  //if the current column is equal to or less than the current row
    // add a # to stair
  //else
    //add a space to stair
//console.log stair
//iterative solution
// function steps(n) {
//   for (let row = 0; row < n; row++) {
//     let stair = '';

//     for (let column = 0; column < n; column++) {
//       if (column <= row) {
//         stair += '#';
//       } else {
//         stair += ' ';
//       }
//     }
//   }
// }


//recursive approach
// if (row === n) then we haev hit the end of our problem
//if the 'stair' string has a length === n then we are at the end of the row
// if the length of the stair string is less than or equal to the row number we're working on, we add a '#', otherwise add a space

function steps(n, row = 0, stair = "") {
  if (row === n) {
    return;
  }
  if (stair.length === n) {
    console.log(stair);
    return steps(n, row + 1);
  }

  if (stair.length <= row) {
    stair += "#";
  } else {
    stair += " ";
  }
  steps(n, row, stair)


}

// always start with a function
// 1. identify a base case,defines condition when there's no work to do
//2. after identifying the base case, do some amount of work, then call the fxn again
//for printNumber, you want to console log the number n
// then you want to call the fxn again, but you want to change the arguments, you want to make the change that you're making to somehow eventually reach teh base case

// Tips:
// figure out the bare minimum pieces of info to represent your problem
// give reasonable defaults to bare minimum pieces of info
// check the base case.  is there any work left to do?  If Notification, return.
// Do some work.  Call your function again, making sure the arguments have changed in some fashion.

// function printNumber(n) {
//   if (n === 0) {
//     return;
//   }

//   console.log(n);
//   printNumber(n - 1);
// }

// printNumber(10)

module.exports = steps;
