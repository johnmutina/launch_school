let rlSync = require('readline-sync');

let fName = rlSync.question("What is your first name?\n");
let lName = rlSync.question("What is your last name?\n");
console.log(`Hello, ${fName} ${lName}!`);