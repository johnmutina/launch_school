// QUESTION 1:
// Answer: The code won't raise an error.
// It will create as many empty items as needed.
// BONUS: numbers[4] will return undefined.

// ****************************

// QUESTION 2:
// Answer:

// let str1 = 'Come over here!'; // true
// let str2 = "What's up, Doc?"; // false

// console.log(str1[str1.length - 1] === '!');
// console.log(str2[str2.length - 1] === '!');

// console.log(str1.endsWith('!'));
// console.log(str2.endsWith('!'));

// ****************************

// QUESTION 3:
// Answer:

// let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };

// console.log(Object.keys(ages).includes('Spot'));
// console.log(ages.hasOwnProperty('Spot'));

// ****************************

// QUESTION 4:
// Answer:

// let munstersDescription = 'the Munsters are CREEPY and Spooky.';
// // => The munsters are creepy and spooky.

// console.log(
//   munstersDescription[0].toUpperCase() +
//     munstersDescription.substring(1).toLowerCase()
// );

// ****************************

// QUESTION 5:
// Answer:

// The non-strict equality would evaluate as true,
// while the strict equality comparison would evaluate as false.

// ****************************

// QUESTION 6:
// Answer:

// let ages = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };
// let additionalAges = { Marilyn: 22, Spot: 237 };

// Object.assign(ages, additionalAges);
// console.log(ages);

// ****************************

// QUESTION 7:
// Answer:

// let str1 =
//   'Few things in life are as important as house training your pet dinosaur.';
// let str2 = 'Fred and Wilma have a pet dinosaur named Dino.';

// console.log(str1.includes('Dino'));
// console.log(str2.includes('Dino'));

// console.log(str1.indexOf('Dino') > -1);
// console.log(str2.indexOf('Dino') > -1);

// ****************************

// QUESTION 8:
// Answer:

// let flintstones = ['Fred', 'Barney', 'Wilma', 'Betty', 'Bambam', 'Pebbles'];

// flintstones.push('Dino');
// flintstones[flintstones.length] = 'Dino';
// flintstones = flintstones.concat('Dino');

// ****************************

// QUESTION 9:
// Answer:

// let flintstones = ['Fred', 'Barney', 'Wilma', 'Betty', 'Bambam', 'Pebbles'];

// flintstones.push('Dino', 'Hoppy');
// flintstones = flintstones.concat('Dino', 'Hoppy');

// console.log(flintstones);

// ****************************

// QUESTION 10:
// Answer:

// let advice =
//   'Few things in life are as important as house training your pet dinosaur.';

// console.log(advice.substring(0, advice.indexOf('house')));
// console.log(advice.slice(0, advice.indexOf('house')));
