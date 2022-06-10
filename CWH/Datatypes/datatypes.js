/*
!Primitve datatype --> stack | example --> string, numbers, boolean, undefined, symbol.
!Reference datatype --> heap | example --> arrays, object litrals functions, dates.
*/
//*for string
var name = "Prajwal";
console.log("My name is "+name);
console.log("Datatype is "+(typeof name));

//*for integer
var marks = 45;
console.log("Datatype is "+(typeof marks));

//*for boolean
let isDrive = true;
console.log("Datatype is "+(typeof isDrive));

//*NULL // primitive datatype
let nullval = null;
console.log("Datatype is "+(typeof nullval));

//* Undefined
let undef = undefined;
console.log("Datatype is "+(typeof undef));

//* Reference datatype
myarr = [1,2,3,4, 'p', true];
console.log("Datatype is "+(typeof myarr));

//* Object Literals
let mylit = {
    "prajwal" : 98,
    "Rohan" : 98,
    "Jenny" :87,
    "Peter Parker" : 78,
    
}
//* Functions -- Syntax
console.log("Datatype is "+(typeof mylit));
function myName() {
    
}
//* dates
console.log("Datatype is "+(typeof myName));
let date = new Date();
console.log("Datatype is "+(typeof date));
console.clear();



