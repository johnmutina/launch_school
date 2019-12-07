// Ask the user for the first number
// Ask the user for the second number
// Ask the user for an operation to perform
// Perform the operation on the two numbers
// Print the result to the terminal

const READLINE = require('readline-sync');
const MESSAGES = require(`./calculator_messages.json`);
const LANGUAGE = 'en';

let language = READLINE.question('=> Please, choose your language (en/it): ');

while (!['en', 'it'].includes(language)) {
  console.log("=> Sorry, I don't understand. Use 'en' or 'it'");
  language = READLINE.question();
}

function prompt(key) {
  let message = messages(key, language);
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

function messages(msg, lang = LANGUAGE) {
  return MESSAGES[lang][msg];
}

prompt('welcome');

while (true) {
  prompt('firstNum');
  let number1 = READLINE.question();

  while (invalidNumber(number1)) {
    prompt('invalidNum');
    number1 = READLINE.question();
  }

  prompt('secondNum');
  let number2 = READLINE.question();

  while (invalidNumber(number2)) {
    prompt('invalidNum');
    number2 = READLINE.question();
  }

  prompt('chooseOperation');
  let operation = READLINE.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt('operationError');
    operation = READLINE.question();
  }

  let output;

  switch (operation) {
    case '1':
      output = Number(number1) + Number(number2);
      break;
    case '2':
      output = Number(number1) - Number(number2);
      break;
    case '3':
      output = Number(number1) * Number(number2);
      break;
    case '4':
      output = Number(number1) / Number(number2);
      break;
  }

  prompt(`The result is ${output}`);

  prompt('againMessage');
  let userAnswer = READLINE.question().toLowerCase();

  while (!['y', 'n'].includes(userAnswer)) {
    prompt('againError');
    userAnswer = READLINE.question().toLowerCase();
  }
  if (userAnswer !== 'y') break;
}

prompt('closeProgram');
