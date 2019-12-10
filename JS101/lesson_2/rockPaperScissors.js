// If player a chooses rock and player b chooses scissors, player a wins.
// If player a chooses paper and player b chooses rock, player a wins.
// If player a chooses scissors and player b chooses paper, player a wins.
// If both players choose the same item, neither player wins. It's a tie.

// GAMEFLOW

// The user makes a choice.
// The computer makes a choice.
// The winner is displayed.

// =====================================================

const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors'];

function prompt(msg) {
  console.log(`==> ${msg}`);
}

function pickWinner(human, computer) {
  if (
    (human === 'rock' && computer === 'scissors') ||
    (human === 'paper' && computer === 'rock') ||
    (human === 'scissors' && computer === 'paper')
  ) {
    return 'You win!';
  } else if (
    (human === 'rock' && computer === 'paper') ||
    (human === 'paper' && computer === 'scissors') ||
    (human === 'scissors' && computer === 'rock')
  ) {
    return 'Computer wins!';
  } else {
    return "It's a tie!";
  }
}

let playAgain;

do {
  prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
  let choice = readline.question();

  while (!VALID_CHOICES.includes(choice)) {
    prompt("That's not a valid choice. Try again, please.");
    choice = readline.question();
  }

  let randomIdx = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIdx];

  prompt(`You chose ${choice}, computer chose ${computerChoice}`);

  prompt(pickWinner(choice, computerChoice));

  prompt('Do you want to play again? (Y/n)');
  let answer = readline.question().toLowerCase();

  while (!['n', 'y'].includes(answer[0])) {
    prompt("Please enter 'Y' to continue or 'n' to quit.");
    answer = readline.question().toLowerCase();
  }

  if (answer[0] === 'y') {
    playAgain = true;
  } else {
    playAgain = false;
  }
} while (playAgain);
