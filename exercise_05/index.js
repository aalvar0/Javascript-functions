//import 'isAdditionGreaterThanFifty' and execute

import isAdditionGreaterThanFifty from "./isAdditionGreaterThanFifty.js";

const num1 = 25;
const num2 = 30;
const num3 = 10;
const num4 = 10;
const result = isAdditionGreaterThanFifty(num1, num2);
const result2 = isAdditionGreaterThanFifty(num3, num4);
console.log(
  `Is the sum of ${num1} and ${num2} greater than or equal to 50?`,
  result
);
console.log(
  `Is the sum of ${num3} and ${num4} greater than or equal to 50?`,
  result2
);
