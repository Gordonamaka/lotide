const eqArrays = require('./eqArrays');

const assertArraysEqual = require('./assertArraysEqual');

const assertEqual = require('./assertEqual');

const without = function (source, itemsToRemove) {
  let newSource = [];
  
  for (let item of source) {
    if (!itemsToRemove.includes(item)) {
      newSource.push(item);
    }
  }
  return newSource;
};


module.exports = without;
