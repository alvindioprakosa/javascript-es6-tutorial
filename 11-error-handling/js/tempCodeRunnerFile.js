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