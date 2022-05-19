console.log("This is about Functions in JavaScipt");
let name = "Prajwal";
let name2 = "Ayush";
console.log(`${name} love you so much`);
function greet(name){
    console.log(`${name} love you so much`);
}

greet(name2);

//* Creating the function with the return value
let digit1 = 24;
let digit2 = 34;
function add(digit1, digit2) {
    return digit1 + digit2;
}
console.log(add(digit1, digit2));

// aternate way to define the function

const myGreet =  function(name){
    let msg = `Happy birthday to you Mr/Mrs. ${name}`;
    return msg;
}
let val = myGreet(name);
console.log(val);

const myObj = {
    name:"skillF",
    game:function(){
        return "GTA";
    }
}
console.log(myObj.game());

let arr = ['fruit','vegetable','furniture','televisons'];
arr.forEach(function(element, index, arr){
    console.log(element, index,arr)
});

//! Scopes in JavaScript
var i = 243;
console.log(i);
function ui(name){
    return `this is name ${name} UI`;
}
console.log(ui('Prajwal'));
//! let/const has the block level scope var has function level scope
if(1){
    var i = 234; //! it will be valid throughout the whole function
    console.log(i);
}
console.log(i);
function ul(name){
    let i = 9;     //! it will be valid throughout the whole function out of it, it has no existence 
    console.log(i);
    return `mySelf ${name}`;
}
console.log(ul('Prajwal'));
console.log(i);
