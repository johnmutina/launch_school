// // INPUT
// - 1 string

// // OUTPUT
// - 5 strings logged to the console

// // RULES

// // TEST CASES
// logInBox('To boldly go where no one has gone before.');

// // QUESTIONS

// // ALGORITHM
// - store string length + 4 in a variable
// - log to console a string made of '+' + '-' * lineLength - 2 + '+'
// - log to console a string made of '|' + ' ' * lineLength - 2 + '|'
// - log to console a string made of '|' + ' ' + string + ' ' + '|'
// - log to console a string made of '|' + ' ' * lineLength - 2 + '|'
// - log to console a string made of '+' + '-' * lineLength - 2 + '+'

// ###############################################

// SOLUTION 1
function logInBox(string) {
  let dashedLine = `+${"-".repeat(string.length + 2)}+`;
  let emptyLine = `|${" ".repeat(string.length + 2)}|`;

  console.log(dashedLine);
  console.log(emptyLine);
  console.log(`| ${string} |`);
  console.log(emptyLine);
  console.log(dashedLine);
}

logInBox("To boldly go where no one has gone before.");
logInBox("");

// SOLUTION 2 (FURTHER EXPLORATION)
function logInBox(string, limit) {
  let truncatedString = string.slice(0, limit - 4);
  let dashedLine = `+${"-".repeat(truncatedString.length + 2)}+`;
  let emptyLine = `|${" ".repeat(truncatedString.length + 2)}|`;

  console.log(dashedLine);
  console.log(emptyLine);
  console.log(`| ${truncatedString} |`);
  console.log(emptyLine);
  console.log(dashedLine);
}

//SOLUTION 3 (FURTHER EXPLORATION II)
function logInBox(string, limit) {
  let inputArr = string.split("");
  let stringArr = [];

  while (inputArr.length > 0) {
    stringArr.push(inputArr.splice(0, limit - 4).join(""));
  }

  stringArr.forEach(string => {
    let dashedLine = `+${"-".repeat(string.length + 2)}+`;
    let emptyLine = `|${" ".repeat(string.length + 2)}|`;

    console.log(dashedLine);
    console.log(emptyLine);
    console.log(`| ${string} |`);
    console.log(emptyLine);
    console.log(dashedLine);
  });
}

logInBox("Vamos a la playa oh oh oh oh oh!", 20);
logInBox(
  "Oh, say can you see by the dawn's early light What so proudly we hailed at the twilight's last gleaming? Whose broad stripes and bright stars through the perilous fight, O'er the ramparts we watched were so gallantly streaming?",
  50
);
