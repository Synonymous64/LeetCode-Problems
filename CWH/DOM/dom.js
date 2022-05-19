console.log("It is about Document Object Model aka DOM");
let a = document.all; // it will give all the attributes of your HTML code
a = document.body; // it will give the body of html
a = document.forms; // it will give all the form in your html
Array.from(a).forEach(function(element){ // it will give the specific element to of that html in this case is forms
    console.log(element);
})
a = document.links[0];    // it will give you all the links which is been added in the website through html
a = document.images[0]; // it will give you all the images 
a = document.scripts[0]; // it will give you the script pf js
console.log(a);