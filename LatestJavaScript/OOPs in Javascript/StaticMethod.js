class Animal {
    constructor(name) {
        //! Static functions are not for individual objects can't use this. or simple capitalize, can be accessed by only class name 
        this.name = Animal.capitalize(name);
    }
    walk() {
        console.log(`the animal ${this.name} is walking`);
    }
    static capitalize(name) {
        return name.charAt(0).toUpperCase() + name.substr(1, name.length);
    }
}
let a = new Animal('panda');
a.walk();
//! static method is used when we want the function to be available in the class but still can not be accessed by individual objects it provides security
// console.log(a.capitalize('op')) //* won't work