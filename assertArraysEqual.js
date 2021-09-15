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

const assertArrayEqual = function (array1,array2) {
  if (!eqArrays(array1,array2)) {
  
    console.log(`❌❌❌ Assertion Failed: ${array1} !== ${array2}`);
  }
  else if (eqArrays(array1,array2)) {
  
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  }
};

// Copy over assertequal, instead of comparing an actual and a expected, you literally just get the boolean that was returned.
    
assertArrayEqual([1, 2, 3], [1, 2, 3]) // => true
assertArrayEqual([1, 2, 3], [3, 2, 1]) // => false

assertArrayEqual(["1", "2", "3"], ["1", "2", "3"]) // => true
assertArrayEqual(["1", "2", "3"], ["1", "2", 3]) // => false