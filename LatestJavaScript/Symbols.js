console.log("This is about Symbol in JavaScript");
//! A String is a primitive type like string and, NaN, numbers, undefined 
//! The Symbol is used to make every string unique 
const sym = Symbol("My Symbol");
console.log("This is", sym);
// console.log(typeof sym);
//! Symbols are used to make unique keys from primitive datatypes. 
const sym1= Symbol("My Symbol");
//! It will resulted to false 
console.log(sym === sym1 ? "Equal" : "Not Equal");
//! This is how we Generate Unique Keys from Symbols 
const k1 = Symbol('Identifier for k1');
const k2 = Symbol('Identifier for k2');
obj = {};
obj[k1] = "Prajwal";
obj[k2] = "Ayush";
//* Adding a normal Key in object
obj["color"] = "red";
console.log(obj);
console.log(obj[k1]);
console.log(obj[k2]);
//! console.log(obj.k2);//forbidden way, don't do this otherwise it give you an error coz the object will try searching string into them

//! The For in Loop ignores the symbols thus it is not printing any symbols
for (let key in obj){
    console.log("Key " + " = " + " value");
    console.log(key + " = " + obj[key]);
}
//! To convert an object to json file
//! Will also ignore symbols
console.log(JSON.stringify(obj)); 