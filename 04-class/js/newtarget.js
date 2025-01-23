class Shape {
  constructor(name) {
    if (new.target !== Shape) {
      throw new TypeError("Shape must be called with the new keyword");
    }
    this.name = name;
  }
}

class Circle extends Shape {
  constructor(name, radius) {
    super(name);
    this.radius = radius;
  }
}

const squere = new Shape("Squere");
console.log(squere);

Shape("Circle");
