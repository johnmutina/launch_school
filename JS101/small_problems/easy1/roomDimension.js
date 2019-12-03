// INPUT
// - 2 numbers

// OUTPUT
// - sentence logged to console

// RULES
// - input in meters
// - output in both square meters and square feet

// TEST CASES
// lenght: 10
// width: 7
// result: 70.00 sq m (753.47 sq feet)

// QUESTIONS
// - can the input be 0 or a negative number?
// - do I need to validate the input?

// ALGORITHM
// - get length from user and save it
// - get width from user and save it
// - calculate area in sqm
// - convert to sq feet using constant
// - compose string literal

// ###############################################

let readlineSync = require('readline-sync');
const metersToFeet = 10.7639;

let measure;

do {
  console.log('Do you want to use meters or feet?');
  measure = readlineSync.prompt();
} while (measure !== 'meters' && measure !== 'feet');

console.log(`Enter the length of the room in ${measure}:`);
let length = readlineSync.prompt();
length = parseInt(length, 10);

console.log(`Enter the width of the room in ${measure}:`);
let width = readlineSync.prompt();
width = parseInt(width, 10);

let areaInSqM, areaInSqF;

if (measure === 'meters') {
  areaInSqM = (length * width).toFixed(2);
  areaInSqF = (areaInSqM * metersToFeet).toFixed(2);
  console.log(
    `The area of the room is ${areaInSqM} square meters (${areaInSqF} square feet).`
  );
} else if (measure === 'feet') {
  areaInSqF = (length * width).toFixed(2);
  areaInSqM = (areaInSqF / metersToFeet).toFixed(2);
  console.log(
    `The area of the room is ${areaInSqF} square feet (${areaInSqM} square meters).`
  );
} else {
  console.log('Oops, something went wrong!');
}
