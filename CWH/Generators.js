console.log("Generators in Javascript");
//! Pointer in necessary in JS Generators
function *numberGen(){
    yield 1;
    yield 2;
    yield 3;
    yield 4;
}
// * The Other Way ~
function *numberGenZ(){
    let i = 0;
    while(true){
        yield ++i;
        yield (++i).toString(); //! For Stringfying into alphanumeric character
    }
}
const gen = numberGen();
// It Will Generate random value through the yield keyword
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
const genZ = numberGenZ();
console.log(genZ.next());
console.log(genZ.next());
console.log(genZ.next());
console.log(genZ.next());
