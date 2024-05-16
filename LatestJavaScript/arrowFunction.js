// & bracket can be removed if there is only one parameter and one line of code 
const myFunct = name => console.log('Hello There ' + name);
myFunct('Good Afternoon');
// const res = {
//     name: 'Prajwal',
//     age: 20,
//     exp: 2,
//     show() {
//         //! this keyword will work for function inside arrow function, will take the this function from parent it uses lexical this 
//         setTimeout(() => {
//             console.log(`This is function inside an object ${this.age}`);
//         }, 2000)
//     }
// }

const res = {
    name: 'Prajwal',
    age: 20,
    exp: 2,
    show() {
        console.log(this);
        //! to use this operator inside the classic we have associate with other var
        let that = this; //* will work with it coz we saved the object in that
        setTimeout(function () {
            //^  this keyword will not work when one classic function is inside the other classic function 
            console.log(this);
            console.log(`This is a function inside function ${that.name}`); //& will point to required object elements
        }, 2000)
    }
}
console.log(res.name, res.age, res.exp);
res.show();