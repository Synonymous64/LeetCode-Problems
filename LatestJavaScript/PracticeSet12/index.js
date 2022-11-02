// * Question 1 
// const a = async (text) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(text);
//         }, 2000)
//     })
// }
// (async () => {
//     let text = await a('Hello');
//     console.log(text);
//     let text2 = await a('World');
//     console.log(text2);
// })()
// (funct = () =>{
//     setTimeout(()=>{
//         console.log('Hello World');
//     }, 2000)
// })()
// * Question 2
// const funct = (a, b, c) => {
//     console.log((a + b + c) / 3);
// }
// let x = [1, 2, 3];
// funct(...x)
// * Question 3
// const funct = async (text, n = 1) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(text);
//         }, 2000 * n);
//     })
// }

// (async () => {
//     let text = await funct('Hello', 2);
//     console.log(text);
//     let text2 = await funct('Jamun', 3);
//     console.log(text2);
// })()
// * Simple interest Calculator
// & P = Principal amount, Interest Rate (in %), T = Time Period (in year/s)
const simpleInterestCalc = (P, R, T) => {
    R = R / 100;
    return (P * R * T);
}
console.log(simpleInterestCalc(10000, 2, 1));

