// Symbol es6
// symbol menciptakan nilai unik setiap dibuat
// conoth membuat symbol
let s = Symbol("foo");

console.log(Symbol() === Symbol());

// sumbol menerima deskripsi walaupun sebagai argumen optional.

let firstName = Symbol("firstName"),
  lastName = Symbol("lastName");
console.log(firstName, lastName);

console.log(typeof firstName);

// symbol adalah nilai primitif jdi jika menggunakan new akan error
// let s2 = new Symbol();

// BERBAGI Symbol
// BERBAGI SYMBOL KITA BISA MENGGUNAKAN FOR
let ssn = Symbol.for("ssn");
let citizenId = Symbol.for("ssn");
console.log(ssn === citizenId);

// untuk mendapatkan kunci yang terkait dengan suatu symbol gunakan keyFor
console.log(Symbol.keyFor(ssn));

// jika symbol tidak ada dalam registry maka akan mengembalikan undefined

// console.log(Symbol.keyFor(systemId));

// PENGGUNAAN SYMBOL
// 1. menggunakan symbol sebagai nilai unik

let statuses = {
  OPEN: Symbol("open"),
  IN_PROGRESS: Symbol("in progress"),
  COMPLETED: Symbol("completed"),
  HOLD: Symbol("hold"),
  CANCELLED: Symbol("cancelled"),
};

let task = {
  setStatus(status) {
    console.log(status);
  },
};

task.setStatus(statuses.OPEN);

// menggunakan symbol sebagai nama property
let status = Symbol("status");
task = {
  [status]: statuses.OPEN,
  description: "Learn ES6 Symbols",
};
console.log(task);

// symbol iterator
var numbers = [1, 2, 3];
// untuk mengurainya kita bisa menggunakan for of
for (let num of numbers) {
  console.log(num);
}

// secara internal sebenarnya javascript terlebih dahulu memanggil Symbol.iterator

var iterator = numbers[Symbol.iterator]();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

// Secara default, koleksi tidak dapat diubah. Namun, Anda dapat membuatnya dapat diubah dengan menggunakan seperti Symbol.iterator

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

for (let c of cars) {
  console.log(c);
}

// Metode Symbol.toPrimitive menentukan apa yang harus terjadi ketika suatu objek diubah menjadi nilai primitif.
function Money(amount, currency) {
  this.amount = amount;
  this.currency = currency;
}

function Money(amount, currency) {
  this.amount = amount;
  this.currency = currency;
}

Money.prototype[Symbol.toPrimitive] = function (hint) {
  var result;
  switch (hint) {
    case "string":
      result = this.amount + this.currency;
      break;
    case "number":
      result = this.amount;
      break;
    default:
      result = this.amount + this.currency;
      break;
  }
  return result;
};

var price = new Money(100, "USD");
console.log("Price is: " + price);
console.log(+price + 1);
console.log(String(price));
