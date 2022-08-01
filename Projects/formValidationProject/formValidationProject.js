console.log("This is About Form Validation");
const name = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");

// console.table(name, email, phone);
name.addEventListener("blur", () =>{
    // console.log("The name is blurred");
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){0,10}/;
    let str = name.value;
    console.log(regex, str);
    if(regex.test(str)){
        console.log("It Matched");
    } else console.log("It didn't matched");
    // TODO 20:11 Complete Regex Project
})
email.addEventListener("blur", () =>{
    console.log("The name is blurred");
})
phone.addEventListener("blur", () =>{
    console.log("The name is blurred");
})
