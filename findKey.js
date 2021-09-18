const assertEqual = require('./assertEqual');


const findKey = function (obj, callback) {

  for (let keyBlade in obj) {

    if (callback(obj[keyBlade])) {
      
      return keyBlade;
    }
  }
};

module.exports = findKey;

