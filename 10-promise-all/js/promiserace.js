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

Promise.race([p1, p2])
  .then((result) => {
    console.log(`REsult : ${result}`);
  })
  .catch((error) => {
    console.log(`Error : ${error}`);
  });
