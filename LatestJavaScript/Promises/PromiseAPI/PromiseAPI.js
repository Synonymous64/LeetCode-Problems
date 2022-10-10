let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve('resolved 1');
        reject(new Error("Error"))
    }, 1000)
})
let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('resolved 2');
    }, 2000)
})
let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('resolved 3');
    }, 3000)
})
//! Running promise individually -->
// p1.then((value) => {
//     console.log(value);
// })
// p2.then((value) => {
//     console.log(value);
// })
// p3.then((value) => {
//     console.log(value);
// })
//! Running promise when all the promise are resolved irrespective to any time using promise API -->
let promiseAll = Promise.all([p1, p2, p3]);
promiseAll.then((value) => {
    console.log(value);
})
//! Promise.All settle is used when your one of the promise is rejected but you want the result of rest of the promises 
//! we won't see the error of rejected promise but the status and message will be diplayed 
let promiseAllSettle = Promise.allSettled([p1, p2, p3]);
promiseAllSettle.then((value) => {
    console.log(value);
})
//! Promise.race --> Returns that one promise which was resolved earliest.
//! It will show up the error eventually if the promise get rejected. 
let promiseRace = Promise.race([p1, p2, p3]);
promiseRace.then((value) => {
    console.log(value);
})
//! Promise.any -> Will return the next promise which is not getting rejected
//! It will give error if all the promises are rejected
let promiseAny = Promise.any([p1, p2, p3]);
promiseAny.then((value) => {
    console.log(value);
})
//! Promise.resolve
let promiseResolve = Promise.resolve(6);
promiseResolve.then((value)=>{
    console.log(value);
})
//! Promise.Reject
let promiseReject = Promise.reject(new Error("This is an valid error"))  
promiseReject.then((value)=>{
    console.log(value);
})