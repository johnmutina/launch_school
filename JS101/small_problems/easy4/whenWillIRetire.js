// // INPUT
// - 2 x input from user

// // OUTPUT
// - 2 x string output

// // RULES
// - calculate retirement year
// - calculate years to retirement year

// // TEST CASES
// age: 30
// retirementAge: 70

// retire in 2057
// 40 years to go

// QUESTIONS

// ALGORITHM
// - get user age
// - get user retirementAge
// - calculate year: curYear + (retirementAge - age)
// - calculate yearsToGo: (retirementAge - age)

// ###############################################

let rlSync = require('readline-sync');
const CURRENT_YEAR = new Date().getFullYear();
let age = parseInt(rlSync.question('What is your age? '));
let retirementAge = parseInt(
  rlSync.question('At what age would you like to retire? ')
);

console.log(
  `It's ${CURRENT_YEAR}. You will retire in ${CURRENT_YEAR +
    (retirementAge - age)}.`
);
console.log(`You have only ${retirementAge - age} years of work to go!`);
