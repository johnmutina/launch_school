let nestedArray = [
  ['title', 'Duke'],
  ['name', 'Nukem'],
  ['age', 33]
];

let obj = {};

nestedArray.forEach(arr => {
  obj[arr[0]] = arr[1];
});

console.log(obj);
