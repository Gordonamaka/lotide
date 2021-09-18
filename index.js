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
const countLetters = require('/countLetters');
const countOnly = require('/countOnly');
const map = require('/map');
const takeUntil = require('/takeUntil');
const without = require('/without');





module.exports = {
  head:   head,
  tail:   tail,
  middle: middle,
  eqArrays: eqArrays,
  assertArrayEqual: assertArrayEqual,
  assertObjectsEqual: assertObjectsEqual,
  assertEqual: assertEqual,
  letterPositions: letterPositions,
  findKey : findKey,
  findKeyByValue: findKeyByValue,
  eqObjects: eqObjects,
  map: map,
  takeUntil: takeUntil,
  without: without,
  countOnly: countOnly,
  countLetters: countLetters,
};
