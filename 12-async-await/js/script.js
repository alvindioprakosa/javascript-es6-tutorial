// misalkan kita perlu melakukan 3 operasi asinkron
// 1. mengambil data dari database
// 2. dapatkan layanan dari API
// 3. Hitung biaya

// ES5
function getUser(userId, callback) {
  console.log("get data from database");
  setTimeout(() => {
    callback({
      userId,
      userName: "Pojok Code",
    });
  }, 1000);
}

function getService(user, callback) {
  console.log(`get service of ${user.userName} from API`);
  setTimeout(() => {
    callback(["email", "VPN", "CDN"]);
  }, 2 * 1000);
}

function getServieCost(service, callback) {
  console.log(`Calculate service cost of ${service}`);
  setTimeout(() => {
    callback(service.length * 1000);
  }, 3 * 1000);
}

getUser(100, (user) => {
  getService(user, (service) => {
    getServieCost(service, (cost) => {
      console.log(`Total cost: ${cost}`);
    });
  });
});

// ES6
function getUser2(userId) {
  return new Promise((resolve, reject) => {
    console.log("get data from database");
    setTimeout(() => {
      resolve({
        userId,
        userName: "Pojok Code",
      });
    }, 1000);
  });
}

function getService2(user) {
  return new Promise((resolve, reject) => {
    console.log(`get service of ${user.userName} from API`);
    setTimeout(() => {
      resolve(["email", "VPN", "CDN"]);
    }, 2 * 1000);
  });
}

function getServiceCost2(service) {
  return new Promise((resolve, reject) => {
    console.log(`Calculate service cost of ${service}`);
    setTimeout(() => {
      resolve(service.length * 1000);
    }, 3 * 1000);
  });
}

getUser2(100).then(getService2).then(getServiceCost2).then(console.log);

// ES2017
async function showServiceCost() {
  let user = await getUser2(100);
  let service = await getService2(user);
  let cost = await getServiceCost2(service);
  console.log(`Total cost ES2017 : ${cost}`);
}
showServiceCost();

async function getUSer3(userId) {
  try {
    return await new Promise((resolve, reject) => {
      reject("Error ----------------------------");
    });
  } catch (error) {
    console.log(error);
  }
}

async function showServiceCost2() {
  try {
    let user = await getUSer3(100);
    let service = await getService2(user);
    let cost = await getServiceCost2(service);
    console.log(`Total cost ES2017 new 2 : ${cost}`);
  } catch (error) {
    console.log(error);
  }
}

showServiceCost2();
