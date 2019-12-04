// // INPUT
// - 1 array

// // OUTPUT
// - 1 array

// // RULES
// - return only items at even index

// // TEST CASES
// console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
// console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
// console.log(oddities(["abc", "def"])); // logs ['abc']
// console.log(oddities([123])); // logs [123]
// console.log(oddities([])); // logs []

// // QUESTIONS

// // ALGORITHM
// - initialize an empty array
// - loop through array
// - when index is even
//   - push element to the empty array
// - return the empty array

// ###############################################

function oddities(arr) {
  let resultArr = [];
  for (let i = 0; i < arr.length; i += 2) {
    resultArr.push(arr[i]);
  }
  return resultArr;
}

console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(['abc', 'def'])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []
