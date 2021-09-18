const assertEqual = require('./assertEqual')

// This function should take in a collection of items and return counts for a specific subset of those items.
// It won't count everything. 
// In order to decide what to count, it will also be given an idea of which items we care about and it will only count those, ignoring the others (falsey values).
// Only keys which have a truthy value should be counted in the resulting object.

const countOnly = function(allItems, itemsToCount) {
// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
// variable for our results
  const results = {}
   // loop statement that loops over all items
  for (const item of allItems) {
//Add an if condition to only increment our count in results if the item is found in the itemsToCount object.
    if(itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
// increment the count of each item into results as we encounter each string item in the array

    
    console.log(item);
    // logs to the console
  }
  
  return results;
// returns our results
}



module.exports = countOnly;
