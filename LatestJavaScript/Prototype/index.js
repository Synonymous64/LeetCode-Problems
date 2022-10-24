console.log('kill');
let a = {
    name1: 'Prajwal Urkude',
    age: 20,
    run: () => {
        console.log('A-run');
    }
}
console.log(a);
let b = {
    run: () => {
        console.log('B-run');
    }
}
//* a got the prototype of run and other entities from b
a.__proto__ = b;
console.log(b.run());
console.log(a.run());
console.log(a.name1);
b.__proto__ = {
    name: "Nokie"
}
a.__proto__ = b;
console.log(b.name);
console.log(a.name);
