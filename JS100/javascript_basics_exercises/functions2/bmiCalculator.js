function calculateBMI(height, weight) {
  let height_in_m = height / 100;
  return (weight / height_in_m ** 2).toFixed(2);
}

console.log(calculateBMI(180, 80));
