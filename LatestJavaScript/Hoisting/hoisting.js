//! Hoisting defines that everything you declare out scope can be accessed throughout the program 
greet();
//! Supportable for classic functions only 
function greet() {
    console.log('Morning');
}
//! it doesn't work for arrow functions
// const greet = () => {
//     console.log('Morning');
// }
//! it will say undedined (only while using var) cause hoisting only works on functions and not variable. 
console.log(a);
var a = 10; //* Declaration is hoisted to the top but initialization is not