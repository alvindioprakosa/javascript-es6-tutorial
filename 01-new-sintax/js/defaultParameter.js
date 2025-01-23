function say(maeeage) {
  console.log(maeeage);
}

say();

function say2(message) {
  message = typeof message !== "undefined" ? message : "Hello";
  console.log(message);
}

say2();

function say3(message = "Hello") {
  console.log(message);
}
say3();
say3("hello 2");
say3(undefined);

function createDiv(
  height = "100px",
  width = "100px",
  border = "1px solid red"
) {
  let div = document.createElement("div");
  div.style.height = height;
  div.style.width = width;
  div.style.border = border;
  document.body.append(div);
  return div;
}

console.log(createDiv());
console.log(createDiv(undefined, undefined, "5px solid blue"));

function put(toy, toyBox = []) {
  toyBox.push(toy);
  return toyBox;
}
console.log(put("Toy Car"));
console.log(put("Toy Bike"));

function requereArg() {
  throw new Error("No arguments");
}

function add(x = requereArg(), y = requereArg()) {
  return x + y;
}
console.log(add(1, 2));
console.log(add(1));
