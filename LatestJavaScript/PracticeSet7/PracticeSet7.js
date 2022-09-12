document.getElementsByTagName("nav")[0].firstElementChild.style.color = "red";
document.getElementsByTagName("nav")[0].lastElementChild.style.color = "red";
// document.getElementsByTagName("li")[0].style.background = "blue";
// document.getElementsByTagName("li")[1].style.background = "blue";
let n = document.getElementsByTagName("li").length;
// for(let i = 0; i < n; ++i){
//     document.getElementsByTagName("li")[i].style.background = "blue";
// }
Array.from(document.getElementsByTagName("li")).forEach((element) => {
    element.style.background = "grey";
});
// b.style.color = "red";
