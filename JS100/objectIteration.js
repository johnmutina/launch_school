let person = {
  name: 'Bob',
  age: 30,
  height: '6 ft'
};

for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}

// ====================================================

let obj1 = { a: 1, b: 2 };
let obj2 = Object.create(obj1);
obj2.c = 3;
obj2.d = 4;

console.log(obj2);
for (let prop in obj2) {
  console.log(obj2[prop]);
}

// ====================================================

let person2 = {
  name: 'Bob',
  age: 30,
  height: '6 ft'
};

let personKeys = Object.keys(person2); // returns ['name', 'age', 'height']

personKeys.forEach(key => console.log(`${key}: ${person2[key]}`));
