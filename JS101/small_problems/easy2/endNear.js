// // INPUT
// - string

// // OUTPUT
// - string

// // RULES
// - output is next to last word in the input string

// // TEST CASES
// console.log(penultimate("last word") === "last"); // logs true
// console.log(penultimate("Launch School is great!") === "is"); // logs true

// // QUESTIONS

// // ALGORITHM
// - split string into array of words
// - get string at index array.length - 2
// - return it

// ###############################################

// SOLUTION 1
function penultimate(string) {
  let wordsArr = string.split(' ');
  return wordsArr[wordsArr.length - 2];
}

console.log(penultimate('last word') === 'last'); // logs true
console.log(penultimate('Launch School is great!') === 'is'); // logs true

// SOLUTION 2 (Further Exploration)
function middleWord(string) {
  if (typeof string === 'string') {
    let strArr = string.split(' ');
    return strArr[Math.floor((strArr.length - 1) / 2)];
  } else {
    return 'This is not a string!';
  }
}

console.log(middleWord('This is a string'));
console.log(middleWord('This is a sample string'));
console.log(middleWord('This is just a sample string'));
console.log(middleWord('This is just a sample test string'));
console.log(middleWord('This'));
console.log(middleWord(''));
console.log(middleWord(132));
