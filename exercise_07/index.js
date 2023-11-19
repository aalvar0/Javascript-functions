import isTypeOf from './isTypeOf.js';

const stringValue = 'Hello';
const isString = isTypeOf(stringValue, 'string');
console.log("Is stringValue a string?", isString);

const numberValue = 5;
const isNumber = isTypeOf(numberValue, 'number');
console.log("Is numberValue a number?", isNumber);

const booleanValue = true;
const isBoolean = isTypeOf(booleanValue, 'boolean');
console.log("Is booleanValue a boolean?", isBoolean);

const arrayValue = [1, 2, 3];
const isArray = isTypeOf(arrayValue, 'array');
console.log("Is arrayValue an array?", isArray);
