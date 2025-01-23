// conth dengan ES5

function Animal(legs) {
  this.legs = legs;
}

Animal.prototype.walk = function () {
  console.log("walking on " + this.legs + " legs");
};

function Bird(legs) {
  Animal.call(this, legs);
}

Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Animal;

Bird.prototype.fly = function () {
  console.log("flying");
};

var pigeon = new Bird(2);
pigeon.walk();
pigeon.fly();

// contoh dengan ES6
class Animal2 {
  constructor(legs) {
    this.legs = legs;
  }

  walk() {
    console.log(`walking on ${this.legs} legs`);
  }
}

class Bird2 extends Animal2 {
  constructor(legs, color) {
    super(legs);
    this.color = color;
  }

  fly() {
    console.log("flying");
  }

  getColor() {
    return this.color;
  }
}

let bird2 = new Bird2(2, "red");
bird2.walk();
bird2.fly();
console.log(bird2.getColor());

class Dog extends Animal2 {
  constructor() {
    super(4);
  }

  walk() {
    super.walk();
    console.log("I can walk");
  }
}

let dog = new Dog();
dog.walk();
