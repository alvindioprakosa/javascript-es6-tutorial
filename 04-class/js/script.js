// contoh cara membuat objek ES5

function Person(name) {
  this.name = name;
}

Person.prototype.getName = function () {
  return this.name;
};

var john = new Person("Pojok Code");
console.log(john.getName());

console.log(john instanceof Person);
console.log(john instanceof Object);

class Person2 {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }
}

let code = new Person2("Pojok Code");
console.log(code.getName());
console.log(code instanceof Person2);
console.log(code instanceof Object);

// hal yang perlu diperhatiakan ketika membuat objek dengan class
// 1. pendeklarasian class tidak hoisted seperti funcrion
// 2. semua code dalam class dijalankan dengan mode strict dan ini tidak dapat diubah
// 3. kerika membuat objek di class harus dengan new
