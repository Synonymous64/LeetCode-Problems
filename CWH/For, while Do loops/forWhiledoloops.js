console.log("Here we will be studying about FOR | WHILE | DO | LOOPS");
// for(let i = 0; i < 10; ++i){
//     // console.log(i);
// }

// for while
// let i = 1;
// while(i < 10){
//     console.log(i);
//     ++i;
// }

// for do-while
// do {
//     if (i === 5){
//         i += 1;
//         continue;
//     }
//     console.log(i);
//     i++;
// } while (i <= 10)

// let arr = [3,2,3,4,5,6,9];            //* for iteration in arrays special loop in javascript
// arr.forEach(function(element){
//     console.log(element);
// })

let arr = [3,2,3,4,5,6,9];            //* for iteration in arrays special loop in javascript
arr.forEach(function(element1, index1, arr1){
    console.log(element1, index1, arr1);      //* it can also give you the index and the array
}) 
let obj = {
    name : "Prajwal Urkude",
    age : 19,
    type : "DEVELOPER",
    OS : "Ubuntu"
}
// for(let key in obj){
//     console.log(`${key} of the object is ${obj[key]}`);
// }
// var a = `Prajw'al`
// console.log(a);