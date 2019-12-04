// // INPUT
// - 1 number

// // OUTPUT
// - 1 number

// // RULES
// - input represents the number of digits of the fibonacci number
// - output represents the index at which the first number with that precise number of digits appears

// // TEST CASES
// findFibonacciIndexByLength(2);       // 7
// findFibonacciIndexByLength(10);      // 45
// findFibonacciIndexByLength(16);      // 74

// // QUESTIONS

// // ALGORITHM
// - set variable firstNum to 1
// - set variable secondNum to 1
// - set variable fibonacci to 1
// - set iteration to 1
// - create a loop which does
//   - sets fibonacci = firstNum + secondNum
//   - sets secondNum = firstNum
//   - sets firstNum = fibonacci
// - while fibonacci transformed into string is long as the argument

// ###############################################

function findFibonacciIndexByLength(targetLength) {
  let firstNum = 1;
  let secondNum = 1;
  let fibonacci;
  let iteration = 2;

  do {
    fibonacci = firstNum + secondNum;
    secondNum = firstNum;
    firstNum = fibonacci;
    iteration++;
  } while (String(fibonacci).length < targetLength);

  return iteration;
}

console.log(findFibonacciIndexByLength(2)); // 7
console.log(findFibonacciIndexByLength(10)); // 45
console.log(findFibonacciIndexByLength(16)); // 74
