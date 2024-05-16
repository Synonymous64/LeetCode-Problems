const regex = /(Prajwal){2,4}/gi; //* replace "very" globally --> when used g it means globally i means no case-sensitivity 
const text = "PrajwalprajwalPrajwalPrajwal is very cool, very amazing, and very clever"
//! It will replace only first very word 
console.log(text.replace('very', 'Very'));
//! It will replace all of them 
console.log(text.replaceAll('very', 'VERY'));
console.log(text.replaceAll(regex, 'VERY'));
