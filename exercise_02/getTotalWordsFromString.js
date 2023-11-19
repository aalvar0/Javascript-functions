/**
 * #2 :: Export JS function "getTotalWordsFromString" to get the total number of words contained in one string.
 * input: string (sentence)
 * output: number
 */

function getTotalWordsFromString(sentence) {
    const trimmedSentence = sentence.trim();
  
    if (trimmedSentence.length === 0) {
      return 0;
    }
  
    const wordsArray = trimmedSentence.split(/\s+/);
    return wordsArray.length;
  }
  export default
  getTotalWordsFromString
