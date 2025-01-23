// untuk memahami promise kita mulai dengan sebuah contoh
// kita akan melakukan pencarian data dari kumpilan objek

function getUser() {
  return [
    { userName: "john", email: "johndoe@me.com" },
    { userName: "jane", email: "janedoe@me.com" },
    { userName: "bob", email: "bobdoe@me.com" },
  ];
}

function findUser(userName) {
  const users = getUser();
  const user = users.find((user) => user.userName === userName);
  return user;
}

console.log(findUser("bob"));

function getUser2() {
  let users = [];
  setTimeout(() => {
    users = [
      { userName: "john", email: "johndoe@me.com" },
      { userName: "jane", email: "janedoe@me.com" },
      { userName: "bob", email: "bobdoe@me.com" },
    ];
  }, 1000);
  return users;
}

function findUser2(userName) {
  const users = getUser2();
  const user = users.find((user) => user.userName === userName);
  return user;
}

console.log(findUser2("bob"));

// atasi dengan callback ES5
function getUser3(callback) {
  setTimeout(() => {
    callback([
      { userName: "john", email: "johndoe@me.com" },
      { userName: "jane", email: "janedoe@me.com" },
      { userName: "bob", email: "bobdoe@me.com" },
    ]);
  }, 1000);
}

function findUser3(userName, callback) {
  getUser3((users) => {
    const user = users.find((user) => user.userName === userName);
    callback(user);
  });
}

findUser3("bob", (user) => console.log(user));

// atasi dengan Promise ES6
let sucess = true;

function getUser4() {
  return new Promise((resolve, reject) => {
    // throw new Error("Field not found");
    setTimeout(() => {
      if (sucess) {
        resolve([
          { userName: "john", email: "johndoe@me.com" },
          { userName: "jane", email: "janedoe@me.com" },
          { userName: "bob", email: "bobdoe@me.com" },
        ]);
      } else {
        reject("Request failed");
      }
    }, 1000);
  });
}

function onFullField(users) {
  const user = users.find((user) => user.userName === "bob");
  console.log(user);
}

function onReject(error) {
  console.log(error);
}

const promise = getUser4();
promise.then(onFullField, onReject);
promise.catch(onReject);
