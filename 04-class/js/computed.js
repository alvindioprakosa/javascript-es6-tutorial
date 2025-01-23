const age = 25;
const name = "Pcode";
const person = {
  [`age-${age}`]: "twenty five",
  [`greetting-${name}`]: function () {
    return `hello ${name}`;
  },
};

console.log(person["age-25"]);
console.log(person["greetting-Pcode"]());

let nama = "fullName";

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get [nama]() {
    return `${this.firstName} ${this.lastName}`;
  }
}

let person2 = new Person("Pojok", "Code");
console.log(person2.fullName);
