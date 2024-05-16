let submitBtn = document.getElementById('submitbtn');
let display = document.getElementById('display');
let display2 = document.getElementById('display2');
let display3 = document.getElementById('display3');
let display4 = document.getElementById('display4');
let display5 = document.getElementById('display5');
let message;

display.innerText = "Paste Insta link here";
setTimeout(() => {
    display.innerText = "";

}, 1500)
const loadScript = (src) => {
    return new Promise((resolve, reject) => {
        let script = document.createElement('script');
        script.type = 'text/javascript'
        script.src = src;
        document.head.append(script);
        script.onload = () => {
            resolve(src);
        }
        script.onerror = () => {
            reject(new Error("script not found"));
        }
    })
}

display.addEventListener('change', (e) => {
    message = e.target.value;
})
let p = undefined;
const simulation = async () => {
    try {
        p = await loadScript(message);
        if (p !== undefined) {
            console.log(p);
            return new Promise(function (resolve, reject) {
                setTimeout(() => {
                    display2.innerHTML = "Initializing hack program..."
                }, 1000)
                setTimeout(() => {
                    display3.innerHTML = "Hacking Piyush username..."
                }, 2000)
                setTimeout(() => {
                    display4.innerHTML = "UserName found piyush 17..."
                }, 4000)
                setTimeout(() => {
                    display5.innerHTML = "Connecting to Instagram..."
                }, 8000)
                resolve(10);
            })
        }
    } catch (error) {
        console.log(error.message);
    } finally {
        display.innerText = ":POPOP";
    }
}
submitBtn.addEventListener("click", simulation)
