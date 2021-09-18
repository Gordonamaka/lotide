const assertEqual = require('./assertEqual');

const eqArrays = require('./eqArrays');

const eqObjects = function(ob1, ob2) {
  const ob1KeysArray = Object.keys(ob1);
  const ob2KeysArray = Object.keys(ob2);
  let Match = true;


  if (ob1KeysArray.length !== ob2KeysArray.length) {
    return false;
  
  } else {
    for (let ob1key of ob1KeysArray) { 
      if (!ob2[ob1key]) { 
        return false;
      }
      
      if (Array.isArray(ob1[ob1key])) { 
        if (!eqArrays(ob1[ob1key], ob2[ob1key])) {
          return false;
        }
      
      } else {
        if (ob1[ob1key] !== ob2[ob1key]) {
          return false;
        }
      }
    }
    return Match;
  }
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else if (!eqObjects(actual, expected)) {
    console.log(`❌❌❌ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }

};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, ba);
assertObjectsEqual(ab, abc);

module.exports = assertObjectsEqual;
