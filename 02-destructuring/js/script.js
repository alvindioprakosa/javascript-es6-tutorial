// DESTRUCTURING ARRAY
function getSecore() {
  return [70, 80, 90];
}

let score = getSecore();
let x = score[0],
  y = score[1],
  z = score[2];

console.log(x, y, z);

let a, b, c, d, e;

[a, b, c] = getSecore();
console.log(a, b, c);

[a, b, c, d, e] = getSecore();
console.log(a, b, c, d, e);

[a, b] = getSecore();
console.log(a, b);

let [i, ...rest] = getSecore();
console.log(i, rest);

let items = getSecore();
let ke4 = items[3] != undefined ? items[3] : 0;
ke4 = items[4] || 0;
console.log(ke4);

[a, b, c, d = 0, e = 0] = getSecore();
console.log(a, b, c, d, e);

[a = 10, b = 20] = null || [];
console.log(a, b);

function getProfile() {
  return ["Pojok", "code", ["red", "blue", "blue"]];
}
let [firstName, lastName, [color1, color2, color3]] = getProfile();
console.log(firstName, lastName, color1, color2, color3);

a = 10;
b = 20;
[a, b] = [b, a];
console.log(a, b);

function start(a, b) {
  return [a + b, a * b, a / b];
}

let [sum, mul, div] = start(10, 20);
console.log(sum, mul, div);
