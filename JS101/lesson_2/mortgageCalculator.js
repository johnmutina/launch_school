// INPUT
// - loan amount
// - annual percentage rate (APR)
// - loan duration

// OUTPUT
// - monthly interest rate
// - loan duration in months

// ALGORITM
// - GET amount from user
// - SET amount to user input converted to float
// - GET annualPercentageRate from user
// - SET annualPercentageRate to user input converted to float
// - GET duration from user
// - SET duration to user input converted to number

// - CALCULATE monthlyInterestRate:
//   - annualPercentageRate / 12
// - CALCULATE durationInMonths:
//   - duration * 12
// - CALCULATE monthlyPayment:
//   - amount * (montlyInterestRate / (1 - Math.pow((1
//     + monthlyInterestRate), (-durationInMonths))));

// *************************************************

let readline = require('readline-sync');

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function isInvalid(input) {
  return !input || Number.isNaN(input) || Number(input) < 0;
}

function separator() {
  console.log('*********************************************');
}

prompt('Welcome to JSLoanCalculator.');

while (true) {
  let amount, annualPercentageRate, duration;

  while (true) {
    amount = undefined;
    while (isInvalid(amount)) {
      amount = parseFloat(readline.question(prompt('Enter the loan amount: ')));
    }

    annualPercentageRate = undefined;
    while (isInvalid(annualPercentageRate)) {
      annualPercentageRate = parseFloat(
        readline.question(prompt('Enter the annual percentage rate: '))
      );
    }

    duration = undefined;
    while (isInvalid(duration)) {
      duration = parseInt(
        readline.question(prompt('Enter the duration of the loan in years: ')),
        10
      );
    }

    separator();

    prompt(
      `Loan amount is ${amount.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
      })}`
    );
    prompt(`Loan APR is ${annualPercentageRate}%`);
    prompt(`Loan duration is ${duration} years`);

    prompt("Is this correct? (enter 'Y' to continue)");
    let dataCheck = readline.question().toLowerCase();
    if (dataCheck === 'y') break;
  }

  separator();

  let monthlyInterestRate = annualPercentageRate / 100 / 12;
  let durationInMonths = duration * 12;
  let monthlyPayment =
    amount *
    (monthlyInterestRate /
      (1 - Math.pow(1 + monthlyInterestRate, -durationInMonths)));

  prompt(
    `Monthly interest rate is ${(monthlyInterestRate * 100).toFixed(2)}%.`
  );
  prompt(`Duration is ${durationInMonths} months.`);
  prompt(
    `Monthly payment is ${monthlyPayment.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD'
    })}.`
  );

  separator();

  prompt('Do you want to make another calculation? (enter Y to continue)');
  let restartProgram = readline.question().toLowerCase();
  if (restartProgram !== 'y') break;
}

prompt('Thank you for using JSMortgageCalculatore. Goodbye now!');
