// // INPUT
// - 2 integers

// // OUTPUT
// - addition, subtraction, multiplication, quotient, remainder, power

// // RULES

// // TEST CASES
// num1: 23
// num2: 17

// ==> 23 + 17 = 40
// ==> 23 - 17 = 6
// ==> 23 * 17 = 391
// ==> 23 / 17 = 1
// ==> 23 % 17 = 6
// ==> 23 ** 17 = 141050039560662968926103

// // QUESTIONS

// // ALGORITHM
// - get input from user and parse to integer
// - compute all calculations and console.log them

// ###############################################

let rlSync = require('readline-sync');

function prompt(str) {
  return `==> ${str}`;
}

let num1 = parseInt(rlSync.question(prompt('Enter the first number:\n')), 10);

let num2;

do {
  num2 = parseInt(rlSync.question(prompt('Enter the second number:\n')), 10);
} while (num2 === 0);

console.log(prompt(`${num1} + ${num2} = ${num1 + num2}`));
console.log(prompt(`${num1} - ${num2} = ${num1 - num2}`));
console.log(prompt(`${num1} * ${num2} = ${num1 * num2}`));
console.log(prompt(`${num1} / ${num2} = ${(num1 / num2).toFixed()}`));
console.log(prompt(`${num1} % ${num2} = ${num1 % num2}`));
console.log(prompt(`${num1} ** ${num2} = ${Math.pow(num1, num2)}`));
