/* Receiving a sentence, a word in the sentence and a replacement for that word as arguments, 
perform a search and replace on the sentence using the arguments provided and 
return the new sentence. 
*/

const searchAndReplace = (str, word, replace) => {
  word[0].toUpperCase() === word[0]
    ? (replace = replace[0].toUpperCase() + replace.slice(1))
    : null;
  return str.replace(word, replace);
};

console.log(
  searchAndReplace("He is Sleeping on the couch", "Sleeping", "sitting")
); // expected "He is Sitting on the couch"
