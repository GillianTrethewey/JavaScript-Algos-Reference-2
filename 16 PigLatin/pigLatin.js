/* 
Translate the provided string to Pig Latin:
"pig" = "igpay"
consonant start - consonant before initial vowel is moved to the end and "ay" is affixed
"glove" = "oveglay"
consonant cluster start - cluster is moved to the end and "ay" is affixed
"explain" = "explainway"
*/

function pigLatin(str) {
  return str
    .split(" ")
    .map((e) =>
      e
        .replace(/^([aeiouy])(.*)/, "$1$2way")
        .replace(/^([^aeiouy]+)(.*)/, "$2$1ay")
    )
    .join(" ");
}

console.log(pigLatin("pig glove explain")); // expected igpay oveglay explainway
