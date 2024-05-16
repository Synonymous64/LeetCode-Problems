console.log("This is about Map | Filter | Reduce in Javascript");
let arr = [10, 11, 12, 14];
// console.table(arr);
//! _____________________________________ARRAYS MAP METHOD____________________________________________ 
//* Whats the difference between Maps and forEach ? 
//* -->  Map Creates a new Array by performing some operations on each array element
let a = arr.map((ele, index, array) =>{
    console.log(ele, index, array);
    //! Returning is important if you wanna save it to the other array 
    return ele
})
//! Creating New Array Via Map 
console.log(a);
// ! Map Returns an array


// let b = arr.forEach(ele=>{
//     console.log(ele);
//     return ele;
// })
//! Doesn't workin in forEach loop
// console.log(b);

//!------------------------------------ARRAYS FILTER METHOD-----------------------------------------
let arr2 = [1,2,3,4,5,6];
//! it is basically a filtering process of array 
let c = arr2.filter((eli)=>{
    return eli > 4;
})
// ! Filter Function does not modify the original array 
// ! Filter Returns an array
console.table(c);

//!------------------------------------ARRAYS REDUCE METHOD-----------------------------------------

let arr3 = [2,4,6,8,10];
let d = arr3.reduce((a, b)=>{
    console.log(a + b);
    return a + b;
})

console.log(d);

//! The Other Way around 
const reduceFunct = (a, b)=>{
    return a + b;
}
let e = arr3.reduce(reduceFunct);
console.log(e);