// // INPUT
// - 1 string

// // OUTPUT
// - 1 number

// // RULES
// - sum of the ASCII values of every character in the string

// // TEST CASES
// asciiValue('Four score');         // 984
// asciiValue('Launch School');      // 1251
// asciiValue('a');                  // 97
// asciiValue('');                   // 0

// QUESTIONS

// ALGORITHM
// - initialize an accumulator
// - split the string into characters
// - for each character
//   - calculate the ASCII value
//   - add it to the accumulator
// - return the accumulator

// ###############################################

function asciiValue(string) {
  let accumulator = 0;
  string.split('').forEach(char => (accumulator += char.charCodeAt()));
  return accumulator;
}

console.log(asciiValue('Four score')); // 984
console.log(asciiValue('Launch School')); // 1251
console.log(asciiValue('a')); // 97
console.log(asciiValue('')); // 0
