const eqArrays = require('./eqArrays');

const assertArrayEqual = function (array1,array2) {
  if (!eqArrays(array1,array2)) {
  
    console.log(`❌❌❌ Assertion Failed: ${array1} !== ${array2}`);
  }
  else if (eqArrays(array1,array2)) {
  
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  }
};


const letterPositions = function(sentence) {
  const results = {};
  
  
  // logic to update results here
  for (let i = 0; i < sentence.length; i++) {
    
    if (sentence[i] !== " ") { 
      
      if (results[sentence[i]]) {

        results[sentence[i]].push(i);

      } else {

        results[sentence[i]] = [i];
      }

    } return results;
  }
};  



assertArraysEqual(letterPositions("Cello").C, [0]);
assertArraysEqual(letterPositions("Cello").e, [1]);
assertArraysEqual(letterPositions("Cello").l, [2, 3]);
assertArraysEqual(letterPositions("Cello").l, [2, 3]);
assertArraysEqual(letterPositions("Cello").o, [4]);

module.exports = letterPositions;