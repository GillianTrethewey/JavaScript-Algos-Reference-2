/*
Return the lowest index at which a value (second argument) i.e **num** should be inserted into an array (first argument) 
i.e **arr** once it has been sorted. The returned value should be a number. 
*/

//whereIBelong([1,2,3,4], 1.5)
// should return 1 because it is greater than 1(index 0), but less than 2(index 1).

// without modifying original array but logic used
const whereIBelong = (arr, num) => {
  return [...arr].indexOf(
    [...arr].sort((a, b) => a - b).filter((e, i) => e > num)[0]
  );
};

console.log(whereIBelong([1, 2, 3, 4], 1.5)); //expected 1

// modifying a copy of the array
const whereIBelong1 = (arr, num) => {
  return [...arr, num].sort((a, b) => a - b).indexOf(num);
};

console.log(whereIBelong1([1, 2, 3, 4], 1.5)); //expected 1
