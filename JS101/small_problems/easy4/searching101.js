// // INPUT
// - 6 numbers from the user

// // OUTPUT
// - 1 string

// // RULES
// - if last entered number appears in the first 5, return true

// // TEST CASES
// 25, 15, 20, 17, 23, 17 => yes
// 25, 15, 20, 17, 23, 18 => no

// // QUESTIONS

// // ALGORITHM
// - do ask input to user while array length < 5
// - ask numToCompare to user
// - if array includes numToCompare
//   - return true

// ###############################################

let rlSync = require('readline-sync');
let ordinal = ['1st', '2nd', '3rd', '4th', '5th'];
let iteration = 0;

let numbers = [];
let numToCompare;

do {
  numbers.push(
    parseInt(rlSync.question(`Enter the ${ordinal[iteration]} number: `))
  );
  iteration += 1;
} while (numbers.length < 5);

numToCompare = parseInt(rlSync.question(`Enter the last number: `));

// SOLUTION 1
if (numbers.includes(numToCompare)) {
  console.log(`The number ${numToCompare} appears in ${numbers}`);
} else {
  console.log(`The number ${numToCompare} does not appear in ${numbers}`);
}

// SOLUTION 2
if (numbers.some(el => numToCompare <= el)) {
  console.log(
    `The number ${numToCompare} is not higher than the highest number in ${numbers}`
  );
} else {
  console.log(
    `The number ${numToCompare} is higher than the highest number in ${numbers}`
  );
}
