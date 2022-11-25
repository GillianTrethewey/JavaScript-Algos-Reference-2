/* CHALLENGE
Given a sentence, return the longest word in the string.

*/

const longestWord = (text) => {
  let textArr = text.split(" ");
  let lengthsArr = [...textArr].map((e) => e.length);
  let maxOfLengths = Math.max(...lengthsArr);

  return textArr[lengthsArr.indexOf(maxOfLengths)];
};

console.log(longestWord("Top Shelf Web Development Training on Scotch")); // expected 'Development'


// more succinct but unreadable
const longestWord1 = (text) => {
  // split text into words
  // iterate over word array and check the lengths
  // find the max length
  let textArr = text.split(" ");
  return textArr[
    [...textArr]
      .map((e) => e.length)
      .indexOf(Math.max(...[...textArr].map((e) => e.length)))
  ];
};
console.log(longestWord1("Top Shelf Web Development Training on Scotch"));
module.exports = longestWord;
