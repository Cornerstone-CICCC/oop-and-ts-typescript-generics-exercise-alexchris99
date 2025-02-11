// 6. Create a generic arrow function called `getValueFromObject` that accepts an object and a key, 
// and returns the value associated with that key from the object.
// Use the object { js: "JavaScript", ts: "TypeScript" } and retrieve the value of the key "ts".
// Log the result.

// U must exist in the obj thst why we extend U to keyof T and the return will be the obj[key] == T[U] we need to generics one for the key and another for thr obj
const getValueFromObject =<T,U extends keyof T>(obj: T, key: U): T[U] => obj[key];

const languages = { js: "JavaScript", ts: "TypeScript" };
console.log(getValueFromObject(languages, "ts")); // Expected output: "TypeScript"