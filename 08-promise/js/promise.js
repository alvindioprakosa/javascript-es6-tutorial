// Untuk memahami promise, kita mulai dengan sebuah contoh
// Kita akan melakukan pencarian data dari kumpulan objek

// Fungsi sinkron untuk mengambil data pengguna
function getUser() {
  return [
    { userName: "john", email: "johndoe@me.com" },
    { userName: "jane", email: "janedoe@me.com" },
    { userName: "bob", email: "bobdoe@me.com" },
  ];
}

// Fungsi untuk mencari pengguna dari data sinkron
function findUser(userName) {
  const users = getUser();
  const user = users.find((user) => user.userName === userName);
  return user;
}

// Output untuk data sinkron
console.log(findUser("bob")); // { userName: "bob", email: "bobdoe@me.com" }


// Fungsi untuk mengambil data asinkron dengan setTimeout (Data kosong di awal)
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

// Fungsi untuk mencari pengguna dari data asinkron
function findUser2(userName) {
  const users = getUser2();
  const user = users.find((user) => user.userName === userName);
  return user;
}

// Output untuk data asinkron (ini akan menghasilkan undefined karena data belum ada)
console.log(findUser2("bob")); // undefined


// Atasi dengan callback (ES5)
function getUser3(callback) {
  setTimeout(() => {
    callback([
      { userName: "john", email: "johndoe@me.com" },
      { userName: "jane", email: "janedoe@me.com" },
      { userName: "bob", email: "bobdoe@me.com" },
    ]);
  }, 1000);
}

// Fungsi untuk mencari pengguna dengan callback
function findUser3(userName, callback) {
  getUser3((users) => {
    const user = users.find((user) => user.userName === userName);
    callback(user);
  });
}

// Output untuk data asinkron dengan callback
findUser3("bob", (user) => console.log(user)); // { userName: "bob", email: "bobdoe@me.com" }


// Atasi dengan Promise (ES6)
let success = true;

function getUser4() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
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

// Fungsi untuk menangani hasil jika Promise berhasil
function onFulfilled(users) {
  const user = users.find((user) => user.userName === "bob");
  console.log(user); // { userName: "bob", email: "bobdoe@me.com" }
}

// Fungsi untuk menangani error jika Promise gagal
function onReject(error) {
  console.log(error); // "Request failed" jika gagal
}

// Memanggil Promise
const promise = getUser4();
promise.then(onFulfilled, onReject);
promise.catch(onReject);
