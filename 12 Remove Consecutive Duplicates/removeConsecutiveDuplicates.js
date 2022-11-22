/*
Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:

"alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

--> "alpha beta gamma delta alpha beta gamma delta"
*/

const removeConsecutiveDuplicates = (s) => {
  return s
    .split(" ")
    .filter((e, i, a) => i === 0 || e !== a[i - 1])
    .join(" ");
  // return el at index 0 since nothing prior
};

console.log(
  removeConsecutiveDuplicates(
    "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"
  )
); //expects "alpha beta gamma delta alpha beta gamma delta"
