// // INPUT
// - 1 number

// // OUTPUT
// - 1 number

// // RULES
// - output should be the square of the input

// // TEST CASES
// console.log(square(5) === 25); // logs true
// console.log(square(-8) == 64); // logs true

// // QUESTIONS

// // ALGORITHM
// - use square operator in arrow function to return the square of the number

// ###############################################

const multiply = (num1, num2) => num1 * num2;

// SOLUTION 1 using multiply function from prior exercise
// function square(num) {
//   return multiply(num, num);
// }

// SOLUTION 2
// let square = num => num ** 2;

// console.log(square(5) === 25); // logs true
// console.log(square(-8) == 64); // logs true

// SOLUTION 3 (Further Exploration)
function square(num, power) {
  result = num;
  for (let i = 1; i < power; i++) {
    result = multiply(result, num);
  }
  return result;
}

console.log(square(5, 4) === 625); // logs true
console.log(square(-8, 3) == -512); // logs true
