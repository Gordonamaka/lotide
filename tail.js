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


module.exports = tail;

