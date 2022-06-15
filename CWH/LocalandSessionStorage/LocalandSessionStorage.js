console.log("LocalandSessionStorage");
//* To add a key value in local Storage
localStorage.setItem('Name', 'Prajwal');
localStorage.setItem('Name2', 'Prajwal2');

//*To retrieve the item from l ocal storage  
//* clear particular key 
localStorage.removeItem('Name');
let name = localStorage.getItem('Name')

console.log(name);
let fruits = ['Banana','Mango','Orange'];
//* It will store the array fruits values in the string
//* To store into the proper datatype we have to parse the following fruits array intp required datatype

localStorage.setItem('myFruits', JSON.stringify(fruits));
let fruit = JSON.parse(localStorage.getItem('myFruits'));
//* To convert it into an array
console.log(fruit);
console.log(typeof(fruit));
// localStorage.clear(); //* it is used to clear the local storage
//* For session Storage
sessionStorage.setItem('sessionName', 'Prajwal');
sessionStorage.setItem('sessionName2', 'Prajwal2');