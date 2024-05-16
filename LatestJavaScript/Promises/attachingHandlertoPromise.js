let p = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("i am resolved");
        resolve(1);
    }, 1000)
})
p.then((value)=>{
    console.log(value);
})
p.then(()=>{
    console.log('Hello Hurray');
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(4);
        }, 4000)
    })
}).then((value)=>{console.log(value);})