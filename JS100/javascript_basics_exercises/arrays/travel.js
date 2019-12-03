let destinations = [
  'Prague',
  'London',
  'Sydney',
  'Belfast',
  'Rome',
  'Aruba',
  'Paris',
  'Bora Bora',
  'Barcelona',
  'Rio de Janeiro',
  'Marrakesh',
  'New York City'
];

function isIncluded(string, array) {
  let isIn = false;
  array.forEach(city => {
    if (string === city) {
      isIn = true;
    }
  });
  return isIn;
}

console.log(isIncluded('Barcelona', destinations));
console.log(isIncluded('Nashville', destinations));
console.log(isIncluded('Bora Bora', destinations));
