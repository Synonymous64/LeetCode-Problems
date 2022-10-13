
try {
    let age = prompt("enter your age");
    age = Number.parseInt(age);
    if (age < 18) throw new Error("You are restricted to use this age");
    //* for throwing custom error 
    // throw new Error("Prajwal is not good");
    throw new ReferenceError("Prajwal is not good");
} catch (error) {
    //! To get the name of the error 
    console.log(error.name);
    //! To get a redeable error 
    console.log(error.message);
    //! To get the whole info about the error 
    console.log(error.stack);
} finally {
    console.log('The Program executed successfully');
}