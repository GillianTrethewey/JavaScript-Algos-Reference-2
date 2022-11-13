/* CHALLENGE
0
*/

// function capSentence(text) {
//   // Code goes here
//   let wordsArray = text.toLowerCase().split(" ");
//   let capsArray = wordsArray.map((word) => {
//     return word[0].toUpperCase() + word.slice(1);
//   });
//   return capsArray.join(" ");
// }

const capSentence = (text) => {
  return text
    .toLowerCase()
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
};

console.log(capSentence("the tales of scotch!")); // would return 'The Tales Of Scotch!')

module.exports = capSentence;

/*
  let capsArray = [];

  wordsArray.forEach((word) => {
    capsArray.push(word[0].toUpperCase() + word.slice(1));
  });
  return capsArray.join(" ");
}
*/

/*
let capsArray = wordsArray.map( word=>{
        return  word.replace(word[0], word[0].toUpperCase())
    })
*/
