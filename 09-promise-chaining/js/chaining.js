// Promise chaining
// terkadang kita ingin membuat oprasi dari hasil process sebelumnya
// contoh

let p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(10);
  }, 3 * 100);
});

p.then((result) => {
  console.log(result);
  return result * 2;
})
  .then((result) => {
    console.log(result);
    return result * 3;
  })
  .then((result) => {
    console.log(result);
    return result * 4;
  });

// Conoth penanganan banyak promise
let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(10);
  }, 3 * 100);
});

p2.then((result) => {
  console.log(result);
  return result * 2;
});

p2.then((result) => {
  console.log(result);
  return result * 3;
});

p2.then((result) => {
  console.log(result);
  return result * 4;
});

// chaining yang mengembalikan promise
let p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(10);
  }, 3 * 100);
});

p3.then((result) => {
  console.log(result);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(result * 2);
    }, 3 * 100);
  });
})
  .then((result) => {
    console.log(result);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(result * 3);
      }, 3 * 100);
    });
  })
  .then((result) => console.log(result));

// Contoh jika ingin membuat oprasi asinkron secara berurutan
function getUser(userId) {
  return new Promise((resolve, reject) => {
    console.log(" get data from database");
    setTimeout(() => {
      resolve({ userId: userId, userName: "admin" });
    }, 1000);
  });
}

function getService(user) {
  return new Promise((resolve, reject) => {
    console.log(`Get the service of ${user.userName} from API`);
    setTimeout(() => {
      resolve(["Email", "VPN", "CDN"]);
    }, 3 * 1000);
  });
}

function getServiceCost(service) {
  return new Promise((resolve, reject) => {
    console.log(`Calculate the service cost of ${service}`);
    setTimeout(() => {
      resolve(service.length * 100);
    }, 2 * 1000);
  });
}

getUser(100).then(getService).then(getServiceCost).then(console.log);
