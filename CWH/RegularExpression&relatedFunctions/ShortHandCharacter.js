console.log("This is about the ShortHand Character in JavaScript");
let reggex = /\waal/ //* word character which means  _ (underscores) or alphabet or numbers it assumes the first character which could be anything and matches the rest of the character
reggex = /\w+al/ //* it is used to match whole word and then al which means Prajw will match the word 
reggex = /\Wbro/ //* Non word character
reggex = /\W+/ //* it will give you the non-word characters which are one or more than one
reggex = /\d320/ //* it is used to match the digits
reggex = /legion \d+/ //* it is used to match one or more than one digits 
str = "Prajwal br$$$+o is a good Programmer, he is the legion 9765980320";
reggex = /\D320/ //* it is used to match the non-digit character
reggex = /\D+/ //* it is used to match one or more non-digit characters
str = "Prajwal br$$$+o is a good Programmer, he is the legion 9765980Praj320";
reggex = /\sis a/ //* used to match a white-space or a tab charactor
str = "Prajwal br$$$+o is a good Programmer, he\tis the legion 9765980Praj320";
reggex = /\s+/ //* used to match one or more white-space or a tab charactor
str = "Prajwal br$$$+o is a good Programmer, he is the legion 9765980Praj320";
reggex = /\Sood/ //* used to match a non white-space or a non tab charactor
reggex = /Prajwal\b/ //* \b means boundary it is used to match the next word after that
str = "Prajwal br$$$+o is a good Programmer, he is the legion 9765980Praj320"; // will match here
str = "Prajwalbr$$$+o is a good Programmer, he is the legion 9765980Praj320"; // won't match here
//! Assertions 
reggex = /P(?=r)/ //* it is like a ternary operator if r consists after P it will give the match else nope
str = "Prajwal br$$$+o is a good Programmer, he is the legion 9765980Praj320"; // will match here
reggex = /P(?!a)/ //* it is like a ternary operator if a did not consists after P it will give the match else nope

if(reggex.test(str)){
    console.log(`The string ${str} matches the reggex ${reggex}`);
} else console.log(`The string ${str} did not matches the reggex ${reggex}`);
