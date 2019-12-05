// // INPUT

// // OUTPUT
// - 1 string

// // RULES

// // TEST CASES

// // QUESTIONS

// // ALGORITHM
// define lower limit
// define upper limit
// use Math.random() * 120
// - generate random number between 20 and 120 inclusive
// - interpolate string and log it to the console

// ###############################################

function randomBetween(...args) {
  let [min, max] = args.sort((a, b) => a - b);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let age = randomBetween(120, 20);
console.log(`Teddy is ${age} years old!`);
