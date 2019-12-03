function catAge(humanYears) {
  let catAge = 0;
  for (let i = 1; i <= humanYears; i++) {
    if (i === 1) {
      catAge += 15;
    } else if (i === 2) {
      catAge += 9;
    } else {
      catAge += 4;
    }
  }
  return catAge;
}

console.log(catAge(1)); // 15
console.log(catAge(2)); // 24
console.log(catAge(3)); // 28
console.log(catAge(4)); // 32
