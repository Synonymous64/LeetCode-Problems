let age = prompt("Enter your age");
age = Number.parseInt(age);
if(age <= 0) console.error("Negative Age");
else if(age > 4) location.href = "https://www.google.com";
let color = prompt("Which color do you wanna change your background with ...?");
document.body.style.backgroundColor = color;