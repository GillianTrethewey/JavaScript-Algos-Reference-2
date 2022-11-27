/*
Given an array, remove all falsy values from the 
array and return an array of only truthy values.
*/

const falseyBouncer = (arr) => {
  return arr.filter((e) => Boolean(e));
};

console.log(falseyBouncer([1, 0, null, "", 5])); // should return [1,5]
