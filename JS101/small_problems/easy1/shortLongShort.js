// INPUT
// - 2 strings

// OUTPUT
// - string

// RULES
// - returns shorter string + longer string + shorter string

// TEST CASES
// shortLongShort('abc', 'defgh');    // "abcdefghabc"
// shortLongShort('abcde', 'fgh');    // "fghabcdefgh"
// shortLongShort('', 'xyz');         // "xyz"

// QUESTIONS

// ALGORITHM
// - determines which string is shorter
// - concatenate short + long + short
// - returns the concatenated string

// ###############################################

function shortLongShort(str1, str2) {
  return str1.length < str2.length ? str1 + str2 + str1 : str2 + str1 + str2;
}

console.log(shortLongShort('abc', 'defgh')); // "abcdefghabc"
console.log(shortLongShort('abcde', 'fgh')); // "fghabcdefgh"
console.log(shortLongShort('', 'xyz')); // "xyz"
