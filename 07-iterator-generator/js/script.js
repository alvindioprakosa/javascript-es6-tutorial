// conoth perulangan array di ES5
let remarks = ["A", "B", "C"];
for (let i = 0; i < remarks.length; i++) {
  console.log(remarks[i]);
}

for (let remark of remarks) {
  console.log(remark);
}

// Contoh iterator ES6
class Sequence {
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

let eventNumber = new Sequence(2, 10, 2);
for (const num of eventNumber) {
  console.log(num);
}

// mengacess Symbol.iterable secara explicit
let iterator = eventNumber[Symbol.iterator]();
let result = iterator.next();

while (!result.done) {
  console.log(result.value);
  result = iterator.next();
}

class Sequence2 {
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
      return: () => {
        console.log("Clean up ...................");
        return { value: undefined, done: true };
      },
    };
  }
}

let oddNumber = new Sequence2(1, 10, 2);
for (const num of oddNumber) {
  if (num > 7) {
    break;
  }
  console.log(num);
}
