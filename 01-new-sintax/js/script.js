console.log("01------------------contoh var ------------------");
var x = 10;
console.log(x);
if (true) {
  var x = 20;
  console.log(x);
}
console.log(x);

console.log("01------------------contoh let ------------------");
let y = 10;
console.log(y);
if (true) {
  let y = 20;
  console.log(y);
}
console.log(y);

console.log("02-----------var scope ---------------");
for (var i = 0; i < 5; i++) {
  console.log("inner loop " + i);
}
console.log("outer loop " + i);

for (let j = 0; j < 5; j++) {
  console.log("inner loop " + j);
}
// console.log("outer loop " + j);

console.log("03-----------let global properties ---------------");
var counter = 1;
console.log("ini var " + window.counter);

let jumlah = 1;
console.log("ini let " + window.jumlah);

console.log("04-----------rediclare variable ---------------");
var count = 10;
var count;
console.log("contoh var " + count);

let jum = 10;
jum;
