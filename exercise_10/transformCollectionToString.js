import checkCollectionHasElements from "../exercise_06/checkCollectionHasElements.js";
/**
 * Write JS function "transformCollectionToString" to transform collection into string
 * - if array has elements, then return array as string, joined by '|' (pipe character)
 * - otherwise, return an empty string
 * input: array (collection)
 * output: string
 */

/**
 * CASE #1
 * input: ['apple', 'grapes', 'strawberries']
 * output: "apple | grapes | strawberries"
 */

/**
 * CASE #2
 * input: []
 * output: ""
 */

/**
 *
 * @param {*} collection
 * @returns string
 */
const transformCollectionToString = function (collection) {
  const arrayOnCollection = Array.isArray(collection);
  if (arrayOnCollection && collection.length > 0) {
    return collection.join(" | ");
  }
  return "";
};

export default transformCollectionToString;
