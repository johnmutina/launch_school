// // INPUT
// - 1 array of numbers

// // OUTPUT
// - 1 array of numbers

// // RULES
// - output array contains running total of original array

// // TEST CASES
// runningTotal([2, 5, 13]);             // [2, 7, 20]
// runningTotal([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
// runningTotal([3]);                    // [3]
// runningTotal([]);                     // []

// // QUESTIONS

// // ALGORITHM
// - initialize empty array to store result
// - iterate over the array
//   - calculate sum of current item with last item of result array
//   - push sum to the result array
// - return sum

// ###############################################

// SOLUTION 1
function runningTotal(array) {
  let result = [];

  array.forEach(el => {
    result.length > 0
      ? result.push(el + result[result.length - 1])
      : result.push(el);
  });

  return result;
}

console.log(runningTotal([2, 5, 13])); // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20])); // [14, 25, 32, 47, 67]
console.log(runningTotal([3])); // [3]
console.log(runningTotal([])); // []
