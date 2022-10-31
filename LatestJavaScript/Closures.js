message = 'Nothing'
const help = () => {
    let message = 'Call 100';
    console.log('SOS ' + message);
    console.log(message);
    let funct = () => {
        console.log('Function inside the function ' + message);
    }
    return funct;
}
// help();
let res = help();
res();

//* Other Example --> Corner case
const init = () => {
    let name = "Samsung";
    const displayName = () => {
        console.log(name); //& it will print the Apple and not the samsung because it returns the reference of lexical environment and not the actual value.
    }
    name = 'Apple' 
    return displayName;
}
// * it will print Apple
res = init();
res();

const returnFunct = () =>{
    const x = () => {
        let a = 1;
        console.log(a);
        const y = () => {
            // let a = 2;
            console.log(a);
            const z = () => {
                // let a = 3;
                console.log(a);
            }
            z();
        }
        a = 999; //? before calling the y we updated a to 999 thus will print the value likewise
        y();
    }
    return x;
}
res = returnFunct();
res();
// !
// *
// &
// ?
// TODO