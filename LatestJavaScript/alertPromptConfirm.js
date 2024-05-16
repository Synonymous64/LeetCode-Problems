alert("This is Prajwal");
// const s = prompt("Enter the the value for s");
// console.log(s);
let s = prompt("Enter the the value for s", "123");
// you can also give the default value in prompt bar
let b = Number.parseInt(s);
let write = confirm("Do you wanna write it to the the web-page");
if (write) document.write(b);
// will write on the page whatever the value of s is
else document.write("Please allow me to write");
