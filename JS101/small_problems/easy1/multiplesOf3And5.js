// INPUT
// - 1 number

// OUTPUT
// - 1 number

// RULES
// - sum of the multiples of 3 OR 5 up to the input number

// TEST CASES
// multisum(3);       // 3
// multisum(5);       // 8
// multisum(10);      // 33
// multisum(1000);    // 234168

// QUESTIONS

// ALGORITHM
// - initialize an accumulator set to 0
// - loop through all the numbers from 1 up to argument
// - if division by 3 || division by 5 have remainder 0
//   - add the number to the accumulator
// - return the number

// ###############################################

function isMultiple(number, divisor) {
  return number % divisor === 0;
}

function multisum(upperLimit) {
  let accumulator = 0;
  for (let num = 1; num <= upperLimit; num++) {
    if (isMultiple(num, 3) || isMultiple(num, 5)) {
      accumulator += num;
    }
  }
  return accumulator;
}

console.log(multisum(3)); // 3
console.log(multisum(5)); // 8
console.log(multisum(10)); // 33
console.log(multisum(1000)); // 234168
