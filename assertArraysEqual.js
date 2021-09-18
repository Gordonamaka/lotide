const eqArrays = require('./eqArrays');

const assertEqual = require('./assertEqual');

const assertArraysEqual = function (array1,array2) {
  if (!eqArrays(array1,array2)) {
  
    console.log(`❌❌❌ Assertion Failed: ${array1} !== ${array2}`);
  }
  else if (eqArrays(array1,array2)) {
  
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  }
};

module.exports = assertArraysEqual;

// Copy over assertequal, instead of comparing an actual and a expected, you literally just get the boolean that was returned.