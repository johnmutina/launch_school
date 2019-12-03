let person = {
  title: 'Duke',
  name: 'Nukem',
  age: 33
};

let personArr = [];

for (prop in person) {
  personArr.push([prop, person[prop]]);
}

console.log(personArr);
