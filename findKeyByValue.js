const assertEqual = require('./assertEqual')

const findKeyByValue = function(object, value) { 
     
  let arrayOfKeys = Object.keys(object); 
     
    for (let keys of arrayOfKeys) {

       if (object[keys] === value) {

             return keys; 
       }
     }
}


module.exports = findKeyByValue;
