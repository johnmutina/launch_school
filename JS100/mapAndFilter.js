let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

let oddLengths = arr => {
  return arr.map(el => el.length).filter(elLength => elLength % 2 !== 0);
};

console.log(oddLengths(arr));
