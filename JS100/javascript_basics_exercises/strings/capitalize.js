let string = 'launch school tech & talk';

function capitalize(str) {
  let words = str.split(' ');

  return words.map(el => el[0].toUpperCase() + el.slice(1)).join(' ');
}

console.log(capitalize(string));
