// INPUT
// - 1 integer
//   - positive
//   - negative
//   - zero

// OUTPUT
// - boolean

// RULES
// - if number absolute value is odd, return true

// TEST CASES
// console.log(isOdd(2)); // => false
// console.log(isOdd(5)); // => true
// console.log(isOdd(-17)); // => true
// console.log(isOdd(-8)); // => false
// console.log(isOdd(0)); // => false
// console.log(isOdd(7)); // => true

// QUESTIONS

// ALGORITHM
// - consider only absolute value of number
// - if remainder of division by 2 equals 1
//   - return true

// #############################################

function isOdd(num) {
  return Math.abs(num) % 2 === 1;
}

console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true
