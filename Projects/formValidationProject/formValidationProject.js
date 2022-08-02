console.log("This is About Form Validation");
const name = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");

// console.table(name, email, phone);
name.addEventListener("blur", () => {
  // console.log("The name is blurred");
  let regex = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/; // the dollar sign represent must
  let str = name.value;
  console.log(regex, str);
  if (regex.test(str)) {
    console.log("Your name is Valid");
    name.classList.remove("is-invalid");
  } else {
    console.log("It didn't matched");
    name.classList.add("is-invalid");
  }
});
email.addEventListener("blur", () => {
    let regex = /^[a-z]([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/ //* plus means one or more of such character
    let str = email.value;
    console.log(regex, str);
    if (regex.test(str)) {
      console.log("Your name is Valid");
      email.classList.remove("is-invalid");
    } else {
      console.log("It didn't matched");
      email.classList.add("is-invalid");
    }
});
phone.addEventListener("blur", () => {
  console.log("The name is blurred");
  let str = phone.value;
  let regex = /^([0-9]){10}$/;
  console.log(regex, str);
  if (regex.test(str)) {
    console.log("Your phone number is Valid");
    phone.classList.remove("is-invalid");
  } else {
    console.log("Your phone number is Invalid");
    phone.classList.add("is-invalid");
  }
});
let submit = document.getElementById("submit");
let success = document.getElementById("success")
submit.addEventListener("click", (e) =>{
    e.preventDefault(); //! It will prevent the reload of the website after the submit button
    // TODO ~ 4-:06
    // form submission
    console.log("The Submit button is Pressed");
    if(name.value && phone.value && email.value){
        success.classList.add("show")
    } else {
        success.classList.remove("show")
    }
})