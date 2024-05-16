//! Try Catch only works synchronously thus it won't be apply in an async functions for that you have to add it inside async/scheduled functions. 
try {
    setTimeout(() => {
        try {
            console.log(pop);
        } catch (error) {
            console.log(error.message);
        }
    }, 3000)
} catch (error) {
    console.log(error.message);
} finally {
    console.log('Successfully Executed');
}