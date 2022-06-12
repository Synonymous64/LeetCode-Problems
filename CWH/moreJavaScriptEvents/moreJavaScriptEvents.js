console.log("More on JavaScript Event");
let myText = document.getElementById('myText');
myText.addEventListener('click', funct1);
myText.addEventListener('dblclick', funct2);
myText.addEventListener('mousedown', funct3);
function funct1(e){
    console.log("It's single click event" + e);
    //* To byPass any Default Behaviour 
    e.preventDefault();
}
function funct2(e){
    console.log("It's a double click event" + e);
    //* To byPass any Default Behaviour 
    e.preventDefault();
}
function funct3(e){
    console.log("This is mouse down event" + e);
    //* To byPass any Default Behaviour 
    e.preventDefault();
}
document.querySelector('.no').addEventListener('mouseenter', function(){
    console.log("You entered no");
})
document.querySelector('.no').addEventListener('mouseleave', function(){
    console.log("mouse left");
})
document.querySelector('.container').addEventListener('mousemove', function(e){
    console.log(e.offsetX, e.offsetY);
    document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY}, ${e.offsetY})`;
    console.log("you moved mouse");
})