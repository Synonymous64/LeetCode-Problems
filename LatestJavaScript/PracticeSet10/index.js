let p = fetch("https://anapioficeandfire.com/api/characters/583");

let respones = fetch("https://anapioficeandfire.com/api/characters/583");
respones.then((value) => {
    return value.json();
}).then((value) => {
    console.log(value);
    let text = document.getElementById("text");
    let res = "";
    for (let i = 0; i < value.aliases.length; ++i) {
        res += ` ${i + 1} ${value.aliases[i]}<br>`
    }
    text.innerHTML = res;
})
let key = prompt("Enter the Heading");
let value = prompt("Enter the discription");
localStorage.setItem(key, value);
if (key) {
    let getNotes = localStorage.getItem(key);
    console.log(getNotes);
}
let del = confirm("Do you want to delete the note");
if (del) {
    let key = prompt("Enter the Head of the note");
    localStorage.removeItem(key);
}
