function repeat(times, string) {
  let finalStr = '';
  for (let i = 1; i <= times; i++) {
    finalStr += string;
  }
  return finalStr;
}

console.log(repeat(3, 'ha'));
