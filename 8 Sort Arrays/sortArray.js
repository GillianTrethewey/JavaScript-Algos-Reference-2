/*You will be given an array of numbers. 
You have to sort the odd numbers in ascending order while leaving 
the even numbers at their original positions.
*/
// const sortArray = (arr) => {
//   // Return a sorted array.
//   const oddNums = arr.filter((e) => e % 2 === 1).sort((a, b) => a - b);

//   return arr.map((n) => (n % 2 === 0 ? n : oddNums.shift())); // not as good O(n^2)
//   //shift returns the number removed from the front
// };

const sortArray = (arr) => {
  const oddNums = arr.filter((e) => e % 2 !== 0).sort((a, b) => b - a);
  return arr.map((n) => (n % 2 === 0 ? n : oddNums.pop())); // pop is O(1) so better time complexity
};
// pop is O(1) so better time complexity

console.log(sortArray([7, 1])); //expected [1,7]
console.log(sortArray([5, 8, 6, 3, 4])); //expected [3, 8, 6, 5, 4]
console.log(sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0])); // expected [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
