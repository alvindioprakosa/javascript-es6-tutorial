function display(message) {
  const el = document.createElement("div");
  el.innerText = message;
  document.body.appendChild(el);
}
function display2(message) {
  const el = document.createElement("div");
  el.innerText = message;
  document.body.appendChild(el);
}

export { display, display2 };

// const disp = {
//   display: display,
//   display2: display2,
// };

// export default disp;
