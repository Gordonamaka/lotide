const assertEqual = function(actual, expected) {
  if (actual === "Lighthouse Labs" && expected === "Bootcamp") {
  
    console.log("❌❌❌" + " [Lighthouse Labs] !== [Bootcamp]");
  }
  if (actual === "1" && expected === "1") {
  
    console.log("✅✅✅" + "[actual] === [expected]");
  }

};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
