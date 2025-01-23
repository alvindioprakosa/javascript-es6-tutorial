// 1. EVENT HANDLER

const greeting = document.querySelector("#greeting");
const username = document.querySelector("#username");

// username.addEventListener("keyup", () => {
//   greeting.textContent = `Hello ${this.value}`;
// });

username.addEventListener("keyup", function () {
  greeting.textContent = `Hello ${this.value}`;
});

// 2. Objek Method

// const counter = {
//   count: 0,
//   next: () => ++this.count,
//   current: () => this.count,
// };

// console.log(counter.current());
// console.log(counter.next());

const counter = {
  count: 0,
  next() {
    return ++this.count;
  },
  current() {
    return this.count;
  },
};

console.log(counter.next());
console.log(counter.current());

// 3. prototype method

function Counter2() {
  this.count = 0;
}

Counter2.prototype.next = function () {
  return ++this.count;
};

Counter2.prototype.current = function () {
  return this.count;
};

const counter2 = new Counter2();
console.log(counter2.next());
console.log(counter2.current());

// 4 penggunaan ibjek argumen

// const concat = (sparator) => {
//   let args = Array.prototype.slice.call(arguments, 1);
//   return args.join(sparator);
// };

// console.log(concat("-", "a", "b", "c"));

const concat = function (sparator) {
  let args = Array.prototype.slice.call(arguments, 1);
  return args.join(sparator);
};

console.log(concat("-", "a", "b", "c"));
