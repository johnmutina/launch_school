let rlSync = require('readline-sync');

function times(number1, number2) {
  let result = number1 * number2;
  console.log(result);
  return result;
}

let value = 1;
let number = rlSync.question("What is the factorial?\n")

for (let i = 1; i <= number; i++) {
  value = times(value, i)
}

