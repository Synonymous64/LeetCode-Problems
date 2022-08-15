let arr = [2, 6, 10, 15, 20, 35, 18, 90, 11];
let res = arr.filter((e) => {
  return e % 10 == 0;
});
console.table(res);
//! Calculating the factorial 
let arr2 = [1,2,3];
let res1 = arr2.reduce((a, b) =>{
    return a * b;
})
console.log(res1);
