// // INPUT
// - 2 values of any type

// // OUTPUT
// - boolean

// // RULES
// - return true only if ONE argument is true

// // TEST CASES
// console.log(xor(5, 0) === true);
// console.log(xor(false, true) === true);
// console.log(xor(1, 1) === false);
// console.log(xor(true, true) === false);

// // QUESTIONS

// // ALGORITHM
// - initialize a counter to 0;
// - if val1 is true, increment;
// - if val2 is true, increment;
// - if counter is 1, return true;
//   - else return false;

// ###############################################

// SOLUTION 1
function xor(val1, val2) {
  let counter = 0;
  if (val1) counter++;
  if (val2) counter++;
  if (counter === 1) return true;
  return false;
}

// SOLUTION 2
let xor = (val1, val2) => (val1 && !val2) || (val2 && !val1);

console.log(xor(5, 0) === true);
console.log(xor(false, true) === true);
console.log(xor(1, 1) === false);
console.log(xor(true, true) === false);
