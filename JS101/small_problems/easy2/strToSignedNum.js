// // INPUT
// - 1 string

// // OUTPUT
// - 1 number

// // RULES
// - output has leading minus if negative

// // TEST CASES
// console.log(stringToSignedInteger("4321") === 4321); // logs true
// console.log(stringToSignedInteger("-570") === -570); // logs true
// console.log(stringToSignedInteger("+100") === 100); // logs true

// // QUESTIONS

// // ALGORITHM
// - check if first char in the string is + or minus
//   - if so, ignore if plus (but delete) and make negative number if minus
// - apply stringToInteger function
// - return result

// ###############################################

let stringToInteger = string => string / 1;

function stringToSignedInteger(string) {
  if (string[0] === '-') {
    return -stringToInteger(string.slice(1));
  } else {
    return stringToInteger(string);
  }
}

console.log(stringToSignedInteger('4321') === 4321); // logs true
console.log(stringToSignedInteger('-570') === -570); // logs true
console.log(stringToSignedInteger('+100') === 100); // logs true
