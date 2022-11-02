//! Can update any text on the website 
// document.designMode = "on"

//! Merging arrays
let todos = ["Prajwal", "Urkude", "Kik"];
let socials = ["Instagram", "Twitter", "Snapchat", "Kik", "Discord"];
let merge = [...todos, ...socials];
console.log(merge);

//! Want to avoid duplicate strings while merging arrays
let merge2 = [...new Set([...todos, ...socials])]
console.log(merge2);

//! Extracting Objects
const user = {
    age: 20,
    name: 'Prajwal Urkude',
    todo: [
        "This is Prajwal Urkude", "from Nagpur"
    ]
}
const { age, name, todo: [kilt, pilt] } = user;
console.log(age, name, pilt);

//! Color Generator
console.log((Math.floor(Math.random() * 0xffffff).toString(16)));

//! Copy to clipboard

const copy = text => navigator.clipboard.writeText(text);
copy('Hello');
// ! Screen Capture --> Most IMP
const previewElem = document.getElementById('preview');
const button = document.querySelector('button');
button.addEventListener("click", async () => {
    previewElem.srcObject = await navigator.mediaDevices.getDisplayMedia({
        video: { cursor: "always" },
        audio: false,
    });
});