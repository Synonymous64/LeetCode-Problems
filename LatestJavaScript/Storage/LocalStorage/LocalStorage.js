let key = prompt("Enter the key you want to set");
let value = prompt("Enter the value you want to set");
localStorage.setItem(key, value);
console.log(`The Key is ${key} and the value is ${localStorage.getItem(key)}`);
if (key === "red" || key === "blue") {
    localStorage.removeItem(key); //& if the following key is matches the given condition it will delete that particular key
}
if(key == 0) localStorage.clear();