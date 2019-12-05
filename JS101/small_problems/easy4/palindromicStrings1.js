// // INPUT
// - 1 string

// // OUTPUT
// - 1 boolean

// // RULES
// - returns true if string is palindrome
// - case matters

// // TEST CASES
// isPalindrome('madam');               // true
// isPalindrome('Madam');               // false (case matters)
// isPalindrome("madam i'm adam");      // false (all characters matter)
// isPalindrome('356653');              // true

// // QUESTIONS

// // ALGORITHM
// - check if string reversed is equal to string

// ###############################################

function isPalindrome(string) {
  return (
    string ===
    string
      .split('')
      .reverse()
      .join('')
  );
}

console.log(isPalindrome('madam')); // true
console.log(isPalindrome('Madam')); // false (case matters)
console.log(isPalindrome("madam i'm adam")); // false (all characters matter)
console.log(isPalindrome('356653')); // true
