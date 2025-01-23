// 01. Object property initializer shorthand
// ES5
function createMachine1(name, status) {
  return {
    name: name,
    status: status,
  };
}

// ES6
function createMachine2(name, status) {
  return {
    name,
    status,
  };
}

console.log(createMachine1("Machine 1", "on"));
console.log(createMachine2("Machine 2", "on"));

// Computed property name
// ES5
let name = "Machine 3";
let machine = {
  [name]: "server",
  "machine Hour": 1000,
};

console.log(machine[name]);
console.log(machine["machine Hour"]);

let prefix = "machine";
let machine2 = {
  [prefix + " name"]: "server",
  [prefix + " Hour"]: 1000,
};

console.log(machine2["machine name"]);
console.log(machine2["machine Hour"]);

// 03. Concise method syntax
// ES5
let server = {
  name: "server",
  restart: function () {
    console.log("the " + this.name + " is restarting");
  },
};

server.restart();

let server2 = {
  name: "server",
  restart() {
    console.log("the " + this.name + " is restarting");
  },
};

server2.restart();
