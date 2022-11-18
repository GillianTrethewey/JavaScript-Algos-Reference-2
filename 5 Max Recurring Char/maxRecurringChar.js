/* CHALLENGE
Given a string of text, find and return the most recurring character. 
e.g maxRecurringChar('aabacada') // will return 'a'
*/

const maxRecurringChar = (text) => {
  let charMap = {};
  let charArray = [];
  let vaulesArray = [];
  let maxCharValue = 0;

  for (let char of text) {
    if (charMap.hasOwnProperty(char)) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }

  charArray = Object.keys(charMap);
  vaulesArray = Object.values(charMap);
  maxCharValue = Math.max(...vaulesArray);

  return charArray[vaulesArray.indexOf(maxCharValue)];
};

console.log(maxRecurringChar("aabacada")); // expects 'a'
