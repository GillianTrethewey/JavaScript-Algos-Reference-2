const reverseInteger = (num) => {
  return (
    Math.sign(num) *
    parseInt([...num.toString()].reduce((a, c) => c + a, ""))
  );
}

console.log(reverseInteger(-123)); // expected -321
