// // INPUT
// - 1 string

// // OUTPUT
// - 1 string

// // RULES

// // TEST CASES
// cleanUp("---what's my +*& line?");    // " what s my line "

// // QUESTIONS

// // ALGORITHM
// - initialize empty array to store result
// - create regex to remove non alphanumeric characters
// - loop through string
//   - if special character && empty string last char !== ' '
//     - push ' ' to string
//   - else
//     - push character

// ###############################################

// SOLUTION 1
function cleanUp(string) {
  let result = '';
  let regex = /\w/;

  for (let i = 0; i < string.length; i++) {
    if (regex.test(string[i])) {
      result += string[i];
    } else if (result[result.length - 1] !== ' ') {
      result += ' ';
    }
  }

  return result;
}

// SOLUTION 2
function cleanUp(string) {
  return string.replace(/\W/g, ' ').replace(/\s+/g, ' ');
}

console.log(cleanUp("---what's my +*& line?") === ' what s my line ');
