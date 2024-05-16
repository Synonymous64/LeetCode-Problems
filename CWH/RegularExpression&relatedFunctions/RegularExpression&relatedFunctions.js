// This is about regular expression and Related Literals
//! Reggex 
//* Anything which is define in the / between / the two slashes is known as regular expression
//! here g will be global 
let reg = /Prajwal/g; //! This is a regular expression literal int JS 
// reg = /Prajwal/i; //! i means case insensitivity means it can be match with different data type if the values are same. 
console.log(reg);
console.log(reg.source); //* It tells us what inside the regular expression is

// function to match the expression 
let s = "This is a Great Prajwal and the Prajwal is great";
//! exec() - This function will return an array for match or null form no match
let result = reg.exec(s); //! this function will give the index of the word contain in reggex here reg (regular expression) object
console.log(result); 
//! it will give you the next index if the item of reggex are contains in the string in duplicate manner not possible without global g in reggex
//! In next iteration it will give the next index of the particular items 
result = reg.exec(s); //! this function will give the index of the word contain in reggex here reg (regular expression) object not possible without global g in regge
console.log(result); 
console.log(result.input); // will give the index 
console.log(result.index); // and input
//* test() returns true or false if it has a regular expression or not 
result = reg.test(s);
console.log(result);

//* match() it is used in string it will return an array of results or null
// result = reg.match(s) // --> this is a wrong way 
result = s.match(reg) // --> this is a right way 
console.log('====================================');
console.log(result);

// Search() returns index of first match or -1
result = s.search(reg);
console.log(result);

// Replace() it will returns new replaced string with all the replacements
// basically it will replace the matched word with the specified word
result = s.replace(reg, "Synonymous");  
console.log(result);
