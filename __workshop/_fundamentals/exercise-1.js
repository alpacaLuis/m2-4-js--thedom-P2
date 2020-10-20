// Exercise 1
//
// Part 1 - Write
// ---------------
// Write a function accepts an array of values and returns a new array of stringified values.
//
let arr = [1,2,3]

const convertToString = (arr) => {
  return arr.map(function(i){
    return i.toString()
  })
};


// Part 2 - Test
// --------------
// Test your function.
// Look for the corresponding exercise file in the __tests__ folder.
// Add some test cases in the test. The first one is done for you.

// We need to export the function in order for our unit test to have access to it.
module.exports = convertToString;
