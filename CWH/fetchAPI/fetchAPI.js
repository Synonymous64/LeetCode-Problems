//! This is about the Fetch-API in JavaScript
console.log("This is about the Fetch API");

//! Button with ID my button
let myBtn = document.getElementById("myBtn");

//! div with id Content
let content = document.getElementById("content");
//! ~ GET REQUEST MODE (GET API)
function getData() {
  console.log("Started the getData");
  // ! It will work as of Promise
  url = "https://api.github.com/users";
  fetch(url)
    .then((response) => {
      console.log("Inside the First 'THEN'");
      //! It is used to written the content from that particular link
      // ! Text or JSON to which you wanna written
      // return response.text();
      return response.json();
    })
    .then((data) => {
      console.log("Inside the Second 'THEN'");
      console.log(data);
    });
}

//! ~ POST REQUEST MODE (POST API)
function postData() {
  console.log("Started the getData");
  // ! It will work as of Promise
  url = "https://api.instantwebtools.net/v1/passenger";
  data = {
    'name': "Praj",
    'trips': 251,
    'airline': 35,
  };
  params = {
    method: "post",
    headers: {
      "Content-type": "application/json", //! IMP to use
    },
    // ! It is important to stringfy the objects (converting to string)
    body: JSON.stringify(data),
  };
  //!   if there is only one argument and one return type the we do like this
  //! POST API takes two arguments the url and other parameters as compared to GET
  fetch(url, params)
    .then(response => response.json())
    .then(data => console.log(data));
}

// console.log("The Get data has been running");
// getData();
// console.log("The Get data has been done running");
postData();
