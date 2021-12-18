// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

//given an array of numbers called 'unchunked', and a chunk size
// iterate over 'unchunked'
  // for each element in unchunked
    // retrieve last element in the chunked array
      // if that last element doesn't exist, or if that element's length equal to chunk size
        // push a new chunk into chunked and the current element into the array
      // else add the current element in to chunk

//Psuedo-code
// Given an array and an integer n,
// returrn another array with "chunks" consisting f n elements in each chunk, starting from the first element

// My Solution - iterative approach;
// function chunk(array, size) {
//   const chunked = [];
  

//   array.forEach(elem => {
//     const lastElement = chunked[chunked.length - 1];
//     if (!lastElement || lastElement.length === size) {
//       chunked.push([elem]);
//     } else {
//       lastElement.push(elem);
//     }
//   })
//   return chunked;
// }

//My Solution 2;slice method;
//pseudo code
  // create empty 'chunked' array
  //create 'index' start at 0
  // while index is less than array .length
    // push a slice from index to index + size into chunked
    // increment index by size

  // function chunk(array, size) {
  //   const chunked = [];
  //   let i = 0;
  //   while (i < array.length) {
  //     const slice = array.slice(i, i + size);
  //     chunked.push(slice);
  //     i += size;
  //   }

  //   return chunked;
  // }


// Given solutions
// Create empty array to holsl chunks called 'chunked'
//for each element in the 'unchunked' array
  // retrieve the last element in 'chunked'
  //if last element DNE< or if its length is equal to chunk size
    // push a new chunk into 'chunked' with the current element
  // Else, add the current elemtn into the chunks
// function chunk(array, size) {
//   const chunked = [];

//   for (let element of array) {
//     const last = chunked[chunked.length - 1];
    
//     if (!last || last.length === size) {
//       chunked.push([element])
//     } else {
//       last.push(element)
//     }
//   }

//   return chunked;
// }

// Solution 2
//pseudo code
  // create empty 'chunked' array
  //create 'index' start at 0
  // while index is less than array .length
    // push a slice from index to index + size into chunked
    // increment index by size

  function chunk(array, size) {
    const chunked = [];
    let i = 0;
    while (i < array.length) {
      const slice = array.slice(i, i + size);
      chunked.push(slice);
      i += size;
    }

    return chunked;
  }

module.exports = chunk;
