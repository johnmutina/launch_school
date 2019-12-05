// // INPUT
// - 4 user inputs

// // OUTPUT
// - 3 strings logged to console

// // RULES

// // TEST CASES
// Enter a noun: dog
// Enter a verb: walk
// Enter an adjective: blue
// Enter an adverb: quickly

// // console output
// Do you walk your blue dog quickly? That's hilarious!
// The blue dog walks quickly over the lazy dog.
// The dog quickly walks up blue Joe's turtle.

// QUESTIONS

// ALGORITHM
// - get four inputs from the user and store them in a variable
// - log to the console 3 output strings using template literals and interpolating the input from the user.

// ###############################################

let rlSync = require('readline-sync');

let noun = rlSync.question('Enter a noun: ');
let verb = rlSync.question('Enter a verb: ');
let adjective = rlSync.question('Enter an adjective: ');
let adverb = rlSync.question('Enter an adverb: ');

let sentence1 = `Do you ${verb} your ${adjective} ${noun} ${adverb}? That's hilarious!`;
let sentence2 = `The ${adjective} ${noun} ${verb}s ${adverb} over the lazy dog.`;
let sentence3 = `The ${noun} ${adverb} ${verb}s up ${adjective} Joe's turtle.`;

console.log(' ');
console.log(sentence1);
console.log(sentence2);
console.log(sentence3);
