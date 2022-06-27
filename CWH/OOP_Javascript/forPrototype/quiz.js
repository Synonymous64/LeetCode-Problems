function flour (cakematerial, caketype, color, size){
    this.cakematerial = cakematerial,
    this.caketype = caketype,
    this.color = color,
    this.size = size,
    annonce = function(){
        return "The cake is created!";
    }
}
flour.prototype.cakeInfo = function(){
    return `The size of the created cake is ${this.size} and color is ${this.color}`
}
//* inheritance 
function cakeMaker (cakematerial, caketype, color, size, weight){
    flour.call(this, cakematerial, caketype, color, size);
    this.weight = weight;
}
cakeMaker.prototype = Object.create(flour.prototype);
cakeMaker.prototype.constructor = cakeMaker;
let myCake = new cakeMaker("cream and oreo", "Cholcate", "red", 6, 234);
console.log(myCake.cakeInfo());