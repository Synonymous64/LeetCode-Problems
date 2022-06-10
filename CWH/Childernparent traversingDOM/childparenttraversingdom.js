console.log("This is about the Child Parent and travering in DOM");
let cont = document.querySelector('.no');
cont = document.querySelector('.container');
// console.log(cont.childNodes);
let nodeName = cont.childNodes[1].nodeName;
let nodeType = cont.childNodes[1].nodeType;
console.log(nodeName);
console.log(nodeType);
/**
 * *Node Types
 * * 1)Elements
 * * 2)Attributes
 * * 3)Text Node 
 * * 8)Comment
 * * 9)Documents
 * * 10) DoctType
 * */ 
let container = document.querySelector('div.container');
//* To Get the children of a children of a children
console.log(container.children[1].children[0].children);
//* Gives the first child
console.log(container.firstChild);
//* Display Elements
console.log(container.firstElementChild);
//* Gives the last child
console.log(container.lastChild);
//* Display Elements
console.log(container.lastElementChild);
//* Gives the count of child elements
console.log(container.childElementCount);
//* Gives the parent node
console.log(container.firstElementChild.parentElement);
//* Gives it's sibling
console.log(container.firstElementChild.nextSibling);
//* Gives it's next element sibling
console.log(container.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling);
