const eqArrays = require('./eqArrays');

const assertArrayEqual = require('./assertArraysEqual');

const middle = function(arr) {
  let midItem = [];
  let newArr = arr[Math.floor(arr.length/2)];
  if (arr.length <= 2) {
    return midItem
  };

  if (arr.length % 2 === 1) {
    midItem.push(newArr);
    return midItem
  };

  if (arr.length % 2 === 0) {
    midItem.push(newArr)
    midItem.push(arr[newArr] +1)
    return midItem; 
  };
};

module.exports = middle;
