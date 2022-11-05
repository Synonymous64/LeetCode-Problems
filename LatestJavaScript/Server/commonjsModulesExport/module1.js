// ^ Creating and exporing the modules
const funct = () => {
    console.log('hello');
}
const funct1 = (name) => {
    console.log('hello ' + name);
}
module.exports = {funct, funct1};