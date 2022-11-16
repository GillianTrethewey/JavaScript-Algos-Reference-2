/* CHALLENGE
Given a string of text, return the number of vowels found within the text
e.g vowelsCounter('anehizxcv') // will return 3
*/

function vowelsCounter(text) {
  return [...text].reduce((a, c) => a + Number("aeiou".includes(c)), 0);
}

module.exports = vowelsCounter;
