// console.log("It is about solving our first exercise webpage crawler");
// console.log("Enter the element with you want the linkes of");
// // let a = document.links;
// // Array.from(a).forEach(function(element){
// //     if(element.href.includes("Javascript")){
// //         console.log(element.href);
// //     }
// // });

let a = "tailwind";
let links = document.links;
console.log(links);
Array.from(links).forEach(function(element){
    if(element.href.includes(a))
        console.log(element.href);
})

//* extracting all the links which contain the word tailwind