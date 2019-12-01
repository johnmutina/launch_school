function findBiggest(arr) {
  return Math.max(...arr);
}

console.log(findBiggest([1, 6, 3, 2]));
console.log(findBiggest([-1, -6, -3, -2]));
console.log(findBiggest([2, 2]));
