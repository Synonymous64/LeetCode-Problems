//! Async Always returns a promise 
async function myFunct(){
    const response = await fetch("https://api.github.com/users");
    console.log("Before response");
    const users = await response.json();
    console.log('Users resolved');
    return (
        users
    )
}
console.log("Before Calling Prajwal");
let a = myFunct();
console.log("After Calling Prajwal");
console.log(a);
a.then(data => {console.log(data);})
console.log("Last Line of the JS File");

