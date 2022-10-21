let key = prompt("Enter the key you want to set");
let value = prompt("Enter the value you want to set");
sessionStorage.setItem(key, value);
console.log(`The Key is ${key} and the value is ${sessionStorage.getItem(key)}`);
if (key === "red" || key === "blue") {
    sessionStorage.removeItem(key); //& if the following key is matches the given condition it will delete that particular key
}
if(key == 0) sessionStorage.clear();

window.onstorage = (e) =>{
    alert('Changed');
    console.log(e);
}