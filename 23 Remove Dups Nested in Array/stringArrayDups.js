/*
In this Kata, you will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

For example:

dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].

dup(["kelless","keenness"]) = ["keles","kenes"].

Strings will be lowercase only, no spaces. See test cases for more examples.
*/

const dup = (arr) => {
  return arr.map((e) =>
    e
      .split("")
      .filter((e, i, a) => e !== a[i - 1])
      .join("")
  );
};

console.log(
  dup(["ccooddddddewwwaaaaarrrrsssss", "piccaninny", "hubbubbubboo"])
);
// ['codewars','picaniny','hubububo']
console.log(dup(["abracadabra", "allottee", "assessee"])); // ['abracadabra','alote','asese']
console.log(dup(["kelless", "keenness"])); // ['keles','kenes']
console.log(dup(["Woolloomooloo", "flooddoorroommoonlighters", "chuchchi"])); // ['Wolomolo','flodoromonlighters','chuchchi']
console.log(dup(["adanac", "soonness", "toolless", "ppellee"])); // ['adanac','sones','toles','pele']
console.log(dup(["callalloo", "feelless", "heelless"])); // ['calalo','feles','heles']
console.log(dup(["putteellinen", "keenness"])); //['putelinen','kenes']
console.log(dup(["kelless", "voorraaddoosspullen", "achcha"])); // ['keles','voradospulen','achcha']
