let rlSync = require('readline-sync');

function multiply(num1, num2) {
  return num1 * num2;
}

function transformNum(input) {
  return Number(rlSync.question(input));
}

let num1 = transformNum('Enter the first number: ');
let num2 = transformNum('Enter the second number: ');

console.log(`${num1} * ${num2} = ${multiply(num1, num2)}`);