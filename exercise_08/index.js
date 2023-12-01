import formatStringByWordsLength from "./formatStringByWordsLength.js";

const result1 = formatStringByWordsLength(
  "This is a long, long, long sentence."
);
console.log(result1);

const result2 = formatStringByWordsLength("This is short one.");
console.log(result2);
