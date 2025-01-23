// contoh static method di ES5

function Person(name) {
  this.name = name;
}

Person.prototype.getName = function () {
  return this.name;
};

Person.createAnonimous = function (gender) {
  let name = gender === "male" ? "Mr. Anonimous" : "Mrs. Anonimous";
  return new Person(name);
};

var anonim = Person.createAnonimous();
console.log(anonim.getName());

// contoh di ES6

class Person2 {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  static createAnonimous(gender) {
    let name = gender === "male" ? "Mr. Anonimous" : "Mrs. Anonimous";
    return new Person2(name);
  }
}

let anonim2 = Person2.createAnonimous("male");
console.log(anonim2.getName());

// let anomim3 = new Person2("Pojok Code");
// anomim3.createAnonimous("female");

class Item {
  static count = 0;
  static getCount() {
    return Item.count;
  }
}

console.log(Item.getCount());

class Item2 {
  constructor(name, quantity) {
    this.name = name;
    this.quantity = quantity;
    this.constructor.count++;
  }

  static count = 0;
  static getCount() {
    return Item2.count;
  }
}

let pen = new Item2("pen", 10);
let book = new Item2("book", 5);
console.log(Item2.getCount());
