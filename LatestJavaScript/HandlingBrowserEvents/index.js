let btn = document.getElementsByClassName("btn")[0];
console.log(btn);
btn.addEventListener("click", (e) => {
  console.log("Click Listener called");
  console.log(e);
  console.log(e.type, e.clientX, e.clientY);
//   console.log(e.target.value);
});
//! To remove the event listener, we have to defined function into any variable and then pass to the event listener because we have to create the reference of the function
let x = (e) => {
  console.log("Click Listener called 2");
};
btn.addEventListener("click", x);
let a = Number.parseInt(prompt("what's your favourite number :)"));
if (a === 2) {
  btn.removeEventListener("click", x);
}
