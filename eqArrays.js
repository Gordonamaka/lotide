const eqArrays = function(array1, array2) {
  if (array1.length >= array2.length) {     
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]){
      console.log(false);
    }
  }
  return true;
} else if (array1.length < array2.length) {
  for (let i = 0; i < array2.length; i++) {
    if (array1[i] !== array2[i]) {
      console.log(false);
    }
  }
  return true;
  } 
};
    

    
eqArrays([1, 2, 3], [1, 2, 3]) // => true
eqArrays([1, 2, 3], [3, 2, 1]) // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false

console.log(eqArrays([1, 2, 3], [1, 2, 3])) // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])) // => false

console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])) // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])) // => false
