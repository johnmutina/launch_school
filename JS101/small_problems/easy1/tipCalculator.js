// INPUT
// - 2 numbers

// OUTPUT
// - string with numbers logged to the console

// RULES
// - result should be formatted with 2 decimal places

// TEST CASES
// What is the bill ? 200
// What is the tip percentage ? 15

// The tip is $30.00
// The total is $230.00

// QUESTIONS

// ALGORITHM
// - get bill total from user
// - get tip percentage from user
// - calculate tip amount
// - calculate bill + tip

// ###############################################

let rlSync = require('readline-sync');

let billAmount = parseFloat(rlSync.question('What is the bill?\n'));

let tipPercentage = parseFloat(
  rlSync.question('What is the tip percentage?\n')
);

let tipAmount = (billAmount / 100) * tipPercentage;

let total = billAmount + tipAmount;

console.log(`The tip is $${tipAmount.toFixed(2)}.`);
console.log(`The total is $${total.toFixed(2)}.`);
