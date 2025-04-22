function getUserById2(id) {
  return new Promise((resolve, reject) => {
    const authorized = false; // atau true

    if (!authorized) {
      return reject(new Error("Unauthorized")); // Ganti throw jadi reject
    }

    resolve({
      id,
      username: "admin",
    });
  });
}

getUserById2(10)
  .then((user) => console.log(user.username))
  .catch((err) => console.log(`Error from .catch: ${err.message}`));
