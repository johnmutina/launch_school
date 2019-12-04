// // INPUT
// - 1 signed number

// // OUTPUT
// - 1 string

// // RULES
// - the output contains the number with its sign
//   - 0 has no sign

// // TEST CASES
// console.log(signedIntegerToString(4321) === "+4321");
// console.log(signedIntegerToString(-123) === "-123");
// console.log(signedIntegerToString(0) === "0");

// // QUESTIONS

// // ALGORITHM
// - return '0' if input is 0
// - use Math.sign() to check if number is positive or negative
// - if positive, call signedIntegerToString and place a + in front of it
// - if negative, same as above but with a minus

// ###############################################

function integerToString(number) {
  if (number === 0) return '0';

  let num = number;
  let result = [];

  while (num > 0) {
    result.unshift(num % 10);
    num = Math.floor(num / 10);
  }

  return result.join('');
}

function signedIntegerToString(num) {
  if (num === 0) return '0';
  return Math.sign(num) === 1
    ? '+' + integerToString(num)
    : '-' + integerToString(-num);
}

console.log(signedIntegerToString(4321) === '+4321');
console.log(signedIntegerToString(-123) === '-123');
console.log(signedIntegerToString(0) === '0');
