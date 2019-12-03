// INPUT
// - upper limit

// OUTPUT
// - log to the console all odd numbers between 1 and upper limit

// RULES
// - upper limit should be positive and higher than 1

// TEST CASES

// QUESTIONS

// ALGORITHM
// - get the upper limit from user
// - build a for loop using upper limit as highest number
// - start from 2 and increment the index by 2 each loop

// ###############################################

let rlSync = require('readline-sync');
let upperLimit = rlSync.question('What should the upper limit be?\n');

for (let num = 2; num <= upperLimit; num += 2) {
  console.log(num);
}
