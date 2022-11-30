/*
Your job is to figure out the index of which vowel is missing from a given string:

A has an index of 0,
E has an index of 1,
I has an index of 2,
O has an index of 3,
U has an index of 4.
Notes: There is no need for string validation and every sentence given will contain all vowels but one. Also, you won't need to worry about capitals.

Examples
"John Doe hs seven red pples under his bsket"          =>  0  ; missing: "a"
"Bb Smith sent us six neatly arranged range bicycles"  =>  3  ; missing: "o"
*/

// const absentVowel = (x) => {
//   let vowels = "aeiou";
//   for (let i in vowels) {
//     if (x.toLowerCase().indexOf(vowels[i]) === -1) {
//       return Number(i);
//     }
//   }
// };

const absentVowel = (str) => {
  return [..."aeiou"].findIndex((e) => !str.includes(e));
};
console.log(absentVowel("John Doe hs seven red pples under his bsket"));
// expected 0
console.log(absentVowel("Bb Smith sent us six neatly arranged range bicycles"));
// expected 3
