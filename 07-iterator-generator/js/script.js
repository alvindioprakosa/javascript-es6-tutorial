// ===========================================
// 1. Perulangan array di ES5 dan ES6
// ===========================================
let remarks = ["A", "B", "C"];

console.log("Loop dengan for ES5:");
for (let i = 0; i < remarks.length; i++) {
  console.log(remarks[i]);
}

console.log("Loop dengan for...of ES6:");
for (let remark of remarks) {
  console.log(remark);
}

// ===========================================
// 2. Contoh iterator ES6 (Sequence 1)
// ===========================================
class Sequence {
  constructor(start = 0, end = Infinity, interval = 1) {
    this.start = start;
    this.end = end;
    this.interval = interval;
  }

  [Symbol.iterator]() {
    let nextIndex = this.start;
    return {
      next: () => {
        if (nextIndex <= this.end) {
          let result = { value: nextIndex, done: false };
          nextIndex += this.interval;
          return result;
        }
        return { value: undefined, done: true };
      },
    };
  }
}

let evenNumbers = new Sequence(2, 10, 2);

console.log("Loop dengan for...of:");
for (const num of evenNumbers) {
  console.log(num);
}

// ===========================================
// 3. Akses Symbol.iterator secara eksplisit
// ===========================================
console.log("Akses Symbol.iterator manual:");
let iterator = evenNumbers[Symbol.iterator]();
let result = iterator.next();

while (!result.done) {
  console.log(result.value);
  result = iterator.next();
}

// ===========================================
// 4. Sequence2 dengan implementasi return()
//    untuk cleanup saat loop di-break
// ===========================================
class Sequence2 {
  constructor(start = 0, end = Infinity, interval = 1) {
    this.start = start;
    this.end = end;
    this.interval = interval;
  }

  [Symbol.iterator]() {
    let nextIndex = this.start;
    return {
      next: () => {
        if (nextIndex <= this.end) {
          let result = { value: nextIndex, done: false };
          nextIndex += this.interval;
          return result;
        }
        return { value: undefined, done: true };
      },
      return: () => {
        console.log("Clean up ...................");
        return { value: undefined, done: true };
      },
    };
  }
}

console.log("Loop dengan break (testing return):");
let oddNumbers = new Sequence2(1, 10, 2);
for (const num of oddNumbers) {
  if (num > 7) {
    break; // trigger return()
  }
  console.log(num);
}
