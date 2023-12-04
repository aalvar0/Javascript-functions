import transformCollectionToString from "./transformCollectionToString.js";

const notEmptyCollection = ["apple", "grapes", "strawberries"];
console.log(transformCollectionToString(notEmptyCollection)); // apple | grapes | strawberries

const emptyCollection = [];
console.log(transformCollectionToString(emptyCollection)); // " "
