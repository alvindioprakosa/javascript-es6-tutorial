// 1. Membuat Symbol
let s = Symbol("foo");
console.log("Symbol unik:", Symbol() === Symbol()); // false

// 2. Memberikan deskripsi ke Symbol
let firstName = Symbol("firstName");
let lastName = Symbol("lastName");
console.log("First Name Symbol:", firstName);
console.log("Last Name Symbol:", lastName);
console.log("Tipe data:", typeof firstName); // symbol

// 3. Symbol tidak bisa dibuat dengan 'new'
// let s2 = new Symbol(); // ❌ Error

// 4. Berbagi Symbol menggunakan Symbol.for
let ssn = Symbol.for("ssn");
let citizenId = Symbol.for("ssn");
console.log("Shared Symbol:", ssn === citizenId); // true

// 5. Mendapatkan key dari Symbol yang terdaftar
console.log("Key dari ssn:", Symbol.keyFor(ssn)); // "ssn"

// 6. Mendapatkan undefined untuk symbol lokal
let localSym = Symbol("local");
console.log("Key dari localSym:", Symbol.keyFor(localSym)); // undefined

// 7. Menggunakan Symbol sebagai nilai unik
let statuses = {
  OPEN: Symbol("open"),
  IN_PROGRESS: Symbol("in progress"),
  COMPLETED: Symbol("completed"),
  HOLD: Symbol("hold"),
  CANCELLED: Symbol("cancelled"),
};

let task = {
  setStatus(status) {
    console.log("Status ditetapkan:", status);
  },
};
task.setStatus(statuses.OPEN);

// 8. Menggunakan Symbol sebagai property key
let status = Symbol("status");
task = {
  [status]: statuses.OPEN,
  description: "Belajar ES6 Symbols",
};
console.log("Task dengan Symbol property:", task);

// 9. Symbol.iterator secara default di array
let numbers = [1, 2, 3];
console.log("Iterasi dengan for...of:");
for (let num of numbers) {
  console.log(num);
}

// 10. Manual menggunakan Symbol.iterator
let iterator = numbers[Symbol.iterator]();
console.log("Iterasi manual:");
console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: 3, done: false }
console.log(iterator.next()); // { value: undefined, done: true }

// 11. Custom iterable class dengan Symbol.iterator
class List {
  constructor() {
    this.elements = [];
  }

  add(element) {
    this.elements.push(element);
    return this;
  }

  *[Symbol.iterator]() {
    for (let element of this.elements) {
      yield element;
    }
  }
}

let cars = new List();
cars.add("BMW").add("Mercedes").add("Audi");

console.log("Custom iterable class:");
for (let car of cars) {
  console.log(car);
}

// 12. Symbol.toPrimitive: konversi objek ke primitif
function Money(amount, currency) {
  this.amount = amount;
  this.currency = currency;
}

Money.prototype[Symbol.toPrimitive] = function (hint) {
  switch (hint) {
    case "string":
      return `${this.amount}${this.currency}`;
    case "number":
      return this.amount;
    default:
      return `${this.amount}${this.currency}`;
  }
};

let price = new Money(100, "USD");
console.log("toPrimitive string:", "Price is: " + price); // "Price is: 100USD"
console.log("toPrimitive number:", +price + 1);           // 101
console.log("toPrimitive String():", String(price));      // "100USD"
