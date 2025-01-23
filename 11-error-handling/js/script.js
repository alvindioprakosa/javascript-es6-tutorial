// conoth normal error

function getUserById(id) {
  if (typeof is !== "number" || id <= 0) {
    throw new Error("invalid id argument");
  }

  return new Promise((resolve, reject) => {
    resolve({
      id,
      username: "admin",
    });
  });
}

// getUserById("a")
//   .then((user) => console.log(user.username))
//   .catch((err) => console.log(err));

try {
  getUserById("a")
    .then((user) => console.log(user.username))
    .catch((err) => console.log(`Corror .catch : ${err}`));
} catch (error) {
  console.log(`Error by try/catch : ${error}`);
}

// 2 keslahan dalam Promise

let authorized = false;

function getUserById2(id) {
  return new Promise((resolve, reject) => {
    if (!authorized) {
      throw new Error("Unauthorized");
    }

    resolve({
      id,
      username: "admin",
    });
  });
}

try {
  getUserById2(10)
    .then((user) => console.log(user.username))
    .catch((err) => console.log(`Corror .catch : ${err}`));
} catch (error) {
  console.log(`Error by try/catch : ${error}`);
}

// 3 memanggil fungsi rejct
function getUserById3(id) {
  return new Promise((resolve, reject) => {
    if (!authorized) {
      reject("Reject Unauthorized");
    }

    resolve({
      id,
      username: "admin",
    });
  });
}

try {
  getUserById3(10)
    .then((user) => console.log(user.username))
    .catch((err) => console.log(`Corror .catch : ${err}`));
} catch (error) {
  console.log(`Error by try/catch : ${error}`);
}

// 4 tidak ada method catch

function getUserById4(id) {
  return new Promise((resolve, reject) => {
    if (!authorized) {
      reject("Reject 4 Unauthorized");
    }

    resolve({
      id,
      username: "admin",
    });
  });
}

try {
  getUserById4(10).then((user) => console.log(user.username));
  console.log("next process ....");
} catch (error) {
  console.log(`Error by try/catch : ${error}`);
}
