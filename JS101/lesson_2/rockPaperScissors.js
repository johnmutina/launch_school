/* eslint-disable id-length */
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
const VALID_CHOICES = [
  '(r)ock',
  '(p)aper',
  '(s)cissors',
  '(sp)ock',
  '(l)izard'
];

const WINNING_COMBINATIONS = {
  rock: ['scissors', 'lizard'],
  paper: ['rock', 'spock'],
  scissors: ['paper', 'lizard'],
  spock: ['scissors', 'rock'],
  lizard: ['spock', 'paper']
};

const MAP_ABBREVIATIONS = {
  r: 'rock',
  p: 'paper',
  s: 'scissors',
  sp: 'spock',
  l: 'lizard'
};

function prompt(msg) {
  console.log(`==> ${msg}`);
}

function showResult(human, computer) {
  let winner = human > computer ? 'human' : 'computer';
  prompt(`#####  And the ultimate winner is... ${winner}!!!  #####`);
}

function pickWinner(human, computer) {
  if (WINNING_COMBINATIONS[human].includes(computer)) {
    return 'human';
  } else if (human === computer) {
    return 'tie';
  } else {
    return 'computer';
  }
}

// returns each string without the parenthesis
function choiceCleaner(choices) {
  return choices.map(word => word.replace(/[()]/g, ''));
}

/*
checks if user inputs the abbreviated form, the complete form or an invalid input
and returns either the complete choice string or undefined
*/
function choiceGetter() {
  let input = readline.question();
  if (input.length <= 2 && MAP_ABBREVIATIONS[input]) {
    return MAP_ABBREVIATIONS[input];
  } else if (choiceCleaner(VALID_CHOICES).includes(input)) {
    return input;
  } else {
    return undefined;
  }
}

let playAgain = true;

while (playAgain) {
  let humanScore = 0;
  let computerScore = 0;

  while (humanScore < 5 && computerScore < 5) {
    let validChoicesClean = choiceCleaner(VALID_CHOICES);

    prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
    let choice = choiceGetter();

    while (!validChoicesClean.includes(choice) && !choice) {
      prompt("That's not a valid choice. Try again, please.");
      choice = choiceGetter();
    }

    let randomIdx = Math.floor(Math.random() * validChoicesClean.length);
    let computerChoice = validChoicesClean[randomIdx];

    prompt(`You chose ${choice}, computer chose ${computerChoice}`);

    let winner = pickWinner(choice, computerChoice);

    if (winner === 'human') {
      prompt('You win!');
      humanScore++;
    } else if (winner === 'computer') {
      prompt('Computer wins!');
      computerScore++;
    } else {
      prompt("It's a tie!");
    }

    prompt(
      `Current score is human: ${humanScore} - computer: ${computerScore}`
    );
    prompt('* * * * * * * * * * * * * * * * * * * * *');
  }

  showResult(humanScore, computerScore);

  prompt('Do you want to play again? (Y/n)');
  let answer = readline.question().toLowerCase();

  while (!['n', 'y'].includes(answer[0])) {
    prompt("Please enter 'Y' to continue or 'n' to quit.");
    answer = readline.question().toLowerCase();
  }

  if (answer[0] === 'y') {
    computerScore = 0;
    humanScore = 0;
    playAgain = true;
  } else {
    playAgain = false;
  }
}
