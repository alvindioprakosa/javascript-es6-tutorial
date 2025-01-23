const TIMEOUT = 500;
const DATA_LOAD_TIME = 5000;

function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const message = "Promise.race() DEmo";
      resolve(message);
    }, DATA_LOAD_TIME);
  });
}

function showContent(message) {
  document.querySelector("#message").textContent = message;
}

function timeout() {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject(), TIMEOUT);
  });
}

function showLoadingIndicaator() {
  document.querySelector("#loader").className = "loader";
}

function hideLoadingIndicaator() {
  document.querySelector("#loader").className = "";
}

const btn = document.querySelector("#btnGet");
btn.addEventListener("click", () => {
  console.log("run ..........");
  // rest UI
  reset();

  // show content
  Promise.race([
    getData().then(showContent).then(hideLoadingIndicaator),
    timeout(),
  ]).catch(showLoadingIndicaator);
});

function reset() {
  hideLoadingIndicaator();
  showContent("");
}
