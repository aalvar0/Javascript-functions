/**
 * Write JS function "formatStringByWordsLength" to check number of words contained in given string
    - if total number of words is greater then 5, then return uppercase string
    - otherwise, return lower case string
 * input: string (sentence) 
 * output: string
 */

/**
 * CASE #1
 * input: "This is a long, long, long sentence."
 * output: "THIS IS A LONG, LONG, LONG SENTENCE."
 */

/**
 * CASE #2 * input: "This is short one."
 * output: "this is short one."
 */

/**
 * Function that formats a sentence based on the number of words it contains.
 * @param {string} sentence
 * @returns {string}
 */

const formatStringByWordsLength = function (sentence) {
  let wordCount = 0;
  let insideWord = false;

  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " " && !insideWord) {
      insideWord = true;
      wordCount++;
    }
    insideWord = sentence[i] === " " ? false : insideWord;
  }

  return wordCount > 5 ? sentence.toUpperCase() : sentence.toLowerCase();
};

export default formatStringByWordsLength;
