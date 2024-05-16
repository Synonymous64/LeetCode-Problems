console.log("This is about the Object, Literals and Constructors");
let obj = {
    name : "Prajwal",
    year : "2nd year",
    section : "A",
    "Roll no." : 122,
    //** Creating the object inside the object we use ':' */
    myData : () =>{
        console.log(`My name is ${obj.name} and I am studying in ${obj.year}`);
    }
}
//* outside the object we use =
// const myv = () =>{
    
// }
// console.log(obj.name);
// console.log(obj.year);
// console.log(obj.section);
// console.log(obj["Roll no."]);
// obj.myData();
//**Creating the constructor in JavaScript */
function CreateData(name, marks){
    this.name = name;
    this.marks = marks;
    this.run = function(){
        console.log(`My name is ${this.name} and I am studying in ${this.marks}.`);
    }
    this.analyze = function(){
        console.log("Praj still has a lot to learn.");
    }
    
}
praj1 = new CreateData("Prajwal", 98);
console.log(praj1.name);
praj2 = new CreateData("Prajwal2", 99);
console.log(praj2.name);
praj2.run();
praj2.analyze();
