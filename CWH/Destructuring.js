let a, b;
[a, b] = [10, 11];
//! It will exactly print what you think it will
console.log(a, b);

//* a = 1, b = 2, c = 3, d = [4 to 9] it will create an array for d since it has 3 dots
// [a, b, ...c, d] = [1, 2, 3, 4, 5, 6, 7, 8, 9]; //* will give an error
[a, b, c, ...d] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(a, b, c, d);

//! Other Ways ~
({ a, b, ...c } = { a: 6, b: 7, c: 8, d: 9, e: 10 });
console.log(a, b, c);

const fruits = [
  "Apple",
  "Banana",
  "Custard-Apple",
  "Mango",
  "Pineapple",
  "Strawberry",
];

//! Array Destructuring
//! a, b, c will have the first 3 element in fruits
[a, b, c] = fruits;
console.log(a, b, c);
//! a, b  will have the first 2 element in fruits and c will have the array of rest of elements in fruits
[a, b, ...c] = fruits;
console.log(a, b, c);

//! Object Destructuring
phone = {
  Model: "Moto-G",
  RAM: "8GB",
  Camera: "50MP",
  Processor: "Snapdragon 890",
  Environment: "Android 11",
  start: ()=>{console.log('started');},
};
const {Model, RAM, Camera, ...otherFeatures} = phone;
console.log(Model, RAM, Camera, otherFeatures);
// phone.start();

