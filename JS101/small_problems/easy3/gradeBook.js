// // INPUT
// - list of numbers

// // OUTPUT
// - 1 character

// // RULES
// - input is between 0 and 100
// - 90 <= score <= 100: 'A'
// - 80 <= score < 90: 'B'
// - 70 <= score < 80: 'C'
// - 60 <= score < 70: 'D'
// - 0 <= score < 60: 'F'

// // TEST CASES
// getGrade(95, 90, 93);    // "A"
// getGrade(50, 50, 95);    // "D"

// // QUESTIONS

// // ALGORITHM
// - calculate average
//   - reduce items and divide result by array length
// - create a switch to determine the letter to return

// ###############################################

function getGrade(...args) {
  let average = args.reduce((val, acc) => val + acc) / args.length;

  switch (true) {
    case average >= 90:
      return 'A';
    case average < 90 && average >= 80:
      return 'B';
    case average < 80 && average >= 70:
      return 'C';
    case average < 70 && average >= 60:
      return 'D';
    default:
      return 'F';
  }
}

console.log(getGrade(95, 90, 93)); // "A"
console.log(getGrade(50, 50, 95)); // "D"
