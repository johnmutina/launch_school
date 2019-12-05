// // INPUT
// - 1 number

// // OUTPUT
// - 1 string

// // RULES
// - output is composed of:
//   - century number
//   - ordinal ending (th, st, nd, rd)

// // TEST CASES
// century(2000);        // "20th"
// century(2001);        // "21st"
// century(1965);        // "20th"
// century(256);         // "3rd"
// century(5);           // "1st"
// century(10103);       // "102nd"
// century(1052);        // "11th"
// century(1127);        // "12th"
// century(11201);       // "113th"

// QUESTIONS
// - should I consider negative years?
// - how about the year 0?

// // ALGORITHM
// - determine century number
//   - if divisible by 100: year / 100
//   - else
//     - Math.ceil(year / 100)

// ###############################################

function century(year) {
  let century = Math.ceil(year / 100).toString();

  return century + calculateOrdinal(century);
}

function calculateOrdinal(year) {
  let lastTwo = year.toString().slice([year.length - 2]);
  let lastDigit = year.toString()[year.length - 1];

  if (lastTwo === '11' || lastTwo === '12' || lastTwo === '13') {
    return 'th';
  }

  switch (lastDigit) {
    case '1':
      return 'st';
    case '2':
      return 'nd';
    case '3':
      return 'rd';
    default:
      return 'th';
  }
}

console.log(century(2000) === '20th');
console.log(century(2001) === '21st');
console.log(century(1965) === '20th');
console.log(century(256) === '3rd');
console.log(century(5) === '1st');
console.log(century(10103) === '102nd');
console.log(century(1052) === '11th');
console.log(century(1127) === '12th');
console.log(century(11201) === '113th');
