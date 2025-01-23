// JAVASCRIPT GENERATOR
// Dalam JavaScript, fungsi reguler dijalankan berdasarkan model run-to-completion.
// Ia tidak dapat berhenti di tengah jalan dan kemudian melanjutkan dari tempat ia berhenti
// contoh

function foo() {
  console.log("I");
  console.log("Cannot");
  console.log("Pause");
}
foo();

function* genarate() {
  console.log("invoke 1st time");
  yield 1;
  console.log("invoke 2nd time");
  yield 2;
}

let gen = genarate();
console.log(gen);

let result2 = gen.next();
console.log(result2);
for (const value of gen) {
  console.log(value);
}

function* forever() {
  let index = 0;
  while (true) {
    yield index++;
  }
}
let f = forever();
console.log(f.next());
console.log(f.next());
console.log(f.next());
console.log(f.next());
console.log(f.next());

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
for (const value of oddNumber) {
  console.log(value);
}

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
for (const value of oddNumber2) {
  console.log(value);
}
