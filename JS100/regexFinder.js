let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear'
];

function logMatch(arr, regex) {
  return arr.filter(el => regex.test(el));
}

console.log(logMatch(words, /lab/));
