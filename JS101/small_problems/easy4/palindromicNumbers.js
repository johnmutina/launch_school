// // INPUT
// - number

// // OUTPUT
// - boolean

// // RULES

// // TEST CASES
// isPalindromicNumber(34543); // true
// isPalindromicNumber(123210); // false
// isPalindromicNumber(22); // true
// isPalindromicNumber(5); // true

// // QUESTIONS

// // ALGORITHM
// - mutate to string
// - split, reverse, join

// ###############################################

function isPalindromicNumber(num) {
  return (
    num.toString() ===
    num
      .toString()
      .split('')
      .reverse()
      .join('')
  );
}

console.log(isPalindromicNumber(34543)); // true
console.log(isPalindromicNumber(123210)); // false
console.log(isPalindromicNumber(22)); // true
console.log(isPalindromicNumber(5)); // true
