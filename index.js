const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const assertArrayEqual = require('./assertArraysEqual')
const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');



module.exports = {
  head:   head,
  tail:   tail,
  middle: middle,
  eqArrays: eqArrays,
  assertArrayEqual: assertArrayEqual,
  assertEqual: assertEqual
};
