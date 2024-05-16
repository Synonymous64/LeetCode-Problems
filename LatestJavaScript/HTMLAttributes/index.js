let first = document.getElementById("first");
let a = first.getAttribute("class");
console.log(a);
console.log(first.hasAttribute("class"));
console.log(first.hasAttribute("style"));
// first.setAttribute("hidden", "true"); // adding attribute
first.setAttribute("class", "True Attributes"); // adding attribute to class
first.removeAttribute("class"); // adding attribute to class
console.log(first.attributes);
//! Creating Custom attributes on html loc 11 in class
console.log(first.dataset.game);
console.log(first.dataset.player);