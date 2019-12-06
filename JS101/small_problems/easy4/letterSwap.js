// // INPUT
// - 1 string

// // OUTPUT
// - 1 string

// // RULES
// - words have at least one letter
// - string will always contain at least one word
// - strings contain only words and space
// - no leading, trailing or repeated spaces

// // TEST CASES
// console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
// console.log(swap('Abcde'));                          // "ebcdA"
// console.log(swap('a'));                              // "a"

// // QUESTIONS

// // ALGORITHM
// - split string into array of words
// - loop through each word
//   - save first letter to a variable
//   - assign last letter to first letter
//   - assign first letter in temp variable to last letter
// - return the joined array

// ###############################################

// SOLUTION 1
// function swap(string) {
//   let stringArr = string.split(' ');
//   let result = [];

//   stringArr.forEach(word => {
//     if (word.length < 2) {
//       result.push(word);
//       return;
//     }

//     result.push(word[word.length - 1] + word.slice(1, -1) + word[0]);
//   });

//   return result.join(' ');
// }

// SOLUTION 2: Further Exploration
function swap(string) {
  return string
    .split(' ')
    .map(word => {
      if (word.length <= 1) return word;
      return word[word.length - 1] + word.slice(1, -1) + word[0];
    })
    .join(' ');
}

console.log(
  swap('Oh what a wonderful day it is') === 'hO thaw a londerfuw yad ti si'
);
console.log(swap('Abcde') === 'ebcdA');
console.log(swap('a') === 'a');
