// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3], [8, 9, 4], [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4], [12, 13, 14, 5], [11, 16, 15, 6], [10,  9,  8, 7]]

//given pseudo-code
/* Create an empty array of arrays called 'results'
create a counter variable, starting at 1
as long as (start column <= end column ) AND (start row <= end row)
  loop from start column to end column
    at results[start_row][i] assign counter variable
    increment counter
  increment start row
  loop from start row to end row
    at results[i][end_column] assign counter variable
    increment counter
  decrement end row
  ...repeat for two other sides
  */

function matrix(n) {
  const results = [];

  for (let i = 0; i < n; i++) {
    results.push([]);
  }
  
  let counter = 1;

  let s_c = 0;
  let e_c = n - 1;
  let s_r = 0;
  let e_r = n - 1;

  while (s_c <= e_c && s_r <= e_r) {
    for (let i = s_c; i <= e_c; i++) {
      results[s_r][i] = counter;
      counter++;
    }

    s_r++;

    for (let i = s_r; i <= e_r; i++) {
      results[i][e_c] = counter;
      counter++;
    }

    e_c--;

    for (let i = e_c; i >= s_c; i--) {
      results[e_r][i] = counter;
      counter++
    }

    e_r--;

    for (let i = e_r; i >= s_r; i--) {
      results[i][s_c] = counter;
      counter++;
    }

    s_c++;
  }
  return results;
  
}

module.exports = matrix;
