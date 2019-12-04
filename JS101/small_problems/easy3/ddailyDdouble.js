// // INPUT
// - 1 string

// // OUTPUT
// - 1 string

// // RULES
// - if characters are consecutive, return only one

// // TEST CASES
// crunch('ddaaiillyy ddoouubbllee'); // "daily double"
// crunch('4444abcabccba'); // "4abcabcba"
// crunch('ggggggggggggggg'); // "g"
// crunch('a'); // "a"
// crunch(''); // ""

// QUESTIONS

// ALGORITHM
// - split string into array of characters
// - initialize empty result array
// - if current char === last char in the array
//   - continue
// - else
//   - add it to the result array
// - return the result array

// ###############################################

function crunch(string) {
  let stringArr = string.split('');
  let result = [];

  for (let i = 0; i < stringArr.length; i++) {
    if (stringArr[i] !== stringArr[i - 1]) {
      result.push(stringArr[i]);
    } else {
      continue;
    }
  }
  return result.join('');
}

console.log(crunch('ddaaiillyy ddoouubbllee')); // "daily double"
console.log(crunch('4444abcabccba')); // "4abcabcba"
console.log(crunch('ggggggggggggggg')); // "g"
console.log(crunch('a')); // "a"
console.log(crunch('')); // ""
