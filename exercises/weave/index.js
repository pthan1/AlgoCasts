// --- Directions
// 1) Complete the task in weave/queue.js
// 2) Implement the 'weave' function.  Weave
// receives two queues as arguments and combines the
// contents of each into a new, third queue.
// The third queue should contain the *alterating* content
// of the two queues.  The function should handle
// queues of different lengths without inserting
// 'undefined' into the new one.
// *Do not* access the array inside of any queue, only
// use the 'add', 'remove', and 'peek' functions.
// --- Example
//    const queueOne = new Queue();
//    queueOne.add(1);
//    queueOne.add(2);
//    const queueTwo = new Queue();
//    queueTwo.add('Hi');
//    queueTwo.add('There');
//    const q = weave(queueOne, queueTwo);
//    q.remove() // 1
//    q.remove() // 'Hi'
//    q.remove() // 2
//    q.remove() // 'There'

const Queue = require('./queue');

//each queue has 3 methods;
  // add: unshifts a new records
  //remove: removes last element from qeue, returns it
  //peek: return last element from queue, doesn't remove it


//psuedo-code
//input: two queues
//output: a weaved queue

// while both queue.data's have a length,

  // peek at sourceOne,check if it's undefined
    // if not, add it to result queue,
    //if undefined, do nothing
  //peek at source two, check if it's undefined
    //if not, add it to result queue

//return result queue

function weave(sourceOne, sourceTwo) {
  const resultQueue = new Queue();

  while (sourceOne.peek() || sourceTwo.peek()) {
    if (sourceOne.peek()) {
      resultQueue.add(sourceOne.remove());
      
    }

    if (sourceTwo.peek()) {
      resultQueue.add(sourceTwo.remove());
      
    }
  }

  return resultQueue;
}

module.exports = weave;
