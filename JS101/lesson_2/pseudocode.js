// a function that returns the sum of two numbers

// INFORMAL PSEUDOCODE
// - define a function which accepts two parameters
// - return the sum of parameter1 and parameter2

// FORMAL PSEUDOCODE
// - CREATE function sumNumbers which accepts two parameters
//   - SET result = parameter1 + parameter2
//   - RETURN result
// - END

// -----------------------------

// a function that takes an array of strings,
// and returns a string that is all those strings concatenated together

// INFORMAL PSEUDOCODE
// - define a function which accepts one parameter
// - join each element of the array together
// - return the result

// FORMAL PSEUDOCODE
// - CREATE function concatenateStrings which accepts one parameter
//   - SET concatenatedString = elements of the array joined
//   - RETURN concatenatedString
// - END

// -----------------------------

// a function that takes an array of integers,
// and returns a new array with every other element

// INFORMAL PSEUDOCODE
// - define a function which accepts one parameter
//   - initialize an empty array to store the result
//   - iterate through the array
//   - if index of the iteration is even
//     - push element into the result array
//   - else
//     - skip number
//   - return the result array

// FORMAL PSEUDOCODE
// - CREATE function oddElements which accepts one parameter
//   - SET result = empty array
//   - LOOP over parameter
//     - IF index = ODD
//       - PUSH element[index] to result
//     - ELSE
//       - CONTINUE
//   - RETURN result
// - END

function oddElement(arr) {
  let result = [];
  arr.forEach((el, idx) => {
    if (idx % 2 !== 0) result.push(el);
  });
  return result;
}

console.log(oddElement([3, 2, 5, 1, 8, 3]));
