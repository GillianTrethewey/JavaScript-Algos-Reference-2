/* CHALLENGE
Given a string of text, find and return the most recurring character. 
e.g maxRecurringChar('aabacada') // will return 'a'
*/

function maxRecurringChar(text) {
  // Code goes here
  let count = {};
  let max = 0;
  let mostUsedLetter = "";
  for (let i in text) {
    let key = text[i];
    count[key] = count[key] ? ++count[key] : 1;
  }
  for (let key in count) {
    if (count[key] > max) {
      mostUsedLetter = key;
      max = count[key];
    }
  }
  return mostUsedLetter;
}

console.log(maxRecurringChar("aabacada")); // expects 'a'
console.log(maxRecurringChar("poopybuttt")); //expects 't'
module.exports = maxRecurringChar;

/*
function maxRecurringChar(text) {
    let charMap = {}
    let charArray =[]
    let vaulesArray = []
    let maxCharValue = 0

    for (let char of text) {
        if (charMap.hasOwnProperty(char)) {
            charMap[char]++
        } else {
            charMap[char] = 1
        }
    }

    charArray = Object.keys(charMap)
    valuesArray = Object.values(charMap)
    maxCharValue = Math.max(...vaulesArray)

    return charArray[valuesArray.indexOf(maxCharValue)]
}
*/
