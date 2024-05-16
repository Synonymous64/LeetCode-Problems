let promise = new Promise((resolve, reject) => {
    console.log('I am an alert in promise');
    resolve(56) //! if the code works properly it will return what written in the resolve function
});
console.log("Hello");
setTimeout(() => {
  console.log("Hello in 2 sec");
}, 2000);
console.log("This is Prajwal");
console.log(promise);
