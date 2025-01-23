function load(url) {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.onreadystatechange = function (e) {
      if (this.readyState === 4) {
        if (this.status == 200) {
          resolve(this.response);
        } else {
          reject(this.status);
        }
      }
    };
    request.open("GET", url, true);
    request.send();
  });
}

const btn = document.querySelector("#btnGet");
const msg = document.querySelector("#message");

btn.onclick = function () {
  load("db.json")
    .then((response) => {
      const data = JSON.parse(response);
      console.log(data);
      msg.innerHTML = data.message;
    })
    .catch((error) => {
      msg.innerHTML = "Error: " + error;
    });
};
