function sum(...args) {
  let total = 0;
  for (const a of args) {
    total += a;
  }
  return total;
}

console.log(sum(1, 2, 3, 4, 5, 6));

function sum(...args) {
  return args
    .filter(function (e) {
      return typeof e === "number";
    })
    .reduce(function (prev, curr) {
      return prev + curr;
    });
}

let result = sum(10, "Hi", null, undefined, 25);
console.log(result);

const combine = (...args) => {
  return args.reduce(function (prev, curr) {
    return prev + " " + curr;
  });
};

let message = combine("JavaScript", "Rest", "Parameters");
console.log(message);
