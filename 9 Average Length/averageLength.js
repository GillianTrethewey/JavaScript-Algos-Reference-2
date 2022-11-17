/*
Given an array of strings of the same letter type. Return a new array, which will differ in that the length of each element is equal to the average length of the elements of the previous array.

A few examples:

['u', 'y'] =>  ['u', 'y'] // average length is 1
['aa', 'bbb', 'cccc'] => ['aaa', 'bbb', 'ccc'] // average length is 3
['aa', 'bb', 'ddd', 'eee'] => ['aaa', 'bbb', 'ddd', 'eee'] // average length is 2.5 round up to 3
If the average length is not an integer, use Math.round().
The input array's length > 1

*/

// const averageLength = (arr) => {
//   let avLength = Math.round(
//     [...arr].reduce((a, c) => a + Number(c.length), 0) / arr.length
//   );

//   let result = arr.map((e) => {
//     while (e.length < avLength) {
//       e += e[0];
//     }
//     if (e.length > avLength) {
//       return e.slice(0, avLength);
//     }
//     if (e.length === avLength) {
//       return e;
//     }
//   });
//   return result;
// };

const averageLength = (arr) => {
  let num = Math.round(
    arr.reduce((acc, cv) => acc + cv.length, 0) / arr.length
  );

  return arr.map((element) => element[0].repeat(num));
};

console.log(averageLength(["u", "y"])); //expects ["u", "y"]
console.log(averageLength(["aaa", "bbb", "cccc"])); //expects ["aaa", "bbb", "ccc"]
console.log(averageLength(["aa", "bb", "ddd", "eee"])); // expects ["aaa", "bbb", "ddd", "eee"]
