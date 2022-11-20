// With Modulus

function isEven(n) {
  return n % 2 ? false : true;
}

// With ParseInt

function isEven(n) {
  return parseInt(n / 2, 10) * 2 === n;
}

// With Bitwise ADD

function isEvenBitwiseAND(n) {
  return n & 1 ? false : true;
}
