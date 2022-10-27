class Animal {
    constructor() {
        this._name = 'unknown';
    }
    fly() {
        console.log(`${this._name} is flying`);
    }
    //! While making getter and setter we have to add underscore after the this keyword otherwise it would be undefined 
    getName() {
        return this._name;
    }
    setName(name) {
        this._name = name;
    }
}
class Pegion extends Animal {
    eatCarrot() {
        console.log('Eating carrot');
    }
}
let a = new Pegion();

a.setName('Dog')
a.fly();
console.log(a.getName());
console.log(a instanceof Animal); //* it will return bolean value if the following entity is an instance of Animal or not
console.log(a instanceof Pegion); //* it will return bolean value if the following entity is an instance of Animal or will return true if the inherited took place