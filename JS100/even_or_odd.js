function evenOrOdd(num) {
  let evenOrOdd;
  if (Number.isInteger(num)) {
    if (num % 2 === 0) {
      evenOrOdd = "even";
    } else {
      evenOrOdd = "odd";
    }
    console.log(`The number ${num} is ${evenOrOdd}`);
    return;
  }
  console.log(`${num} is not a number!`);
}

evenOrOdd(2);
evenOrOdd(12);
evenOrOdd(23);
evenOrOdd("dj");
evenOrOdd(29);
evenOrOdd(23);