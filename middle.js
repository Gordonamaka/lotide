const eqArrays = function(array1, array2) {
  if (array1.length >= array2.length) {     
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]){
      return false;
    }
  }
  return true;
} else if (array1.length < array2.length) {
  for (let i = 0; i < array2.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
  } 
};

const middle = function(arr) {
  let midItem = [];
  let newArr = arr[Math.floor(arr.length/2)];
  if (arr.length <= 2) {
    return midItem
  }

  if (arr.length % 2 === 1) {
    midItem.push(newArr);
    return midItem
  };
  if (arr.length % 2 === 0) {
    midItem.push(newArr)
    midItem.push(arr[newArr] +1) 
  };
};

const assertArrayEqual = function (actual, expected) {
  if (!eqArrays(actual, expected)) {
  
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
  else if (eqArrays(actual, expected)) {
  
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
};

assertArrayEqual(middle([1])) // => []
assertArrayEqual(middle([1, 2])) // => []

assertArrayEqual(middle([1, 2, 3])) // => [2]
assertArrayEqual(middle([1, 2, 3, 4, 5])) // => [3]

middle([1, 2, 3, 4]) // => [2, 3]
middle([1, 2, 3, 4, 5, 6]) // => [3, 4]