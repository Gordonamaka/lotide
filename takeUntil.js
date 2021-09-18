const eqArrays = require('./eqArrays');

const assertEqual = require('./assertEqual');

const assertArraysEqual = require('./assertArraysEqual');

const takeUntil = function(array, callback) {
    let sliceExtract = "";
    let newArr = [];
    for (let i = 0; i < array.length; i++) {
      if (callback(array[i])) {
        sliceExtract = i;
        newArr = array.slice(0, sliceExtract);
        return newArr;
      }
    }
  };
 
module.exports = takeUntil;
  
