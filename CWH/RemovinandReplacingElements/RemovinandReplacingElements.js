console.log("This is about Removing and Replacing Elements");
let element = document.createElement("li");
//* Add a class name to the li element
element.className = 'childUl';
element.id = 'createLi';
element.setAttribute('title', 'My Title');
let ul = document.querySelector('ul.this');
ul.appendChild(element);
//* Alternate way to add inner text to the html
// let text = document.createTextNode("Hello! This is created by Prajwal");
// element.appendChild(text);
element.innerHTML ="<p> Hello! This is created by Prajwal </p> "
console.log(ul);
console.log(element);
//* To Replace Elements 
let element2 = document.createElement('h3');
element2.id = 'elem2';
element2.className = 'elem2';
let node = document.createTextNode("This is Prajwal");
element2.appendChild(node);
console.log(element2);
element.replaceWith(element2);
let myUi = document.getElementById('myUi');
myUi.replaceChild(element, document.getElementById('fui'));
myUi.removeChild(document.getElementById("lul"));
//* To get class and ID of the particular element
let pr = element2.getAttribute('id');
console.log(pr);
pr = element2.getAttribute('class');
console.log(pr);
//* To check class and ID of the particular element
pr = element.hasAttribute('id');
console.log(pr);
pr = element.hasAttribute('class');
console.log(pr);
pr = element.hasAttribute('href');
console.log(pr);
//* To remove the attributes
element2.removeAttribute('id');
let element3 = document.createElement('h1');
console.log(element3);
element3.id = "code";
element3.className = "karo";
element3.setAttribute('href', 'codewithharry.com')
element3.innerHTML = "Go to Code with Harry";
console.log(element3);
