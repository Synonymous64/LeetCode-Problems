console.log("This is about HTML Selectors");

// Element Selectors:
// single element selectors 
// multiple element selectors
//! ALL OF THESE ARE SINGLE ELEMENT SELECTORS FROM THE DOM
// let element = document.getElementById('first');
// element = element.className; // it will print the class name 
// element = element.childNodes;    // it will give the text you have written to that tag
// element = element.parentNode; // it will print the name of the parent node
// element.style.color = 'red'; // you can also change the color from the ID through JavaScript
// element.innerText = "Prajwal is a good boy"; // you can also change the text through this
// element.innerHTML = "<b> Prajwal is good boy </b>" // you can apply html attributes through this


// // console.log(element.innerHTML); // it will print the inner html text
// console.log(element.innerText); // it will print the simple text inside the html


// let pale = document.querySelector('#first'); // it will print the whole information related to that ID.
// pale = document.querySelector('.container'); // it will print the whole information related to that Class.
// pale = document.querySelector('#second'); // you can directly put the tag and it will give the text inside it with the element
// pale.style.color = 'blue'; // to change the color
// console.log(pale);

//! ALL OF THESE ARE MULTIPLE ELEMENT SELECTORS FROM THE DOM

let eli = document.getElementsByClassName('container');     // taking element with id
console.log(eli[0].getElementsByClassName('child1'));     // in the class taking element with class which are inside this class

eli = document.getElementsByTagName('div');
console.log(eli);            // will get all the div tag by using such function

Array.from(eli).forEach(element => {
    console.log(element);
    element.style.color = 'red';
});

