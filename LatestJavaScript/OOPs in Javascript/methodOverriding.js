class Employee {
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
let p = new Programmer();
p.login();
p.requestLeaves(4);