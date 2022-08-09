let arr = [1, 2, 3, 4, 5, 6];
console.log(arr.length);
delete arr[0];
// console.log(arr[0]); //* it will print undefined into the deleted position
console.log(arr.length); //* The Length will still be the same
// console.table(arr);
//* Concat in arrays
let arr2 = [7, 8, 9, 10];
console.log(arr.concat(arr2));
//* More than one concatination is also possible
let arr3 = [11, 12, 13, 14];
console.log(arr.concat(arr2, arr3));

//* Sort
let num = [4, 2, 412, 35, 1, 34, 3, 45, 2, 14, 35, 6466, 34, 52, 23];
num.sort((a, b) => {
  return b - a;
});
console.table(num);

//! Splice and Slice

let nums = [1, 2, 3, 45, 6, 12, 42, 12];
let deletedValues = nums.splice(2, 3, 1021, 1022, 1023, 1024);
console.log(nums); //* Will return the final array
console.log(deletedValues); //* will return all the deleted values in final array

let nums2 = [1,2,3,4,5];
//! more Like Substring
console.log(nums2.slice(1)); 
console.log(nums2.slice(1, 3));
