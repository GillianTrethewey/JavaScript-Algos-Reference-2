/*
Given an array and a chunk size, divide the array into many sub-arrays where each sub-array has the specified length. 
chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], 5)
should return [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13]]
*/

const chunkArray = (arr, num) => {
  let mutated = [...arr];
  let myArr = [];

  while (mutated.length > num) {
    myArr.push(mutated.slice(0, num));
    mutated.splice(0, num);
  }
  myArr.push(mutated);
  return myArr;
};
//console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], 5));
// expected [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13]]

//RECURSION
const chunkArray1 = (arr, num) => {
  if (arr.length <= num) {
    return [arr];
  }
  return [arr.slice(0, num), ...chunkArray1(arr.slice(num), num)];
};

console.log(chunkArray1([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], 5));
