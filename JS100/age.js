let rlSync = require('readline-sync');

let age = Number(rlSync.question('What is your age?\n'));

// console.log(`You are ${age} years old.`);
// console.log(`In 10 years, you will be ${age + 10}.`);
// console.log(`In 20 years, you will be ${age + 20}.`);
// console.log(`In 30 years, you will be ${age + 30}.`);
// console.log(`In 40 years, you will be ${age + 40}.`);

console.log(`You are ${age} years old.`);

for (let ageDiff = 10; ageDiff <= 40; ageDiff += 10) {
  console.log(`In ${ageDiff} years, you will be ${age + ageDiff} years old.`);
}
