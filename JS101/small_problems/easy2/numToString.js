// // INPUT
// - 1 number

// // OUTPUT
// - 1 string
// // RULES
// - output string should represent the input number

// // TEST CASES
// integerToString(4321);      // "4321"
// integerToString(0);         // "0"
// integerToString(5000);      // "5000"
// integerToString(1234567890);      // "1234567890"

// // QUESTIONS

// // ALGORITHM
// - initialize a number variable
// - initialize an empty string
// - divide number by 10 and set the result to number
// - add the result rounded with Math.floor to the empty string

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

console.log(integerToString(4321) === '4321');
console.log(integerToString(0) === '0');
console.log(integerToString(5000) === '5000');
console.log(integerToString(1234567890) === '1234567890');
