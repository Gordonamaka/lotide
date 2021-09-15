const assertEqual = function(actual, expected) {
  if (actual !== expected) {
  
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
  if (actual === expected) {
  
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }

};

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

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, {"Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
// the truthy falsey value of undefined is false, so making "Agouhanna false makes result1["Aguouhanna"], undefined pass the assertion test.
assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);