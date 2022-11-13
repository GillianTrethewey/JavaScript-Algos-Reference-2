/* CHALLENGE
Given two strings of equal length, calculate and return the the hamming distance.
E.g hammingDistance('rover', 'river') // should return 1
*/

function hammingDistance(stringA, stringB) {
  // Code goes here
  let count = 0;
  if (stringA.length !== stringB.length) {
    return count;
  }

  for (let i = 0; i < stringA.length; i++) {
    if (stringA[i] !== stringB[i]) {
      count++;
    }
  }

  return count;
}

console.log(hammingDistance("rover", "river"));
console.log(hammingDistance("LyleT", "LileW"));

module.exports = hammingDistance;
