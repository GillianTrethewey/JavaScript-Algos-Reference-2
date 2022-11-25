/* CHALLENGE
Given a two strings, write an algorithm to check if they are anagrams
of each other. Return true if the pass the test and false if they
don't. E.g
    isAnagram('silent', 'listen') // should return true
*/

const isAnagram = (stringA, stringB) => {
  if (stringA.length !== stringB.length) return false;

  return stringA
    .split("")
    .map((e) => stringB.includes(e))
    .every((e) => e === true);
};

console.log(isAnagram("silent", "listen")); //expected true
