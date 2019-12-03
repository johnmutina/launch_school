let string1 = 'Polar Bear';
let string2 = 'Polar bear';
let string3 = 'Penguin';

function compare(str1, str2) {
  return str1.toLowerCase() === str2.toLowerCase();
}

console.log(compare(string1, string2));
console.log(compare(string1, string3));
console.log(compare(string2, string3));
