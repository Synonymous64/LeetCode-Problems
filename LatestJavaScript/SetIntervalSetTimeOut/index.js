const sum = (a, b) => {
  console.log("For setTimeout", a + b);
};
//! *--------------------- SET-TIMEOUT --> IT RUNS FOR THE SINGLE TIME --------------------*
setTimeout(sum, 1000, 1, 2); //* setTimeout in different manner
let a = setTimeout(() => {
  alert("This is setTimeout");
  document.write("THIS IS PRAJWAL");
}, 3000);
let b = prompt("Do you want to run the setTimeout?");
b === "no" ? clearTimeout(a) : " "; //* this will clear the timeout, the timeout function will not work
console.log(a); //* It returns the timer id
//! *-----------= SET-INTERVAL --> IT RUNS CONTINUOUSLY WITH THAT GAP OF TIME -------------*
setInterval(() => {
  alert("THIS IS SET-INTERVAL");
}, 3000);

const sum1 = (a, b) => {
  alert("For setInterval ", a + b);
};
setInterval(sum1, 3000, 2, 4); //* setInterval in different manner
