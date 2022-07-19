//! This are the Primitive datatypes in JS 
//! nn bb ss u
let a = null;              //! n = null
let b = 234;            //! n = number
let c = true;            //! b = boolean
let d = BigInt("54563") + BigInt("2492");            //! b = BigInt
let e = "Prajwal";            //! s = string
let f = Symbol("I am a nice symbol")            //! s = Symbol;
let g = undefined;  //! u = undefined
console.log(a,b,c,d,e,f,g); 
console.log(typeof d); //! to know the type of bigInt

//! Object in JS
const item = {
    "Prajwal" : true,
    "Shubh" : false,
    "Renegade" : 53,
    "Nympho" : undefined,
} 
//! It's more like dictionary of python but known as objects in  JS 
console.log(item["Prajwal"]); 
console.log(item.Renegade);
//! other way to find the item values 
