let obj = {
  b: 2,
  a: 1,
  c: 3
};

let objKeys = Object.keys(obj).map(el => el.toUpperCase());
console.log(objKeys);
