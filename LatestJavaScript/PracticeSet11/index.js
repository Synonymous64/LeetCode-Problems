// & Question 1 -->
class Complex {
    constructor() {
        this._r = 0;
        this._i = 0;
    }
    set real(real) {
        this._r = real;
    }
    get real() {
        console.log(this._r);
    }
    set imaginary(imag) {
        this._i = imag;
    }
    get imaginary() {
        console.log(this._i);
    }
    printCode() {
        console.log(`${this._r}+${this._i}i`);
    }
    add(p) {
        this._r += p._r;
        this._i += p._i;
    }
}
let s = new Complex();
s.real = 2;
s.imaginary = 6;
s.printCode();
let p = new Complex();
p.real = 6;
p.imaginary = 2;
s.add(p);
s.printCode();
// & Question 2: -->
// class Animal {
//     constructor(name, food) {
//         this.name = name;
//         this.food = food;
//     }
//     bark() {
//         console.log(`${this.name} is barking`);
//     }
// };
// class Peek extends Animal {
//     constructor(name) {
//         super(name);
//         this.name = name;
//     }
//     bark() {
//         console.log(`${this.name} is barking heavily`);
//     }
//     setFavFood(food) {
//         this._food = food;
//     }
//     favFood() {
//         console.log(`${this.name} likes ${this._food} to eat`);
//     }

// }
// let dog = new Peek('German Shephard');
// dog.bark();
// dog.setFavFood('Biryani');
// dog.favFood();
// console.log(dog instanceof Peek);
// console.log(dog instanceof Animal);