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


const without = function (source, itemsToRemove) {
  let newSource = [];
  
  for (let item of source) {
    if (!itemsToRemove.includes(item)) {
      newSource.push(item);
    }
  }
  return newSource;
};

const assertArrayEqual = function (source,itemsToRemove) {
  if (!eqArrays(source,itemsToRemove)) {
  
    console.log(`❌❌❌ Assertion Failed: ${source} !== ${itemsToRemove}`);
  }
  else if (eqArrays(source,itemsToRemove)) {
  
    console.log(`✅✅✅ Assertion Passed: ${source} === ${itemsToRemove}`);
  }
};


const words = ["hello", "world", "lighthouse"];

console.log(without(words, ["lighthouse"])); // no need to capture 

console.log(without([1, 2, 3], [1])) // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]

// return value for this test case
// Make sure the original array was not altered by the without function
assertArrayEqual(words, ["hello", "world", "lighthouse"]);


module.exports = without;
