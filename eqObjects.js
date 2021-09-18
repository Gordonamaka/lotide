const assertEqual = require('./assertEqual');

const eqArrays = require('./eqArrays');

const eqObjects = function(ob1, ob2) {
  //values and truth value to be returned
  const ob1KeysArray = Object.keys(ob1);
  const ob2KeysArray = Object.keys(ob2);
  let Match = true;

  // length based conditional statement
  if (ob1KeysArray.length !== ob2KeysArray.length) {
    return false;
  // Match conditional
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

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };
// Tests
assertEqual(eqObjects(ab, ba), true);
assertEqual(eqObjects(cd, dc), true);
assertEqual(eqObjects(cd, cd2) , false);

module.exports = eqObjects;

