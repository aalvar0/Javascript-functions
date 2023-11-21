import checkCollectionHasElements from "./checkCollectionHasElements.js";

const array1 = [];
const array2 = [1, 2, 3];

const result1 = checkCollectionHasElements(array1);
console.log("Does array1 have elements?", result1);

const result2 = checkCollectionHasElements(array2);
console.log("Does array2 have elements?", result2);
