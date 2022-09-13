console.log(document.getElementsByTagName("h2")[0]); //* Will print tag content
console.dir(document.getElementsByTagName("h2")[0]); //* will print tag properties more like js object
console.log(document.body.firstChild.nodeName);
console.log(document.body.firstElementChild.nodeName);
first = document.getElementById("first");
// first.innerHTML = "Hello";
// first.outerHTML = "Hello";
console.log(document.body.textContent); //! It will only give the text-content

console.log(document.body.firstChild.data);
let second = document.getElementById("second");
second.hidden = false; //! It will show all the hidden properties/content
