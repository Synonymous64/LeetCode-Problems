// console.log("This is a Clock Device");
let clock = document.getElementById("clock");
// import {format} from 'date-fns'

setInterval(() => {
  let today = new Date();
  let options = {
    // day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };
  clock.innerHTML = `<h2>${today.toLocaleTimeString("en-in", options)}</h2>`;
}, 1000);
