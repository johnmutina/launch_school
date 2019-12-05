// // INPUT
// - 1 number

// // OUTPUT
// - 1 number

// // RULES
// - if double number
//   - return as is
// - else
//   - return number * 2

// // TEST CASES
// twice(37);          // 74
// twice(44);          // 44
// twice(334433);      // 668866
// twice(444);         // 888
// twice(107);         // 214
// twice(103103);      // 103103
// twice(3333);        // 3333
// twice(7676);        // 7676

// QUESTIONS

// ALGORITHM
// - turn number into string
// - find center
// - find first and secondHalf and compare them
// - if they are the same
//   - return number
// - else
//   - return number * 2

// ###############################################

function twice(number) {
  let curNumArr = number.toString();
  let center = curNumArr.length / 2;
  let firstHalf = curNumArr.slice(0, center);
  let secondHalf = curNumArr.slice(center);

  if (firstHalf === secondHalf) {
    return number;
  } else {
    return number * 2;
  }
}

console.log(twice(37) === 74); // 74
console.log(twice(44) === 44); // 44
console.log(twice(334433) === 668866); // 668866
console.log(twice(444) === 888); // 888
console.log(twice(107) === 214); // 214
console.log(twice(103103) === 103103); // 103103
console.log(twice(3333) === 3333); // 3333
console.log(twice(7676) === 7676); // 7676
