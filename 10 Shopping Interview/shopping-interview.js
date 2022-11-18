/*There is a vendor, Sharon. Vendor Sharon wants people to spend money in her shop.
So she wants people to spend the most money possible.
You are given two params:
- an arr of arrays representing the purchasing choices: [['pencil', 3], ['chalkboard', 10], ['paper', 2]]
-  an arr representing the customer basket ['pencil', 'marker']
We want to get the most expensive item and return it if it is not already in the customer basket.
In this case, it will return 'chalkboard'
*/

const recommend = (pair, customerBasket) => {
  return pair
    .filter((e) => !customerBasket.includes(e[0]))
    .sort((a, b) => b[1] - a[1])[0][0];
  // expected sorted = [["chalkboard", 10], ["paper", 2]]
  // expected 'chalkboard' for [0][0]
};

let pair = [
  ["pencil", 3],
  ["chalkboard", 10],
  ["marker", 4],
  ["paper", 2],
];
let customerBasket = ["pencil", "marker"];

console.log(recommend(pair, customerBasket)); // expected 'chalkboard'
