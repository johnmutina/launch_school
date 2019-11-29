let capitalizer = (str) => {
  if (str.length > 10) {
    return str.toUpperCase();
  }
  return str;
}

console.log(capitalizer("prova"));
console.log(capitalizer("prova prova prova"));
console.log(capitalizer("Sue Smith"));
console.log(capitalizer("Sue Robertson"));
console.log(capitalizer("Joe Thomas"));
console.log(capitalizer("Joe Stevens"));