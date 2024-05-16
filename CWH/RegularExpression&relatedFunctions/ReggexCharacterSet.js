console.log("This is about the Character Set (Reggex) in JavaScript");
//! Character Set --> Denoted by [] 
let reggex = /P[a-z]ajwal/ //* Anything between a-z will be matched with this expression
reggex = /P[abc]ajwal/ //* if anything matches with given abc it will return the matched => TRUE or FALSE
reggex = /P[^abc]ajwa[la]/ //* do not confuse it with the carot symbol (^) here this symbol used for not of if the given words will do not the match the word from str then it will give it as TRUE otherwise FALSE 
reggex = /P[a-zA-Z]ajwa[a-zA-Z1-9]/ //* it means it can choose words from small and big alphabets and from back side small, big alphabets as well as numbers.
reggex = /P[a-zA-Z]ajwa[a-zA-Z1-9][0-9]/ //* it means it can choose words from small and big alphabets and from back side small, big alphabets as well as numbers and it needs an extra numbers at the last of the prajwal

//! Quantifiers --> to specify the quantity of that particular expression/charactor (denoted by {})

reggex = /Pra{2}jwal/ //* it means that there should be 2 quantities of a present in the string for getting matched.
let str = "Praajwal1 is a good Programmer, he is the legion";
reggex = /Pra{0,2}jwal/ //* it means that there should be 0 or 2 quantities of a present in the string for getting matched.
str = "Prajwal is a good Programmer, he is the legion";

//! Groupings  - we use paranthesis for grouping
reggex = /(Praj){2}/ //* it means that the word "Praj should be present 2 times" 
str = "PrajPrajwal is a good Programmer, he is the legion";
reggex = /(Praj){2}([0-9]p){3}/ //* it means that the word "Praj should be present 2 times and 0-9 number with p should present 3 times" 
str = "PrajPraj0p1p2p is a good Programmer, he is the legion";
let result = reggex.exec(str);
console.log("The result of the reggex is ", result);

if(reggex.test(str)){
    console.log(`The string ${str} matches the reggex ${reggex}`);
} else console.log(`The string ${str} did not matches the reggex ${reggex}`);

