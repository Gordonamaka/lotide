const assertEqual = require('./assertEqual');

const tail = function(array) {
  let hd = [];

  for (let i = 0; i < array.length; i++) {

    if (i !== 0) {
      hd.push(array[i]);
    }
  }
  return hd;
};

const words = ["Yo Yo", "Lighthouse", "Labs"];
console.log(tail(words));
assertEqual(words.length,3);


module.exports = tail;

