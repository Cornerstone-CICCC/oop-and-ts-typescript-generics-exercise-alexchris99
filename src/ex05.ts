// 5. Create a generic arrow function called `filterArray` that filters an array based on a callback function.
// Pass an array of numbers [1, 2, 3, 4, 5] and filter for numbers greater than 2.
// Log the filtered array.

// in the callback we need to type the function  (n) => n > 2 == (el:T) => U and we use tho generics one for the array and one for the callback
const filterArray =<T,U> (arr: T[], callback:(el:T) => U) => arr.filter(callback);

console.log(filterArray([1, 2, 3, 4, 5], (n) => n > 2)); // Expected output: [3, 4, 5]