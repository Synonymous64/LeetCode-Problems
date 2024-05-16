class Employee {
    // & constructor
    constructor(name) {
        this.name = name;
        console.log(`The name of the employee is ${this.name}`);
    }
    login() {
        console.log(`Employee has logged in`);
    }
    logout() {
        console.log(`Employee has logged out`);
    }
    requestLeaves(leaves) {
        console.log(`employee has requested ${leaves} leaves`);
    }
}
class Programmer extends Employee {
    //! If you do not create any constructor then the following contstructor will be automatically created by the javascript engine. 
    // constructor(name){
    //     super(name)
    // }
    //& creating a user-defined constructor
    constructor(name) {
        super(name) //! super keyword is mandatory to create a constructor for derived class
        console.log(`This is a Progammers Constructor`);
        this.name = name;
        console.log(`the name of the programmer is ${this.name}`);
    }
    buyMeACoffee(funds) {
        console.log(`Employee has requested ${funds} funds`);
    }
    //* Method Overriding
    requestLeaves(leaves) {
        //* using super key word 
        super.requestLeaves(leaves + 1);
        console.log('One extra leaves is granted');
    }
}
let p = new Programmer('Praj');
p.login();
p.requestLeaves(4);