console.log("HELLO THERE");

// variable in Js
// var let and const are the variable we use 
var name = "Prajwal";
console.log(name);
var channel;
channel = "Prajwal Urkude";
var marks = 34;
console.log(name, channel, marks);
/*
* RULES FOR CREATING JAVASCRIPT
* Cannot start with number
* Can start with letter, numbers, _ , $.
* Variable name case sensitive  
*/
var city = "Hyderabad";
console.log(city);
const ownerName = "Haldiram"; // non mutable not changable
console.log(ownerName);
// const fruit; // you always have to initialise in constants
const fruit = "Mango, Orange";
{
    // Local Scope
    let city = "Pune";
    console.log(city);
}
// Global Scope
console.log(city);

const arr = [1, 2.1, 30, 4, 'p'];
arr.push(23);
console.log(arr);

/*
* Most common Programming case type
* 1. camelCase
* 2. kebab-case
* 3. snake_case
* 4. PascalCase
*/