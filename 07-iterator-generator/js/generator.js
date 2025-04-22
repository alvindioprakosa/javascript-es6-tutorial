// ==========================
// 1. Fungsi biasa (tidak bisa pause)
// ==========================
function foo() {
  console.log("I");
  console.log("Cannot");
  console.log("Pause");
}
foo();

// ==========================
// 2. Generator function dasar
// ==========================
function* generate() {
  console.log("Invoke 1st time");
  yield 1;

  console.log("Invoke 2nd time");
  yield 2;
}

let gen = generate();
console.log("Generator object:", gen);

let result1 = gen.next(); // trigger 1st yield
console.log("Hasil pertama:", result1); // { value: 1, done: false }

for (const value of gen) {
  console.log("Iterasi berikutnya:", value); // Akan lanjut dari yield ke-2
}

// ==========================
// 3. Generator tak hingga
// ==========================
function* forever() {
  let index = 0;
  while (true) {
    yield index++;
  }
}

let f = forever();
console.log("Forever:", f.next()); // { value: 0, done: false }
console.log("Forever:", f.next()); // { value: 1, done: false }
console.log("Forever:", f.next()); // { value: 2, done: false }
console.log("Forever:", f.next()); // { value: 3, done: false }
console.log("Forever:", f.next()); // { value: 4, done: false }

// ==========================
// 4. Custom Iterator Class (tanpa generator)
// ==========================
class Sequence3 {
  constructor(start = 0, end = Infinity, interval = 1) {
    this.start = start;
    this.end = end;
    this.interval = interval;
  }

  [Symbol.iterator]() {
    let counter = 0;
    let nextIndex = this.start;

    return {
      next: () => {
        if (nextIndex <= this.end) {
          let result = { value: nextIndex, done: false };
          nextIndex += this.interval;
          counter++;
          return result;
        }
        return { value: counter, done: true };
      },
    };
  }
}

let oddNumber = new Sequence3(1, 10, 2);
console.log("Custom iterator (tanpa generator):");
for (const value of oddNumber) {
  console.log(value);
}

// ==========================
// 5. Custom Iterator Class (dengan generator)
// ==========================
class Sequence4 {
  constructor(start = 0, end = Infinity, interval = 1) {
    this.start = start;
    this.end = end;
    this.interval = interval;
  }

  *[Symbol.iterator]() {
    for (let i = this.start; i <= this.end; i += this.interval) {
      yield i;
    }
  }
}

let oddNumber2 = new Sequence4(1, 10, 2);
console.log("Custom iterator (dengan generator):");
for (const value of oddNumber2) {
  console.log(value);
}
