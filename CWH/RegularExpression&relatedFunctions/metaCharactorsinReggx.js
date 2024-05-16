console.log("This is about Meta-Charactors from Reggex");
let reggex = /Prajwal/;
//! Here's some meta-character symbols
reggex = /^P/ //* ^ this symbol is name as carot it looks for the match of first word of the string (starts with)
reggex = /ion$/ //* ^ this symbol is name as dollar it looks for the match of last word of the string (ends with)
reggex = /P.ajwal/ //* Matches any one character
reggex = /P*ajwal/ //* Matches any 0 or more character
reggex = /Pra?jwal?/ //* question mark defines that the before characters are optional as here before question mark a and l are optional even if this character not present in the string the reggex will still be matched.
reggex =/Prajwal*/ 
reggex = /P\*ajwal/ //* if you want to match with the star symbol you have use back Slash (\) and then the * 
let str = "Prajwal is a good Programmer, Prajwal is the legion";
let result = reggex.exec(str);
console.log(result);
if(reggex.test(str)){
    console.log(`The string ${str} matches the reggex ${reggex}`);
} else console.log(`The string ${str} did not matches the reggex ${reggex}`);