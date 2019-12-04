// // INPUT
// - 1 array
// - 1 object

// // OUTPUT
// - 1 string

// // RULES
// - array contains 2 or more elements
// - object contains title and occupation keys

// // TEST CASES
// console.log(
//   greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
// );

// // QUESTIONS

// // ALGORITHM
// - join the elements in the array with a space and store it in the fName variable
// - compose a string literal using name and object key 'title'.

// ###############################################

// GET USER INPUT: let rlSync = require('readline-sync');

function greetings(nameArr, propObj) {
  let fName = nameArr.join(" ");
  return `Hello, ${fName}! Nice to have a ${propObj.title} ${propObj.occupation} around.`;
}

console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);
