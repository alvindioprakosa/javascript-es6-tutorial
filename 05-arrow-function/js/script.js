//  contoh fungsi biasa yang mengembalikan nilai

let add = function (x, y) {
  return x + y;
};
console.log(add(5, 10));

let add2 = (x, y) => x + y;
console.log(add2(5, 10));

let add3 = (x, y) => {
  return x + y;
};
console.log(add3(5, 10));

let numbers = [4, 2, 1, 3, 5];
numbers.sort(function (a, b) {
  return b - a;
});
console.log(numbers);

let numbers2 = [4, 2, 1, 3, 5];
numbers2.sort((a, b) => b - a);
console.log(numbers2);

let names = ["john", "mac", "petter"];
let lengths = names.map((name) => name.length);
console.log(lengths);

let multiplay = (x, y) => x * y;

let multiplay2 = (x, y) => x * y;

let setColor = (color) => ({ value: color });
console.log(setColor("red"));

function Car() {
  this.speed = 0;
  this.speedUp = function (speed) {
    this.speed = speed;
    let self = this;
    setTimeout(function () {
      console.log(self.speed);
    }, 1000);
  };
}

let car = new Car();
car.speedUp(10);

function Car2() {
  this.speed = 0;
  this.speedUp = function (speed) {
    this.speed = speed;
    setTimeout(() => console.log(this.speed), 1000);
  };
}

let car2 = new Car2();
car2.speedUp(10);

function dump(message) {
  console.log(message);
}

console.log("dump = " + dump.hasOwnProperty("prototype"));

let dump2 = (message) => console.log(message);
console.log("dump2 = " + dump2.hasOwnProperty("prototype"));
