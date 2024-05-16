console.log("This is about the Sets in Javascript");
//! It is used to store unique values 
let mySet = new Set();
mySet.add(1);
mySet.add(4);
mySet.add(5);
mySet.add(2);
mySet.add(2);
mySet.add(true);
mySet.add({function(){"This is Prajwal"}});
console.table(mySet);

//! Also Alpha numeric value can co-exist together
mySet.add("Prajwal"); 

for(let eli of mySet){
    console.log(eli);
}
//! To Get the size
console.log(mySet.size);
//! To Search in Sets
console.log(mySet.has(2)); 
//! To Erase Element from the Set 
mySet.delete(2);
console.table(mySet);

//! Iteration in Set
mySet.forEach((Element)=>{
    console.log(Element);
})

//! --------------------Conversions-------------------------

//! From Set to Arrays

let setToArray = Array.from(mySet);
setToArray.push(10); //* Adding element to array
console.log(setToArray); 

//! From Array to Set 
let arrayToSet = new Set(setToArray);
console.table(arrayToSet);
