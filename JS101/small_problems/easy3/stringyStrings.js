// // INPUT
// - 1 number

// // OUTPUT
// - 1 string

// // RULES
// - output string alternates 1 and 0
// - always starts with 1
// - length should match the given integer

// // TEST CASES
// stringy(6);    // "101010"
// stringy(9);    // "101010101"
// stringy(4);    // "1010"
// stringy(7);    // "1010101"

// // QUESTIONS

// // ALGORITHM
// - initialize empty result string
// - with a for loop up to the argument
//  - if the iteration is even, add '1' to result string
//  - else add '0'
// - return result string

// ###############################################

function stringy(strLength) {
  let result = "";

  for (let i = 0; i < strLength; i++) {
    i % 2 === 1 ? (result += 0) : (result += 1);
  }

  return result;
}

console.log(stringy(6)); // "101010"
console.log(stringy(9)); // "101010101"
console.log(stringy(4)); // "1010"
console.log(stringy(7)); // "1010101"
console.log(stringy(0)); // ""
