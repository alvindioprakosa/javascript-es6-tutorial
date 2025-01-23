const add = [1, 3, 5];
const combine = [2, 4, 6, ...add];
console.log(combine);

function f(a, b, ...args) {
  console.log(args);
}
f(1, 2, 3, 4, 5);

const odd2 = [1, 3, 5];
const combine2 = [...odd2, 2, 4, 6];
console.log(combine2);

const odd3 = [1, 3, 5];
const combine3 = [2, 4, ...odd3, 6];
console.log(combine3);

function compare(a, b) {
  return a - b;
}

let result = compare.apply(null, [1, 2]);
console.log(result);

let result2 = compare(...[1, 2]);
console.log(result2);

let rivers = ["Nile", "Ganges", "Yangte"];
let moreRivers = ["Danube", "Amazon"];

[].push.apply(rivers, moreRivers);
console.log(rivers);

rivers = ["Nile", "Ganges", "Yangte"];
moreRivers = ["Danube", "Amazon"];

rivers.push(...moreRivers);
console.log(rivers);

let initialChar = ["A", "B"];
let chars = [...initialChar, "C"];
console.log(chars);

let numbers = [1, 2];
let moreNumbers = [3, 4];
let allNumber = [...numbers, ...moreNumbers];
console.log(allNumber);

let scores = [80, 70, 90];
let copyArray = [...scores];
console.log(copyArray);

chars = ["A", ..."BC", "E"];
console.log(chars);
