"use strict";
// 3. Create a generic arrow function called `createPair` that accepts two arguments of different types
// and returns them as a tuple/array. 
// Pass `true` and `42` as arguments and log the result.
// we need to add to generic to the arrow function so it acceps any type of var
const createPair = (first, second) => [first, second];
console.log(createPair(true, 42)); // Expected output: [true, 42]
