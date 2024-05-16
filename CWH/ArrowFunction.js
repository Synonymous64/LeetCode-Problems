//! Normal Function 
// function Praj(){
//     console.log("Hello there");
// }
// const Praj = function(){
//     console.log("Hello there");
// }


//! Arrow Function

const arrowFunction = ()=>{
    console.log("This is a Arrow function");
}

const greetFunction = (name)=>{
    return (
        "Morning to you " + name 
    )
}
arrowFunction();
console.log(greetFunction("Prajwal"));

//! Returning an object through arrow functions

const demoObjArrow = (name, year, CGPA) =>{
    let obj = {
        name : name,
        year : year,
        CGPA : CGPA
    }
    return (
        obj
    )
}
console.log(demoObjArrow("Prajwal", 3, 9.12));