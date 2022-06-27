console.log("This is About Prototype Inheritance");
//**Creating a Prototype likewise */
const proto = {
    slogan : function(){
        return "This Company is the best";
    },
    changeName : function(newName){
        this.name = newName;
    }
}

//** Better Syntax to change the object attributes and to add custom objects as well */
//!(Recommended) */
// const praj = Object.create(proto);
// praj.name = "Prajwal";
// praj.role = "Programmer";
//* You can change the name like this ~
// praj.changeName("Prajwal Urkude");

//** Older Syntax to change the object attributes and to add custom objects as well */
//! Bakwas(not to use much) */
// const praj1 = Object.create(proto, {
//     name : {value : "Prajwal Urkude", writable:true},
//     role : {value: "Programmer"},
// });
// praj1.changeName("Prajwal");
// console.log(praj1);

//**Prototype In heritance from here --> */
//**Employee Constructor */
function employee(name, salary, experience){
    this.name = name;
    this.salary = salary;
    this.experience = experience;
}
//* Creating an slogan in employee prototype.
employee.prototype.slogan = function(){
    return `This is our Slogan protoype which is returning the sentence you are currently reading! ${this.name}`;
}
//**Creation of the object */
let prajObj = new employee("Prajwal", 12324, 2);
//*printing the object
console.log(prajObj);
//*printing the slogan prototype we just created with the attribute {name}
console.log(prajObj.slogan());

//* creating programmer as inheritance to employee
//**Programmer is getting inherited by employee */
function programmer (name, salary, experience, language){
    employee.call(this, name, salary, experience);
    //* setting language in a different way as it only consist of 3 param
    this.language = language;
}
//* Inherit the prototype without this step the prototype won't be inherited
programmer.prototype = Object.create(employee.prototype);
//* Manually setting the constructor
programmer.prototype.constructor = programmer;
let duke = new programmer("Prajwal", 231, 3, "C++");
console.log(duke);