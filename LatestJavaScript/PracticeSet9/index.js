// let p1 = new Promise((resolve, reject) => {
//     let script = document.createElement('script');
//     script.src = "";
//     script.onload = () => {
//         resolve('ran successful')
//     }
//     script.onerror = () => {
//         reject(new Error('Script not found'))
//     }
// })
const loadScript = async (src) => {
    return new Promise((resolve, reject) => {
        let script = document.createElement('script');
        script.src = src;
        document.head.append(script);
        script.onload = () => {
            resolve(src);
        }
        script.onerror = () => {
            reject(new Error("Error in src"))
        }
    })
}
// const main2 = async () => {
//     let a = await loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js");
//     console.log(a);
// }
// main2();
// let a = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js");
// a.then((value)=>{
//     console.log(value);
// })

const p3 = () => {
    return new Promise((reolve, reject) => {
        setTimeout(() => {
            reject(new Error("Error Found"))
        }, 3000)
    })
}
const res = async () => {
    try {
        let temp = await p3();
        console.log(temp);
    } catch (error) {
        console.log(error.message);
    }
}
res();

let k1 = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(10);
        }, 1000)
    })
}
let k2 = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(20);
        }, 2000)
    })
}
let k3 = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(30);
        }, 3000)
    })
}
const res2 = async () => {
    console.time("run");
    let a1 = k1();
    let a2 = k2();
    let a3 = k3();
    // console.log(a1, a2, a3);
    //! Easiest way to fetch all promises takes lesser time 
    let promiseAll = await Promise.all([a1, a2, a3]);
    console.log(promiseAll);
    console.timeEnd("run");
}
res2();