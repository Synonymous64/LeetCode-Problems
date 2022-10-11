//! Async will always return promises 
const myAsyncFunct = async () => {
    let bombayWeather = new Promise((resolve) => {
        setTimeout(() => {
            resolve("31 deg");
        }, 1000)
    })
    let bangaloreWeater = new Promise((resolve) => {
        setTimeout(() => {
            resolve("24 deg")
        }, 2000)
    })
    bombayWeather.then((value) => {
        alert(value);
    })
    bangaloreWeater.then((value) => {
        alert(value);
    })
    console.log('Fetching Bombay Weather, Please wait ...');
    let bombayW = await bombayWeather;
    console.log(`Fetched Bombay Weather = ${bombayW}`);

    console.log('Fetching Bangalore Weather, Please wait ...');
    let bangaloreW = await bangaloreWeater;
    console.log(`Fetched Banglore Weather = ${bangaloreW}`);
    return [bombayW, bangaloreW]
}
console.log('Welcome to weather monitering control room');
// myAsyncFunct().then((value) => {
//     console.log(value);
// })
const cherry = () => {
    console.log('Hello there this is cherry');
}
//! One way 
let res = myAsyncFunct();
let res2 = cherry();
// console.log(res);
res.then((value) => {
    console.log(value);
})
//! Using Async Methods  
const main1 = async () => {
    let res = await myAsyncFunct();
    let res2 = await cherry();
    // res.then((value) => {
    //     console.log(value);
    // })
}
// console.log(res);
main1();