import isGreaterThan from "./isGreaterThan.js";

const value = 1;
const threshold = 10;
const value2 = 15;
const threshold2 = 10;
const result = isGreaterThan(value, threshold);
const result2 = isGreaterThan(value2, threshold2);

console.log(`Is ${value} greater than ${threshold}?`, result);
console.log(`Is ${value2} greater than ${threshold2}?`, result2);
