// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

//given a number n , count from 1 to n and console .log...
  // if a number is a multiple of 3, log "fizz" instead of the number
  // if a number is a multiple of 5, log "buzz" instead of the number
  //if a number is a multiple of both 3 and 5, log 'fizzbuzz' instead of the number.

  //modulo operator
    //calculates the remainer if two values are divided by each other
    // 9 % 3 returns 0
    // 10 % 3 returns 1
    // 11 % 3 returns 2

    //if a number is a multiple of 3 or 5, it should have a remainder 0

    // for each number, dynamically enter theat number as the first value and use the modulo operator.

    //use modulo operator for each number and for each of 3 and 5.  
    // have three if conditionals
      //if first number has remainder 0, log fizz
      // if second variable has remainder 0, log buzz
      // if both variables are 0 log fizzbuzz

function fizzBuzz(n) {
  const numberLine = Array.from(Array(n), (e,i)=>i+1);
  numberLine.forEach(number => {
    const nModulo3 = number % 3;
    const nModulo5 = number % 5;
    if (nModulo3 === 0 && nModulo5 === 0) {
      console.log('fizzbuzz')
    } else if (nModulo3 === 0) {
      console.log('fizz');
    } else if (nModulo5 === 0) {
      console.log('buzz');
    } else {
      console.log(number)
    }
  })
}

//Other solutions
// function fizzBuzz(n) {
//   for (i = 1; i <= n; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log('fizzbuzz');
//     } else if (i % 3 === 0) {
//       console.log('fizz');
//     } else if (i % 5 === 0) {
//       console.log('buzz');
//     } else {
//       console.log(i);
//     }
//   }
// }

module.exports = fizzBuzz;
