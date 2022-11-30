/* Given a number, find the next biggest number that could be created using the same digits.
For example, 12 would be 21, 2017 would be 2071.
*/

const nextBigger = (n) => {
  let arr = n.toString().split("");
  let i = arr.length - 1;

  while (i > 0) {
    if (arr[i] > arr[i - 1]) break;
    i--;
  }

  if (i == 0) return -1;

  let sortedRight = arr.splice(i).sort();
  let temp = arr[arr.length - 1];
  for (i = 0; i < sortedRight.length; ++i) {
    if (sortedRight[i] > temp) break;
  }

  arr[arr.length - 1] = sortedRight[i];
  sortedRight[i] = temp;
  let res = arr.concat(sortedRight);
  let num = parseInt(res.join(""));
  return num;
};

/*keep adding 9 to the number since the difference 
between any two numbers with the same digits is always divisible by 9

const nextBigger = (n) => {
  let n2 = n;
  if (parseInt(n2.toString().split("").sort().reverse().join("")) === n)
    return -1;
  while (true) {
    n2 += 9;
    if (
      n2.toString().split("").sort().join("") ===
      n.toString().split("").sort().join("")
    )
      return n2;
  }
};
*/

console.log(nextBigger(12)); // expected 21
console.log(nextBigger(513)); // expected 531
console.log(nextBigger(2017)); // expected 2071
console.log(nextBigger(1957621)); // expected 2071
console.log(nextBigger(9)); // expected -1
console.log(nextBigger(111)); // expected -1
console.log(nextBigger(531)); // expected -1
console.log(nextBigger(144)); // expected 414
console.log(nextBigger(414)); //expected 441
