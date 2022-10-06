let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Resolve after 2Secs');
        resolve(007);
    }, 2000)
})
p1.then((value) => {
    console.log(value);
    let p2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Promise 2")
        }, 2000)
    })
    return p2;
}).then((value) => {
    console.log("we are done");
    return 2; //* it will be converted to immediate promise resolved.
}).then((value) => {
    console.log(value);
})

const loadScript = (src) => {
    return new Promise((resolve, reject) => {
        let script = document.createElement('script');
        script.type = 'text/javascript'
        script.src = src;
        document.body.appendChild(script);
        script.onload = () => {
            resolve(1);
        }
        script.onerror = () => {
            reject(0);
        }
    })
}
// let p3 = loadScript("https://leeSynonymous/");
let p3 = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js")
p3.then((value) => {
    console.log("Script has been loaded " + value);
    return loadScript("https://leeSynonymous/");
}).then((value) => {
    console.log('Next Script ready to run');
}).catch((error) => {
    console.log('Uncaught error found sorry :/' + error);
});