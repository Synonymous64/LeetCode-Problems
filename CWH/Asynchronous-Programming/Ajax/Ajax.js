console.log("This is about the Ajax");
//* For First Button
let fetchBtn = document.getElementById('fetchBtn');
fetchBtn.addEventListener('click', buttonClickHandler)
//* Adding event listener on click
function buttonClickHandler(){
    //* Instantiate an xhr object
    const xhr = new XMLHttpRequest();

    console.log("You have clicked the fetch Button");
    // Open the Object
    // xhr (get request, from which the data will be fetch (source of data file) , for => synchronous  = false or Asynchrnous  = true programming)

    //! Anything can be fetched a file or link(URL)
    //! to bring the file -->
    // xhr.open('GET', '../../praj.txt', true); 

    //! Website for sample JSON File
    // https://mocki.io/fake-json-api#:~:text=When%20you%20want%20to%20fake%20JSON%20responses%20for,under%20the%20same%20URL%20but%20with%20different%20paths.

    // xhr.open('GET', 'https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8', true)
    //* Get => To just fetch
    //* Post => To send the data as well after fetching
    xhr.open('POST', 'https://dummy.restapiexample.com/api/v1/create', true)
    xhr.getResponseHeader('Content-type','application/x-www-form-urlencoded')
    
    
    // What to do on progress (Optional) we can show any spinner or loader on screen
    xhr.onprogress = function(){
        console.log('On Progress');
    }

    //* Older method // when ever your website will change the state it will display you to the console (not necessarily to use)
    xhr.onreadystatechange = function(){
        console.log('Ready State is ', xhr.readyState);
    }

    // after response is ready, request is fulfilled
    xhr.onload = function(){
        //if response code is 200 which means we found the element 200 is the limit of http server (HTTP Status Code)
        if(this.status === 200){
            console.log(this.responseText);
        } else console.log("Some Error Occured");
    }

    // xhr.send(); // while using GET we don't have pass the parameter

    // Send the request (Final state) to send the request
    // params = "name=test&salary=123&age=23"
    params = `{name : test, salary : 123, age : 23}`;
    xhr.send(params); // while using POST we have pass the parameter
    console.log("We are done");
}

//* For Second Button
let popBtn = document.getElementById('popBtn');
popBtn.addEventListener('click', popHandler);

//* Adding event listener on click
function popHandler(){

    //* Instantiate an xhr objcet
    const xhr = new XMLHttpRequest();

    console.log("You have clicked the Populate Button");
    // Open the Object
    // xhr (get request, from which the data will be fetch (source of data file) , for => synchronous  = false or Asynchrnous  = true programming)

    //! Anything can be fetched a file or link(URL)
    //! to bring the file -->
    // xhr.open('GET', '../../praj.txt', true); 

    //! Website for sample JSON File
    // https://mocki.io/fake-json-api#:~:text=When%20you%20want%20to%20fake%20JSON%20responses%20for,under%20the%20same%20URL%20but%20with%20different%20paths.

    xhr.open('GET', 'https://dummy.restapiexample.com/api/v1/employees', true)
    //* Get => To just fetch
    //* Post => To send the data as well after fetching

    // after response is ready, request is fulfilled
    xhr.onload = function(){
        //if response code is 200 which means we found the element 200 is the limit of http server (HTTP Status Code)
        if(this.status === 200){
            let obj = JSON.parse((this.responseText));
            console.log(obj);
            let list = document.getElementById('list');
            str = "";
            for (key in obj){
                str +=`<li>${obj[key]}</li>`; 
            }
            list.innerHTML = str;
        } else console.log("Some Error Occured");
    }
    xhr.send();
    console.log("We are done fetching employees");
}
