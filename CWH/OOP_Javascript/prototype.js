console.log("This is about the prototype");
//* Object literals //* Object Prototype
// let obj = {
//     name : "Prajwal",
//     section : "A",
//     year : "2nd",
//     Rollno : 122,
// };
// console.log(obj);
function obj1(givenNum){
    this.name = givenNum;
};
//* Adding the prototype
obj1.prototype.getName = function(){
    return this.name;
}
obj1.prototype.setName = function(newName){
    this.name = newName;
}
let obj2 = new obj1("P");
obj2.setName("Prajwal");
console.log(obj2);
// obj1.getName = "Ayush";
console.log(obj2.getName())