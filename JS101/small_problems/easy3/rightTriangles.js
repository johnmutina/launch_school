// // INPUT
// - 1 number

// // OUTPUT
// - input + 1 lines logged to the console

// // RULES
// - each line has an incremental number of stars and decremental number of spaces

// // TEST CASES
// triangle(5);
// triangle(9);

// // QUESTIONS

// // ALGORITHM
// - create a for loop which logs to the console
// - each iteration print num - index spaces + index stars

// ###############################################

// SOLUTION 1
function triangle(starNum) {
  for (let i = 0; i <= starNum; i++) {
    console.log(`${' '.repeat(starNum - i)}${'*'.repeat(i)}`);
  }
}

// SOLUTION 2
function triangle(starNum) {
  let iteration = 0;
  do {
    console.log(`${' '.repeat(starNum - iteration)}${'*'.repeat(iteration)}`);
    iteration += 1;
  } while (starNum >= iteration);
}

triangle(5);
triangle(9);
triangle(14);
triangle(20);
