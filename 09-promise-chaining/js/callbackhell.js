// Callback Hell di JavaScript adalah situasi di mana terdapat banyak fungsi callback
//yang bersarang di bawah satu sama lain, membentuk struktur piramida.

// Contoh callback hell dengan dummy data

function getData(callback) {
  setTimeout(() => {
    let data = Math.random();
    callback(data);
  }, 1000);
}

function processData(data, callback) {
  let result = data * 10;
  callback(result);
}

function displayResult(result, callback) {
  console.log("Hasil : " + result);
  callback();
}

getData((data) => {
  console.log("Data : " + data);
  processData(data, (result) => {
    displayResult(result, () => {
      console.log("Selesai...");
    });
  });
});
