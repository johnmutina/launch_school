objA = { a: 1 };
objB = { b: 2 };

// let newObj = Object.assign(objA, objB);

console.log(objA);
console.log(objB);
// console.log(newObj);

let newestObj = Object.assign({}, objA, objB);

console.log(newestObj);
