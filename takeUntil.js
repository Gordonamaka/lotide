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

  const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
  const results2 = takeUntil(data2, x => x === ',');
  console.log(results2);  