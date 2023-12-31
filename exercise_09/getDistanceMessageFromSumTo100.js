import generateRandomNumberInRange from "../exercise_03/generateRandomNumberInRange.js";
import isGreaterThan from "../exercise_04/isGreaterThan.js";
import getDistanceFromThreshold from "../exercise_01/getDistanceFromThreshold.js";
/** 
 * Write JS function "getDistanceMessageFromSumTo100" to generate a random number (in between 0-100) and sum it to given number
  - if sum result exceeds 100, then return message "Sum with value N exceeds in N from number 100"
  - otherwise, return message "Sum with value N is left in N from number 100"
 * input: number (value) 
 * output: string
 */

/**
 * CASE #1
 * input: 70
 * random (generated in function): 40
 * output: "Sum with value 110 exceeds in 10 from number 100"
 */

/**
 * CASE #2
 * input: 30
 * random (generated in function): 40
 * output: "Sum with value 70 isd left in 30 from number 100"
 */

/**
 * generate a random number (in between 0-100) and sum it to given number
 * @param {number} value
 * @returns {string}
 */

function getDistanceMessageFromSumTo100(value) {
  const random = generateRandomNumberInRange(100);
  const sum = value + random;
  const exceeded = isGreaterThan(sum, 100);
  const difference = getDistanceFromThreshold(sum, 100);

  return `Sum with value ${sum} ${
    exceeded ? "exceeds" : "is left in"
  } ${difference} from number 100`;
}

export default getDistanceMessageFromSumTo100;
