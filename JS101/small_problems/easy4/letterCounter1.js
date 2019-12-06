// // INPUT
// - 1 string

// // OUTPUT
// - 1 object

// // RULES
// - the object contains the count of each word length
// - spaces are excluded, punctuation is considered part of the word

// // TEST CASES
// wordSizes('Four score and seven.'); // { "3": 1, "4": 1, "5": 1, "6": 1 }
// wordSizes('Hey diddle diddle, the cat and the fiddle!'); // { "3": 5, "6": 1, "7": 2 }
// wordSizes("What's up doc?"); // { "2": 1, "4": 1, "6": 1 }
// wordSizes(''); // {}

// // QUESTIONS

// // ALGORITHM
// - initialize an empty object
// - split string into array on spaces ' '
// - iterate over the array
//   - for each item
//     - count string length and add to object the {length: count += 1}
// - return the object

// ###############################################

function wordSizes(string) {
  let result = {};
  let stringArr = string.split(' ');

  stringArr.forEach(string => {
    let wordLength = string.length;
    if (wordLength === 0) return;

    result[wordLength] ? (result[wordLength] += 1) : (result[wordLength] = 1);
  });

  return result;
}

console.log(wordSizes('Four score and seven.')); // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!')); // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?")); // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes('')); // {}
