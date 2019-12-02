let cities = [
  'Istanbul',
  'Los Angeles',
  'Tokyo',
  null,
  'Vienna',
  null,
  'London',
  'Beijing',
  null
];

// for (i in cities) {
//   if (cities[i]) {
//     console.log(cities[i]);
//   }
// }

for (i in cities) {
  if (cities[i] === null) {
    continue;
  }
  console.log(cities[i]);
}
