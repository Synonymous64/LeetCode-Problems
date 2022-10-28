let arr = [4, 5, 6, 7, 8];
// ! Destructoring
let [a, b, c, ...d] = arr;
console.log(a, b, c, d);
//* to start from the 7
let [e, , , ...h] = arr;
console.log(h);
//* Destructoring with object (it is destructed using curly brackets) entity should have the same name as the elements in the object like (i, j, k)
let obj = { i: 1, j: 2, k: 3 };
let { i, j, k } = obj;
console.log(i, j, k);
// * Spread Operator
let arr2 = [4, 3, 2, 1];
let obj1 = { arr2 };
console.log(obj1);
const sum = (v1, v2, v3) => {
    return v1 + v2 + v3;
}
console.log(sum(...arr2));
// & Will be using in react 
let obj2 = {
    name: 'Prajwal',
    age: 20,
    domain: 'SDK Engineer'
}
//! Changing name of the element in object by using spread operator 
//! to make the changes the obj2 should be spreaded first later overiding must take place 
console.log({ ...obj2, name: 'Rock' });
//! Ordinary Way 
// console.log(obj2.name = 'Drake');
console.log(obj2);