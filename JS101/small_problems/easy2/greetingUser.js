// // INPUT
// - user input (1 string)

// // OUTPUT
// - 1 string

// // RULES
// - if input contains a bang, the output string is in all caps

// // TEST CASES
// Bob => Hello Bob.
// Bob! => HELLO BOB. WHY ARE WE SCREAMING?

// // QUESTIONS
// - do I need to validate input?
// - can the bang be in a different position?

// // ALGORITHM
// - get user input, trim it, and store it in a variable
// - if at index length - 1 there is a bang
//   - return uppercased sentence
// - else
//   - return normal sentence

// ###############################################

let rlSync = require("readline-sync");
let name = rlSync.question("What is your name? ").trim();

if (name[name.length - 1] === "!") {
  console.log(
    `HELLO ${name
      .substring(0, name.length - 1)
      .toUpperCase()}. WHY ARE WE SCREAMING?`
  );
} else {
  console.log(`Hello ${name}`);
}
