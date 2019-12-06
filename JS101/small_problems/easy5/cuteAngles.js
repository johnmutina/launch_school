// // INPUT
// - 1 floating

// // OUTPUT
// - 1 string

// // RULES
// - 60 minutes in a degree
// - 60 seconds in a minute

// // TEST CASES
// dms(30);           // 30°00'00"
// dms(76.73);        // 76°43'48"
// dms(254.6);        // 254°35'59"
// dms(93.034773);    // 93°02'05"
// dms(0);            // 0°00'00"
// dms(360);          // 360°00'00" or 0°00'00"

// // QUESTIONS

// // ALGORITHM
// - get integer and set as degrees
// - get decimals subtracting rounded integer to integer, multiply by 60 and use integer as minutes
// - get seconds subtracting rounded integer to integer, multiply by 60 and use integer as seconds
// - interpolate values with right symbols

// ###############################################

function formatDeg(rawNum) {
  return Math.floor(rawNum)
    .toString()
    .padStart(2, '0');
}

function dms(degrees) {
  let deg, min, sec;
  deg = parseInt(degrees);
  if (degrees - deg === 0) return `${deg}°00'00"`;

  min = (degrees - deg) * 60;
  sec = (min - parseInt(min)) * 60;

  return `${deg}°${formatDeg(min)}'${formatDeg(sec)}"`;
}

console.log(dms(30) === '30°00\'00"');
console.log(dms(76.73) === '76°43\'48"');
console.log(dms(254.6) === '254°35\'59"');
console.log(dms(93.034773) === '93°02\'05"');
console.log(dms(0) === '0°00\'00"');
console.log(dms(360) === '360°00\'00"');
