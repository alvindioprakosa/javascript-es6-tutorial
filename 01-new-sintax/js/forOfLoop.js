let scores = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
for (let score of scores) {
  console.log(score + 5);
}

for (const score of scores) {
  console.log(score + 5);
}

let colors = ["red", "green", "blue"];

for (const [index, color] of colors.entries()) {
  console.log(index, color);
}

const ratings = [
  { user: "jon", score: 3 },
  { user: "sarah", score: 4 },
  { user: "bob", score: 5 },
  { user: "lisa", score: 1 },
];

let sum = 0;
for (const { score } of ratings) {
  sum += score;
}
console.log(sum);

colors = new Map();

colors.set("red", "#FF0000");
colors.set("green", "#00FF00");
colors.set("blue", "#0000FF");

for (let color of colors) {
  console.log(color);
}

scores = [10, 20, 30];
scores.message = "Hi";

for (let scor in scores) {
  console.log(scor);
}

for (let scor of scores) {
  console.log(scor);
}
