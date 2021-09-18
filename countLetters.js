const assertEqual = require('./assertEqual');

//The function should take in a sentence (as a string) and then return a count of each of the letters in that sentence. 
// I assume we'll need .length to solve, but OF EACH letter.
const countLetters = function(allLetters) {
  const countString = allLetters.split(" ").join("");
  let results = {};
  for (let lt of countString) {
    if (results[lt]) {
      results[lt] += 1;
    } else {
      results[lt] = 1;
    }
  }
  return results;
};
 // We need two parameters, one to examine and display the letters, and the other to count the letters

// variable for our result & our count for lt parameter
// parameter execution (for loop to iterate over a string) for letters to push the letter into object


//present lettersKey as an object key 

// create a count variable (lt) to be returned upon counting strings

module.exports = countLetters;