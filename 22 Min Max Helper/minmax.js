const rangeSum1 = (arr) => {
  // Arithmetic Series (n/2)(first term + last term)
  return (arr[1] / 2) * (arr[0] + arr[1]);
};

console.log(rangeSum1([1, 9]));
// Should return 45 i.e 1+2+3+4+5+6+7+8+9

console.log(rangeSum1([1, 4]));
// expected is 10

console.log(rangeSum1([1, 5]));
// expected is 15
