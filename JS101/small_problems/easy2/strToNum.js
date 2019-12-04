// INPUT

// OUTPUT

// RULES

// TEST CASES

// QUESTIONS

// ALGORITHM

// ###############################################

let stringToInteger = string => string / 1;

console.log(stringToInteger('4321') === 4321); // logs true
console.log(stringToInteger('570') === 570); // logs true

// FURTHER EXPLORATION

// ALGORITHM
// - create an object with letter to number value for hexadecimal characters
// - initialize a total variable
// - split string into array of characters
// - loop through the array
//   - if element is number, multiply by 16 ** (array.length - 1) - index
//   - else
//     - calculate corresponding value and multiply by 16 ** (array.length - 1) - index

const hexadecimalConverter = {
  a: 10,
  b: 11,
  c: 12,
  d: 13,
  e: 14,
  f: 15
};

function hexadecimalToInteger(string) {
  let charArr = string.toLowerCase().split('');
  let integerVal = 0;
  for (let i = 0; i < charArr.length; i++) {
    if (stringToInteger(charArr[i])) {
      integerVal +=
        stringToInteger(charArr[i]) * 16 ** (charArr.length - 1 - i);
    } else {
      integerVal +=
        hexadecimalConverter[charArr[i]] * 16 ** (charArr.length - 1 - i);
    }
  }
  return integerVal;
}

console.log(hexadecimalToInteger('4D9f') === 19871);
console.log(hexadecimalToInteger('E7A9') === 59305);
