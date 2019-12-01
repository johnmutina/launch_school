let array = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];

let removeNonInteger = arr => {
  return arr.filter(el => Number.isInteger(el));
};

let newArray = removeNonInteger(array);
console.log(newArray);
