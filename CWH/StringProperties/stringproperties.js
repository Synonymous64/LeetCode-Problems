console.log("Let's Get Started --->");
const name = 'Prajwal';
const greeting = 'Morning';
console.log(greeting +' '+ name);
let html;
html = '<h1> this is heading </h1>' + '<p> This is my Para </p>';
html = html.concat(' this'); // better way of concatination
console.log(html);

console.log(html.length);

console.log(html.toLowerCase()); // will print it all in lower case

console.log(html.toUpperCase()); // will print it all in upper case

console.log(html[5]); // indexing 

console.log(html.indexOf('>'));// it will let you know the index of that particular element

console.log(html.indexOf('eorfjew'));// it will print - 1 if the value is not present 

console.log(html.lastIndexOf('>'));// it will let you know the index of that particular element from last

console.log(html.charAt(0)); // it will give the element present at that that index

console.log(html.endsWith('s')) // it will return true or false depending the input element matches with last element of the structure

console.log(html.includes('heading')) // it will let you know if that element or string is present in the given structure or not in boolean form

console.log(html.substring(0,10)); // it will show you the substring between the following index

console.log(html.slice(-4)); // it will give you from the last

console.log(html.slice(0, 4)); // it works as an substring but also gives processes the negative indexes

console.log(html.split(' ')); // it will split the elements depending upon the character to you inputed

console.log(html.split('p')); // it will split the elements depending upon the character to you inputed

console.log(html.replace('this','it')); // it only replaces the first occurance 

// !Template Literals 
let fruit = 'Orange';
let fruit2 = 'Apple';
let myhtml = `hello ${name} <h1> This is heading </h1> <p> You like ${fruit} and ${fruit2}`; // using backtick ```
document.write(myhtml);