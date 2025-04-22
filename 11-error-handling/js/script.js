// ===========================================
// 1. Error Synchronous - Bisa ditangkap try/catch
// ===========================================
function getUserById(id) {
  if (typeof id !== "number" || id <= 0) {
    throw new Error("Invalid ID argument");
  }

  return new Promise((resolve) => {
    resolve({
      id,
      username: "admin",
    });
  });
}

try {
  getUserById("a")
    .then((user) => console.log("1. User:", user.username))
    .catch((err) => console.log("1. Catch:", err));
} catch (error) {
  console.log("1. Try/Catch:", error);
}

// ===========================================
// 2. Throw di dalam Promise executor - Tidak bisa ditangkap dengan .catch
// ===========================================
let authorized = false;

function getUserById2(id) {
  return new Promise((resolve, reject) => {
    if (!authorized) {
      throw new Error("Unauthorized"); // ❌ Tidak akan tertangkap oleh .catch
    }

    resolve({
      id,
      username: "admin",
    });
  });
}

try {
  getUserById2(10)
    .then((user) => console.log("2. User:", user.username))
    .catch((err) => console.log("2. Catch:", err));
} catch (error) {
  console.log("2. Try/Catch:", error); // ❌ Tidak akan tertangkap
}

// ===========================================
// 3. Menggunakan reject untuk error async - .catch bekerja
// ===========================================
function getUserById3(id) {
  return new Promise((resolve, reject) => {
    if (!authorized) {
      reject("Reject Unauthorized"); // ✅ .catch akan menangkap ini
      return;
    }

    resolve({
      id,
      username: "admin",
    });
  });
}

try {
  getUserById3(10)
    .then((user) => console.log("3. User:", user.username))
    .catch((err) => console.log("3. Catch:", err)); // ✅ Ditangkap di sini
} catch (error) {
  console.log("3. Try/Catch:", error);
}

// ===========================================
// 4. Tidak pakai .catch - Error tidak tertangkap
// ===========================================
function getUserById4(id) {
  return new Promise((resolve, reject) => {
    if (!authorized) {
      reject("Reject 4 Unauthorized"); // ❌ Tidak ditangkap karena tidak ada .catch
      return;
    }

    resolve({
      id,
      username: "admin",
    });
  });
}

try {
  getUserById4(10).then((user) => console.log("4. User:", user.username));
  console.log("4. Next process...");
} catch (error) {
  console.log("4. Try/Catch:", error); // ❌ Tidak menangkap reject dari Promise
}
