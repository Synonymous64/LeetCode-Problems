console.log('This is about arrays and object');
let marks = [23,34,56,58,67];
const fruit = ['Orange', 'Grapes', 'Mango', 'Gauva'];
const mixed = ['orange', 23, 'Grapes', 'Mango'];

//* ALter way to do it
let arr = new Array(23,34,46,' Orange');
console.log(marks);
console.log(fruit);
console.log(mixed);

console.log(arr.length);
console.log(Array.isArray('er')); // it will let you know if it is an array or not

arr[0] = 'Prajwal';
console.log(arr);
let arrElement = arr[0];
console.log('Element :' ,arrElement); // it iwll give you that one element

let value = marks.indexOf(34); // it will let you know the index
console.log(value);

// Mutating or modidying the array
marks.push(25460); // it will add the element at the end
console.log(marks);

marks.unshift(250); // it will add the element in the beggining 
console.log(marks);

marks.pop(); // it will remove the last element
console.log(marks);

marks.shift(); // it will remove the first element
console.log(marks);

marks.splice(1,2); // it will remove the element from the first index to the last index
console.log(marks);

marks.reverse(); // it will obviously reverse the element 
console.log(marks);

let marks2 = [23,34,56]; 
marks = marks.concat(marks2); // it will concatenate the two ararys
console.log(marks);

//* Objects
console.log("Getting Started with Objects and JavaScript");

let myObj = {
    name : 'Prajwal',
    Channel : 'Hello There',
    IsActive : true,
    marks :[1,2,334,5]
};

console.log(myObj);
console.log(myObj.marks); // it will give the specific output of that structure
console.log(myObj['name']); // alternate way


