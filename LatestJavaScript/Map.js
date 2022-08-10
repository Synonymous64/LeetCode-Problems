console.log("This is about Mapping in JavaScript");
const myMap = new Map();
myMap.set("Key1", "Value1");
myMap.set("Key2", "Value2");
myMap.set("Key3", "Value3");
myMap.set("Key4", "Value4");
myMap.set("Key5", "Value5");
console.table(myMap);

//! Other Way Around ~
const myMap2 = new Map();
const key = "Key1",
  key2 = [],
  key3 = function () {};
myMap2.set(key, "value 1");
myMap2.set(key2, "value 2");
myMap2.set(key3, "value 3");
console.table(myMap2);

//* Getting the value from the map
let val1 = myMap2.get(key);
console.log(val1);

//* Get the size of the map
let size = myMap2.size;
console.log(size);

//* You can loop using for of
for (let key of myMap2) {
  console.log(key[0]); //! this gives the key
  console.log(key[1]); //! this gives the value
  console.log(key); //! this gives both
}
//! The Other Way
for (let [key, value] of myMap2) {
  console.log(key);
  console.log(value);
  console.log(key, value);
}
//! Another for specific key iteration only
for (let key of myMap2.keys()) {
  console.log(key);
}
//! Another for specific value iteration only
for (let value of myMap.values()) {
  console.log(value);
}
//! Using for each loops in Maps
myMap.forEach((value, key) => {
  console.log("By For Each Loop The Key is " + key + " The value is " + value);
});
//! Converting Map to an Array
//! It Will Create a 2D Array
let myArray = Array.from(myMap);
console.table(myArray);

//! Converting Map Keys to an Arrays Only
let toArrKeys = Array.from(myMap.keys());
console.table(toArrKeys);

//! Converting Map values to an Arrays Only
let toArrValues = Array.from(myMap.values());
console.table(toArrKeys);
