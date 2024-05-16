console.log();
// ! Assume this is coming from the server as defined

// let a = 'This is Prajwal'
let a; //! It won't give you an error
if (a !== undefined) {
  console.log("This is not undefined");
  throw new Error("This is defined");
} else console.log("This is undefined");

try {/
//   console.log(a / q);
    return a/2;
} catch (error) {
  console.log("This is an error");
} finally{
    console.log("This will printed at any condition");
}
