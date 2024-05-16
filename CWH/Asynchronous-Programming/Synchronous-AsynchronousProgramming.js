//* Right now, it was ASynchronous calls thus the done printing would be printed first. 
setTimeout(()=>{
    for (let index = 0; index < 45; index++) {
        console.log("This is the Index-Number : ", index);
    }
},1000)
//* Back then it was Synchronous calls thus the done printing would be printed at the end 
// for (let index = 0; index < 45; index++) {
//     console.log("This is the Index-Number : ", index);
// }
console.log("Done Printing");
