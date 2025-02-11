// 1. Create a generic arrow function called `getFirstElement` that accepts an array of any type 
// and returns the first element of the array. 
// Pass an array of strings ["Hello", "World"] and log the result.

// we need to use une generic so the function will accept any value and in this case the return is the type cause we are retunrning one value insted of the array
const getFirstElement = <T>(arr: T[]): T=> arr[0];

console.log(getFirstElement(["Hello", "World"])); // Expected output: "Hello"