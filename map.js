const eqArrays = require('./eqArrays');

const assertEqual = require('./assertEqual');

const assertArrayEqual = function (array1,array2) {
  if (!eqArrays(array1,array2)) {
  
    console.log(`❌❌❌ Assertion Failed: ${array1} !== ${array2}`);
  }
  else if (eqArrays(array1,array2)) {
  
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  }
};


const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};


module.exports = map;

