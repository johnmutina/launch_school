// INPUT
// - integer from user
// - string from user

// OUTPUT
// - string with number

// RULES
// - based on the operation the user inputs, calculate sum or product of all numbers up to the number the user inputs.

// TEST CASES
// - 5
// - s (for sum)
// - sum: 15

// - 6
// - p (for product)
// - product: 720

// QUESTIONS

// ALGORITHM

// ###############################################

// let rlSync = require('readline-sync');
// let operation;

// let number = parseInt(
//   rlSync.question('Please enter an integer greater than 0: ')
// );

// do {
//   operation = rlSync.question(
//     'Enter "s" to compute the sum, or "p" to compute the product.\n'
//   );
// } while (operation !== 's' && operation !== 'p');

// let total = 1;

// for (num = 2; num <= number; num++) {
//   if (operation === 's') {
//     total += num;
//   } else {
//     total *= num;
//   }
// }

// console.log(
//   `The ${
//     operation === 's' ? 'sum' : 'product'
//   } of the integers between 1 and ${number} is ${total}`
// );

// ### SOLUTION 2

// Input is an array of number
// [2, 4, 8, 5]

let rlSync = require('readline-sync');
let operation;

let inputNumbers = rlSync
  .question('Please enter some integers separated by a comma: ')
  .split(',')
  .map(num => parseInt(num));

do {
  operation = rlSync.question(
    'Enter "s" to compute the sum, or "p" to compute the product.\n'
  );
} while (operation !== 's' && operation !== 'p');

let total = inputNumbers.reduce((a, b) => {
  if (operation === 's') {
    return a + b;
  } else {
    return a * b;
  }
});

console.log(
  `The ${
    operation === 's' ? 'sum' : 'product'
  } of the integers in the input array (${inputNumbers}) is ${total}`
);
