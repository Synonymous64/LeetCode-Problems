let alert1 = document.getElementsByClassName("alert1")[0];
let alert2 = document.getElementsByClassName("alert2")[0];
let alert3 = document.getElementsByClassName("alert3")[0];
alert1.addEventListener("click", () => {
  alert("Button 1");
});
alert2.addEventListener("click", () => {
  alert("Button 2");
});
alert3.addEventListener("click", () => {
  alert("Button 3");
});
let google = document.getElementsByClassName("google")[0];
let insta = document.getElementsByClassName("insta")[0];
let twitter = document.getElementsByClassName("twitter")[0];

google.addEventListener("click", () => {
  // let url = `https://google.com/search?q=javascript`;
  let url = `https://google.com`;
  let win = window.open(
    url,
    "",
    "width=500, height=500, scrollbars=yes, resizable=yes"
  );
  win.focus();
});
insta.addEventListener("click", () => {
  // let url = `https://google.com/search?q=javascript`;
  let url = `https://instagram.com`;
  let win = window.open(
    url,
    "",
    "width=500, height=500, scrollbars=yes, resizable=yes"
  );
  win.focus();
});
twitter.addEventListener("click", () => {
  // let url = `https://google.com/search?q=javascript`;
  let url = `https://twitter.com`;
  let win = window.open(
    url,
    "",
    "width=500, height=500, scrollbars=yes, resizable=yes"
  );
  win.focus();
});
const fetchContent = async (url) => {
  con = await fetch(url);
  let a = await con.json();
  return a;
};
setInterval(async () => {
  let url = "https://jsonplaceholder.typicode.com/todos/1";
  console.log(await fetchContent(url));
}, 3000);

setInterval(() => {
  document.querySelector("#bulb").classList.toggle("bulb");
}, 100);
