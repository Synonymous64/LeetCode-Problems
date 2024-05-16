console.log('Promise of code execution');
//! When the promise is resolved 
let promise1 = new Promise((resolve, reject) => {
    console.log('Promise is pending');
    setTimeout(() => {
        console.log('I am a promise and I am fulfilled');
        resolve(true);
    }, 4000)
})
//! When the promise is rejected
console.log(promise1);
let promise2 = new Promise((resolve, reject) => {
    console.log('Promise is pending');
    setTimeout(() => {
        console.log('I am a promise and I am rejected');
        reject(new Error('I am an error'))
    }, 4000)
})
// console.log(promise2);

// //* In a case promise1 is resolved then 
// promise1.then((value) => {
//     console.log(value);
// }, (error) => {
//     console.log(error);
// })
// //* In a case promise2 is rejected then 
// promise2.then((error) => {
//     console.log('some error occurred in Promise2' + error);
// }, (error) => {
//     console.log(error);
// })
//! Other way to error handling is --> 
//* In a case promise1 is resolved then 
promise1.then((value) => {
    console.log(value);
}).catch((error) => {
    console.log(error);
})
//* In a case promise2 is rejected then 
promise2.then((error) => {
    console.log('some error occurred in Promise2' + error);
}).catch((error) => {
    console.log('this is error');
})