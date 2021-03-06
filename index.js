const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const eqArrays = require('./eqArrays');
const assertArrayEqual = require('./assertArraysEqual');
const assertEqual = require('./assertEqual');
const assertObjectsEqual = require('./assertObjectsEqual');
const eqObjects = require('./eqObjects');
const findKey = require('./findKey');
const findKeyByValue = require('./findKeyByValue');
const letterPositions = require('./letterPositions');
const countLetters = require('./countLetters');
const countOnly = require('./countOnly');
const map = require('./map');
const takeUntil = require('./takeUntil');
const without = require('./without');


module.exports = {
  head,
  tail,
  middle,
  eqArrays,
  assertArrayEqual,
  assertObjectsEqual,
  assertEqual,
  letterPositions,
  findKey,
  findKeyByValue,
  eqObjects,
  map,
  takeUntil,
  without,
  countOnly,
  countLetters
};
