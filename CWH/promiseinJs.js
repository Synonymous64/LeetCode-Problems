//! Promises in JavaScript
// * - Resolve
// * - Reject
// * - Pending

function funct() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      const error = true;
      if (!error) {
        console.log("Function : Your Promise has been resolved");
        resolve();
      } else {
        console.log("Your Promise has not been resolved");
        // error value will be stored from the reject function
        reject("sorry :/ Result not found");
      }
    }, 2000);
  });
}
//* then - If callback is resolved
funct().then(function(){
    console.log('Praj : Thanks for resolving');
    // printing from the reject function
}).catch(function(error){
    console.log('Praj : Not found ' + error);
})

