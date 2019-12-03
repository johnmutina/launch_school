let scores = [96, 47, 113, 89, 100, 102];
let count = 0;

scores.forEach(el => {
  if (el >= 100) {
    count++;
  }
});

console.log(count);
