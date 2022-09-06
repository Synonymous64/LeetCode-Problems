//! Changing the card title to red
let cardTitle = document.getElementsByClassName("card-title")[0];
cardTitle.style.color = "red";
let firstCard = document.getElementById("firstCard");
firstCard.style.color = "purple";
let cTitles = document.querySelectorAll(".card-title"); // . is mandatory for class and # is mandatory for id

console.log(cTitles);
cTitles[0].style.color = "red";
cTitles[1].style.color = "blue";
cTitles[2].style.color = "green";

//! Query selectorall returns all classes/ids and Query selector returns the foremost id/class
document.querySelector(".this").style.backgroundColor = "grey";
document.querySelector(".this").style.color = "pink";
//! Selecting by Tag names
console.log(document.getElementsByTagName("a"));
console.log(document.querySelector(".card").getElementsByTagName("a"));
//! Accessing by name
console.log(document.getElementsByName("search"));