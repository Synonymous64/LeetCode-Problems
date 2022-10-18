console.log(document.cookie);
//! To store the cookies refer the following code 
document.cookie = "name = Prajwal007"; //* stores in the form of [key=value] pair
document.cookie = "name = Prajwal002347";
document.cookie = "name007 = Prajwal007";
console.log(document.cookie);
let key = prompt("Enter your key");
let value = prompt("Enter you value");
//!encodeURIComponent takes any key of special characters and add them to the cookies otherwise cookie doesn't support the special characters it basically encodes the cookies 
document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
//! decodeURIComponent("aa%3B%3B") --> for decoding the cookies
console.log(document.cookie);
