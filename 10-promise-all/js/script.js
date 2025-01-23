// contoh promise all resolved
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("The first promise is resolved");
    resolve(10);
  }, 1 * 1000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("The second promise is resolved");
    resolve(20);
  }, 2 * 1000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("The third promise is resolved");
    resolve(30);
  }, 3 * 1000);
});

Promise.all([p1, p2, p3]).then((result) => {
  const total = result.reduce((a, b) => a + b);
  console.log(`REsult : ${result}`);
  console.log(`Total : ${total}`);
});

// contoh promise all dengan reject
const q1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("The first promise is resolved");
    resolve(10);
  }, 1 * 1000);
});

const q2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("The second promise is resolved");
    reject("field");
  }, 2 * 1000);
});

const q3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("The third promise is resolved");
    resolve(30);
  }, 3 * 1000);
});

Promise.all([q1, q2, q3]).then(console.log).catch(console.log);
