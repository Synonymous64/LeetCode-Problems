let first = document.getElementById("first")
// first.className = "second";
console.log(first);
first.className = "second";
console.log(first.classList);
// to remove the specific class
first.classList.remove("second");
first.classList.add("third");
first.classList.add("text-blue"); // will append

//* it will continuously do the vice-versa
first.classList.toggle("third"); // will remove
first.classList.toggle("third"); // will add and ...goes on.
console.log(first.classList.contains("third")); //!... it does what it says returns boolean
