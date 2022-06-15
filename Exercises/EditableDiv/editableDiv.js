console.log("Exercise to create an Editiable Div");
let div = document.createElement("div");
let text = document.createTextNode("This is my Div element. Click here to edit");
let val = localStorage.getItem('text1');
let text1;
if(val == null){
    text1 = document.createTextNode("This is my Div element. Click here to edit");
}
else{
    text1 = document.createTextNode(val);
}
div.setAttribute('id','elem');
div.setAttribute('class','elem');
div.setAttribute('style', 'border : 2px solid black; width: 154px; margin: 34px; padding: 23px')
let container = document.querySelector(".container");
let first = document.getElementById('first');
console.log(container, first);
container.insertBefore(div, first);
//* Inserting the element
div.appendChild(text);
div.addEventListener('click', function(){
    let noTextArea = document.getElementsByClassName('textarea').length;
    if(noTextArea == 0){
        let html = div.innerHTML;
        div.innerHTML = `<textarea class ="textarea form-control" id ="textarea" rows="3">${html}</textarea>`
        let textarea = document.getElementById('textarea');
        textarea.addEventListener('blur', function(){
            div.innerHTML = textarea.value;
            localStorage.setItem('text1', textarea.value);
        })
    }
});