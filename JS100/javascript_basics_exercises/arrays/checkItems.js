let groceryList = [
  'paprika',
  'tofu',
  'garlic',
  'quinoa',
  'carrots',
  'broccoli',
  'hummus'
];

while (groceryList.length > 0) {
  let removed = groceryList.shift();
  console.log(removed);
}

console.log(groceryList);
